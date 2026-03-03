"use client";

import Image from "next/image";
import Link from "next/link";
import { motion,useScroll, useTransform } from "framer-motion";
import PortfolioFooter from "@/components/PortfolioFooter";

// The Public Collection Database
const publicProperties = [
  {
    title: "The Glass House",
    location: "Cypress Point",
    price: "$12,500,000",
    image: "/glass-house-ext.jpg",
    slug: "glass-house"
  },
  {
    title: "The Ironwood Sanctuary",
    location: "Private Forest Reserve",
    price: "$8,950,000",
    image: "/ironwood-ext.jpg",
    slug: "ironwood"
  },
  {
    title: "The Summit at Grand",
    location: "Downtown Skyline",
    price: "$18,200,000",
    image: "/summit-ext.jpg",
    slug: "summit"
  }
];

export default function PropertiesIndexPage() {
  return (
    <main className="w-full bg-[var(--color-brand-offwhite)]">
      
      {/* 1. THE EDITORIAL HEADER */}
      <section data-theme="light" className="relative w-full pt-48 pb-20 px-12 max-w-[1440px] mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[var(--color-brand-muted)] font-sans text-sm uppercase tracking-[0.3em] mb-8 block"
        >
          Curated Legacies
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-[80px] text-[var(--color-brand-onyx)] leading-tight mb-8"
        >
          The Public Collection
        </motion.h1>
      </section>

      {/* 2. THE DIRECTORY GRID */}
      <section data-theme="light" className="w-full px-12 pb-32 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          
          {publicProperties.map((property, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link href={`/properties/${property.slug}`} className="group block cursor-pointer">
                {/* Property Thumbnail */}
                <div className="relative w-full aspect-[4/5] bg-gray-200 overflow-hidden shadow-lg mb-8">
                  <Image 
                    src={property.image} 
                    alt={property.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* High-Contrast Details */}
                <div className="flex flex-col gap-3">
                  <span className="text-[var(--color-brand-onyx)] font-sans text-xs uppercase tracking-widest font-bold">
                    {property.location}
                  </span>
                  <h2 className="text-3xl font-serif text-[var(--color-brand-onyx)] group-hover:opacity-70 transition-opacity duration-300">
                    {property.title}
                  </h2>
                  <p className="text-lg text-[var(--color-brand-charcoal)] font-sans mt-2 border-t border-black/10 pt-4 inline-block w-full">
                    Offered at {property.price}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 3. THE PRIVATE VAULT (Dark Theme Lead Gen) */}
      <section data-theme="dark" className="relative w-full py-40 px-12 bg-[#111111] text-center overflow-hidden flex flex-col items-center justify-center">
        {/* Subtle background texture/image to make it feel like a vault */}
        <div className="absolute inset-0 z-0 opacity-20 grayscale">
          <Image 
            src="/private-portfolio.jpg" 
            alt="The Vault" 
            fill 
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="border border-white/20 p-16 md:p-24 backdrop-blur-sm bg-black/40"
          >
            <span className="text-white/50 font-sans text-xs uppercase tracking-[0.4em] mb-10 block">
              Restricted Access
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              The Private Portfolio
            </h2>
            <p className="text-xl text-white/70 font-light leading-relaxed font-sans mb-12">
              The estates shown above represent merely 15% of our active transactions. Our most significant global properties—ranging from private islands to legacy family compounds—are strictly off-market and require an executed NDA for viewing.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex px-10 py-5 bg-white text-black rounded-full font-sans text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-500 items-center gap-4 group"
            >
              Request Portfolio Access
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. THE DARK PORTFOLIO FOOTER */}
      <PortfolioFooter />

    </main>
  );
}