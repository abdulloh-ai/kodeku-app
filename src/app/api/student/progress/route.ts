import { NextResponse } from 'next/server';
import { getStudentSession } from '@/lib/student-auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const session = await getStudentSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { modulId, status } = await req.json();

    if (!modulId || !status) {
      return NextResponse.json({ success: false, message: 'ModulId dan status wajib diisi!' }, { status: 400 });
    }

    const progress = await prisma.progressBelajar.upsert({
      where: {
        siswaId_modulId: {
          siswaId: session.id,
          modulId: modulId,
        },
      },
      update: {
        status: status,
        waktuSelesai: status === 'SELESAI' ? new Date() : null,
      },
      create: {
        siswaId: session.id,
        modulId: modulId,
        status: status,
        waktuSelesai: status === 'SELESAI' ? new Date() : null,
      },
    });

    return NextResponse.json({
      success: true,
      message: `Status modul berhasil diperbarui menjadi ${status}!`,
      progress,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
