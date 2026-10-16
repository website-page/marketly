'use client';

import { useState } from 'react';
import Link from 'next/link';
import { countryNames } from '@/lib/country-names';

export default function Signup() {
  const [country, setCountry] = useState('Nigeria');

  function createAccount(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const normalizedCountry = countryNames.find((name) => name.toLowerCase() === country.trim().toLowerCase());
    if (!normalizedCountry) {
      alert('Please select a country from the suggestions.');
      return;
    }
    const user = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      country: normalizedCountry,
    };
    localStorage.setItem('marketly_user', JSON.stringify(user));
    window.dispatchEvent(new Event('marketly-auth'));
    window.location.href = '/dashboard';
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
          <button className="button" type="submit">Create account</button>
        </form>
        <p className="muted" style={{ fontSize: 13 }}>Already have an account? <Link href="/login">Log in</Link></p>
        <p className="muted" style={{ fontSize: 12 }}>Marketly V1 currently uses demo browser storage; password-based authentication is not yet connected to a secure backend.</p>
      </div>
    </main>
  );
}
