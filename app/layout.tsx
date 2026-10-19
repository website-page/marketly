import './globals.css';
import Navbar from '@/components/Navbar';
import CookieConsent from '@/components/CookieConsent';

export const metadata = {
  title: 'Marketly — Digital products, services & premium tools',
  description: 'Discover useful digital products, creator resources and creative services from a global marketplace.',
  applicationName: 'Marketly',
  metadataBase: new URL('https://marketlyweb.vercel.app'),
  icons: { icon: '/icon.svg', shortcut: '/icon.svg', apple: '/icon.svg' },
  twitter: { card: 'summary_large_image', title: 'Marketly — Digital products, services & premium tools', description: 'Discover useful digital products, creator resources and creative services from a global marketplace.', images: ['/opengraph-image'] },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Marketly — Digital products, services & premium tools',
    description: 'Discover useful digital products, creator resources and creative services from a global marketplace.',
    type: 'website',
    url: 'https://marketlyweb.vercel.app',
    siteName: 'Marketly',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Marketly — Digital products. Real services. One marketplace.' }],
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
