'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';

export default function CoursePlayerPage() {
  const router = useRouter();
  const params = useParams();
  const pathId = params.pathId as string;

  const [siswa, setSiswa] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [learningPath, setLearningPath] = useState<any>(null);
  const [pendaftaranStatus, setPendaftaranStatus] = useState<string>('BELUM_BAYAR');
  const [completedModulIds, setCompletedModulIds] = useState<Set<string>>(new Set());

  const [activeModulId, setActiveModulId] = useState<string | null>(null);
  const [togglingProgress, setTogglingProgress] = useState(false);
  const [payingLoading, setPayingLoading] = useState(false);

  // Quiz State
  const [quizData, setQuizData] = useState<any | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ [qIdx: number]: number }>({});
  const [quizScoreResult, setQuizScoreResult] = useState<any | null>(null);
  const [submittingQuiz, setSubmittingQuiz] = useState(false);

  useEffect(() => {
    fetch('/api/student/me', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => {
        if (!d.success || !d.siswa) {
          router.push('/login');
        } else {
          setSiswa(d.siswa);
          loadCourseDetails(d.siswa);
        }
      })
      .catch(() => router.push('/login'));
  }, [pathId, router]);

  const loadCourseDetails = async (siswaData: any) => {
    setLoading(true);
    try {
      // 1. Check Student Enrolled Courses & Status Pembayaran
      const resCourses = await fetch('/api/student/courses', { cache: 'no-store' });
      const dataCourses = await resCourses.json();

      let currentEnrollment: any = null;
      if (dataCourses.success && dataCourses.data) {
        currentEnrollment = dataCourses.data.find(
          (item: any) => item.learningPath?.id === pathId || item.learningPath?.id === pathId.replace(/^preview-/, '')
        );
      }

      const status = currentEnrollment?.statusPembayaran || (siswaData?.isAdminPreview ? 'LUNAS' : 'BELUM_BAYAR');
      setPendaftaranStatus(status);

      // 2. Fetch LearningPath Content
      const resPath = await fetch('/api/courses', { cache: 'no-store' });
      const dataPath = await resPath.json();
      if (dataPath.success && dataPath.data) {
        const found = dataPath.data.find((p: any) => p.id === pathId || p.id === pathId.replace(/^preview-/, ''));
        if (found) {
          setLearningPath(found);
          // Set Modul Pertama sebagai Modul Aktif secara default
          if (found.kelas && found.kelas.length > 0 && found.kelas[0].modul && found.kelas[0].modul.length > 0) {
            setActiveModulId(found.kelas[0].modul[0].id);
          }
        }
      }

      // 3. Fetch Completed Progress
      const resProgress = await fetch('/api/student/progress', { cache: 'no-store' });
      const dataProgress = await resProgress.json();
      if (dataProgress.success && dataProgress.data) {
        const completedSet = new Set<string>(
          dataProgress.data.filter((p: any) => p.status === 'SELESAI').map((p: any) => p.modulId as string)
        );
        setCompletedModulIds(completedSet);
      }
    } catch (err) {
      console.error('Error loading course details:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Quiz when activeModulId changes
  useEffect(() => {
    if (activeModulId && (pendaftaranStatus === 'LUNAS' || siswa?.isAdminPreview)) {
      setQuizData(null);
      setQuizScoreResult(null);
      setUserAnswers({});
      fetch(`/api/admin/quiz?modulId=${activeModulId}`, { cache: 'no-store' })
        .then((r) => r.json())
        .then((d) => {
          if (d.success && d.data && d.data.questions?.length > 0) {
            setQuizData(d.data);
          }
        })
        .catch(() => {});
    }
  }, [activeModulId, pendaftaranStatus, siswa]);

  const handlePayNow = async () => {
    setPayingLoading(true);
    try {
      const res = await fetch('/api/student/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ learningPathId: pathId }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      if (result.alreadyPaid) {
        setPendaftaranStatus('LUNAS');
        return;
      }

      if (typeof window !== 'undefined' && (window as any).snap) {
        (window as any).snap.pay(result.token, {
          onSuccess: function () {
            alert('🎉 Pembayaran Berhasil! Akses materi telah dibuka.');
            setPendaftaranStatus('LUNAS');
          },
          onPending: function () {
            alert('⏳ Menunggu Pembayaran.');
          },
          onError: function () {
            alert('❌ Pembayaran Gagal. Silakan coba lagi.');
          },
        });
      } else {
        alert('Gagal memuat pop-up pembayaran. Silakan coba beberapa saat lagi.');
      }
    } catch (err: any) {
      alert(err.message || 'Gagal memproses pembayaran');
    } finally {
      setPayingLoading(false);
    }
  };

  const handleToggleModuleProgress = async (modulId: string) => {
    setTogglingProgress(true);
    try {
      const isCompleted = completedModulIds.has(modulId);
      const nextStatus = isCompleted ? 'BELUM_SELESAI' : 'SELESAI';

      const res = await fetch('/api/student/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ modulId, status: nextStatus }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      const nextSet = new Set(completedModulIds);
      if (nextStatus === 'SELESAI') nextSet.add(modulId);
      else nextSet.delete(modulId);
      setCompletedModulIds(nextSet);
    } catch (err: any) {
      alert(err.message || 'Gagal memperbarui progres');
    } finally {
      setTogglingProgress(false);
    }
  };

  const handleSubmitQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeModulId || !quizData) return;

    setSubmittingQuiz(true);
    try {
      const formattedAnswers = Object.entries(userAnswers).map(([qIdx, ansIdx]) => ({
        questionIndex: parseInt(qIdx),
        selectedOption: ansIdx,
      }));

      const res = await fetch('/api/student/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          modulId: activeModulId,
          answers: formattedAnswers,
        }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      setQuizScoreResult(result.data);

      if (result.data.isPassed) {
        const nextSet = new Set(completedModulIds);
        nextSet.add(activeModulId);
        setCompletedModulIds(nextSet);
      }
    } catch (err: any) {
      alert(err.message || 'Gagal mengirim jawaban quiz');
    } finally {
      setSubmittingQuiz(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-sm font-semibold text-slate-600">Memuat Pemutar Kursus...</p>
        </div>
      </div>
    );
  }

  // 🔒 GEMBOK PENGUNCI 100%: Jika BELUM BAYAR & Bukan Admin -> TAMPILKAN LAYAR GEMBOK TERKUNCI TOTAL!
  const isLocked = pendaftaranStatus !== 'LUNAS' && !siswa?.isAdminPreview;

  if (isLocked) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-8">
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl">
          <div className="w-20 h-20 bg-amber-500 text-white rounded-3xl flex items-center justify-center text-4xl mx-auto shadow-lg animate-bounce">
            🔒
          </div>

          <div className="space-y-2">
            <span className="inline-block bg-amber-200 text-amber-900 font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
              AKSES MATERI TERKUNCI
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Pembayaran Kursus Belum Selesai
            </h1>
            <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
              Materi koding, video tutorial YouTube, dan quiz pemahaman untuk <strong>{learningPath?.nama}</strong> masih dikunci. Silakan lakukan pembayaran untuk membuka akses 100% selamanya.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handlePayNow}
              disabled={payingLoading}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-2xl shadow-lg transition-colors disabled:opacity-50"
            >
              {payingLoading ? 'Memproses Pop-up...' : '💳 Bayar Kursus Sekarang via Midtrans ➔'}
            </button>
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-2xl transition-colors border"
            >
              ← Kembali ke Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Jika LUNAS -> Tampilkan Player Pembelajaran Lengkap!
  let activeModulObject: any = null;
  if (learningPath?.kelas) {
    for (const k of learningPath.kelas) {
      if (k.modul) {
        const m = k.modul.find((item: any) => item.id === activeModulId);
        if (m) {
          activeModulObject = m;
          break;
        }
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Bar Header */}
      <div className="bg-slate-900 text-white px-4 sm:px-8 py-4 flex items-center justify-between border-b border-slate-800 sticky top-16 z-40 shadow-md">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-xs text-slate-400 hover:text-white font-bold flex items-center gap-1">
            ← Kembali
          </Link>
          <div className="h-4 w-px bg-slate-700 hidden sm:block"></div>
          <h1 className="font-extrabold text-sm sm:text-base truncate max-w-xs sm:max-w-md">
            {learningPath?.nama}
          </h1>
        </div>
        {siswa?.isAdminPreview && (
          <span className="text-[10px] font-extrabold bg-blue-500/20 text-blue-400 px-2.5 py-1 rounded border border-blue-500/30">
            🛡️ MODE PRATINJAU ADMIN
          </span>
        )}
      </div>

      {/* Main Container: Sidebar Left + Content Right */}
      <div className="flex-1 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 sm:p-6 lg:p-8">
        {/* Sidebar Navigasi Modul (Layar Kiri) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4 sticky top-36">
            <h2 className="font-extrabold text-slate-900 text-sm border-b pb-3 uppercase tracking-wider">
              Daftar Kelas & Modul Materi
            </h2>

            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-1">
              {learningPath?.kelas?.map((k: any) => (
                <div key={k.id} className="space-y-2">
                  <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-200">
                    <span className="text-[10px] font-extrabold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                      Level {k.level}
                    </span>
                    <h3 className="font-bold text-slate-900 text-xs mt-1">{k.nama}</h3>
                  </div>

                  <div className="space-y-1.5 pl-2">
                    {k.modul?.map((m: any) => {
                      const isCompleted = completedModulIds.has(m.id);
                      const isActive = m.id === activeModulId;

                      return (
                        <button
                          key={m.id}
                          onClick={() => setActiveModulId(m.id)}
                          className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors border ${
                            isActive
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : isCompleted
                              ? 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <span className="truncate pr-2">
                            #{m.urutan}. {m.judul}
                          </span>
                          {isCompleted ? (
                            <span className="text-xs font-bold text-emerald-600 bg-white px-1.5 py-0.5 rounded shadow-xs">✓</span>
                          ) : (
                            <span className="text-[10px] text-slate-400">○</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Viewer (Layar Kanan) */}
        <div className="lg:col-span-8 space-y-6">
          {activeModulObject ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
              {/* Header Modul & Checkmark Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider block mb-1">
                    Modul Urutan #{activeModulObject.urutan}
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900">{activeModulObject.judul}</h2>
                </div>

                <button
                  onClick={() => handleToggleModuleProgress(activeModulObject.id)}
                  disabled={togglingProgress}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-colors disabled:opacity-50 ${
                    completedModulIds.has(activeModulObject.id)
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
                  }`}
                >
                  {completedModulIds.has(activeModulObject.id) ? '✓ Selesai Dipelajari' : 'Tandai Selesai ➔'}
                </button>
              </div>

              {/* Teks Materi Markdown & YouTube Video Embed */}
              <div className="space-y-6">
                <MarkdownRenderer content={activeModulObject.kontenMateri} videoUrl={activeModulObject.videoUrl} />
              </div>

              {/* SECTION QUIZ ASSESSMENT MODUL */}
              {quizData && quizData.questions && quizData.questions.length > 0 && (
                <div className="bg-amber-50/70 border-2 border-amber-300 rounded-2xl p-6 sm:p-8 space-y-6">
                  <div className="border-b border-amber-200 pb-4">
                    <span className="text-xs font-bold text-amber-800 bg-amber-200/80 px-2.5 py-1 rounded">
                      ❓ QUIZ PEMAHAMAN MODUL ({quizData.questions.length} Soal)
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 mt-2">
                      Uji Pemahaman Materi: {activeModulObject.judul}
                    </h3>
                  </div>

                  {quizScoreResult ? (
                    /* Hasil Kelulusan Quiz Score Card */
                    <div
                      className={`p-6 rounded-xl border text-center space-y-3 ${
                        quizScoreResult.isPassed
                          ? 'bg-emerald-100 border-emerald-300 text-emerald-900'
                          : 'bg-red-100 border-red-300 text-red-900'
                      }`}
                    >
                      <div className="text-4xl">{quizScoreResult.isPassed ? '🏆' : '❌'}</div>
                      <h4 className="text-xl font-extrabold">
                        Skor Anda: {quizScoreResult.scorePercent}% ({quizScoreResult.correctCount}/{quizScoreResult.totalQuestions} Benar)
                      </h4>
                      <p className="text-xs font-semibold">
                        {quizScoreResult.isPassed
                          ? 'Selamat! Anda lulus quiz ini dan modul ditandai Selesai ✓'
                          : 'Skor Anda belum mencapai batas minimal 70%. Silakan pelajari kembali materi dan coba lagi!'}
                      </p>
                      <button
                        onClick={() => {
                          setQuizScoreResult(null);
                          setUserAnswers({});
                        }}
                        className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800"
                      >
                        🔄 Coba Quiz Lagi
                      </button>
                    </div>
                  ) : (
                    /* Form Quiz Interactive Player */
                    <form onSubmit={handleSubmitQuiz} className="space-y-6">
                      {quizData.questions.map((q: any, qIdx: number) => (
                        <div key={qIdx} className="bg-white p-5 rounded-xl border border-amber-200 space-y-3 shadow-xs">
                          <p className="font-extrabold text-xs text-slate-900">
                            {qIdx + 1}. {q.pertanyaan}
                          </p>
                          <div className="space-y-2">
                            {q.pilihanJawaban?.map((opt: string, optIdx: number) => (
                              <label
                                key={optIdx}
                                className={`flex items-center gap-3 p-3 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                                  userAnswers[qIdx] === optIdx
                                    ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold'
                                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={`q_${qIdx}`}
                                  checked={userAnswers[qIdx] === optIdx}
                                  onChange={() => setUserAnswers({ ...userAnswers, [qIdx]: optIdx })}
                                  className="w-4 h-4 text-blue-600"
                                />
                                <span>{opt}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}

                      <div className="flex justify-end border-t border-amber-200 pt-4">
                        <button
                          type="submit"
                          disabled={submittingQuiz || Object.keys(userAnswers).length < quizData.questions.length}
                          className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs rounded-xl shadow transition-colors disabled:opacity-50"
                        >
                          {submittingQuiz ? 'Memeriksa Jawaban...' : '🚀 Submit Jawaban Quiz ➔'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center text-slate-500 text-xs">
              Pilih modul materi di bilah sebelah kiri untuk mulai membaca.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
