'use client';

import Link from 'next/link';
import { BarChart3, Package, Users, CreditCard, Gift, Briefcase, ArrowUpRight } from 'lucide-react';
import { products, services } from '@/lib/data';
import { useEffect, useState } from 'react';

export default function Admin() {
  const [customer, setCustomer] = useState<{name:string;email:string;country:string} | null>(null);
  const [claims, setClaims] = useState<string[]>([]);
  useEffect(() => {
    try { setCustomer(JSON.parse(localStorage.getItem('marketly_user') || 'null')); setClaims(JSON.parse(localStorage.getItem('marketly_free_claims') || '[]')); } catch {}
  }, []);
  const freeProducts = products.filter(p => p.price === 0);
  const paidProducts = products.filter(p => p.price > 0);
  const freeServices = services.filter(([, , price]) => price === 'FREE');

  return <main className="page"><div className="wrap">
    <span className="eyebrow">Private administration</span><div className="row"><h1 className="pageTitle">Marketly Control.</h1><span className="pill">V1 ADMIN UI</span></div>
    <div className="statGrid"><div className="stat"><Users/><span>CUSTOMERS</span><b>{customer ? 1 : 0}</b></div><div className="stat"><Package/><span>PRODUCTS</span><b>{products.length}</b></div><div className="stat"><Gift/><span>FREE RESOURCES</span><b>{freeProducts.length}</b></div><div className="stat"><CreditCard/><span>REVENUE</span><b>$0</b></div></div>
    <div className="feature" style={{marginTop:20}}><div><BarChart3/><h3>Marketplace</h3><p>{paidProducts.length} paid products currently listed.</p><Link href="/products" className="muted">Manage catalog <ArrowUpRight size={14}/></Link></div><div><Gift/><h3>Free resources</h3><p>{freeProducts.length} free products and {freeServices.length} free services.</p></div><div><Briefcase/><h3>Services</h3><p>{services.length} service offerings are available.</p></div></div>
    <div className="card" style={{padding:20,marginTop:24}}><h3>Recent demo activity</h3><table className="table"><thead><tr><th>Event</th><th>Status</th><th>Details</th></tr></thead><tbody>{customer ? <tr><td>Customer signup</td><td>Active</td><td>{customer.name} · {customer.country}</td></tr> : <tr><td>No demo activity yet</td><td>Waiting</td><td>—</td></tr>}{claims.length > 0 && <tr><td>Free resource claims</td><td>Active</td><td>{claims.length} claimed</td></tr>}</tbody></table></div>
    <div className="notice" style={{marginTop:20}}>This V1 admin board reads demo browser data. Before launch, it must be replaced with server-side admin authentication, database records and real order/payment analytics.</div>
  </div></main>;
}
