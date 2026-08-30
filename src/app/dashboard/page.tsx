'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function StudentDashboardPage() {
  const router = useRouter();
  const [siswa, setSiswa] = useState<{ id: string; email: string; nama: string } | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [coursesLoading, setCoursesLoading] = useState(true);

  useEffect(() => {
    fetch('/api/student/me')
      .then((r) => r.json())
      .then((d) => {
        if (!d.success || !d.siswa) {
          router.push('/student/login');
        } else {
          setSiswa(d.siswa);
          loadEnrolledCourses();
        }
      })
      .catch(() => router.push('/student/login'))
      .finally(() => setAuthLoading(false));
  }, [router]);

  const loadEnrolledCourses = async () => {
    setCoursesLoading(true);
    try {
      const res = await fetch('/api/student/courses');
      const data = await res.json();
      if (data.success) {
        setEnrolledCourses(data.data);
      }
    } catch (err) {
      console.error('Fetch enrolled courses error:', err);
    } finally {
      setCoursesLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-sm font-semibold text-slate-600">Memeriksa Sesi Belajar Siswa...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Greeting Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white shadow-lg space-y-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-white/20 text-white backdrop-blur-sm">
          🎓 PORTAL BELAJAR SISWA KODEMIK
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold">
          Selamat Datang, {siswa?.nama}! 👋
        </h1>
        <p className="text-blue-100 text-xs sm:text-sm max-w-2xl">
          Pantau progres kelulusan modul Anda, riwayat nilai quiz, dan lanjutkan pembelajaran terstruktur kapan saja.
        </p>
      </div>

      {/* Main Section: Daftar LearningPath Ter-enroll */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">📚 Kursus yang Sedang Anda Ikuti</h2>
            <p className="text-xs text-slate-500 mt-1">
              Menampilkan progres kelulusan modul dan riwayat nilai quiz pemahaman Anda.
            </p>
          </div>
          <Link
            href="/"
            className="inline-block px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold rounded-xl transition-colors border border-blue-200"
          >
            + Cari Kursus Lain di Katalog ➔
          </Link>
        </div>

        {coursesLoading ? (
          <div className="text-center py-12 space-y-2">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-xs text-slate-500">Memuat Progres Belajar & Nilai Quiz...</p>
          </div>
        ) : enrolledCourses.length === 0 ? (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-10 text-center space-y-4 max-w-md mx-auto">
            <div className="text-4xl">📖</div>
            <h3 className="text-base font-bold text-slate-900">Belum Ada Kursus yang Diambil</h3>
            <p className="text-xs text-slate-600">
              Anda belum mendaftar di LearningPath manapun. Pilih kursus favorit Anda di katalog publik untuk memulai!
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition-colors"
            >
              Lihat Katalog Kursus Sekarang ➔
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map((item) => {
              const path = item.learningPath;
              const totalKelas = path?.kelas?.length || 0;

              return (
                <div
                  key={item.id}
                  className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <span className="text-3xl">🌐</span>
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-extrabold ${
                          item.statusPembayaran === 'LUNAS'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-amber-100 text-amber-800 border border-amber-300'
                        }`}
                      >
                        STATUS: {item.statusPembayaran}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">{path?.nama}</h3>
                      <p className="text-xs text-slate-500 line-clamp-2">{path?.deskripsi}</p>
                    </div>

                    {/* VISUAL PROGRESS BAR & RIWAYAT NILAI QUIZ */}
                    <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-700">Progres Kelulusan Modul</span>
                        <span className="text-blue-600">{item.progressPercent}%</span>
                      </div>

                      {/* Progress Bar Track */}
                      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 rounded-full"
                          style={{ width: `${item.progressPercent}%` }}
                        ></div>
                      </div>

                      <p className="text-[11px] text-slate-500">
                        Completed: <strong>{item.completedModulCount}</strong> dari <strong>{item.totalModulCount}</strong> Modul ({totalKelas} Kelas)
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/dashboard/learn/${path?.id}`}
                      className="block text-center w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition-colors"
                    >
                      ▶ Lanjutkan Belajar Modul & Kerjakan Quiz ➔
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
