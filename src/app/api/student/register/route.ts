import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, generateStudentToken, SISWA_COOKIE_NAME } from '@/lib/student-auth';

export async function POST(req: Request) {
  try {
    const { email, password, nama } = await req.json();

    if (!email || !password || !nama) {
      return NextResponse.json(
        { success: false, message: 'Email, password, dan nama wajib diisi!' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: 'Password minimal 6 karakter!' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    const existingSiswa = await prisma.siswa.findUnique({
      where: { email: cleanEmail },
    });

    if (existingSiswa) {
      return NextResponse.json(
        { success: false, message: 'Email ini sudah terdaftar sebagai Siswa! Silakan login.' },
        { status: 400 }
      );
    }

    const passwordHash = await hashPassword(password);

    const newSiswa = await prisma.siswa.create({
      data: {
        email: cleanEmail,
        passwordHash,
        nama: nama.trim(),
      },
    });

    const token = generateStudentToken({
      id: newSiswa.id,
      email: newSiswa.email,
      nama: newSiswa.nama,
    });

    const response = NextResponse.json({
      success: true,
      message: 'Pendaftaran Siswa berhasil!',
      siswa: { id: newSiswa.id, email: newSiswa.email, nama: newSiswa.nama },
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
      { success: false, message: error.message || 'Terjadi kesalahan server saat pendaftaran Siswa.' },
      { status: 500 }
    );
  }
}
