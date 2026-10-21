'use client';

import { useState } from 'react';
import Link from 'next/link';
import { countryNames } from '@/lib/country-names';

export default function Signup() {
  const [country, setCountry] = useState('Nigeria');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function createAccount(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const form = new FormData(e.currentTarget);
    const normalizedCountry = countryNames.find((name) => name.toLowerCase() === country.trim().toLowerCase());
    if (!normalizedCountry) {
      setError('Please select a country from the suggestions.');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: String(form.get('name') || ''),
          email: String(form.get('email') || ''),
          password: String(form.get('password') || ''),
          country: normalizedCountry,
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error || 'Unable to create your account. Please try again.');
        return;
      }
      localStorage.setItem('marketly_user', JSON.stringify({ ...result.user, country: normalizedCountry }));
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
        <span className="eyebrow">Create your Marketly account</span>
        <h1 style={{ fontSize: 42, letterSpacing: -2 }}>Join the marketplace.</h1>
        <p className="pageSub">Choose your country to help personalize your experience. Payment methods and currencies depend on supported payment providers.</p>
        <form className="form" onSubmit={createAccount}>
          <label className="label">Full name<input name="name" className="input" required placeholder="Your name" autoComplete="name" /></label>
          <label className="label">Email<input name="email" className="input" type="email" required placeholder="you@example.com" autoComplete="email" /></label>
          <label className="label">Search or select country
            <input
              name="country"
              className="input"
              list="marketly-country-options"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Start typing a country..."
              autoComplete="country-name"
              required
            />
            <datalist id="marketly-country-options">
              {countryNames.map((name) => <option key={name} value={name} />)}
            </datalist>
          </label>
          <label className="label">Password<input name="password" className="input" type="password" required minLength={8} placeholder="At least 8 characters" autoComplete="new-password" /></label>
          <label className="label termsAgree">
            <input type="checkbox" required />
            <span>I agree to the <Link href="/terms">Terms &amp; Conditions</Link> and acknowledge the <Link href="/privacy-policy">Privacy Policy</Link>.</span>
          </label>
          <button className="button" type="submit" disabled={loading}>{loading ? "Creating account…" : "Create account"}</button>
          {error && <p role="alert" className="errorText">{error}</p>}
        </form>
        <p className="muted" style={{ fontSize: 13 }}>Already have an account? <Link href="/login">Log in</Link></p>
      </div>
    </main>
  );
}
