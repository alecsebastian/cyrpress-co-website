"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PortfolioFooter from "@/components/PortfolioFooter";

// The Editorial Database
const articles = [
  {
    category: "Market Intelligence",
    title: "The Resurgence of the Private Family Compound",
    date: "October 12, 2026",
    excerpt: "Why ultra-high-net-worth buyers are pivoting from urban penthouses to multi-acre legacy estates in the wake of shifting global privacy concerns.",
    readTime: "6 Min Read"
  },
  {
    category: "Architecture",
    title: "Collecting Trophies: Art vs. Real Estate",
    date: "September 28, 2026",
    excerpt: "Analyzing the crossover between blue-chip art collectors and the acquisition of architecturally significant homes. When does a house become a sculpture?",
    readTime: "8 Min Read"
  },
  {
    category: "Advisory",
    title: "The Silent Transaction: Navigating Off-Market Acquisitions",
    date: "September 15, 2026",
    excerpt: "A look inside the highly guarded process of negotiating properties that will never see the public MLS, and the leverage required to secure them.",
    readTime: "5 Min Read"
  },
  {
    category: "Design",
    title: "The End of the Open Concept",
    date: "August 30, 2026",
    excerpt: "How the demand for distinct, purpose-built rooms like private libraries, listening lounges, and enclosed culinary galleries is returning to luxury development.",
    readTime: "7 Min Read"
  }
];

export default function InsightsPage() {
  return (
    <main className="w-full bg-[var(--color-brand-offwhite)]">
      
      {/* 1. THE EDITORIAL HEADER */}
      <section data-theme="light" className="relative w-full pt-48 pb-20 px-12 max-w-[1440px] mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[var(--color-brand-muted)] font-sans text-sm uppercase tracking-[0.3em] mb-8 block"
        >
          Journal & Market Intelligence
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-[80px] text-[var(--color-brand-onyx)] leading-tight mb-8"
        >
          Insights
        </motion.h1>
      </section>

      {/* 2. THE FEATURED ESSAY */}
      <section data-theme="light" className="w-full px-12 mb-32 max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* We wrap the entire block in a Link so the whole layout is clickable! */}
          <Link 
            href="/insights/family-compound" 
            className="group cursor-pointer flex flex-col md:flex-row gap-12 md:gap-20 items-center w-full"
          >
            {/* Featured Image */}
            <div className="w-full md:w-[60%] relative aspect-[16/9] overflow-hidden bg-gray-200 shadow-2xl">
              <Image 
                src="/glass-house-ext.jpg" 
                alt="Featured Insight" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
            
            {/* Featured Content */}
            <div className="w-full md:w-[40%] flex flex-col justify-center">
              <span className="text-[var(--color-brand-onyx)] font-sans text-xs uppercase tracking-widest font-bold mb-6 border-b border-black pb-2 inline-block self-start">
                Featured Editorial
              </span>
              {/* Updated title to match our dynamic database */}
              <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-onyx)] leading-snug mb-6 group-hover:opacity-70 transition-opacity duration-300">
                The Resurgence of the Private Family Compound
              </h2>
              {/* Updated excerpt to match our dynamic database */}
              <p className="text-xl text-[var(--color-brand-charcoal)] font-light leading-relaxed mb-10">
                Why ultra-high-net-worth buyers are pivoting from urban penthouses to multi-acre legacy estates in the wake of shifting global privacy concerns.
              </p>
              <div className="flex items-center gap-4 text-sm font-sans uppercase tracking-widest text-[var(--color-brand-onyx)] font-bold">
                Read Essay <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* 3. THE INDEX (High-Contrast List) */}
      <section data-theme="light" className="w-full px-12 pb-32 max-w-[1000px] mx-auto">
        <div className="border-t-2 border-[var(--color-brand-onyx)] flex flex-col">
          
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href="#" className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 py-12 border-b border-[var(--color-brand-muted)]/30 group hover:bg-white transition-colors duration-500 -mx-6 px-6">
                
                {/* Left side: Category & Title */}
                <div className="flex flex-col gap-4 max-w-2xl">
                  <span className="text-[var(--color-brand-onyx)] font-sans text-xs uppercase tracking-widest font-bold">
                    {article.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif text-[var(--color-brand-onyx)] leading-snug group-hover:opacity-70 transition-opacity duration-300">
                    {article.title}
                  </h3>
                  <p className="text-lg md:text-xl text-[var(--color-brand-charcoal)] font-light leading-relaxed hidden md:block mt-2">
                    {article.excerpt}
                  </p>
                </div>

                {/* Right side: Meta info */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-4 text-sm font-sans uppercase tracking-widest text-[var(--color-brand-charcoal)]">
                  <span>{article.date}</span>
                  <span className="opacity-50">{article.readTime}</span>
                </div>

              </Link>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 4. THE DARK PORTFOLIO FOOTER */}
      <PortfolioFooter />

    </main>
  );
}