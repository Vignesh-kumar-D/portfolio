import './globals.css';
import { Inter } from 'next/font/google';
// import { Header } from '@/components/layout/Header';
// import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio - D Vignesh Kumar',
  description:
    'Portfolio showcasing my experience as a Senior Frontend Engineer with expertise in React, Next.js, and modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
