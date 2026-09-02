import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Kodemik — Platform Kursus IT Terbaik Bahasa Indonesia',
  description: 'Learning Management System (LMS) IT terstruktur: Web Dev, Data Science, Mobile Dev, Cloud DevOps, Cybersecurity.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clientKey = process.env.MIDTRANS_CLIENT_KEY || 'SB-Mid-client-SampleSandboxKey2026';

  return (
    <html lang="id">
      <head>
        <Script
          type="text/javascript"
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={clientKey}
          strategy="lazyOnload"
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
