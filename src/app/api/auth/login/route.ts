import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { comparePassword, generateAdminToken, ADMIN_COOKIE_NAME } from '@/lib/auth';
import { generateStudentToken, SISWA_COOKIE_NAME } from '@/lib/student-auth';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email dan password wajib diisi!' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // 1. Cek terlebih dahulu di tabel Admin
    const admin = await prisma.admin.findUnique({
      where: { email: cleanEmail },
    });

    if (admin) {
      const isPasswordValid = await comparePassword(password, admin.passwordHash);
      if (isPasswordValid) {
        const token = generateAdminToken({
          id: admin.id,
          email: admin.email,
          nama: admin.nama,
        });

        const response = NextResponse.json({
          success: true,
          role: 'ADMIN',
          redirectUrl: '/admin',
          message: 'Login Admin Berhasil!',
          user: { id: admin.id, email: admin.email, nama: admin.nama },
        });

        response.cookies.set(ADMIN_COOKIE_NAME, token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 7 * 24 * 60 * 60, // 7 Hari
          path: '/',
        });

        return response;
      }
    }

    // 2. Jika bukan Admin, Cek di tabel Siswa
    const siswa = await prisma.siswa.findUnique({
      where: { email: cleanEmail },
    });

    if (siswa) {
      const isPasswordValid = await comparePassword(password, siswa.passwordHash);
      if (isPasswordValid) {
        const token = generateStudentToken({
          id: siswa.id,
          email: siswa.email,
          nama: siswa.nama,
        });

        const response = NextResponse.json({
          success: true,
          role: 'SISWA',
          redirectUrl: '/dashboard',
          message: 'Login Siswa Berhasil!',
          user: { id: siswa.id, email: siswa.email, nama: siswa.nama },
        });

        response.cookies.set(SISWA_COOKIE_NAME, token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 14 * 24 * 60 * 60, // 14 Hari
          path: '/',
        });

        return response;
      }
    }

    // 3. Kredensial tidak cocok untuk kedua role
    return NextResponse.json(
      { success: false, message: 'Email atau password salah.' },
      { status: 401 }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
