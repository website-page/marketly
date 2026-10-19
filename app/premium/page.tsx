import Link from 'next/link';
import { ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

function PricingLinks({ plan }: { plan: 'creator' | 'forex' }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, marginTop: 22 }}>
      <div className="card" style={{ padding: 16 }}>
        <span className="eyebrow">MONTHLY</span>
        <div style={{ fontSize: 30, fontWeight: 750, margin: '8px 0 14px' }}>
          {plan === 'creator' ? '$4' : '$9'}<span style={{ fontSize: 14, fontWeight: 400, color: '#8993a3' }}>/month</span>
        </div>
        <Link href={`/signup?plan=${plan}&billing=monthly`} className="button" style={{ width: '100%' }}>
          Choose monthly <ArrowRight size={16} />
        </Link>
      </div>
      <div className="card" style={{ padding: 16, border: '1px solid rgba(255,255,255,.22)' }}>
        <span className="eyebrow">YEARLY</span>
        <div style={{ fontSize: 30, fontWeight: 750, margin: '8px 0 14px' }}>
          {plan === 'creator' ? '$30' : '$60'}<span style={{ fontSize: 14, fontWeight: 400, color: '#8993a3' }}>/year</span>
        </div>
        <Link href={`/signup?plan=${plan}&billing=yearly`} className="button outline" style={{ width: '100%' }}>
          Choose yearly <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default function Premium() {
  return (
    <main className="page">
      <div className="wrap">
        <span className="eyebrow"><Sparkles size={14}/> Marketly memberships</span>
        <h1 className="pageTitle">Choose your premium access.</h1>
        <p className="pageSub">Sign in or create your Marketly account first, then choose a billing period. Premium 1 covers creator and business resources; Premium 2 covers Forex education and chart-study tools.</p>
        <div className="plans" style={{ marginTop: 42 }}>
          <section className="plan featured">
            <span className="pill">PREMIUM 1</span>
            <h2>Creator &amp; Business</h2>
            <p style={{color:'#8993a3'}}>For creators, developers, designers and business builders.</p>
            <ul className="list">
              <li>Creator courses and content systems</li>
              <li>Developer kits and project courses</li>
              <li>Brand, business and UI planning workbooks</li>
              <li>Premium creator tools and workflows</li>
            </ul>
            <PricingLinks plan="creator" />
          </section>
          <section className="plan">
            <span className="pill">PREMIUM 2</span>
            <h2><TrendingUp size={22} style={{display:'inline',verticalAlign:'middle',marginRight:8}}/>Forex Study</h2>
            <p style={{color:'#8993a3'}}>For structured forex education and chart-study practice.</p>
            <ul className="list">
              <li>Forex chart study workbook</li>
              <li>Risk and position-size learning resources</li>
              <li>Chart review and backtest planning tools</li>
              <li>Education only—no trading signals or profit promises</li>
            </ul>
            <PricingLinks plan="forex" />
          </section>
        </div>
        <div className="notice" style={{marginTop:24}}>
          <b>Pricing is displayed; membership checkout is still being connected.</b> The buttons pass the selected plan and billing period to account creation. They do not charge you or activate a membership yet. Payment verification, database-backed activation and protected downloads must be completed and tested before launch.
        </div>
      </div>
    </main>
  );
}
