import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: {
    default: 'NextDevBuild | AI Workflow Engineering',
    template: '%s | NextDevBuild',
  },
  description:
    'We help businesses identify repetitive financial and operational workflows, then design and build AI-powered systems to automate them.',
  keywords:
    'AI workflow automation, business process automation, AI engineering, financial automation, operational efficiency, enterprise automation',
  authors: [{ name: 'Mahesh Chaube' }],
  creator: 'NextDevBuild',
  publisher: 'NextDevBuild',
  metadataBase: new URL('https://nextdevbuild.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nextdevbuild.com',
    siteName: 'NextDevBuild',
    title: 'NextDevBuild | AI Workflow Engineering',
    description:
      'We help businesses identify repetitive financial and operational workflows, then design and build AI-powered systems to automate them.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextDevBuild | AI Workflow Engineering',
    description:
      'We help businesses identify repetitive financial and operational workflows, then design and build AI-powered systems to automate them.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} antialiased bg-[#0B0B12]`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}