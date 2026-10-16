'use client';

import Link from 'next/link';
import { Download, Heart, ShoppingBag, Gift, Briefcase, UserRound } from 'lucide-react';
import { products } from '@/lib/data';
import { downloadProductPdf } from '@/components/ProductPdf';
import { useEffect, useMemo, useState } from 'react';

type User = { name: string; email: string; country: string };

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [claims, setClaims] = useState<string[]>([]);
  const [purchases, setPurchases] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('marketly_user');
      setUser(saved ? JSON.parse(saved) : null);
      setClaims(JSON.parse(localStorage.getItem('marketly_free_claims') || '[]'));
    } catch {}
    let active = true;
    fetch('/api/payments/entitlements', { cache: 'no-store' })
      .then((response) => response.ok ? response.json() : { products: [] })
      .then((data) => { if (active) setPurchases(Array.isArray(data.products) ? data.products : []); })
      .catch(() => { if (active) setPurchases([]); });
    return () => { active = false; };
  }, []);

  function handleDownload(p: (typeof products)[number]) {
    if (!user) {
      window.location.href = '/login?next=' + encodeURIComponent('/dashboard');
      return;
    }
    if (p.price === 0 && !claims.includes(p.id)) {
      alert('Please claim this free resource from its product page first.');
      window.location.href = '/products/' + p.id;
      return;
    }
    if (p.price > 0 && !purchases.includes(p.id)) {
      window.location.href = '/checkout?product=' + encodeURIComponent(p.id);
      return;
    }
    downloadProductPdf(p);
  }

  const claimedProducts = useMemo(() => products.filter(p => p.price === 0 && claims.includes(p.id)), [claims]);
  const purchasedProducts = useMemo(() => products.filter(p => p.price > 0 && purchases.includes(p.id)), [purchases]);

  return <main className="page"><div className="wrap">
    <div className="row"><div><span className="eyebrow">Customer dashboard</span><h1 className="pageTitle">Welcome{user ? ', ' + user.name.split(' ')[0] : ''}.</h1><p className="pageSub">Manage your Marketly account, free resources and purchases.</p></div><Link href="/products" className="button">Browse marketplace</Link></div>
    <div className="statGrid"><div className="stat"><span>PURCHASES</span><b>{purchasedProducts.length}</b></div><div className="stat"><span>FREE CLAIMS</span><b>{claimedProducts.length}</b></div><div className="stat"><span>SUBSCRIPTION</span><b>Free</b></div><div className="stat"><span>WISHLIST</span><b>0</b></div></div>
    {!user && <div className="notice">You are viewing the dashboard as a guest. <Link href="/login">Log in</Link> to access your library.</div>}
    {user && <div className="feature" style={{marginTop:20}}><div><UserRound/><h3>{user.name}</h3><p>{user.email} · {user.country}</p></div><div><Briefcase/><h3>Services</h3><p>Free and professional service requests will appear here.</p></div><div><Heart/><h3>Wishlist</h3><p>Save products you want to revisit.</p></div></div>}
    <section style={{marginTop:44}}><div className="row"><div><h2>My free library</h2><p className="muted">Free PDFs you have claimed from Marketly.</p></div><Gift size={22}/></div>
      {claimedProducts.length ? <div className="grid" style={{marginTop:20}}>{claimedProducts.map(p=><div className="card" key={p.id}><div className="productImg" style={{backgroundImage:'url(' + p.image + ')'}}/><div className="cardBody"><span className="pill">FREE · CLAIMED</span><h3>{p.title}</h3><p>{p.description}</p><button className="button small" onClick={()=>handleDownload(p)}><Download size={15}/> Download PDF</button></div></div>)}</div> : <div className="notice" style={{marginTop:20}}>No free resources claimed yet. <Link href="/products">Explore the freebies →</Link></div>}
    </section>
    <section style={{marginTop:44}}><div className="row"><div><h2>My purchases</h2><p className="muted">Paid product PDFs available in this browser demo after checkout verification.</p></div><ShoppingBag size={22}/></div>
      {purchasedProducts.length ? <div className="grid" style={{marginTop:20}}>{purchasedProducts.map(p=><div className="card" key={p.id}><div className="productImg" style={{backgroundImage:'url(' + p.image + ')'}}/><div className="cardBody"><span className="pill">PURCHASED</span><h3>{p.title}</h3><p>{p.description}</p><button className="button small" onClick={()=>downloadProductPdf(p)}><Download size={15}/> Download PDF</button></div></div>)}</div> : <div className="notice" style={{marginTop:20}}>No paid products available yet. <Link href="/products">Browse premium products →</Link></div>}
    </section>
    <div className="notice" style={{marginTop:28}}>Important: Marketly still uses demo browser storage for accounts and purchase history. Production-grade account security and server-side purchase entitlements must be connected before treating paid downloads as protected.</div>
  </div></main>;
}
