import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const paths = await prisma.learningPath.findMany({
      include: {
        kelas: {
          select: {
            id: true,
            nama: true,
            urutan: true,
            level: true,
            _count: { select: { modul: true } },
          },
          orderBy: { urutan: 'asc' },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ success: true, data: paths });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
