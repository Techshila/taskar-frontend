import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Title: Taskar - Your Trusted Online Pharmacy",
  description: "Taskar is your one-stop online destination for all your medication needs. Browse our wide selection of high-quality pharmaceutical products, conveniently delivered to your doorstep. Enjoy easy and secure shopping, coupled with exceptional customer service. Trust Taskar for all your healthcare essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
