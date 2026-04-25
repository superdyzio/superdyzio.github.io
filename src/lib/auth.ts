import crypto from 'crypto';

export const SESSION_COOKIE_NAME = 'admin_session';

const SESSION_TTL_SECONDS = 60 * 60 * 12;

function getSessionSecret(): string {
  return process.env.ADMIN_SESSION_SECRET || 'dev-only-session-secret-change-me';
}

function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || 'admin';
}

export function validateAdminPassword(password: string): boolean {
  return timingSafeEquals(password, getAdminPassword());
}

export function createSessionToken(nowInSeconds = Math.floor(Date.now() / 1000)): string {
  const payload = `${nowInSeconds}`;
  const signature = signPayload(payload);
  return `${payload}.${signature}`;
}

export function isValidSessionToken(token?: string | null): boolean {
  if (!token) {
    return false;
  }

  const [payload, signature] = token.split('.');
  if (!payload || !signature) {
    return false;
  }

  const expectedSignature = signPayload(payload);
  if (!timingSafeEquals(signature, expectedSignature)) {
    return false;
  }

  const issuedAt = Number(payload);
  if (!Number.isFinite(issuedAt)) {
    return false;
  }

  const nowInSeconds = Math.floor(Date.now() / 1000);
  return nowInSeconds - issuedAt <= SESSION_TTL_SECONDS;
}

export function getSessionMaxAgeSeconds(): number {
  return SESSION_TTL_SECONDS;
}

function signPayload(payload: string): string {
  return crypto
    .createHmac('sha256', getSessionSecret())
    .update(payload)
    .digest('hex');
}

function timingSafeEquals(a: string, b: string): boolean {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(aBuffer, bBuffer);
}
