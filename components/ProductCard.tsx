import Link from 'next/link';
import { ArrowUpRight, Gift, LockKeyhole } from 'lucide-react';
import { Product } from '@/lib/data';

export default function ProductCard({ p }: { p: Product }) {
  const isFree = p.price === 0;
  const premiumLabel = p.plan === 'forex' ? 'Premium 2 · Forex' : 'Premium 1';
  return (
    <article className="card">
      <div className="productImg productLogo"><img src={p.image} alt={`${p.title} logo`} /></div>
      <div className="cardBody">
        <div className="row">
          <span className="pill">{p.category}</span>
          {p.tag && <span className="pill">{p.tag}</span>}
          {!isFree && <span className="pill">{premiumLabel}</span>}
        </div>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="row">
          <span className="price">{isFree ? 'FREE' : 'PREMIUM'}</span>
          <Link className="button small" href={isFree ? `/products/${p.id}` : `/premium?plan=${p.plan === 'forex' ? 'forex' : 'creator'}`}>
            {isFree ? <><Gift size={15}/> Get free</> : <><LockKeyhole size={15}/> View plan <ArrowUpRight size={15}/></>}
          </Link>
        </div>
      </div>
    </article>
  );
}
