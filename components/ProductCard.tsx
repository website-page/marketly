import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '@/lib/data';

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="card">
      <div
        className="productImg"
        style={{ backgroundImage: `url(${p.image})` }}
      />
      <div className="cardBody">
        <div className="row">
          <span className="pill">{p.category}</span>
          {p.tag && <span className="pill">{p.tag}</span>}
        </div>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="row">
          <span className="price">${p.price}</span>
          <Link className="button small" href={`/products/${p.id}`}>
            View <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
