'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const form = new FormData(e.currentTarget);
    setLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: String(form.get('email') || ''),
          password: String(form.get('password') || ''),
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error || 'Unable to log in. Please try again.');
        return;
      }
      localStorage.setItem('marketly_user', JSON.stringify(result.user));
      window.dispatchEvent(new Event('marketly-auth'));
      const next = new URLSearchParams(window.location.search).get('next');
      window.location.href = next && next.startsWith('/') && !next.startsWith('//') ? next : '/dashboard';
    } catch {
      setError('Could not connect to Marketly. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <div className="formWrap">
        <span className="eyebrow">Welcome back</span>
        <h1 style={{fontSize:42,letterSpacing:-2}}>Log in to Marketly.</h1>
        <form className="form" onSubmit={login}>
          <label className="label">Email<input name="email" className="input" type="email" required placeholder="you@example.com"/></label>
          <label className="label">Password<input name="password" className="input" type="password" required placeholder="Your password"/></label>
          <button className="button" type="submit" disabled={loading}>{loading ? "Logging in…" : "Log in"}</button>\n          {error && <p role="alert" className="errorText">{error}</p>}
        </form>
        <p className="muted" style={{fontSize:13}}>New here? <a href="/signup" onClick={(e) => { e.preventDefault(); const next = new URLSearchParams(window.location.search).get('next'); window.location.href = '/signup' + (next ? '?next=' + encodeURIComponent(next) : ''); }}>Create an account</a></p>
      </div>
    </main>
  );
}