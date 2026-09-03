'use client';

import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';
import { Search, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function Products() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Free', ...Array.from(new Set(products.filter(p => p.price > 0).map(p => p.category)))];
  const free = products.filter(p => p.price === 0);
  const paid = products.filter(p => p.price > 0);

  const visible = useMemo(() => products.filter(p => {
    const text = `${p.title} ${p.description} ${p.category}`.toLowerCase();
    const matchesQuery = text.includes(query.toLowerCase());
    const matchesFilter = filter === 'All' || (filter === 'Free' ? p.price === 0 : p.category === filter);
    return matchesQuery && matchesFilter;
  }), [query, filter]);

  const showLandingSections = filter === 'All' && !query;
  const displayed = showLandingSections ? paid : visible;

  return (
    <main className="page">
      <div className="wrap">
        <span className="eyebrow">Digital marketplace</span>
        <h1 className="pageTitle">Find something useful.</h1>
        <p className="pageSub">Premium resources, practical Nigerian freebies and digital tools for creators, developers, entrepreneurs and growing brands.</p>
        <div className="notice" style={{marginTop:28,display:'flex',alignItems:'center',gap:12}}><Sparkles size={20}/><span><b>{free.length} free resources</b> are available to explore — no payment required.</span></div>
        <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) auto',gap:12,marginTop:28}}>
          <label className="label" style={{margin:0,position:'relative'}}><Search size={17} style={{position:'absolute',left:14,bottom:14}}/><input className="input" style={{paddingLeft:42}} value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products, tools, templates..." aria-label="Search products"/></label>
          <select className="select" value={filter} onChange={e=>setFilter(e.target.value)} aria-label="Filter products">{categories.map(c=><option key={c}>{c}</option>)}</select>
        </div>
        {showLandingSections && <>
          <h2 style={{marginTop:46}}>Free for the community</h2>
          <p className="muted">Useful starter resources for students, job seekers, freelancers, creators and small businesses.</p>
          <div className="grid" style={{marginTop:20}}>{free.map(p=><ProductCard key={p.id} p={p}/>)}</div>
          <h2 style={{marginTop:56}}>Premium marketplace</h2>
        </>}
        <div className="grid" style={{marginTop:20}}>{displayed.map(p=><ProductCard key={p.id} p={p}/>)}</div>
        {!displayed.length && <div className="notice" style={{marginTop:24}}>No products matched your search.</div>}
      </div>
    </main>
  );
}
