'use client';

import { useState } from 'react';
import Link from 'next/link';
import { countries } from '@/lib/data';

export default function Signup() {
  const [country, setCountry] = useState('Nigeria');

  function createAccount(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const user = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      country,
    };
    localStorage.setItem('marketly_user', JSON.stringify(user));
    window.dispatchEvent(new Event('marketly-auth'));
    window.location.href = '/dashboard';
  }

  return (
    <main className="page">
      <div className="formWrap">
        <span className="eyebrow">Create your Marketly account</span>
        <h1 style={{fontSize:42,letterSpacing:-2}}>Join the marketplace.</h1>
        <p className="pageSub">Your country helps Marketly personalize currency and payment options.</p>
        <form className="form" onSubmit={createAccount}>
          <label className="label">Full name<input name="name" className="input" required placeholder="Your name"/></label>
          <label className="label">Email<input name="email" className="input" type="email" required placeholder="you@example.com"/></label>
          <label className="label">Country<select className="select" value={country} onChange={e=>setCountry(e.target.value)}>{countries.map(([c])=><option key={c}>{c}</option>)}</select></label>
          <label className="label">Password<input name="password" className="input" type="password" required minLength={8} placeholder="At least 8 characters"/></label>
          <button className="button" type="submit">Create account</button>
        </form>
        <p className="muted" style={{fontSize:13}}>Already have an account? <Link href="/login">Log in</Link></p>
      </div>
    </main>
  );
}