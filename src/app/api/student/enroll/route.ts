import { NextResponse } from 'next/server';
import { getStudentSession } from '@/lib/student-auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const session = await getStudentSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { learningPathId } = await req.json();

    if (!learningPathId) {
      return NextResponse.json({ success: false, message: 'LearningPathId wajib diisi!' }, { status: 400 });
    }

    let pendaftaran = await prisma.pendaftaran.findFirst({
      where: {
        siswaId: session.id,
        learningPathId,
      },
    });

    if (!pendaftaran) {
      pendaftaran = await prisma.pendaftaran.create({
        data: {
          siswaId: session.id,
          learningPathId,
          statusPembayaran: 'BELUM_BAYAR', // Wajib BELUM_BAYAR sebelum bayar di Midtrans!
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Pendaftaran berhasil dibuat. Silakan lakukan pembayaran!',
      data: pendaftaran,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
