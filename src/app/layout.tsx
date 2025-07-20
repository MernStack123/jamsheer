import type { Metadata } from 'next';
import {
  Manrope,
  Montserrat,
  Oswald,
  Oxygen,
  Playfair,
  Roboto,
} from 'next/font/google';
import '../styles/globals.css';
import '../styles/ham.css';
import { cn } from '@/lib/utils';
import Providers from './Providers';

export const metadata: Metadata = {
  title: 'Jamsheer | Professional Photographer & Videographer',
  description:
    'Explore the creative world of Jamsheer – a passionate photographer and videographer capturing timeless moments, cinematic visuals, and stunning stories through the lens. Specializing in weddings, events, portraits, and commercial shoots.',
  icons: [{ rel: 'icon', url: '/images/favicon.ico' }],
  keywords: [
    'Jamsheer',
    'photographer',
    'videographer',
    'wedding photography',
    'cinematic videography',
    'professional photography',
    'event videographer',
    'portrait photography',
    'commercial videography',
    'creative photographer',
    'video production',
    'wedding films',
    'visual storytelling',
    'Jamsheer portfolio',
  ],
};

const oxygen = Oxygen({
  subsets: ['latin'],
  variable: '--font-oxygen',
  weight: ['400'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '600', '700', '800'],
});

const playfair = Playfair({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'theme-custom flex min-h-screen antialiased',
          oxygen.variable,
          manrope.variable,
          montserrat.variable,
          oswald.variable,
          roboto.variable,
          playfair.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
