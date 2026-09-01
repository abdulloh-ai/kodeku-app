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
  const [completedModulIds, setCompletedModulIds] = useState<Set<string>>(new Set());

  const [activeModulId, setActiveModulId] = useState<string | null>(null);
  const [togglingProgress, setTogglingProgress] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

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
          loadCourseDetails();
        }
      })
      .catch(() => router.push('/login'));
  }, [pathId, router]);

  // Fetch Quiz when activeModulId changes
  useEffect(() => {
    if (activeModulId) {
      setQuizData(null);
      setQuizScoreResult(null);
      setUserAnswers({});
      fetch(`/api/admin/quiz?modulId=${activeModulId}`)
        .then((r) => r.json())
        .then((d) => {
          if (d.success && d.data && d.data.questions?.length > 0) {
            setQuizData(d.data);
          }
        })
        .catch(() => {});
    }
  }, [activeModulId]);

  const loadCourseDetails = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/student/courses');
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error('Gagal memuat materi');

      const currentEnrolled = data.data.find((e: any) => e.learningPath?.id === pathId);
      if (!currentEnrolled) {
        setErrorMsg('Anda belum terdaftar di LearningPath ini.');
        return;
      }

      setLearningPath(currentEnrolled.learningPath);

      if (currentEnrolled.learningPath?.kelas?.length > 0) {
        const firstKelas = currentEnrolled.learningPath.kelas[0];
        if (firstKelas.modul?.length > 0 && !activeModulId) {
          setActiveModulId(firstKelas.modul[0].id);
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleComplete = async (modulId: string) => {
    const isCurrentlyCompleted = completedModulIds.has(modulId);
    const nextStatus = isCurrentlyCompleted ? 'BELUM' : 'SELESAI';

    setTogglingProgress(true);
    try {
      const res = await fetch('/api/student/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ modulId, status: nextStatus }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);

      const nextSet = new Set(completedModulIds);
      if (nextStatus === 'SELESAI') {
        nextSet.add(modulId);
      } else {
        nextSet.delete(modulId);
      }
      setCompletedModulIds(nextSet);
    } catch (err: any) {
      alert(err.message || 'Gagal mengubah status modul');
    } finally {
      setTogglingProgress(false);
    }
  };

  const handleSubmitQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeModulId || !quizData) return;

    setSubmittingQuiz(true);
    try {
      const res = await fetch('/api/student/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          modulId: activeModulId,
          userAnswers,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);

      setQuizScoreResult(data.data);

      // Auto mark modul as SELESAI
      const nextSet = new Set(completedModulIds);
      nextSet.add(activeModulId);
      setCompletedModulIds(nextSet);
    } catch (err: any) {
      alert(err.message || 'Gagal submit quiz');
    } finally {
      setSubmittingQuiz(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-sm font-semibold text-slate-600">Memuat Player Pembelajaran Interaktif...</p>
        </div>
      </div>
    );
  }

  if (errorMsg || !learningPath) {
    return (
      <div className="max-w-md mx-auto py-16 text-center space-y-4">
        <div className="text-4xl">⚠️</div>
        <h2 className="text-lg font-bold text-slate-900">{errorMsg || 'Materi tidak ditemukan'}</h2>
        <Link href="/dashboard" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold">
          ← Kembali ke Dashboard Siswa
        </Link>
      </div>
    );
  }

  let activeModul: any = null;
  let allModuls: any[] = [];
  learningPath.kelas?.forEach((k: any) => {
    k.modul?.forEach((m: any) => {
      allModuls.push({ ...m, kelasNama: k.nama });
      if (m.id === activeModulId) {
        activeModul = { ...m, kelasNama: k.nama };
      }
    });
  });

  if (!activeModul && allModuls.length > 0) {
    activeModul = allModuls[0];
  }

  const activeIndex = allModuls.findIndex((m) => m.id === activeModul?.id);
  const prevModul = activeIndex > 0 ? allModuls[activeIndex - 1] : null;
  const nextModul = activeIndex < allModuls.length - 1 ? allModuls[activeIndex + 1] : null;

  const isCompleted = activeModulId ? completedModulIds.has(activeModulId) : false;

  return (
    <div className="min-h-[90vh] bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar Drawer */}
      <aside className="w-full md:w-80 bg-white border-r border-slate-200 p-6 flex flex-col justify-between shrink-0 shadow-sm">
        <div className="space-y-6">
          <div>
            <Link href="/dashboard" className="text-xs font-bold text-blue-600 hover:underline inline-block mb-3">
              ← Kembali ke Dashboard
            </Link>
            <h2 className="text-base font-extrabold text-slate-900 leading-snug">{learningPath.nama}</h2>
            <p className="text-xs text-slate-500 mt-1">{allModuls.length} Total Modul Pembelajaran</p>
          </div>

          <div className="space-y-6 overflow-y-auto max-h-[65vh] pr-1">
            {learningPath.kelas?.map((k: any) => (
              <div key={k.id} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    K{k.urutan}
                  </span>
                  <h3 className="text-xs font-bold text-slate-800 line-clamp-1">{k.nama}</h3>
                </div>

                <div className="space-y-1 pl-3 border-l-2 border-slate-200">
                  {k.modul?.map((m: any) => {
                    const isActive = m.id === activeModulId;
                    const isModDone = completedModulIds.has(m.id);

                    return (
                      <button
                        key={m.id}
                        onClick={() => setActiveModulId(m.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-sm font-bold'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="line-clamp-1 flex items-center gap-1.5">
                          <span>#{m.urutan}.</span> {m.judul}
                        </span>

                        {isModDone ? (
                          <span className={`text-xs px-1.5 py-0.5 rounded font-extrabold ${isActive ? 'bg-white text-blue-600' : 'bg-emerald-100 text-emerald-700'}`}>
                            ✓
                          </span>
                        ) : (
                          <span className={`text-[10px] opacity-60 ${isActive ? 'text-white' : 'text-slate-400'}`}>
                            ⭕
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content Reader Screen */}
      <main className="flex-1 p-6 md:p-10 max-w-4xl mx-auto space-y-8">
        {activeModul ? (
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8">
            <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block bg-blue-100 text-blue-800 text-[11px] font-bold px-2.5 py-1 rounded mb-2">
                  {activeModul.kelasNama}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{activeModul.judul}</h1>
              </div>

              {!quizData && (
                <button
                  onClick={() => handleToggleComplete(activeModul.id)}
                  disabled={togglingProgress}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-colors shadow-sm shrink-0 flex items-center gap-2 ${
                    isCompleted
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
                  }`}
                >
                  {isCompleted ? '✓ Modul Selesai (Klik Batal)' : '⭕ Tandai Modul Selesai'}
                </button>
              )}
            </div>

            {/* Markdown & YouTube Video Player Component */}
            <MarkdownRenderer content={activeModul.kontenMateri} videoUrl={activeModul.videoUrl} />

            {/* SECTION QUIZ ASSESSMENT (Jika Modul Mempunyai Quiz) */}
            {quizData && quizData.questions?.length > 0 && (
              <div className="bg-amber-50/60 border-2 border-amber-300 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm mt-10">
                <div className="border-b border-amber-200 pb-4 flex items-center justify-between">
                  <div>
                    <span className="bg-amber-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider">
                      ❓ Quiz Assessment Pemahaman Modul
                    </span>
                    <h3 className="text-xl font-extrabold text-amber-950 mt-1">Uji Pemahaman Anda ({quizData.questions.length} Soal)</h3>
                  </div>
                  {isCompleted && (
                    <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 font-extrabold text-xs px-3 py-1 rounded-full">
                      ✓ Modul Sudah Selesai
                    </span>
                  )}
                </div>

                {/* Kartu Hasil Skor Quiz setelah Submit */}
                {quizScoreResult && (
                  <div className="bg-white border-2 border-emerald-400 rounded-xl p-6 text-center space-y-2 shadow-md">
                    <div className="text-4xl">🏆</div>
                    <h4 className="text-xl font-extrabold text-slate-900">Hasil Skor Quiz Anda!</h4>
                    <p className="text-3xl font-extrabold text-emerald-600">
                      {quizScoreResult.score} / 100
                    </p>
                    <p className="text-xs font-semibold text-slate-600">
                      Jawaban Benar: <strong>{quizScoreResult.correctCount}</strong> dari <strong>{quizScoreResult.totalQuestions}</strong> Soal. Modul ini otomatis ditandai <strong>SELESAI (✓)</strong>!
                    </p>
                  </div>
                )}

                {/* Form Soal Pilihan Ganda */}
                <form onSubmit={handleSubmitQuiz} className="space-y-6">
                  {quizData.questions.map((q: any, qIdx: number) => (
                    <div key={qIdx} className="bg-white p-5 rounded-xl border border-amber-200 space-y-3 shadow-sm">
                      <p className="font-extrabold text-slate-900 text-sm">
                        Soal #{qIdx + 1}: {q.pertanyaan}
                      </p>

                      <div className="space-y-2 pl-2">
                        {q.pilihanJawaban?.map((opt: string, optIdx: number) => (
                          <label
                            key={optIdx}
                            className={`flex items-center gap-3 p-3 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                              userAnswers[qIdx] === optIdx
                                ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`quiz_student_${qIdx}`}
                              checked={userAnswers[qIdx] === optIdx}
                              onChange={() => setUserAnswers({ ...userAnswers, [qIdx]: optIdx })}
                              className="w-4 h-4 text-blue-600"
                            />
                            <span>
                              <strong className="mr-1">{String.fromCharCode(65 + optIdx)}.</strong> {opt}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={submittingQuiz || Object.keys(userAnswers).length < quizData.questions.length}
                      className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs rounded-xl shadow-md transition-colors disabled:opacity-50"
                    >
                      {submittingQuiz ? 'Menguji Jawaban...' : '🚀 Submit Jawaban Quiz & Lihat Skor ➔'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Bottom Nav Prev/Next */}
            <div className="pt-8 border-t border-slate-100 flex items-center justify-between gap-4">
              {prevModul ? (
                <button
                  onClick={() => setActiveModulId(prevModul.id)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-colors"
                >
                  ← #{prevModul.urutan}. {prevModul.judul}
                </button>
              ) : (
                <div></div>
              )}

              {nextModul ? (
                <button
                  onClick={() => setActiveModulId(nextModul.id)}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs transition-colors shadow-sm"
                >
                  #{nextModul.urutan}. {nextModul.judul} ➔
                </button>
              ) : (
                <div className="text-xs font-bold text-emerald-600">🎉 Modul Terakhir Kelas Ini</div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center">
            <p className="text-sm text-slate-500">Pilih salah satu modul di menu samping kiri untuk mulai membaca.</p>
          </div>
        )}
      </main>
    </div>
  );
}
