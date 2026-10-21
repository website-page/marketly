import { NextResponse } from 'next/server';
import { destroySession } from '@/lib/server-auth';

export const runtime = 'nodejs';

export async function POST() {
  try {
    await destroySession();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Logout failed', error);
    return NextResponse.json({ error: 'Unable to log out right now.' }, { status: 500 });
  }
}
