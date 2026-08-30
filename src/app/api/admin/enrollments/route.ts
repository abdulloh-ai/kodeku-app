import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const enrollments = await prisma.pendaftaran.findMany({
      include: {
        siswa: {
          select: { id: true, email: true, nama: true },
        },
        learningPath: {
          select: { id: true, nama: true, harga: true },
        },
      },
      orderBy: { tanggalMendaftar: 'desc' },
    });

    return NextResponse.json({ success: true, data: enrollments });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { enrollmentId, statusPembayaran } = await req.json();

    if (!enrollmentId || !statusPembayaran) {
      return NextResponse.json(
        { success: false, message: 'EnrollmentId dan statusPembayaran wajib diisi!' },
        { status: 400 }
      );
    }

    const updated = await prisma.pendaftaran.update({
      where: { id: enrollmentId },
      data: { statusPembayaran },
    });

    return NextResponse.json({
      success: true,
      message: `Status pembayaran berhasil diubah menjadi ${statusPembayaran}!`,
      data: updated,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
