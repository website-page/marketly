import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import ProductDetailActions from '@/components/ProductDetailActions';

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = products.find((item) => item.id === id);
  if (!p) return notFound();

  return (
    <main className="page">
      <div className="wrap productDetailLayout">
        <div
          className="productImg productDetailImage"
          role="img"
          aria-label={`Preview image for ${p.title}`}
          style={{ backgroundImage: `url(${p.image})` }}
        />
        <div>
          <span className="pill">{p.category}</span>
          <h1 className="pageTitle productDetailTitle">{p.title}</h1>
          <p className="pageSub">{p.description}</p>
          <div style={{ fontSize: 36, fontWeight: 800, margin: '28px 0' }}>
            {p.price === 0 ? 'Free' : `$${p.price.toFixed(2)}`}
          </div>
          <ProductDetailActions id={p.id} price={p.price} />
          <div className="notice" style={{ marginTop: 20 }}>
            {p.price === 0
              ? 'Claiming a free resource adds it to the demo library in this browser. Download delivery will be enabled when secure file storage is connected.'
              : 'Digital delivery should only be granted after successful server-side payment verification.'}
          </div>
        </div>
      </div>
    </main>
  );
}
