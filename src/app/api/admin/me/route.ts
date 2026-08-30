import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  const adminCount = await prisma.admin.count();

  return NextResponse.json({
    success: true,
    admin: session,
    hasAdminRegistered: adminCount > 0,
  });
}
