'use client';

import Link from 'next/link';

export default function Login() {
  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get('email') || '');
    const saved = localStorage.getItem('marketly_user');
    const previous = saved ? JSON.parse(saved) : null;
    const user = {
      name: previous?.name || email.split('@')[0] || 'Marketly User',
      email,
      country: previous?.country || 'Nigeria',
    };
    localStorage.setItem('marketly_user', JSON.stringify(user));
    window.dispatchEvent(new Event('marketly-auth'));
    window.location.href = '/dashboard';
  }

  return (
    <main className="page">
      <div className="formWrap">
        <span className="eyebrow">Welcome back</span>
        <h1 style={{fontSize:42,letterSpacing:-2}}>Log in to Marketly.</h1>
        <form className="form" onSubmit={login}>
          <label className="label">Email<input name="email" className="input" type="email" required placeholder="you@example.com"/></label>
          <label className="label">Password<input name="password" className="input" type="password" required placeholder="Your password"/></label>
          <button className="button">Log in</button>
        </form>
        <p className="muted" style={{fontSize:13}}>New here? <Link href="/signup">Create an account</Link></p>
      </div>
    </main>
  );
}