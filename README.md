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


## Product PDF downloads

Each catalogue item has a product-specific PDF starter guide or worksheet generated in the visitor's browser. Download actions require the demo login UI; free items are claimed into browser storage. Paid entitlements are signed server-side after Flutterwave transaction verification, amount, currency and reference checks. FLW_SECRET_KEY must be configured in Vercel.

**Production limitation:** the current signup/login UI is still browser-storage demo authentication, not a secure persistent account system. Before accepting real payments at scale, connect database-backed authentication and persist purchases against the authenticated user. Some listings describe planned software concepts; their PDF is a guide/workbook, not the full software source bundle or a live AI/trading integration.
