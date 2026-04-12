import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alphabet Social — Premium E-Commerce Marketing Agency",
    template: "%s | Alphabet Social",
  },
  description:
    "Results-driven marketing for established e-commerce brands. Paid social, email, organic, Shopify optimisation and strategy. R350M+ revenue generated.",
  metadataBase: new URL("https://alphabetsocial.co.za"),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Alphabet Social",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
