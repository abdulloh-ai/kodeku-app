import { NextResponse } from 'next/server';
import { SISWA_COOKIE_NAME } from '@/lib/student-auth';

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: 'Logout Siswa berhasil!',
  });

  response.cookies.set({
    name: SISWA_COOKIE_NAME,
    value: '',
    httpOnly: true,
    path: '/',
    expires: new Date(0),
  });

  return response;
}
