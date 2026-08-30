'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PublicCatalogPage() {
  const router = useRouter();
  const [paths, setPaths] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [studentSession, setStudentSession] = useState<any>(null);
  const [enrollLoadingId, setEnrollLoadingId] = useState<string | null>(null);

  useEffect(() => {
    // 1. Cek Session Siswa
    fetch('/api/student/me')
      .then((r) => r.json())
      .then((d) => {
        if (d.success) setStudentSession(d.siswa);
      })
      .catch(() => {});

    // 2. Fetch Data LearningPath Realtime dari DB Prisma
    fetch('/api/courses')
      .then((r) => r.json())
      .then((d) => {
        if (d.success) setPaths(d.data);
      })
      .catch((err) => console.error('Fetch courses error:', err))
      .finally(() => setLoading(false));
  }, []);

  const handleEnroll = async (pathId: string) => {
    if (!studentSession) {
      // Jika belum login, arahkan ke registrasi siswa dengan parameter enroll
      router.push(`/student/register?enroll=${pathId}`);
      return;
    }

    setEnrollLoadingId(pathId);
    try {
      const res = await fetch('/api/student/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ learningPathId: pathId }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      router.push('/dashboard');
    } catch (err: any) {
      alert(err.message || 'Gagal enroll kursus');
    } finally {
      setEnrollLoadingId(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Hero Section Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-extrabold bg-blue-100 text-blue-700 tracking-wide">
          🌐 KATALOG KURSUS PUBLIK KODEMIK
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Kuasai Skill IT Industri dengan Kurikulum Terstruktur
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Pilih jalur belajar favorit Anda, ikuti kelas berurutan, selesaikan modul materi interaktif, dan dapatkan sertifikat kelulusan digital!
        </p>
      </div>

      {/* Grid Katalog LearningPath */}
      {loading ? (
        <div className="text-center py-16 space-y-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-sm font-semibold text-slate-600">Memuat Katalog Kursus dari Database...</p>
        </div>
      ) : paths.length === 0 ? (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center max-w-md mx-auto space-y-4">
          <div className="text-4xl">📚</div>
          <h3 className="text-lg font-bold text-slate-900">Belum Ada Kursus Dipublikasikan</h3>
          <p className="text-xs text-slate-500">
            Login sebagai Admin di <Link href="/admin/login" className="text-blue-600 font-bold underline">Admin Portal</Link> untuk membuat LearningPath pertama Anda!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paths.map((path) => {
            const totalKelas = path.kelas?.length || 0;
            let totalModul = 0;
            path.kelas?.forEach((k: any) => {
              totalModul += k._count?.modul || 0;
            });

            return (
              <div
                key={path.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">🌐</span>
                    <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                      {totalKelas} Kelas • {totalModul} Modul
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">{path.nama}</h3>
                    <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">{path.deskripsi}</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Harga Kursus</span>
                    <span className="text-lg font-extrabold text-blue-600">
                      Rp {path.harga.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <button
                    onClick={() => handleEnroll(path.id)}
                    disabled={enrollLoadingId === path.id}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm disabled:opacity-50"
                  >
                    {enrollLoadingId === path.id ? 'Memproses...' : studentSession ? 'Daftar / Enroll Kursus ➔' : 'Daftar & Belajar ➔'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
