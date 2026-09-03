import Link from 'next/link';

type Plan = [string, string, string, string[]];

const plans: Plan[] = [
  ['Free', '$0', 'For exploring Marketly', ['Marketplace access', 'Digital library', 'Standard support']],
  ['Marketly Pro', '$9/mo', 'For creators & power users', ['Premium resources', 'Member-only drops', 'Priority support']],
  ['Creator Pro', '$19/mo', 'For professionals', ['Everything in Pro', 'Creator tools', 'Early access & perks']],
];

export default function Premium() {
  return (
    <main className="page">
      <div className="wrap">
        <h1 className="pageTitle">Premium, without the clutter.</h1>
        <p className="pageSub">Choose a membership built around how you use Marketly. Cancel anytime.</p>

        <div className="plans" style={{ marginTop: 42 }}>
          {plans.map((p, i) => (
            <div className={'plan ' + (i === 1 ? 'featured' : '')} key={p[0]}>
              <span className="pill">{i === 1 ? 'MOST POPULAR' : 'MEMBERSHIP'}</span>
              <h3>{p[0]}</h3>
              <div className="big">{p[1]}</div>
              <p style={{ color: '#8993a3' }}>{p[2]}</p>
              <ul className="list">
                {p[3].map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <Link href="/signup" className="button" style={{ width: '100%', marginTop: 20 }}>
                {i ? 'Choose plan' : 'Create account'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
