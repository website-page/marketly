import Link from 'next/link';
import { ArrowUpRight, Gift } from 'lucide-react';
import { Product } from '@/lib/data';

export default function ProductCard({ p }: { p: Product }) {
  const isFree = p.price === 0;
  return (
    <article className="card">
      <div className="productImg productLogo" style={{ backgroundImage: `url(${p.image})` }} role="img" aria-label={`${p.title} logo`} />
      <div className="cardBody">
        <div className="row">
          <span className="pill">{p.category}</span>
          {p.tag && <span className="pill">{p.tag}</span>}
        </div>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="row">
          <span className="price">{isFree ? 'FREE' : `$${p.price}`}</span>
          <Link className="button small" href={`/products/${p.id}`}>
            {isFree ? <><Gift size={15}/> Get free</> : <>View <ArrowUpRight size={15}/></>}
          </Link>
        </div>
      </div>
    </article>
  );
}
