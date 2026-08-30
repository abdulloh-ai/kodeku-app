import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { comparePassword, generateStudentToken, SISWA_COOKIE_NAME } from '@/lib/student-auth';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email dan password wajib diisi!' },
        { status: 400 }
      );
    }

    const siswa = await prisma.siswa.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    if (!siswa) {
      return NextResponse.json(
        { success: false, message: 'Email atau password Siswa salah!' },
        { status: 401 }
      );
    }

    const isValidPassword = await comparePassword(password, siswa.passwordHash);
    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, message: 'Email atau password Siswa salah!' },
        { status: 401 }
      );
    }

    const token = generateStudentToken({
      id: siswa.id,
      email: siswa.email,
      nama: siswa.nama,
    });

    const response = NextResponse.json({
      success: true,
      message: 'Login Siswa berhasil!',
      siswa: { id: siswa.id, email: siswa.email, nama: siswa.nama },
    });

    response.cookies.set({
      name: SISWA_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 14, // 14 hari
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Terjadi kesalahan server saat login Siswa.' },
      { status: 500 }
    );
  }
}
