import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { kelasId, judul, kontenMateri, videoUrl, urutan } = await req.json();

    if (!kelasId || !judul || !kontenMateri) {
      return NextResponse.json(
        { success: false, message: 'KelasId, judul, dan konten materi modul wajib diisi!' },
        { status: 400 }
      );
    }

    const newModul = await prisma.modul.create({
      data: {
        kelasId,
        judul: judul.trim(),
        kontenMateri: kontenMateri.trim(),
        videoUrl: videoUrl ? videoUrl.trim() : null,
        urutan: parseInt(urutan) || 1,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Modul baru berhasil ditambahkan!',
      data: newModul,
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
    const { modulId, judul, kontenMateri, videoUrl, urutan } = await req.json();

    if (!modulId) {
      return NextResponse.json({ success: false, message: 'ModulId wajib diisi!' }, { status: 400 });
    }

    const updated = await prisma.modul.update({
      where: { id: modulId },
      data: {
        ...(judul && { judul: judul.trim() }),
        ...(kontenMateri && { kontenMateri: kontenMateri.trim() }),
        ...(videoUrl !== undefined && { videoUrl: videoUrl ? videoUrl.trim() : null }),
        ...(urutan !== undefined && { urutan: parseInt(urutan) || 1 }),
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Modul berhasil diperbarui!',
      data: updated,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
