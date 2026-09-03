'use client';

import Link from 'next/link';
import { Download, Heart, ShoppingBag, Gift, Briefcase, UserRound } from 'lucide-react';
import { products } from '@/lib/data';
import { useEffect, useMemo, useState } from 'react';

type User = { name: string; email: string; country: string };

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [claims, setClaims] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('marketly_user');
      setUser(saved ? JSON.parse(saved) : null);
      setClaims(JSON.parse(localStorage.getItem('marketly_free_claims') || '[]'));
    } catch {}
  }, []);

  const claimedProducts = useMemo(() => products.filter(p => claims.includes(p.id)), [claims]);

  return <main className="page"><div className="wrap">
    <div className="row"><div><span className="eyebrow">Customer dashboard</span><h1 className="pageTitle">Welcome{user ? `, ${user.name.split(' ')[0]}` : ''}.</h1><p className="pageSub">Manage your Marketly account, free resources and future purchases.</p></div><Link href="/products" className="button">Browse marketplace</Link></div>
    <div className="statGrid"><div className="stat"><span>PURCHASES</span><b>0</b></div><div className="stat"><span>FREE CLAIMS</span><b>{claimedProducts.length}</b></div><div className="stat"><span>SUBSCRIPTION</span><b>Free</b></div><div className="stat"><span>WISHLIST</span><b>0</b></div></div>
    {!user && <div className="notice">You are viewing the dashboard as a guest. <Link href="/login">Log in</Link> to access your account.</div>}
    {user && <div className="feature" style={{marginTop:20}}><div><UserRound/><h3>{user.name}</h3><p>{user.email} · {user.country}</p></div><div><Briefcase/><h3>Services</h3><p>Free and professional service requests will appear here.</p></div><div><Heart/><h3>Wishlist</h3><p>Save products you want to revisit.</p></div></div>}
    <div style={{marginTop:44}}><div className="row"><div><h2>My free library</h2><p className="muted">Resources you have claimed from Marketly.</p></div><Gift size={22}/></div>{claimedProducts.length ? <div className="grid" style={{marginTop:20}}>{claimedProducts.map(p=><div className="card" key={p.id}><div className="productImg" style={{backgroundImage:`url(${p.image})`}}/><div className="cardBody"><span className="pill">FREE · CLAIMED</span><h3>{p.title}</h3><p>{p.description}</p><button className="button small" onClick={()=>alert('Demo V1: secure file delivery will be connected to private storage in the backend stage.')}><Download size={15}/> Download</button></div></div>)}</div> : <div className="notice" style={{marginTop:20}}>No free resources claimed yet. <Link href="/products">Explore the freebies →</Link></div>}</div>
    <div className="notice" style={{marginTop:28}}>Marketly V1 is currently using local demo account storage. Secure database authentication and protected digital downloads will be connected in the backend stage.</div>
  </div></main>;
}
