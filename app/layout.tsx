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
  // NEW: metadataBase is crucial. It tells Next.js how to resolve relative links 
  // (like your image) into absolute URLs for social media scrapers.
  metadataBase: new URL("https://cypressandco.com"),

  title: {
    template: "%s | Cypress & Co.",
    default: "Cypress & Co. | Ultra-Prime Real Estate Advisory",
  },
  description: "Exclusive advisory for the acquisition and disposition of North America's most significant estates. Operating with absolute discretion.",
  
  // NEW: Keywords help search engines understand your niche
  keywords: ["ultra-prime real estate", "luxury real estate advisory", "legacy estates", "architectural homes", "private wealth real estate", "Cypress & Co"],

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

  // NEW: Dedicated Twitter/X card styling ensures the image stretches beautifully
  twitter: {
    card: "summary_large_image",
    title: "Cypress & Co. | Private Portfolio",
    description: "Operating at the intersection of architectural provenance and private wealth.",
    images: ["/glass-house-ext.jpg"],
  },

  // NEW: Explicitly tells Google and other bots that they are allowed to index this site
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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