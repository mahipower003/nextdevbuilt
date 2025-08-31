import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'NextDevBuild | Expert IT Services & Development Solutions',
    template: '%s | NextDevBuild'
  },
  description: 'Professional IT services including React/Next.js development, Java/Spring Boot backends, AWS cloud solutions, and specialized LIC insurance calculators.',
  keywords: 'Next.js development, React development, Java Spring Boot, AWS services, IT consulting, LIC calculators, web development',
  authors: [{ name: 'NextDevBuild Team' }],
  creator: 'NextDevBuild',
  publisher: 'NextDevBuild',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nextdevbuild.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nextdevbuild.com',
    siteName: 'NextDevBuild',
    title: 'NextDevBuild | Expert IT Services & Development Solutions',
    description: 'Professional IT services including React/Next.js development, Java/Spring Boot backends, AWS cloud solutions, and specialized LIC insurance calculators.',
    images: [
      {
        url: 'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg',
        width: 1200,
        height: 630,
        alt: 'NextDevBuild IT Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextDevBuild | Expert IT Services & Development Solutions',
    description: 'Professional IT services including React/Next.js development, Java/Spring Boot backends, AWS cloud solutions, and specialized LIC insurance calculators.',
    images: ['https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}