import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { METADATA, PUBLIC_URL } from '@/const';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_URL),
  title: METADATA.title,
  description: METADATA.description,
  // keywords: METADATA.keywords,
  authors: [{ name: METADATA.author }],
  // manifest: METADATA.manifest,
  icons: [
    {
      url: METADATA.apple_touch_icon,
      type: 'apple-touch-icon',
      sizes: '180x180',
      rel: 'apple-touch-icon',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: METADATA.favicon_32x32,
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: METADATA.favicon_16x16,
    },
    { rel: 'icon', url: METADATA.icon },
    { rel: 'manifest', url: METADATA.web_manifest },
  ],
  openGraph: {
    title: METADATA.title,
    description: METADATA.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
