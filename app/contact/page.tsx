import type { Metadata } from "next";
import ContactFormClient from "./ContactFormClient";

// 1. Custom SEO for the Contact Page
export const metadata: Metadata = {
  title: "Private Advisory",
  description: "Contact Cypress & Co. for acquisitions, dispositions, and exclusive access to our unlisted luxury portfolio.",
  openGraph: {
    title: "Private Advisory | Cypress & Co.",
    description: "Contact Cypress & Co. for acquisitions, dispositions, and exclusive access to our unlisted luxury portfolio.",
    images: ["/contact/hero.jpg"], // Uses the hero image for social sharing!
  },
};

// 2. The Server Page
export default function ContactPage() {
  return <ContactFormClient />;
}