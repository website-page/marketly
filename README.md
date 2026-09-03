# Marketly V1

Global digital marketplace starter built with Next.js App Router.

## Run locally

```bash
npm install
npm run dev
```

## Vercel environment variables

- `NEXT_PUBLIC_FLW_PUBLIC_KEY` — Flutterwave public key.
- `FLW_SECRET_KEY` — Flutterwave secret key. Never expose this in client code or GitHub.
- `FLW_WEBHOOK_HASH` — webhook verification secret/hash.
- `DATABASE_URL` — production Postgres connection for users, products, orders, subscriptions and downloads.
- `NEXT_PUBLIC_APP_URL` — deployed Marketly URL.

The V1 UI is deployable now. Persistent authentication/database fulfillment still needs to be connected before accepting real orders. Payment fulfillment must remain server-side and should verify transaction status, amount, currency and reference before granting a download.
