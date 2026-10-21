import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createSession, hashPassword } from '@/lib/server-auth';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === 'string' ? body.name.trim().slice(0, 100) : '';
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const password = typeof body.password === 'string' ? body.password : '';
    const country = typeof body.country === 'string' ? body.country.trim().slice(0, 100) : '';
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || password.length < 8 || password.length > 200) {
      return NextResponse.json({ error: 'Enter a valid name and email, and use a password of at least 8 characters.' }, { status: 400 });
    }
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return NextResponse.json({ error: 'An account with this email already exists. Please log in instead.' }, { status: 409 });
    const user = await prisma.user.create({
      data: { name, email, passwordHash: hashPassword(password), country: country || null },
      select: { id: true, email: true, name: true },
    });
    await createSession(user.id);
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error('Signup failed', error);
    return NextResponse.json({ error: 'Unable to create your account right now. Please try again.' }, { status: 500 });
  }
}