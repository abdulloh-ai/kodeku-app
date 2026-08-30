import { NextResponse } from 'next/server';
import { getStudentSession } from '@/lib/student-auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getStudentSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const enrollments = await prisma.pendaftaran.findMany({
      where: { siswaId: session.id },
      include: {
        learningPath: {
          include: {
            kelas: {
              orderBy: { urutan: 'asc' },
              include: {
                modul: {
                  orderBy: { urutan: 'asc' },
                },
              },
            },
          },
        },
      },
      orderBy: { tanggalMendaftar: 'desc' },
    });

    const progressRecords = await prisma.progressBelajar.findMany({
      where: {
        siswaId: session.id,
        status: 'SELESAI',
      },
    });

    const completedModulIds = new Set(progressRecords.map((p) => p.modulId));

    const result = enrollments.map((item) => {
      const path = item.learningPath;
      let totalModulCount = 0;
      let completedModulCount = 0;

      if (path && path.kelas) {
        path.kelas.forEach((k) => {
          if (k.modul) {
            totalModulCount += k.modul.length;
            k.modul.forEach((m) => {
              if (completedModulIds.has(m.id)) {
                completedModulCount += 1;
              }
            });
          }
        });
      }

      const progressPercent = totalModulCount > 0 ? Math.round((completedModulCount / totalModulCount) * 100) : 0;

      return {
        id: item.id,
        statusPembayaran: item.statusPembayaran,
        tanggalMendaftar: item.tanggalMendaftar,
        learningPath: path,
        totalModulCount,
        completedModulCount,
        progressPercent,
      };
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
