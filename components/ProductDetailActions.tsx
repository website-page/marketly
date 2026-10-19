'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Download, ShoppingBag, Gift, CheckCircle2, LockKeyhole } from 'lucide-react';
import type { Product } from '@/lib/data';

export default function ProductDetailActions({ product }: { product: Product }) {
  const isFree = product.price === 0;
  const [user, setUser] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState('');

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

  async function startDownload() {
    setDownloadError('');
    setDownloading(true);
    try {
      // Load the PDF generator only when requested so the download action is
      // isolated from initial page rendering and can surface any runtime error.
      const { downloadProductPdf: generatePdf } = await import('@/components/ProductPdf');
      generatePdf(product);
    } catch (error) {
      console.error('Marketly PDF download failed', error);
      setDownloadError('The PDF could not be generated in this browser. Please refresh and try again, or try another browser.');
    } finally {
      setDownloading(false);
    }
  }

  async function download() {
    if (downloading) return;
    setDownloadError('');
    if (!user) { loginFirst(); return; }
    if (isFree) {
      try {
        const saved = JSON.parse(localStorage.getItem('marketly_free_claims') || '[]');
        const claims = Array.isArray(saved) ? saved : [];
        if (!claims.includes(product.id)) claims.push(product.id);
        localStorage.setItem('marketly_free_claims', JSON.stringify(claims));
        setClaimed(true);
      } catch {
        setDownloadError('Your browser storage is blocked. Enable site storage, refresh, and try again.');
        return;
      }
      await startDownload();
      return;
    }
    if (!purchased) {
      window.location.href = '/premium?plan=' + (product.plan === 'forex' ? 'forex' : 'creator');
      return;
    }
    await startDownload();
  }

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <button type="button" className="button" onClick={download} disabled={downloading}>
        {!user ? <LockKeyhole size={17} /> : isFree || purchased ? <Download size={17} /> : <ShoppingBag size={17} />}
        {downloading ? 'Preparing PDF…' : !user ? 'Log in / Sign up to download' : isFree ? claimed ? 'Download PDF again' : 'Get free PDF' : purchased ? 'Download purchased PDF' : 'Unlock with ' + (product.plan === 'forex' ? 'Premium 2' : 'Premium 1')}
      </button>
      {downloadError && <p role="alert" style={{ color: '#c0392b', fontSize: 13, margin: 0 }}>{downloadError}</p>}
      {!user && <p className="muted" style={{ fontSize: 12, margin: 0 }}>An account is required before any download. Sign in or create a free account to continue.</p>}
      {user && isFree && <p className="muted" style={{ fontSize: 12, margin: 0 }}>{claimed ? 'This free PDF is in your browser-based library.' : 'Free resource — no payment required.'}</p>}
      {user && !isFree && !purchased && <p className="muted" style={{ fontSize: 12, margin: 0 }}>Choose the matching membership to access this premium resource.</p>}
      {claimed && isFree && <Link className="button secondary" href="/dashboard"><Gift size={16}/> Open my library</Link>}
      {purchased && !isFree && <Link className="button secondary" href="/dashboard"><CheckCircle2 size={16}/> Open my library</Link>}
    </div>
  );
}
