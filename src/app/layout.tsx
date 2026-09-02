import type { Metadata } from 'next';
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
  const clientKey = process.env.MIDTRANS_CLIENT_KEY || 'Mid-client-4HZcgl4RXOXZN9Fi';
  const isProduction = clientKey.startsWith('Mid-client-');
  const snapScriptUrl = isProduction
    ? 'https://app.midtrans.com/snap/snap.js'
    : 'https://app.sandbox.midtrans.com/snap/snap.js';

  return (
    <html lang="id">
      <head>
        <script
          type="text/javascript"
          src={snapScriptUrl}
          data-client-key={clientKey}
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
