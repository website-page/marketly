import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/lib/data';
import { paidProductsCookieName, readPaidProductIds, signPaidProductIds } from '@/lib/paid-entitlements';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('transaction_id');
  const txRef = req.nextUrl.searchParams.get('tx_ref');
  const key = process.env.FLW_SECRET_KEY;
  const fail = (reason: string) => NextResponse.redirect(new URL('/checkout?status=' + reason, req.url));

  if (!id || !txRef || !key) return fail(!key ? 'not-configured' : 'missing');

  // The product ID is between the fixed prefix and the final timestamp.
  const match = txRef.match(/^marketly-(.+)-(\d+)$/);
  if (!match) return fail('invalid-reference');
  const productId = match[1];
  const product = products.find((item) => item.id === productId && item.price > 0);
  if (!product) return fail('invalid-product');

  try {
    const response = await fetch('https://api.flutterwave.com/v3/transactions/' + encodeURIComponent(id) + '/verify', {
      headers: { Authorization: 'Bearer ' + key },
      cache: 'no-store',
    });
    const result = await response.json();
    const data = result?.data;
    const paidAmount = Number(data?.charged_amount ?? data?.amount);
    const expectedAmount = Number(product.price);
    const valid = response.ok
      && result?.status === 'success'
      && data?.status === 'successful'
      && data?.tx_ref === txRef
      && data?.currency === product.currency
      && Number.isFinite(paidAmount)
      && paidAmount >= expectedAmount;

    if (!valid) return fail('failed');

    const previous = readPaidProductIds(req.cookies.get(paidProductsCookieName)?.value, key);
    const signedEntitlements = signPaidProductIds([...previous, product.id], key);
    const target = new URL('/dashboard?payment=success', req.url);
    const redirect = NextResponse.redirect(target);
    redirect.cookies.set(paidProductsCookieName, signedEntitlements, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });
    return redirect;
  } catch {
    return fail('verification-error');
  }
}
