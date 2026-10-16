'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Gift, ShoppingBag, CheckCircle2 } from 'lucide-react';

export default function ProductDetailActions({ id, price }: { id: string; price: number }) {
  const isFree = price === 0;
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    try {
      const claims = JSON.parse(localStorage.getItem('marketly_free_claims') || '[]');
      setClaimed(Array.isArray(claims) && claims.includes(id));
    } catch {
      setClaimed(false);
    }
  }, [id]);

  function claimFreeProduct() {
    try {
      const stored = JSON.parse(localStorage.getItem('marketly_free_claims') || '[]');
      const claims = Array.isArray(stored) ? stored : [];
      if (!claims.includes(id)) claims.push(id);
      localStorage.setItem('marketly_free_claims', JSON.stringify(claims));
      setClaimed(true);
      window.location.href = '/dashboard';
    } catch {
      alert('Your browser could not save this free resource. Please enable site storage and try again.');
    }
  }

  if (isFree) {
    return (
      <div style={{ display: 'grid', gap: 12 }}>
        <button type="button" className="button" onClick={claimFreeProduct}>
          {claimed ? <><CheckCircle2 size={17} /> Open my free library</> : <><Gift size={17} /> Get this free resource</>}
        </button>
        <p className="muted" style={{ fontSize: 12, margin: 0 }}>Free claim is saved in this browser for the current Marketly demo.</p>
      </div>
    );
  }

  return <Link href={`/checkout?product=${id}`} className="button"><ShoppingBag size={17} /> Buy securely</Link>;
}
