'use client';

import Link from 'next/link';
import { ShoppingBag, UserRound } from 'lucide-react';
import { useEffect, useState } from 'react';

type MarketlyUser = { name: string; email: string; country: string };

export default function Navbar() {
  const [user, setUser] = useState<MarketlyUser | null>(null);

  useEffect(() => {
    const loadUser = () => {
      try {
        const saved = localStorage.getItem('marketly_user');
        setUser(saved ? JSON.parse(saved) : null);
      } catch {
        setUser(null);
      }
    };

    loadUser();
    window.addEventListener('storage', loadUser);
    window.addEventListener('marketly-auth', loadUser);
    return () => {
      window.removeEventListener('storage', loadUser);
      window.removeEventListener('marketly-auth', loadUser);
    };
  }, []);

  function logout() {
    localStorage.removeItem('marketly_user');
    window.dispatchEvent(new Event('marketly-auth'));
    window.location.href = '/';
  }

  return (
    <header className="nav">
      <Link href="/" className="brand">
        <span className="brandmark">M</span>Marketly
      </Link>
      <nav>
        <Link href="/products">Marketplace</Link>
        <Link href="/services">Services</Link>
        <Link href="/premium">Premium</Link>
      </nav>
      <div className="navActions">
        {user ? (
          <>
            <Link href="/dashboard" className="muted" style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <UserRound size={17} /> {user.name.split(' ')[0] || 'Account'}
            </Link>
            <button type="button" className="button small" onClick={logout}>Log out</button>
          </>
        ) : (
          <>
            <Link href="/login" className="muted">Log in</Link>
            <Link href="/signup" className="button small">Get started</Link>
          </>
        )}
        <Link href="/dashboard" aria-label="Dashboard"><ShoppingBag size={19}/></Link>
      </div>
    </header>
  );
}