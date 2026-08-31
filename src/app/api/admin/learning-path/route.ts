import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const paths = await prisma.learningPath.findMany({
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
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ success: true, data: paths });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { nama, deskripsi, harga, thumbnail } = await req.json();

    if (!nama || !deskripsi || harga === undefined) {
      return NextResponse.json(
        { success: false, message: 'Nama, deskripsi, dan harga wajib diisi!' },
        { status: 400 }
      );
    }

    const newPath = await prisma.learningPath.create({
      data: {
        nama: nama.trim(),
        deskripsi: deskripsi.trim(),
        harga: parseFloat(harga),
        thumbnail: thumbnail ? thumbnail.trim() : null,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'LearningPath berhasil dibuat!',
      data: newPath,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, message: 'ID LearningPath wajib diisi!' }, { status: 400 });
    }

    await prisma.learningPath.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: 'LearningPath dan seluruh kelas/modul di dalamnya berhasil dihapus!',
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
