import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/lib/data';
import { paidProductsCookieName, readPaidProductIds } from '@/lib/paid-entitlements';

export async function GET(req: NextRequest) {
  const secret = process.env.FLW_SECRET_KEY;
  if (!secret) return NextResponse.json({ products: [] }, { headers: { 'Cache-Control': 'no-store' } });
  const stored = readPaidProductIds(req.cookies.get(paidProductsCookieName)?.value, secret);
  const valid = stored.filter((id) => products.some((product) => product.id === id && product.price > 0));
  return NextResponse.json({ products: valid }, { headers: { 'Cache-Control': 'no-store' } });
}
