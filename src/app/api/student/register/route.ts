import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, generateStudentToken, SISWA_COOKIE_NAME } from '@/lib/student-auth';

export async function POST(req: Request) {
  try {
    const { nama, email, password, enrollPathId } = await req.json();

    if (!nama || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Nama, email, dan password wajib diisi!' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // Cek apakah email sudah terdaftar
    const existing = await prisma.siswa.findUnique({
      where: { email: cleanEmail },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, message: 'Email sudah terdaftar. Silakan login!' },
        { status: 400 }
      );
    }

    const passwordHash = await hashPassword(password);

    const newSiswa = await prisma.siswa.create({
      data: {
        nama: nama.trim(),
        email: cleanEmail,
        passwordHash,
      },
    });

    // Jika mendaftar sambil membawa enrollPathId, buat pendaftaran dengan status BELUM_BAYAR
    if (enrollPathId) {
      await prisma.pendaftaran.create({
        data: {
          siswaId: newSiswa.id,
          learningPathId: enrollPathId,
          statusPembayaran: 'BELUM_BAYAR', // Wajib BELUM_BAYAR!
        },
      });
    }

    const token = generateStudentToken({
      id: newSiswa.id,
      email: newSiswa.email,
      nama: newSiswa.nama,
    });

    const response = NextResponse.json({
      success: true,
      message: 'Pendaftaran akun siswa berhasil!',
      user: { id: newSiswa.id, email: newSiswa.email, nama: newSiswa.nama },
    });

    response.cookies.set(SISWA_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 14 * 24 * 60 * 60,
      path: '/',
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
