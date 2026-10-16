import './globals.css';
import Navbar from '@/components/Navbar';
import CookieConsent from '@/components/CookieConsent';

export const metadata = {
  title: 'Marketly — Digital products, services & premium tools',
  description: 'Discover useful digital products, creator resources and creative services from a global marketplace.',
  applicationName: 'Marketly',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Marketly — Digital products, services & premium tools',
    description: 'Discover useful digital products, creator resources and creative services from a global marketplace.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>
    <Navbar />
    {children}
    <footer className="footer">
      <div className="wrap">
        <div className="row footerTop">
          <div><b>Marketly</b><div style={{ marginTop: 8 }}>Digital products. Real services. One marketplace.</div></div>
          <div className="footerLinks">
            <a href="/products">Marketplace</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms &amp; Conditions</a>
          </div>
        </div>
        <div className="footerBottom">© 2026 Marketly</div>
      </div>
    </footer>
    <CookieConsent />
  </>;
}
