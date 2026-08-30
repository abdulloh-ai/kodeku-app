import { NextResponse } from 'next/server';
import { getStudentSession } from '@/lib/student-auth';

export async function GET() {
  const session = await getStudentSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({
    success: true,
    siswa: session,
  });
}
