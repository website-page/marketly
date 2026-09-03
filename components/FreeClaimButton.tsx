'use client';

import { Gift } from 'lucide-react';

export default function FreeClaimButton({ productId }: { productId: string }) {
  function claim() {
    const saved = localStorage.getItem('marketly_user');
    if (!saved) {
      window.location.href = `/signup?claim=${encodeURIComponent(productId)}`;
      return;
    }
    const claims = JSON.parse(localStorage.getItem('marketly_free_claims') || '[]');
    if (!claims.includes(productId)) claims.push(productId);
    localStorage.setItem('marketly_free_claims', JSON.stringify(claims));
    window.location.href = '/dashboard';
  }

  return <button onClick={claim} className="button"><Gift size={17}/> Get for free</button>;
}
