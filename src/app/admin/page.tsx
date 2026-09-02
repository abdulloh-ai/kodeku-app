'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';

export default function AdminDashboardPage() {
  const router = useRouter();

  // Auth State
  const [admin, setAdmin] = useState<{ id: string; email: string; nama: string } | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Stats State
  const [stats, setStats] = useState({ totalLearningPaths: 0, totalSiswa: 0, totalRevenue: 0 });

  // Data State
  const [learningPaths, setLearningPaths] = useState<any[]>([]);
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  // Form States
  const [newPath, setNewPath] = useState({ nama: '', deskripsi: '', harga: '', thumbnail: '' });
  const [newKelas, setNewKelas] = useState<{ [pathId: string]: { nama: string; deskripsi: string; urutan: string; level: string } }>({});
  const [newModul, setNewModul] = useState<{ [kelasId: string]: { judul: string; kontenMateri: string; videoUrl: string; urutan: string } }>({});

  // Preview & Edit State
  const [previewModul, setPreviewModul] = useState<{ judul: string; kontenMateri: string; videoUrl: string } | null>(null);
  const [editingPath, setEditingPath] = useState<any | null>(null);
  const [editingKelas, setEditingKelas] = useState<any | null>(null);
  const [editingModul, setEditingModul] = useState<any | null>(null);

  // Quiz Builder State
  const [quizModul, setQuizModul] = useState<any | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);
  const [savingQuiz, setSavingQuiz] = useState(false);

  // Active Accordion State
  const [expandedPathId, setExpandedPathId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/admin/me')
      .then((res) => res.json())
      .then((data) => {
        if (!data.success || !data.admin) {
          router.push('/login');
        } else {
          setAdmin(data.admin);
          loadDashboardData();
        }
      })
      .catch(() => router.push('/login'))
      .finally(() => setAuthLoading(false));
  }, [router]);

  const loadDashboardData = async () => {
    try {
      const [resStats, resPaths, resEnrollments] = await Promise.all([
        fetch('/api/admin/stats').then((r) => r.json()),
        fetch('/api/admin/learning-path').then((r) => r.json()),
        fetch('/api/admin/enrollments').then((r) => r.json()),
      ]);

      if (resStats.success) setStats(resStats.data);
      if (resPaths.success) {
        setLearningPaths(resPaths.data);
        if (resPaths.data.length > 0 && !expandedPathId) {
          setExpandedPathId(resPaths.data[0].id);
        }
      }
      if (resEnrollments.success) setEnrollments(resEnrollments.data);
    } catch (err: any) {
      console.error('Failed loading admin data:', err);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/login');
  };

  const handleCreatePath = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackMsg('');

    try {
      const res = await fetch('/api/admin/learning-path', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPath),
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      setFeedbackMsg('✅ LearningPath baru berhasil dibuat!');
      setNewPath({ nama: '', deskripsi: '', harga: '', thumbnail: '' });
      loadDashboardData();
    } catch (err: any) {
      setFeedbackMsg(`❌ ${err.message}`);
    }
  };

  const handleUpdatePath = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPath) return;

    try {
      const res = await fetch('/api/admin/learning-path', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pathId: editingPath.id,
          nama: editingPath.nama,
          deskripsi: editingPath.deskripsi,
          harga: editingPath.harga,
          thumbnail: editingPath.thumbnail,
        }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      setFeedbackMsg(`✅ LearningPath "${editingPath.nama}" berhasil diperbarui!`);
      setEditingPath(null);
      loadDashboardData();
    } catch (err: any) {
      setFeedbackMsg(`❌ ${err.message}`);
    }
  };

  const handleDeletePath = async (path: any) => {
    if (!window.confirm(`⚠️ Yakin ingin menghapus LearningPath "${path.nama}" beserta seluruh kelas dan modul di dalamnya?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/learning-path?id=${path.id}`, {
        method: 'DELETE',
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      setFeedbackMsg(`✅ LearningPath "${path.nama}" berhasil dihapus!`);
      loadDashboardData();
    } catch (err: any) {
      setFeedbackMsg(`❌ ${err.message}`);
    }
  };

  const handleCreateKelas = async (pathId: string, e: React.FormEvent) => {
    e.preventDefault();
    const data = newKelas[pathId];
    if (!data || !data.nama || !data.deskripsi) return;

    try {
      const res = await fetch('/api/admin/kelas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, learningPathId: pathId }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      setFeedbackMsg(`✅ Kelas "${data.nama}" berhasil ditambahkan!`);
      setNewKelas({ ...newKelas, [pathId]: { nama: '', deskripsi: '', urutan: '1', level: 'BEGINNER' } });
      loadDashboardData();
    } catch (err: any) {
      setFeedbackMsg(`❌ ${err.message}`);
    }
  };

  const handleUpdateKelas = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingKelas) return;

    try {
      const res = await fetch('/api/admin/kelas', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kelasId: editingKelas.id,
          nama: editingKelas.nama,
          deskripsi: editingKelas.deskripsi,
          urutan: editingKelas.urutan,
          level: editingKelas.level,
        }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      setFeedbackMsg(`✅ Kelas "${editingKelas.nama}" berhasil diperbarui!`);
      setEditingKelas(null);
      loadDashboardData();
    } catch (err: any) {
      setFeedbackMsg(`❌ ${err.message}`);
    }
  };

  const handleDeleteKelas = async (kelas: any) => {
    if (!window.confirm(`⚠️ Yakin ingin menghapus Kelas "${kelas.nama}" beserta seluruh modul di dalamnya?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/kelas?id=${kelas.id}`, {
        method: 'DELETE',
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      setFeedbackMsg(`✅ Kelas "${kelas.nama}" berhasil dihapus!`);
      loadDashboardData();
    } catch (err: any) {
      setFeedbackMsg(`❌ ${err.message}`);
    }
  };

  const handleCreateModul = async (kelasId: string, e: React.FormEvent) => {
    e.preventDefault();
    const data = newModul[kelasId];
    if (!data || !data.judul || !data.kontenMateri) return;

    try {
      const res = await fetch('/api/admin/modul', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, kelasId }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      setFeedbackMsg(`✅ Modul materi "${data.judul}" berhasil ditambahkan!`);
      setNewModul({ ...newModul, [kelasId]: { judul: '', kontenMateri: '', videoUrl: '', urutan: '1' } });
      loadDashboardData();
    } catch (err: any) {
      setFeedbackMsg(`❌ ${err.message}`);
    }
  };

  const handleUpdateModul = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingModul) return;

    try {
      const res = await fetch('/api/admin/modul', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          modulId: editingModul.id,
          judul: editingModul.judul,
          kontenMateri: editingModul.kontenMateri,
          videoUrl: editingModul.videoUrl,
          urutan: editingModul.urutan,
        }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      setFeedbackMsg(`✅ Modul "${editingModul.judul}" berhasil diperbarui!`);
      setEditingModul(null);
      loadDashboardData();
    } catch (err: any) {
      setFeedbackMsg(`❌ ${err.message}`);
    }
  };

  const handleDeleteModul = async (modul: any) => {
    if (!window.confirm(`⚠️ Yakin ingin menghapus Modul "${modul.judul}"?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/modul?id=${modul.id}`, {
        method: 'DELETE',
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      setFeedbackMsg(`✅ Modul "${modul.judul}" berhasil dihapus!`);
      loadDashboardData();
    } catch (err: any) {
      setFeedbackMsg(`❌ ${err.message}`);
    }
  };

  const handleOpenQuizModal = async (modul: any) => {
    setQuizModul(modul);
    setQuizQuestions([]);
    try {
      const res = await fetch(`/api/admin/quiz?modulId=${modul.id}`);
      const data = await res.json();
      if (data.success && data.data && data.data.questions?.length > 0) {
        setQuizQuestions(data.data.questions);
      } else {
        setQuizQuestions([
          {
            pertanyaan: '',
            pilihanJawaban: ['', '', '', ''],
            jawabanBenar: 0,
          },
        ]);
      }
    } catch (err) {
      setQuizQuestions([
        {
          pertanyaan: '',
          pilihanJawaban: ['', '', '', ''],
          jawabanBenar: 0,
        },
      ]);
    }
  };

  const handleAddQuestionField = () => {
    setQuizQuestions([
      ...quizQuestions,
      {
        pertanyaan: '',
        pilihanJawaban: ['', '', '', ''],
        jawabanBenar: 0,
      },
    ]);
  };

  const handleSaveQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quizModul) return;

    setSavingQuiz(true);
    try {
      const res = await fetch('/api/admin/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          modulId: quizModul.id,
          questions: quizQuestions,
        }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      setFeedbackMsg(`✅ Quiz Assessment (${quizQuestions.length} Soal) berhasil disimpan untuk Modul "${quizModul.judul}"!`);
      setQuizModul(null);
      loadDashboardData();
    } catch (err: any) {
      setFeedbackMsg(`❌ ${err.message}`);
    } finally {
      setSavingQuiz(false);
    }
  };

  const handleTogglePaymentStatus = async (enrollmentId: string, currentStatus: string) => {
    const nextStatus = currentStatus === 'LUNAS' ? 'BELUM_BAYAR' : 'LUNAS';

    try {
      const res = await fetch('/api/admin/enrollments', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enrollmentId, statusPembayaran: nextStatus }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);

      setFeedbackMsg(`✅ Status pembayaran siswa diubah menjadi ${nextStatus}!`);
      loadDashboardData();
    } catch (err: any) {
      setFeedbackMsg(`❌ ${err.message}`);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-sm font-semibold text-slate-600">Memeriksa Sesi Login Admin...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Admin */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex items-center justify-between gap-4 border border-slate-800 shadow-lg">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold">Admin</h1>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600/90 hover:bg-red-600 text-white font-bold text-xs rounded-xl transition-colors shadow"
        >
          🔒 Logout
        </button>
      </div>

      {/* Feedback Notifikasi */}
      {feedbackMsg && (
        <div
          className={`p-4 rounded-xl border text-sm font-semibold flex items-center justify-between ${
            feedbackMsg.startsWith('✅')
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-red-50 border-red-200 text-red-800'
          }`}
        >
          <span>{feedbackMsg}</span>
          <button onClick={() => setFeedbackMsg('')} className="text-xs opacity-60 hover:opacity-100">
            ✕ Tutup
          </button>
        </div>
      )}

      {/* Ringkasan Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">LearningPath</span>
          <p className="text-3xl font-extrabold text-slate-900">{stats.totalLearningPaths}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Siswa Terdaftar</span>
          <p className="text-3xl font-extrabold text-slate-900">{stats.totalSiswa}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-2">Total Pendapatan</span>
          <p className="text-3xl font-extrabold text-emerald-600">Rp {stats.totalRevenue.toLocaleString('id-ID')}</p>
        </div>
      </div>

      {/* Section 1: Buat LearningPath Baru */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-bold text-slate-900">1. Buat LearningPath Baru</h2>
          <p className="text-xs text-slate-500 mt-1">Tambahkan jalur pembelajaran besar baru (Full-Stack, Data Science, Mobile, dll.)</p>
        </div>
        <form onSubmit={handleCreatePath} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Nama LearningPath *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Mobile App Development (Flutter Track)"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600"
              value={newPath.nama}
              onChange={(e) => setNewPath({ ...newPath, nama: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Harga (Rp) *</label>
            <input
              type="number"
              required
              placeholder="499000"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600"
              value={newPath.harga}
              onChange={(e) => setNewPath({ ...newPath, harga: e.target.value })}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-1">Deskripsi Singkat *</label>
            <textarea
              required
              rows={2}
              placeholder="Penjelasan singkat mengenai materi jalur pembelajaran ini..."
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600"
              value={newPath.deskripsi}
              onChange={(e) => setNewPath({ ...newPath, deskripsi: e.target.value })}
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-lg shadow">
              + Simpan LearningPath Baru ➔
            </button>
          </div>
        </form>
      </div>

      {/* Section 2: Kelola Multi-Kelas, Multi-Modul & Akses Edit/Hapus */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-bold text-slate-900">2. Kelola Kurikulum, Edit & Hapus</h2>
          <p className="text-xs text-slate-500 mt-1">
            Tambah/edit/hapus LearningPath, Kelas, Modul Markdown, YouTube Video Player, dan Quiz Assessment.
          </p>
        </div>

        {learningPaths.map((path) => (
          <div key={path.id} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-900 text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div
                onClick={() => setExpandedPathId(expandedPathId === path.id ? null : path.id)}
                className="flex items-center gap-3 cursor-pointer flex-1"
              >
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm">k</span>
                <div>
                  <h3 className="font-extrabold text-white text-base">{path.nama}</h3>
                  <p className="text-xs text-slate-400">
                    {path.kelas?.length || 0} Kelas Terdaftar • Rp {path.harga.toLocaleString('id-ID')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setEditingPath(path)}
                  className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold rounded-lg transition-colors border border-slate-600"
                  title="Edit Nama, Deskripsi, Harga, dan Thumbnail LearningPath"
                >
                  ✏️ Edit LearningPath
                </button>
                <button
                  onClick={() => handleDeletePath(path)}
                  className="px-3 py-1.5 bg-red-600/90 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-colors shadow"
                  title="Hapus LearningPath beserta seluruh Kelas & Modul di dalamnya"
                >
                  🗑️ Hapus LearningPath
                </button>
                <button
                  onClick={() => setExpandedPathId(expandedPathId === path.id ? null : path.id)}
                  className="text-xs font-bold bg-blue-600 text-white px-3 py-1.5 rounded-lg"
                >
                  {expandedPathId === path.id ? '▲ Sembunyikan' : '▼ Kelola Kelas & Modul'}
                </button>
              </div>
            </div>

            {expandedPathId === path.id && (
              <div className="p-6 bg-slate-50 space-y-8">
                {/* Daftar Kelas */}
                <div className="space-y-6">
                  <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    Daftar Kelas di "{path.nama}" ({path.kelas?.length || 0} Kelas):
                  </h4>

                  {path.kelas?.length === 0 ? (
                    <div className="bg-white p-6 rounded-xl border text-center text-xs text-slate-500">
                      Belum ada Kelas di LearningPath ini. Gunakan form di bawah untuk menambah Kelas 1!
                    </div>
                  ) : (
                    path.kelas?.map((k: any) => (
                      <div key={k.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
                        <div className="flex items-start justify-between border-b pb-4">
                          <div>
                            <span className="inline-block bg-blue-100 text-blue-800 text-[11px] font-extrabold px-2.5 py-0.5 rounded mb-1">
                              Kelas Urutan #{k.urutan} • Level {k.level}
                            </span>
                            <h5 className="font-extrabold text-slate-900 text-lg">{k.nama}</h5>
                            <p className="text-xs text-slate-600 mt-0.5">{k.deskripsi}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setEditingKelas(k)}
                              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg border border-slate-300"
                            >
                              ✏️ Edit Kelas
                            </button>
                            <button
                              onClick={() => handleDeleteKelas(k)}
                              className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 text-xs font-bold rounded-lg border border-red-300"
                              title="Hapus Kelas beserta seluruh Modul di dalamnya"
                            >
                              🗑️ Hapus Kelas
                            </button>
                          </div>
                        </div>

                        {/* Modul dalam Kelas ini */}
                        <div className="space-y-3 pl-4 border-l-3 border-blue-500">
                          <p className="text-xs font-extrabold text-slate-800">
                            Modul Materi & Quiz ({k.modul?.length || 0} Modul):
                          </p>

                          {k.modul?.map((m: any) => (
                            <div key={m.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <span className="font-bold text-slate-900 text-sm">
                                  #{m.urutan}. {m.judul}
                                </span>
                                <div className="flex items-center gap-2 flex-wrap">
                                  {m.videoUrl && <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded">🎥 Video YouTube</span>}
                                  <button
                                    onClick={() => handleOpenQuizModal(m)}
                                    className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded text-[11px] font-bold shadow-sm"
                                  >
                                    ❓ Kelola Quiz Modul
                                  </button>
                                  <button
                                    onClick={() => setEditingModul(m)}
                                    className="px-3 py-1 bg-slate-900 text-white rounded text-[11px] font-bold hover:bg-slate-800"
                                  >
                                    ✏️ Edit Modul
                                  </button>
                                  <button
                                    onClick={() => handleDeleteModul(m)}
                                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-[11px] font-bold shadow-sm"
                                    title="Hapus Modul"
                                  >
                                    🗑️ Hapus Modul
                                  </button>
                                </div>
                              </div>
                              <p className="text-slate-600 line-clamp-2 font-mono text-[11px]">{m.kontenMateri}</p>
                            </div>
                          ))}

                          {/* Form PERMANEN: Tambah Modul Baru ke Kelas Ini */}
                          <form
                            onSubmit={(e) => handleCreateModul(k.id, e)}
                            className="bg-blue-50/60 p-5 rounded-xl border border-blue-200 space-y-3 mt-4"
                          >
                            <h6 className="text-xs font-extrabold text-blue-900 uppercase tracking-wider">
                              ➕ Tambah Modul Baru ke "{k.nama}"
                            </h6>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                              <input
                                type="text"
                                required
                                placeholder="Judul Modul..."
                                className="md:col-span-3 px-3 py-2 border rounded-lg text-xs"
                                value={newModul[k.id]?.judul || ''}
                                onChange={(e) =>
                                  setNewModul({
                                    ...newModul,
                                    [k.id]: { ...(newModul[k.id] || { kontenMateri: '', videoUrl: '', urutan: '1' }), judul: e.target.value },
                                  })
                                }
                              />
                              <input
                                type="number"
                                required
                                placeholder="Urutan"
                                className="px-3 py-2 border rounded-lg text-xs"
                                value={newModul[k.id]?.urutan || (k.modul?.length ? (k.modul.length + 1).toString() : '1')}
                                onChange={(e) =>
                                  setNewModul({
                                    ...newModul,
                                    [k.id]: { ...(newModul[k.id] || { judul: '', kontenMateri: '', videoUrl: '' }), urutan: e.target.value },
                                  })
                                }
                              />
                            </div>

                            <input
                              type="url"
                              placeholder="Link Video YouTube (Opsional): https://www.youtube.com/watch?v=..."
                              className="w-full px-3 py-2 border rounded-lg text-xs"
                              value={newModul[k.id]?.videoUrl || ''}
                              onChange={(e) =>
                                setNewModul({
                                  ...newModul,
                                  [k.id]: { ...(newModul[k.id] || { judul: '', kontenMateri: '', urutan: '1' }), videoUrl: e.target.value },
                                })
                              }
                            />

                            <textarea
                              required
                              rows={3}
                              placeholder="Konten Materi Markdown (# Heading, **bold**, - list)..."
                              className="w-full px-3 py-2 border rounded-lg text-xs font-mono"
                              value={newModul[k.id]?.kontenMateri || ''}
                              onChange={(e) =>
                                setNewModul({
                                  ...newModul,
                                  [k.id]: { ...(newModul[k.id] || { judul: '', videoUrl: '', urutan: '1' }), kontenMateri: e.target.value },
                                })
                              }
                            />

                            <div className="flex items-center gap-3">
                              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold text-xs hover:bg-blue-700 shadow">
                                + Simpan Modul Baru
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setPreviewModul({
                                    judul: newModul[k.id]?.judul || 'Preview Judul Modul',
                                    kontenMateri: newModul[k.id]?.kontenMateri || '# Preview Teks Markdown',
                                    videoUrl: newModul[k.id]?.videoUrl || null,
                                  })
                                }
                                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold text-xs"
                              >
                                👁️ Preview Modul
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Form PERMANEN: Tambah Kelas Baru ke LearningPath Ini */}
                <form
                  onSubmit={(e) => handleCreateKelas(path.id, e)}
                  className="bg-emerald-50/70 p-6 rounded-2xl border-2 border-emerald-300 space-y-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-extrabold text-emerald-900 uppercase tracking-wider">
                      ➕ Tambah Kelas Baru ke "{path.nama}" (Kelas #{path.kelas?.length ? path.kelas.length + 1 : 1})
                    </h4>
                    <span className="text-xs bg-emerald-200 text-emerald-900 font-bold px-2.5 py-0.5 rounded">Bebas Tanpa Batas</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Nama Kelas (Kelas 2 — Pemrograman JavaScript...)"
                      className="md:col-span-2 px-4 py-2.5 border rounded-xl text-xs font-semibold"
                      value={newKelas[path.id]?.nama || ''}
                      onChange={(e) =>
                        setNewKelas({
                          ...newKelas,
                          [path.id]: { ...(newKelas[path.id] || { deskripsi: '', urutan: '1', level: 'BEGINNER' }), nama: e.target.value },
                        })
                      }
                    />
                    <input
                      type="number"
                      required
                      placeholder="Urutan Kelas (1, 2, 3)"
                      className="px-4 py-2.5 border rounded-xl text-xs font-semibold"
                      value={newKelas[path.id]?.urutan || (path.kelas?.length ? (path.kelas.length + 1).toString() : '1')}
                      onChange={(e) =>
                        setNewKelas({
                          ...newKelas,
                          [path.id]: { ...(newKelas[path.id] || { nama: '', deskripsi: '', level: 'BEGINNER' }), urutan: e.target.value },
                        })
                      }
                    />
                    <select
                      className="px-4 py-2.5 border rounded-xl text-xs font-semibold"
                      value={newKelas[path.id]?.level || 'BEGINNER'}
                      onChange={(e) =>
                        setNewKelas({
                          ...newKelas,
                          [path.id]: { ...(newKelas[path.id] || { nama: '', deskripsi: '', urutan: '1' }), level: e.target.value },
                        })
                      }
                    >
                      <option value="BEGINNER">BEGINNER</option>
                      <option value="INTERMEDIATE">INTERMEDIATE</option>
                      <option value="ADVANCED">ADVANCED</option>
                    </select>
                  </div>

                  <textarea
                    required
                    rows={2}
                    placeholder="Deskripsi Kelas..."
                    className="w-full px-4 py-2.5 border rounded-xl text-xs"
                    value={newKelas[path.id]?.deskripsi || ''}
                    onChange={(e) =>
                      setNewKelas({
                        ...newKelas,
                        [path.id]: { ...(newKelas[path.id] || { nama: '', urutan: '1', level: 'BEGINNER' }), deskripsi: e.target.value },
                      })
                    }
                  />

                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-md transition-colors"
                  >
                    + Simpan Kelas Baru ke LearningPath ➔
                  </button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal Edit LearningPath */}
      {editingPath && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-extrabold text-lg text-slate-900">✏️ Edit LearningPath</h3>
              <button onClick={() => setEditingPath(null)} className="text-slate-400 hover:text-slate-700 font-bold">✕ Tutup</button>
            </div>
            <form onSubmit={handleUpdatePath} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nama LearningPath *</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-lg text-xs"
                  value={editingPath.nama}
                  onChange={(e) => setEditingPath({ ...editingPath, nama: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Harga Kursus (Rp) *</label>
                <input
                  type="number"
                  required
                  className="w-full px-3 py-2 border rounded-lg text-xs font-bold text-blue-600"
                  value={editingPath.harga}
                  onChange={(e) => setEditingPath({ ...editingPath, harga: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Deskripsi Singkat *</label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-3 py-2 border rounded-lg text-xs"
                  value={editingPath.deskripsi}
                  onChange={(e) => setEditingPath({ ...editingPath, deskripsi: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Thumbnail URL (Opsional)</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg text-xs"
                  value={editingPath.thumbnail || ''}
                  onChange={(e) => setEditingPath({ ...editingPath, thumbnail: e.target.value })}
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setEditingPath(null)} className="px-4 py-2 border text-xs font-bold rounded-lg">Batal</button>
                <button type="submit" className="px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg shadow">Simpan Perubahan ➔</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Quiz Multi-Soal Builder Admin */}
      {quizModul && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-3xl w-full space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded">❓ Kelola Quiz Assessment</span>
                <h3 className="font-extrabold text-lg text-slate-900 mt-1">Quiz untuk Modul "{quizModul.judul}"</h3>
              </div>
              <button onClick={() => setQuizModul(null)} className="text-slate-400 hover:text-slate-700 font-bold">✕ Tutup</button>
            </div>

            <form onSubmit={handleSaveQuiz} className="space-y-6">
              {quizQuestions.map((q, qIdx) => (
                <div key={qIdx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-xs text-blue-700 bg-blue-100 px-2.5 py-1 rounded">
                      Pertanyaan #{qIdx + 1}
                    </span>
                    {quizQuestions.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setQuizQuestions(quizQuestions.filter((_, idx) => idx !== qIdx))}
                        className="text-xs font-bold text-red-600 hover:underline"
                      >
                        Hapus Soal
                      </button>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Teks Pertanyaan *</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Apakah fungsi dari protokol HTTPS?"
                      className="w-full px-3 py-2 border rounded-lg text-xs"
                      value={q.pertanyaan}
                      onChange={(e) => {
                        const updated = [...quizQuestions];
                        updated[qIdx].pertanyaan = e.target.value;
                        setQuizQuestions(updated);
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700">Pilihan Jawaban (4 Opsi) & Tandai Jawaban Benar:</label>
                    {q.pilihanJawaban?.map((opt: string, optIdx: number) => (
                      <div key={optIdx} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`correct_${qIdx}`}
                          checked={q.jawabanBenar === optIdx}
                          onChange={() => {
                            const updated = [...quizQuestions];
                            updated[qIdx].jawabanBenar = optIdx;
                            setQuizQuestions(updated);
                          }}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-xs font-bold text-slate-500 w-6">
                          {String.fromCharCode(65 + optIdx)}.
                        </span>
                        <input
                          type="text"
                          required
                          placeholder={`Pilihan ${String.fromCharCode(65 + optIdx)}`}
                          className="flex-1 px-3 py-1.5 border rounded-lg text-xs"
                          value={opt}
                          onChange={(e) => {
                            const updated = [...quizQuestions];
                            updated[qIdx].pilihanJawaban[optIdx] = e.target.value;
                            setQuizQuestions(updated);
                          }}
                        />
                        {q.jawabanBenar === optIdx && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                            ✓ Jawaban Benar
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between border-t pt-4">
                <button
                  type="button"
                  onClick={handleAddQuestionField}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold"
                >
                  + Tambah Pertanyaan Soal Lagi
                </button>

                <div className="flex gap-2">
                  <button type="button" onClick={() => setQuizModul(null)} className="px-4 py-2 border text-xs font-bold rounded-lg">
                    Batal
                  </button>
                  <button
                    type="submit"
                    disabled={savingQuiz}
                    className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-lg shadow disabled:opacity-50"
                  >
                    {savingQuiz ? 'Menyimpan Quiz...' : '💾 Simpan Quiz Assessment ➔'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Edit Kelas & Modul & Preview Modul... */}
      {editingKelas && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-extrabold text-lg text-slate-900">✏️ Edit Kelas</h3>
              <button onClick={() => setEditingKelas(null)} className="text-slate-400 hover:text-slate-700">✕</button>
            </div>
            <form onSubmit={handleUpdateKelas} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nama Kelas</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-lg text-xs"
                  value={editingKelas.nama}
                  onChange={(e) => setEditingKelas({ ...editingKelas, nama: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Urutan</label>
                  <input
                    type="number"
                    required
                    className="w-full px-3 py-2 border rounded-lg text-xs"
                    value={editingKelas.urutan}
                    onChange={(e) => setEditingKelas({ ...editingKelas, urutan: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Level</label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg text-xs"
                    value={editingKelas.level}
                    onChange={(e) => setEditingKelas({ ...editingKelas, level: e.target.value })}
                  >
                    <option value="BEGINNER">BEGINNER</option>
                    <option value="INTERMEDIATE">INTERMEDIATE</option>
                    <option value="ADVANCED">ADVANCED</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Deskripsi</label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-3 py-2 border rounded-lg text-xs"
                  value={editingKelas.deskripsi}
                  onChange={(e) => setEditingKelas({ ...editingKelas, deskripsi: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setEditingKelas(null)} className="px-4 py-2 border text-xs font-bold rounded-lg">Batal</button>
                <button type="submit" className="px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg shadow">Simpan Perubahan ➔</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {editingModul && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-2xl w-full space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-extrabold text-lg text-slate-900">✏️ Edit Modul Materi</h3>
              <button onClick={() => setEditingModul(null)} className="text-slate-400 hover:text-slate-700">✕</button>
            </div>
            <form onSubmit={handleUpdateModul} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="md:col-span-3">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Judul Modul</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border rounded-lg text-xs"
                    value={editingModul.judul}
                    onChange={(e) => setEditingModul({ ...editingModul, judul: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Urutan</label>
                  <input
                    type="number"
                    required
                    className="w-full px-3 py-2 border rounded-lg text-xs"
                    value={editingModul.urutan}
                    onChange={(e) => setEditingModul({ ...editingModul, urutan: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Link Video YouTube</label>
                <input
                  type="url"
                  className="w-full px-3 py-2 border rounded-lg text-xs"
                  value={editingModul.videoUrl || ''}
                  onChange={(e) => setEditingModul({ ...editingModul, videoUrl: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Konten Materi Markdown</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-3 py-2 border rounded-lg text-xs font-mono"
                  value={editingModul.kontenMateri}
                  onChange={(e) => setEditingModul({ ...editingModul, kontenMateri: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setEditingModul(null)} className="px-4 py-2 border text-xs font-bold rounded-lg">Batal</button>
                <button type="submit" className="px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg shadow">Simpan Perubahan ➔</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {previewModul && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-3xl w-full space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">👁️ Live Preview Tampilan Siswa</span>
              <button onClick={() => setPreviewModul(null)} className="text-slate-400 hover:text-slate-700 font-bold">✕ Tutup</button>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-slate-900">{previewModul.judul}</h2>
              <MarkdownRenderer content={previewModul.kontenMateri} videoUrl={previewModul.videoUrl} />
            </div>
          </div>
        </div>
      )}

      {/* Section 3: Daftar Siswa */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-bold text-slate-900">3. Kelola Siswa & Verifikasi Pembayaran Manual</h2>
        </div>
        {enrollments.length === 0 ? (
          <p className="text-sm text-slate-500 py-4 text-center">Belum ada siswa yang mendaftar kursus.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 uppercase tracking-wider font-bold border-b">
                  <th className="p-3">Nama Siswa</th>
                  <th className="p-3">Email Siswa</th>
                  <th className="p-3">LearningPath</th>
                  <th className="p-3">Status Pembayaran</th>
                  <th className="p-3 text-right">Aksi Verifikasi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {enrollments.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">{item.siswa?.nama}</td>
                    <td className="p-3 text-slate-600">{item.siswa?.email}</td>
                    <td className="p-3 text-slate-800 font-medium">{item.learningPath?.nama}</td>
                    <td className="p-3">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold ${item.statusPembayaran === 'LUNAS' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                        {item.statusPembayaran}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleTogglePaymentStatus(item.id, item.statusPembayaran)}
                        className={`px-3 py-1.5 rounded text-xs font-bold ${item.statusPembayaran === 'LUNAS' ? 'bg-amber-500 text-white' : 'bg-emerald-600 text-white'}`}
                      >
                        {item.statusPembayaran === 'LUNAS' ? 'Ubah ke BELUM_BAYAR' : '✓ Tandai LUNAS'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
