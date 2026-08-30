import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Kodemik Next.js API Routes is running cleanly!',
    timestamp: new Date().toISOString(),
  });
}
