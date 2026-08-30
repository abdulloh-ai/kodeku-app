import { NextResponse } from 'next/server';
import { getStudentSession } from '@/lib/student-auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const session = await getStudentSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Silakan login terlebih dahulu untuk mendaftar kursus.' }, { status: 401 });
  }

  try {
    const { learningPathId } = await req.json();

    if (!learningPathId) {
      return NextResponse.json({ success: false, message: 'LearningPathId wajib diisi!' }, { status: 400 });
    }

    const existingEnrollment = await prisma.pendaftaran.findFirst({
      where: {
        siswaId: session.id,
        learningPathId: learningPathId,
      },
    });

    if (existingEnrollment) {
      return NextResponse.json({
        success: true,
        message: 'Anda sudah terdaftar di kursus ini.',
        enrollment: existingEnrollment,
      });
    }

    const newEnrollment = await prisma.pendaftaran.create({
      data: {
        siswaId: session.id,
        learningPathId: learningPathId,
        statusPembayaran: 'LUNAS', // Untuk MVP ini langsung LUNAS agar siswa bisa mencoba belajar
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Pendaftaran kursus berhasil!',
      enrollment: newEnrollment,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
