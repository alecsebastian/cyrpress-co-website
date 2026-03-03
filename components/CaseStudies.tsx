"use client";

import { motion } from "framer-motion";
import { i } from "framer-motion/m";
import Image from "next/image";

export default function CaseStudies() {
  return (
    <>
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