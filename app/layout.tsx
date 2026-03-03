import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import AdvisoryInvitation from "@/components/AdvisoryInvitation";
import Navbar from "@/components/Navbar";

// 1. Loading the Google Fonts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
});

// 2. Setting the SEO & Browser Tab Data
export const metadata: Metadata = {
  title: {
    template: "%s | Cypress & Co.",
    default: "Cypress & Co. | Ultra-Prime Real Estate Advisory",
  },
  description: "Exclusive advisory for the acquisition and disposition of North America's most significant estates. Operating with absolute discretion.",
  openGraph: {
    title: "Cypress & Co. | Private Portfolio",
    description: "Operating at the intersection of architectural provenance and private wealth.",
    url: "https://cypressandco.com",
    siteName: "Cypress & Co.",
    images: [
      {
        url: "/glass-house-ext.jpg", // This image will show up in iMessage and LinkedIn!
        width: 1200,
        height: 630,
        alt: "Cypress & Co. Masterpiece",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// 3. The Master HTML Shell
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[var(--color-brand-offwhite)] text-[var(--color-brand-onyx)]">
        <SmoothScrolling>
          <Navbar />
          <AdvisoryInvitation />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}