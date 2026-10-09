import PortfolioFooter from "@/components/PortfolioFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Protocol",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy", images: ["/og-image.png"] },
};

export default function PrivacyPage() {
  return (
    <main className="w-full bg-[var(--color-brand-offwhite)]">
      <section data-theme="light" className="w-full pt-48 pb-32 px-12 max-w-[1000px] mx-auto">
        <span className="text-[var(--color-brand-onyx)] font-sans text-xs uppercase tracking-widest font-bold mb-8 block">
          Legal & Discretion
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-[var(--color-brand-onyx)] leading-tight mb-16">
          Privacy Protocol
        </h1>
        
        <div className="flex flex-col gap-12 text-lg md:text-xl text-[var(--color-brand-charcoal)] font-light leading-relaxed font-sans">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-onyx)] mb-4">1. Information Architecture</h2>
            <p>Cypress & Co. adheres to the strictest global standards of data privacy. All client identities, financial vetting documents, and viewing schedules are stored offline or within encrypted, air-gapped environments. We do not sell, distribute, or broker your personal information to third-party entities.</p>
          </div>
          
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-onyx)] mb-4">2. Digital Footprint & Cookies</h2>
            <p>This platform utilizes essential session tokens strictly to maintain your viewing state across the portfolio. We employ zero invasive tracking pixels or retargeting architecture. Your browsing session remains strictly between you and our servers.</p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-onyx)] mb-4">3. Non-Disclosure Agreements (NDA)</h2>
            <p>Access to the Private Vault and specific structural dossiers requires a mutually executed NDA. Information disclosed under an NDA supersedes this general privacy protocol and is subject to bespoke legal parameters.</p>
          </div>
        </div>
      </section>
      <PortfolioFooter />
    </main>
  );
}