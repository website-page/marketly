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

  const visible = useMemo(() => products.filter(p => {
    const text = `${p.title} ${p.description} ${p.category}`.toLowerCase();
    const matchesQuery = text.includes(query.toLowerCase());
    const matchesFilter = filter === 'All' || (filter === 'Free' ? p.price === 0 : p.category === filter);
    return matchesQuery && matchesFilter;
  }), [query, filter]);

  return (
    <main className="page">
      <div className="wrap">
        <span className="eyebrow">Digital marketplace</span>
        <h1 className="pageTitle">Find the tool you need.</h1>
        <p className="pageSub">Start with free resources. Paid downloads are specialist workbooks and practical systems with a clear purpose—not claims of exclusive AI access.</p>
        <div className="notice" style={{marginTop:28,display:'flex',alignItems:'center',gap:12}}><Sparkles size={20}/><span><b>{free.length} free resources</b> are available to explore — no payment required.</span></div>
        <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) auto',gap:12,marginTop:28}}>
          <label className="label" style={{margin:0,position:'relative'}}><Search size={17} style={{position:'absolute',left:14,bottom:14}}/><input className="input" style={{paddingLeft:42}} value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search CV, invoice, forex, content..." aria-label="Search products"/></label>
          <select className="select" value={filter} onChange={e=>setFilter(e.target.value)} aria-label="Filter products">{categories.map(c=><option key={c}>{c}</option>)}</select>
        </div>
        {filter === 'All' && !query && <>
          <h2 style={{marginTop:46}}>Free downloads</h2>
          <p className="muted">Try these first. No payment required.</p>
          <div className="grid" style={{marginTop:20}}>{free.map(p=><ProductCard key={p.id} p={p}/>)}</div>
          <h2 style={{marginTop:56}}>Specialist paid workbooks</h2>
          <p className="muted">Focused resources for workflows that benefit from structure, review and repeat use.</p>
        </>}
        <div className="grid" style={{marginTop:20}}>{visible.filter(p => !(filter === 'All' && !query && p.price === 0)).map(p=><ProductCard key={p.id} p={p}/>)}</div>
        {!visible.length && <div className="notice" style={{marginTop:24}}>No products matched your search.</div>}
      </div>
    </main>
  );
}
