import { NextResponse } from 'next/server';
import { getStudentSession } from '@/lib/student-auth';
import { prisma } from '@/lib/prisma';
import { createSnapTransaction } from '@/lib/midtrans';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const session = await getStudentSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Silakan login terlebih dahulu!' }, { status: 401 });
  }

  try {
    const { learningPathId } = await req.json();

    if (!learningPathId) {
      return NextResponse.json({ success: false, message: 'LearningPathId wajib diisi!' }, { status: 400 });
    }

    const path = await prisma.learningPath.findUnique({
      where: { id: learningPathId },
    });

    if (!path) {
      return NextResponse.json({ success: false, message: 'Kursus tidak ditemukan!' }, { status: 404 });
    }

    // 1. Cari atau buat record Pendaftaran
    let pendaftaran = await prisma.pendaftaran.findFirst({
      where: {
        siswaId: session.id,
        learningPathId: path.id,
      },
    });

    if (!pendaftaran) {
      pendaftaran = await prisma.pendaftaran.create({
        data: {
          siswaId: session.id,
          learningPathId: path.id,
          statusPembayaran: 'BELUM_BAYAR',
        },
      });
    }

    // Jika sudah lunas, langsung sukseskan
    if (pendaftaran.statusPembayaran === 'LUNAS') {
      return NextResponse.json({
        success: true,
        alreadyPaid: true,
        message: 'Kursus ini sudah lunas!',
      });
    }

    // 2. Buat Order ID unik Midtrans
    const orderId = `KODEMIK-${pendaftaran.id.substring(0, 8)}-${Date.now()}`;

    // 3. Panggil Midtrans Snap API
    const snapResult = await createSnapTransaction({
      orderId,
      grossAmount: path.harga,
      customerDetails: {
        first_name: session.nama,
        email: session.email,
      },
      itemDetails: [
        {
          id: path.id,
          price: path.harga,
          quantity: 1,
          name: path.nama.substring(0, 50),
        },
      ],
    });

    return NextResponse.json({
      success: true,
      token: snapResult.token,
      redirectUrl: snapResult.redirect_url,
      orderId,
      pendaftaranId: pendaftaran.id,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
