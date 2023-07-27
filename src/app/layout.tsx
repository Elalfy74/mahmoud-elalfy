import './globals.css';
import { Metadata } from 'next';
import { Outfit } from 'next/font/google';

import { Header, Footer } from '@/layouts';

const inter = Outfit({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mahmoud Elalfy',
  description: 'Junior Full-Stack Developer',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    type: 'website',
    title: 'Mahmoud Elalfy',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-9c41c.appspot.com/o/logo.png?alt=media&token=36da883f-4811-4d10-aefa-edebc23b3f3c',
        width: 1200,
        height: 627,
      },
    ],
    description: 'Junior Full-Stack Developer',
    url: 'https://mahmoud-elalfy.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
