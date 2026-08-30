import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, generateAdminToken, ADMIN_COOKIE_NAME } from '@/lib/auth';

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
    const cleanNama = nama.trim();
    const passwordHash = await hashPassword(password);

    // Upsert / buat akun admin dengan kredensial pilihan user
    const admin = await prisma.admin.upsert({
      where: { email: cleanEmail },
      update: {
        passwordHash,
        nama: cleanNama,
      },
      create: {
        email: cleanEmail,
        passwordHash,
        nama: cleanNama,
      },
    });

    const token = generateAdminToken({
      id: admin.id,
      email: admin.email,
      nama: admin.nama,
    });

    const response = NextResponse.json({
      success: true,
      message: 'Akun Admin berhasil dibuat/diperbarui dengan kredensial pilihan Anda!',
      admin: { id: admin.id, email: admin.email, nama: admin.nama },
    });

    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 hari
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Terjadi kesalahan server saat pendaftaran Admin.' },
      { status: 500 }
    );
  }
}
