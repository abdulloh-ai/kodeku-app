'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function StudentRegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const enrollPathId = searchParams.get('enroll');

  const [formData, setFormData] = useState({ email: '', password: '', nama: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      // 1. Register Siswa Baru
      const res = await fetch('/api/student/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.message || 'Pendaftaran gagal');
      }

      // 2. Jika ada parameter enroll, langsung enroll otomatis
      if (enrollPathId) {
        await fetch('/api/student/enroll', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ learningPathId: enrollPathId }),
        });
      }

      router.push('/dashboard');
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
        <div className="text-center">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-2xl mx-auto mb-3 shadow-md">
            🎓
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Daftar Akun Baru
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Buat akun untuk mengakses materi pembelajaran IT terstruktur dan sertifikat kelulusan.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {errorMsg && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-medium">
              {errorMsg}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                placeholder="Budi Santoso"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="budi@gmail.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-slate-500 hover:text-slate-700 p-1"
                  title={showPassword ? 'Sembunyikan Password' : 'Tampilkan Password'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              <p className="mt-1 text-xs text-slate-500">Minimal 6 karakter, di-hash aman dengan bcrypt.</p>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md disabled:opacity-50"
          >
            {loading ? 'Mendaftarkan Akun...' : 'Daftar ➔'}
          </button>
        </form>

        <div className="text-center pt-2">
          <Link href="/student/login" className="text-xs font-semibold text-blue-600 hover:underline">
            Sudah punya akun? Login di sini
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function StudentRegisterPage() {
  return (
    <Suspense fallback={<div className="text-center py-12">Memuat Form...</div>}>
      <StudentRegisterForm />
    </Suspense>
  );
}
