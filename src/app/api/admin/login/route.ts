import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { comparePassword, generateAdminToken, ADMIN_COOKIE_NAME } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email dan password wajib diisi!' },
        { status: 400 }
      );
    }

    const admin = await prisma.admin.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    if (!admin) {
      return NextResponse.json(
        { success: false, message: 'Email atau password Admin salah!' },
        { status: 401 }
      );
    }

    const isValidPassword = await comparePassword(password, admin.passwordHash);
    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, message: 'Email atau password Admin salah!' },
        { status: 401 }
      );
    }

    const token = generateAdminToken({
      id: admin.id,
      email: admin.email,
      nama: admin.nama,
    });

    const response = NextResponse.json({
      success: true,
      message: 'Login Admin berhasil!',
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
      { success: false, message: error.message || 'Terjadi kesalahan server saat login Admin.' },
      { status: 500 }
    );
  }
}
