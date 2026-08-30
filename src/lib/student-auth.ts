import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

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

export function verifyStudentToken(token: string): { id: string; email: string; nama: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { id: string; email: string; nama: string };
  } catch (error) {
    return null;
  }
}

export async function getStudentSession() {
  const cookieStore = cookies();
  const token = cookieStore.get(SISWA_COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyStudentToken(token);
}
