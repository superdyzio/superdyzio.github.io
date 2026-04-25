import { NextResponse } from 'next/server';

import {
  createSessionToken,
  getSessionMaxAgeSeconds,
  SESSION_COOKIE_NAME,
  validateAdminPassword,
} from '@/lib/auth';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const password = typeof body?.password === 'string' ? body.password : '';

  if (!validateAdminPassword(password)) {
    return NextResponse.json({ ok: false, message: 'Invalid credentials' }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: createSessionToken(),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: getSessionMaxAgeSeconds(),
  });

  return response;
}