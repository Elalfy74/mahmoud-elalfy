import './globals.css';
import { Outfit } from 'next/font/google';

import { Header, Footer } from '@/layouts';

const inter = Outfit({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Mahmoud Elalfy',
  description: 'Junior Full-Stack Developer',
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
