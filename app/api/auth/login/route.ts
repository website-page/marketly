import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createSession, verifyPassword } from '@/lib/server-auth';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const password = typeof body.password === 'string' ? body.password : '';

    if (!/^\S+@\S+\.\S+$/.test(email) || !password || password.length > 200) {
      return NextResponse.json({ error: 'Enter your email and password.' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user?.passwordHash || !verifyPassword(password, user.passwordHash)) {
      return NextResponse.json({ error: 'Email or password is incorrect.' }, { status: 401 });
    }

    await createSession(user.id);
    return NextResponse.json({ user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    console.error('Login failed', error);
    return NextResponse.json({ error: 'Unable to log in right now. Please try again.' }, { status: 500 });
  }
}
