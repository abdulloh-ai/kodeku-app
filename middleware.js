// middleware.js — Next.js Supabase Auth Route Protection Middleware
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const res = NextResponse.next();
  
  // Extract Supabase Access Token cookie
  const token = req.cookies.get('sb-access-token')?.value || req.cookies.get('sb-auth-token')?.value;

  const url = req.nextUrl.clone();
  const isProtectedRoute = url.pathname.startsWith('/belajar') || url.pathname.startsWith('/dashboard');

  if (isProtectedRoute && !token) {
    url.pathname = '/login';
    url.searchParams.set('error', 'unauthorized');
    url.searchParams.set('redirect', req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  matcher: ['/belajar/:path*', '/dashboard/:path*'],
};
