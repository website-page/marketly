import { createHmac, timingSafeEqual } from 'node:crypto';

const COOKIE_NAME = 'marketly_paid_products';

function signature(payload: string, secret: string) {
  return createHmac('sha256', secret).update(payload).digest('base64url');
}

export function readPaidProductIds(cookieValue: string | undefined, secret: string): string[] {
  if (!cookieValue) return [];
  const splitAt = cookieValue.lastIndexOf('.');
  if (splitAt < 1) return [];
  const payload = cookieValue.slice(0, splitAt);
  const supplied = cookieValue.slice(splitAt + 1);
  const expected = signature(payload, secret);
  const a = Buffer.from(supplied);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return [];
  try {
    const ids: unknown = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return Array.isArray(ids) ? ids.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

export function signPaidProductIds(ids: string[], secret: string): string {
  const unique = Array.from(new Set(ids)).slice(-100);
  const payload = Buffer.from(JSON.stringify(unique)).toString('base64url');
  return payload + '.' + signature(payload, secret);
}

export const paidProductsCookieName = COOKIE_NAME;
