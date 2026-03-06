import type { Metadata } from "next";
import AdvisorsClient from "./AdvisorsClient";

// 1. Custom SEO for the Advisors Page
export const metadata: Metadata = {
  title: "Our Advisors",
  description: "Connect with Cypress & Co.'s managing partners to discuss your portfolio requirements in strict confidence. Absolute experts in the global ultra-prime market.",
  openGraph: {
    title: "Our Advisors | Cypress & Co.",
    description: "Connect with Cypress & Co.'s managing partners to discuss your portfolio requirements in strict confidence.",
    // You can point this to a specific team photo if you have one, or fallback to the hero
    images: ["/hero-landing.jpg"], 
  },
};

// 2. The Server Page
export default function AdvisorsPage() {
  return <AdvisorsClient />;
}