import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/server-auth';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ user: null }, { status: 401 });
    return NextResponse.json({ user });
  } catch (error) {
    console.error('Session lookup failed', error);
    return NextResponse.json({ error: 'Unable to check your session.' }, { status: 500 });
  }
}
