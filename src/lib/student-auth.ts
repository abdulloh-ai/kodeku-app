import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { verifyAdminToken, ADMIN_COOKIE_NAME } from './auth';

const JWT_SECRET = process.env.JWT_SECRET || 'kodemik-siswa-jwt-secret-key-2026';
export const SISWA_COOKIE_NAME = 'kodemik_siswa_session';

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

export function generateStudentToken(payload: { id: string; email: string; nama: string }): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '14d' });
}

export function verifyStudentToken(token: string): { id: string; email: string; nama: string; isAdminPreview?: boolean } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { id: string; email: string; nama: string };
  } catch (error) {
    return null;
  }
}

export async function getStudentSession() {
  const cookieStore = cookies();

  // 1. Cek Cookie Session Siswa
  const token = cookieStore.get(SISWA_COOKIE_NAME)?.value;
  if (token) {
    const siswaSession = verifyStudentToken(token);
    if (siswaSession) return siswaSession;
  }

  // 2. Fallback: Jika tidak ada Cookie Siswa, Cek Cookie Admin (Master Access / Preview Mode)
  const adminToken = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (adminToken) {
    const adminSession = verifyAdminToken(adminToken);
    if (adminSession) {
      return {
        id: adminSession.id,
        email: adminSession.email,
        nama: adminSession.nama,
        isAdminPreview: true,
      };
    }
  }

  return null;
}
