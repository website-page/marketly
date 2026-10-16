export const metadata = {
  title: 'Privacy Policy | Marketly',
  description: 'Learn how Marketly handles account details, browser storage and privacy choices.',
};

export default function PrivacyPolicy() {
  return (
    <main className="page"><article className="wrap legalPage">
      <span className="eyebrow">Marketly policies</span>
      <h1 className="pageTitle">Privacy Policy</h1>
      <p className="pageSub">Last updated: 16 October 2026</p>
      <p>This page explains the intended privacy practices for the current Marketly V1 demonstration. It is general information, not legal advice. Before a public commercial launch, this policy should be reviewed and adapted to the business, its actual vendors, and the laws that apply to its users.</p>
      <h2>Information you provide</h2>
      <p>The current demo signup form asks for your name, email address and selected country. In this V1 build, those demo account details are stored in your browser using local storage; the form does not yet create a secure server-side account. Do not use a real or sensitive password in this demo.</p>
      <h2>Browser storage and cookie choices</h2>
      <p>Marketly uses browser storage for demo account state, free-resource claims and your cookie preference. The cookie-choice banner records whether you accepted or rejected optional cookies. The current demo does not activate an analytics or advertising cookie service. If optional third-party services are added later, they should be disclosed here and controlled according to applicable consent requirements.</p>
      <h2>Payments and digital products</h2>
      <p>Payment processing is not described as active unless a supported payment provider is actually integrated. If payment providers are added, they may process payment details under their own privacy terms. Marketly should not store full card details.</p>
      <h2>Sharing and retention</h2>
      <p>The current demo does not send the browser-stored demo account information to a Marketly database. A future production service may use hosting, email, security, payment and storage providers; this policy must be updated before those integrations are enabled. Browser data can be removed by clearing this site's stored data in your browser.</p>
      <h2>Children's privacy</h2>
      <p>Marketly is not designed to knowingly collect personal information from children in violation of applicable law. A production version should publish appropriate age and guardian requirements where required.</p>
      <h2>Your choices and contact</h2>
      <p>You can reject optional cookies in the consent banner and clear local site data in your browser settings. Add a monitored business contact email here before launch so users can submit privacy requests.</p>
    </article></main>
  );
}
