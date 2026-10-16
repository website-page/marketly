'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const CONSENT_KEY = 'marketly_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem(CONSENT_KEY) === null);
  }, []);

  function choose(value: 'accepted' | 'rejected') {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="cookieBanner" role="dialog" aria-label="Cookie preferences">
      <div className="cookieCopy">
        <strong>Your privacy matters</strong>
        <p>Marketly uses essential browser storage for core demo features. You can accept or reject optional cookies. Read our <Link href="/privacy-policy">Privacy Policy</Link>.</p>
      </div>
      <div className="cookieActions">
        <button type="button" className="button small outline" onClick={() => choose('rejected')}>Reject optional</button>
        <button type="button" className="button small" onClick={() => choose('accepted')}>Accept all</button>
      </div>
    </aside>
  );
}
