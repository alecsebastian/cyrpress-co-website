"use client";

import { motion } from "framer-motion";

const pressLogos = [
  "The Wall Street Journal",
  "Financial Times",
  "Bloomberg",
  "Architectural Digest",
  "Forbes Global Properties",
  "Barron's"
];

export default function FirmContent() {
  return (
    <>
      {/* 1. THE ETHOS SECTION */}
      <section data-theme="light" className="w-full py-32 px-12 bg-[var(--color-brand-offwhite)]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <span className="absolute -top-12 -left-8 text-8xl font-serif text-[var(--color-brand-onyx)]/10 leading-none">“</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-onyx)] leading-snug">
              True luxury is defined by what remains unseen. Discretion is our greatest asset.
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-8 text-[var(--color-brand-charcoal)] font-sans text-xl font-light leading-relaxed"
          >
            <p>Cypress & Co. operates at the intersection of architectural provenance and private wealth.</p>
            <p>For over a decade, we have quietly orchestrated the acquisition and disposition of North America&apos;s most significant estates. We understand that for our clientele, a residence is more than an asset—it is a sanctuary, a gallery, and a legacy.</p>
            <p>By leveraging a curated global network and maintaining absolute privacy, we provide a white-glove advisory experience that simply cannot be found on the open market.</p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE GLOBAL PRESS BAR (Animated Marquee) */}
      <section data-theme="light" className="w-full py-16 border-y border-black/5 bg-white overflow-hidden flex flex-col items-center">
        <span className="text-[var(--color-brand-muted)] font-sans text-xs uppercase tracking-[0.3em] mb-10 z-10 relative bg-white px-4 text-center">
          Market Intelligence As Featured In
        </span>
        
        {/* Marquee Wrapper */}
        <div className="relative w-full flex overflow-hidden mask-image-fade">
          {/* We use Framer Motion to infinitely pan left.
            By duplicating the array (...pressLogos, ...pressLogos), we create a seamless loop!
          */}
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 30 // Increase this number to make it slower, decrease to make it faster
            }}
            className="flex w-max items-center gap-16 md:gap-32 px-8 md:px-16 opacity-40 grayscale"
          >
            {[...pressLogos, ...pressLogos].map((logo, index) => (
              <span 
                key={index} 
                className={`shrink-0 ${
                  index % 2 === 0 
                    ? "font-serif text-2xl md:text-3xl tracking-wide" 
                    : "font-sans text-xl md:text-2xl font-bold tracking-widest uppercase"
                }`}
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. BY THE NUMBERS SECTION */}
      <section data-theme="light" className="w-full py-32 px-12 bg-[var(--color-brand-offwhite)]">
        <div className="max-w-[1440px] mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-brand-muted)] font-sans text-xs uppercase tracking-[0.2em] mb-20 block"
          >
            By The Numbers // A Decade of Discretion
          </motion.span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { stat: "$2.4B+", label: "LIFETIME PORTFOLIO VOLUME" },
              { stat: "85%", label: "OFF-MARKET TRANSACTIONS" },
              { stat: "32", label: "GLOBAL PARTNER MARKETS" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col items-center justify-center"
              >
                <span className="text-6xl md:text-8xl font-sans font-light tracking-tight text-[var(--color-brand-onyx)] mb-6">
                  {item.stat}
                </span>
                <span className="text-sm uppercase font-bold tracking-[0.2em] text-[var(--color-brand-charcoal)]">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEW: NOTABLE TRANSACTIONS (ANONYMIZED CASE STUDIES) */}
      <section data-theme="light" className="w-full py-32 px-12 bg-white border-t border-black/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-black/10 pb-8">
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-onyx)]">Notable Transactions</h2>
            <span className="text-[var(--color-brand-muted)] font-sans text-xs uppercase tracking-[0.2em] mt-4 md:mt-0">
              Client Identities Strictly Redacted
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {[
              { title: "The Coastal Assembly", details: "Quietly orchestrated the off-market acquisition of three contiguous oceanfront parcels for a European family office.", metric: "Closed in 14 Days" },
              { title: "Project Glass", details: "Represented the seller in the disposition of a historically significant mid-century modern estate. Sourced a qualified buyer without a single public showing.", metric: "Record Price Per Sq.Ft." },
              { title: "The Heritage Trust", details: "Structured a complex multi-generational portfolio transfer encompassing four distinct estates across three international tax jurisdictions.", metric: "Seamless Transfer" },
              { title: "Aviation Estate", details: "Secured a private compound with FAA-approved helipad access for an ultra-high-net-worth principal requiring absolute airspace autonomy.", metric: "Off-Market Acquisition" }
            ].map((caseStudy, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-4 group"
              >
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--color-brand-onyx)]">
                  // {caseStudy.metric}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-[var(--color-brand-onyx)] group-hover:opacity-70 transition-opacity">
                  {caseStudy.title}
                </h3>
                <p className="text-lg text-[var(--color-brand-charcoal)] font-light leading-relaxed">
                  {caseStudy.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}