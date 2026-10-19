import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LINENORA — Heritage Egyptian Linen & Nile Delta Atelier | Coming Soon',
  description: "Authentic 100% Egyptian flax bedding, architectural drapery, and bespoke home textiles. Grown along the fertile Nile Delta and woven on heritage looms. Opening soon.",
  keywords: ['egyptian linen', 'nile delta flax', 'egyptian flax bedding', 'luxury linen curtains', 'bespoke egyptian textiles', 'organic linen'],
  openGraph: {
    title: 'LINENORA — Authentic Egyptian Linen & Nile Delta Atelier',
    description: 'Rooted in 5,000 years of textile mastery. Pure, breathable Egyptian linen direct from our looms.',
    images: ['/images/hero-drapes.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${plusJakartaSans.variable}`}>
      <body>
        <div className="texture-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
