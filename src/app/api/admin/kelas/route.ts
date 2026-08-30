import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { learningPathId, nama, deskripsi, urutan, level } = await req.json();

    if (!learningPathId || !nama || !deskripsi) {
      return NextResponse.json(
        { success: false, message: 'LearningPathId, nama, dan deskripsi kelas wajib diisi!' },
        { status: 400 }
      );
    }

    const newKelas = await prisma.kelas.create({
      data: {
        learningPathId,
        nama: nama.trim(),
        deskripsi: deskripsi.trim(),
        urutan: parseInt(urutan) || 1,
        level: level || 'BEGINNER',
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Kelas baru berhasil ditambahkan!',
      data: newKelas,
    });
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
    const { kelasId, nama, deskripsi, urutan, level } = await req.json();

    if (!kelasId) {
      return NextResponse.json({ success: false, message: 'KelasId wajib diisi!' }, { status: 400 });
    }

    const updated = await prisma.kelas.update({
      where: { id: kelasId },
      data: {
        ...(nama && { nama: nama.trim() }),
        ...(deskripsi && { deskripsi: deskripsi.trim() }),
        ...(urutan !== undefined && { urutan: parseInt(urutan) || 1 }),
        ...(level && { level }),
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Kelas berhasil diperbarui!',
      data: updated,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
