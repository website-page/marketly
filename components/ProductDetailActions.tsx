'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Download, ShoppingBag, Gift, CheckCircle2, LockKeyhole } from 'lucide-react';
import type { Product } from '@/lib/data';
import { downloadProductPdf } from '@/components/ProductPdf';

export default function ProductDetailActions({ product }: { product: Product }) {
  const isFree = product.price === 0;
  const [user, setUser] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [purchased, setPurchased] = useState(false);

  useEffect(() => {
    try {
      setUser(Boolean(localStorage.getItem('marketly_user')));
      const claims = JSON.parse(localStorage.getItem('marketly_free_claims') || '[]');
      setClaimed(Array.isArray(claims) && claims.includes(product.id));
    } catch {}
    let active = true;
    fetch('/api/payments/entitlements', { cache: 'no-store' })
      .then((response) => response.ok ? response.json() : { products: [] })
      .then((data) => { if (active) setPurchased(Array.isArray(data.products) && data.products.includes(product.id)); })
      .catch(() => { if (active) setPurchased(false); });
    return () => { active = false; };
  }, [product.id]);

  function loginFirst() {
    const next = '/products/' + product.id;
    window.location.href = '/login?next=' + encodeURIComponent(next);
  }

  function download() {
    if (!user) { loginFirst(); return; }
    if (isFree) {
      try {
        const saved = JSON.parse(localStorage.getItem('marketly_free_claims') || '[]');
        const claims = Array.isArray(saved) ? saved : [];
        if (!claims.includes(product.id)) claims.push(product.id);
        localStorage.setItem('marketly_free_claims', JSON.stringify(claims));
        setClaimed(true);
      } catch {
        alert('Please enable browser storage and try again.');
        return;
      }
      downloadProductPdf(product);
      return;
    }
    if (!purchased) {
      window.location.href = '/checkout?product=' + encodeURIComponent(product.id);
      return;
    }
    downloadProductPdf(product);
  }

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <button type="button" className="button" onClick={download}>
        {!user ? <LockKeyhole size={17} /> : isFree || purchased ? <Download size={17} /> : <ShoppingBag size={17} />}
        {!user ? 'Log in / Sign up to download' : isFree ? claimed ? 'Download PDF again' : 'Get free PDF' : purchased ? 'Download purchased PDF' : 'Buy for $' + product.price + ' to unlock PDF'}
      </button>
      {!user && <p className="muted" style={{ fontSize: 12, margin: 0 }}>An account is required before any download. New to Marketly? You can create a free account at login.</p>}
      {user && isFree && <p className="muted" style={{ fontSize: 12, margin: 0 }}>{claimed ? 'This free PDF is in your browser-based library.' : 'Free resource — no payment required.'}</p>}
      {user && !isFree && !purchased && <p className="muted" style={{ fontSize: 12, margin: 0 }}>After checkout, return to your dashboard to access the PDF. Payment access is still in demo mode until secure account and purchase storage are connected.</p>}
      {claimed && isFree && <Link className="button secondary" href="/dashboard"><Gift size={16}/> Open my library</Link>}
      {purchased && !isFree && <Link className="button secondary" href="/dashboard"><CheckCircle2 size={16}/> Open my library</Link>}
    </div>
  );
}
