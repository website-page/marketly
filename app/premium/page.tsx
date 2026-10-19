import Link from 'next/link';
import { ArrowRight, LockKeyhole, TrendingUp, Sparkles } from 'lucide-react';

export default function Premium() {
  return (
    <main className="page">
      <div className="wrap">
        <span className="eyebrow"><Sparkles size={14}/> Marketly memberships</span>
        <h1 className="pageTitle">Choose your premium access.</h1>
        <p className="pageSub">Paid products are grouped into two membership tracks. Creator and business resources belong to Premium 1; Forex education and trading-study tools belong to Premium 2.</p>
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
            <Link href="/signup" className="button" style={{width:'100%',marginTop:20}}>Continue to Premium 1 <ArrowRight size={16}/></Link>
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
            <Link href="/signup" className="button outline" style={{width:'100%',marginTop:20}}>Continue to Premium 2 <ArrowRight size={16}/></Link>
          </section>
        </div>
        <div className="notice" style={{marginTop:24}}>
          <b>Membership checkout is not yet connected.</b> These buttons currently lead to account creation; they do not activate a paid subscription. Do not enter payment details until subscription billing is connected and tested.
        </div>
      </div>
    </main>
  );
}
