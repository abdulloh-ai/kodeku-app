import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const totalLearningPaths = await prisma.learningPath.count();
    const totalSiswa = await prisma.siswa.count();

    const lunasEnrollments = await prisma.pendaftaran.findMany({
      where: { statusPembayaran: 'LUNAS' },
      include: { learningPath: true },
    });

    const totalRevenue = lunasEnrollments.reduce((sum, p) => sum + (p.learningPath?.harga || 0), 0);

    return NextResponse.json({
      success: true,
      data: {
        totalLearningPaths,
        totalSiswa,
        totalRevenue,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
