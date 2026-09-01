'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [siswa, setSiswa] = useState<{ email: string; nama: string } | null>(null);
  const [admin, setAdmin] = useState<{ email: string; nama: string } | null>(null);

  useEffect(() => {
    // Cek Session Siswa
    fetch('/api/student/me')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.siswa) setSiswa(data.siswa);
      })
      .catch(() => {});

    // Cek Session Admin
    fetch('/api/admin/me')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.admin) setAdmin(data.admin);
      })
      .catch(() => {});
  }, [pathname]);

  const handleLogout = async () => {
    if (admin) {
      await fetch('/api/admin/logout', { method: 'POST' });
      setAdmin(null);
    }
    if (siswa) {
      await fetch('/api/student/logout', { method: 'POST' });
      setSiswa(null);
    }
    window.location.href = '/';
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
            k
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">kodemik</span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6 text-sm font-semibold">
          <Link
            href="/"
            className={`transition-colors ${pathname === '/' ? 'text-blue-600 font-bold' : 'text-slate-700 hover:text-blue-600'}`}
          >
            🌐 Katalog Kursus
          </Link>

          {/* Jika Logged in sebagai Admin */}
          {admin ? (
            <>
              <Link
                href="/admin"
                className={`transition-colors ${pathname.startsWith('/admin') ? 'text-blue-600 font-bold' : 'text-slate-700 hover:text-blue-600'}`}
              >
                👨‍💼 Admin
              </Link>
              <Link
                href="/dashboard"
                className={`transition-colors ${pathname.startsWith('/dashboard') ? 'text-blue-600 font-bold' : 'text-slate-700 hover:text-blue-600'}`}
              >
                🎓 View Siswa
              </Link>
              <button
                onClick={handleLogout}
                className="text-xs text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg border border-red-200 font-bold transition-colors"
              >
                Logout
              </button>
            </>
          ) : siswa ? (
            /* Jika Logged in sebagai Siswa */
            <>
              <Link
                href="/dashboard"
                className={`transition-colors ${pathname.startsWith('/dashboard') ? 'text-blue-600 font-bold' : 'text-slate-700 hover:text-blue-600'}`}
              >
                🎓 Dashboard Siswa ({siswa.nama})
              </Link>
              <button
                onClick={handleLogout}
                className="text-xs text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg border border-red-200 font-bold transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            /* Jika Belum Logged in — TIDAK ADA TULISAN ADMIN SAMA SEKALI */
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="text-xs text-slate-700 hover:text-blue-600 px-3 py-1.5 rounded-lg font-bold"
              >
                Login
              </Link>
              <Link
                href="/student/register"
                className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg font-bold shadow-sm transition-colors"
              >
                Daftar
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
