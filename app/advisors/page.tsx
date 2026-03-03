"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PortfolioFooter from "@/components/PortfolioFooter";

// The Advisors Database
const advisors = [
  {
    name: "Elias Kensington",
    title: "Founding Partner & Head of Private Clients",
    phone: "+1 (212) 555-0198",
    email: "elias@cypress.co",
    image: "/elias.jpg"
  },
  {
    name: "Julian Thorne",
    title: "Director of Architectural Estates",
    phone: "+1 (212) 555-0199",
    email: "julian@cypress.co",
    image: "/julian.jpg"
  },
  {
    name: "Victoria Sterling",
    title: "Head of International Acquisitions",
    phone: "+44 20 7946 0958",
    email: "victoria@cypress.co",
    image: "/elias.jpg" // Using placeholder image for now
  },
  {
    name: "Marcus Vance",
    title: "Private Wealth Liaison",
    phone: "+971 4 332 9000",
    email: "marcus@cypress.co",
    image: "/julian.jpg" // Using placeholder image for now
  }
];

export default function AdvisorsPage() {
  return (
    <main className="w-full bg-[var(--color-brand-offwhite)]">
      
      {/* 1. THE HERO SECTION */}
      <section data-theme="light" className="relative w-full pt-48 pb-32 px-12 flex flex-col items-center justify-center text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[var(--color-brand-muted)] font-sans text-sm uppercase tracking-[0.3em] mb-8 block"
        >
          The Advisors
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-6xl md:text-[90px] text-[var(--color-brand-onyx)] leading-none mb-10 max-w-5xl mx-auto"
        >
          Discretion is our greatest asset.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-xl md:text-2xl text-[var(--color-brand-charcoal)] leading-relaxed font-light max-w-3xl mx-auto"
        >
          Our partners are absolute experts in navigating the complexities of the global ultra-prime market, operating strictly off-market to protect your privacy and your leverage.
        </motion.p>
      </section>

      {/* 2. THE EDITORIAL GRID */}
      <section data-theme="light" className="w-full pb-32 px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          
          {advisors.map((advisor, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.2 }} // Staggers the right column
              className="flex flex-col group"
            >
              {/* Massive Portrait Image */}
              <div className="relative w-full aspect-[3/4] mb-10 overflow-hidden bg-gray-200 shadow-xl">
                <Image 
                  src={advisor.image} 
                  alt={advisor.name} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0" 
                />
              </div>

              {/* High-Contrast Typography */}
              <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-onyx)] mb-4">
                {advisor.name}
              </h2>
              <p className="font-sans text-lg text-[var(--color-brand-charcoal)] uppercase tracking-widest border-b border-[var(--color-brand-muted)]/30 pb-6 mb-6">
                {advisor.title}
              </p>
              
              {/* Direct Contact Links */}
              <div className="flex flex-col gap-2 font-sans text-lg text-[var(--color-brand-onyx)]">
                <a href={`tel:${advisor.phone}`} className="hover:text-[var(--color-brand-muted)] transition-colors inline-block w-max">
                  {advisor.phone}
                </a>
                <a href={`mailto:${advisor.email}`} className="hover:text-[var(--color-brand-muted)] transition-colors inline-block w-max underline underline-offset-4">
                  {advisor.email}
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 3. RECRUITMENT / DIRECTORY CTA */}
      <section data-theme="light" className="w-full py-32 px-12 border-t border-black/10 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-brand-onyx)] mb-8">
          Require specialized representation?
        </h2>
        <p className="text-xl text-[var(--color-brand-charcoal)] font-light mb-12 max-w-2xl mx-auto">
          Connect with our managing partners to discuss your portfolio requirements in strict confidence.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex px-12 py-6 rounded-full border border-[var(--color-brand-onyx)] text-[var(--color-brand-onyx)] font-sans text-sm uppercase tracking-widest hover:bg-[var(--color-brand-onyx)] hover:text-white transition-all duration-500 items-center gap-4 group"
        >
          Contact the Firm
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </section>

      {/* 4. THE DARK PORTFOLIO FOOTER */}
      <PortfolioFooter />

    </main>
  );
}