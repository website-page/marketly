'use client';

import Link from 'next/link';
import { Search, Sparkles, ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/data';
import { useMemo, useState } from 'react';

export default function Services() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => services.filter(([title, desc, price]) => `${title} ${desc} ${price}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const free = filtered.filter(([, , price]) => price === 'FREE');
  const paid = filtered.filter(([, , price]) => price !== 'FREE');

  return (
    <main className="page"><div className="wrap">
      <span className="eyebrow">Work with creators</span>
      <h1 className="pageTitle">Services that move you forward.</h1>
      <p className="pageSub">Get professional digital help or start with one of Marketly's free community services.</p>
      <label className="label" style={{marginTop:28,position:'relative'}}><Search size={17} style={{position:'absolute',left:14,bottom:14}}/><input className="input" style={{paddingLeft:42}} value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search services..." aria-label="Search services"/></label>
      {free.length > 0 && <><div className="notice" style={{marginTop:28,display:'flex',alignItems:'center',gap:12}}><Sparkles size={20}/><span><b>Free community services</b> — start without paying.</span></div><div className="grid" style={{marginTop:20}}>{free.map(([title,desc])=><ServiceCard key={title} title={title} desc={desc} price="FREE" free />)}</div></>}
      {paid.length > 0 && <><h2 style={{marginTop:52}}>Professional services</h2><div className="grid" style={{marginTop:20}}>{paid.map(([title,desc,price])=><ServiceCard key={title} title={title} desc={desc} price={price} />)}</div></>}
      {!filtered.length && <div className="notice" style={{marginTop:24}}>No services matched your search.</div>}
    </div></main>
  );
}

function ServiceCard({title,desc,price,free=false}:{title:string;desc:string;price:string;free?:boolean}) {
  return <div className="card"><div className="cardBody"><span className="pill">{free ? 'FREE SERVICE' : 'CREATIVE SERVICE'}</span><h3>{title}</h3><p>{desc}</p><div className="row"><b>{price}</b><Link href={`/signup?service=${encodeURIComponent(title)}`} className="button small">{free ? 'Request free' : 'Start enquiry'} <ArrowUpRight size={15}/></Link></div></div></div>;
}
