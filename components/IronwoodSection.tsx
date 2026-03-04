"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function IronwoodSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll specifically for the parallax effect on the small image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // The small image will slowly float up 80 pixels as the user scrolls past
  const parallaxY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section 
      ref={containerRef} 
      data-theme="light" 
      className="relative w-full min-h-screen py-20 md:py-32 flex flex-col justify-center overflow-hidden bg-[var(--color-brand-offwhite)]"
    >
      
      {/* ==========================================
          1. ORIGINAL DESKTOP VERSION (Untouched)
          ========================================== */}
      <div className="hidden md:block w-full">
        <div className="max-w-[1440px] mx-auto w-full px-12 flex flex-col md:flex-row items-center justify-between gap-20">
          
          {/* -- LEFT SIDE: TEXT BLOCK -- */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-[40%] flex flex-col z-10"
          >
            <span className="text-[var(--color-brand-muted)] font-sans text-xs uppercase tracking-widest mb-6">
              02 // The Collection
            </span>
            
            <h2 className="text-5xl lg:text-6xl font-serif text-[var(--color-brand-onyx)] mb-8 leading-[1.1]">
              The Ironwood <br /> Sanctuary
            </h2>
            
            <p className="font-sans text-[var(--color-brand-charcoal)] text-lg mb-6">
              A masterclass in organic modernism.
            </p>

            <p className="font-sans text-[var(--color-brand-charcoal)] text-lg leading-relaxed mb-10">
              The Ironwood Sanctuary is clad in blackened timber and expansive glass, 
              designed to disappear into the surrounding forest canopy while offering 
              an uncompromising standard of living.
            </p>

            <div className="flex gap-8 font-sans text-sm text-[var(--color-brand-onyx)] mb-12 border-y border-[var(--color-brand-muted)]/20 py-4">
              <span><strong>4</strong> Beds</span>
              <span><strong>5</strong> Baths</span>
              <span><strong>12</strong> Private Acres</span>
            </div>

            <Link 
              href="/properties/ironwood"
              className="mt-8 relative overflow-hidden group border border-[var(--color-brand-onyx)] px-8 py-5 rounded-full text-xs font-sans uppercase tracking-widest text-[var(--color-brand-onyx)] hover:text-white transition-colors duration-500 w-full md:w-auto self-start flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center gap-3 transition-transform duration-500 group-hover:scale-105">
                Explore the Gallery
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-[var(--color-brand-onyx)] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
            </Link>
          </motion.div>

          {/* -- RIGHT SIDE: ASYMMETRICAL IMAGES -- */}
          <div className="relative w-full md:w-[50%] h-[80vh]">
            {/* Main Exterior Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute top-0 right-0 w-[85%] h-[85%] shadow-2xl"
            >
              <div className="relative w-full h-full">
                <Image src="/ironwood-ext.jpg" alt="The Ironwood Sanctuary Exterior" fill className="object-cover" />
              </div>
            </motion.div>

            {/* Overlapping Interior Image (With Parallax) */}
            <motion.div 
              style={{ y: parallaxY }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-0 left-0 w-[45%] h-[45%] z-20 shadow-2xl"
            >
              <div className="relative w-full h-full border-4 border-[var(--color-brand-offwhite)]">
                <Image src="/ironwood-int.jpg" alt="The Ironwood Sanctuary Interior" fill className="object-cover" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ==========================================
          2. NEW MOBILE VERSION (Highly Legible)
          ========================================== */}
      <div className="block md:hidden w-full px-4">
        
        {/* Mobile Images (Stacked playfully at the top) */}
        <div className="relative w-full h-[60dvh] mb-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-[85%] h-[80%] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image src="/ironwood-ext.jpg" alt="The Ironwood Sanctuary Exterior" fill className="object-cover" />
          </motion.div>

          <motion.div 
            style={{ y: parallaxY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-[60%] h-[45%] z-20 shadow-2xl rounded-xl overflow-hidden border-4 border-[var(--color-brand-offwhite)]"
          >
            <Image src="/ironwood-int.jpg" alt="The Ironwood Sanctuary Interior" fill className="object-cover" />
          </motion.div>
        </div>

        {/* Mobile Text Block (The Box Frame) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // Notice the bg-white, padding (p-6), and rounded corners creating the box frame
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col z-30 relative mx-2 mt-4 border border-black/5"
        >
          <span className="text-[var(--color-brand-muted)] font-sans text-sm font-semibold uppercase tracking-widest mb-4">
            02 // The Collection
          </span>
          
          <h2 className="text-4xl font-serif text-[var(--color-brand-onyx)] mb-6 leading-[1.15]">
            The Ironwood <br /> Sanctuary
          </h2>
          
          <p className="font-sans text-[var(--color-brand-charcoal)] font-medium text-lg mb-4">
            A masterclass in organic modernism.
          </p>

          <p className="font-sans text-[var(--color-brand-charcoal)] text-base leading-relaxed mb-8">
            The Ironwood Sanctuary is clad in blackened timber and expansive glass, 
            designed to disappear into the surrounding forest canopy while offering 
            an uncompromising standard of living.
          </p>

          {/* flex-wrap ensures data doesn't squish on narrow screens */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 font-sans text-base text-[var(--color-brand-onyx)] mb-8 border-y border-[var(--color-brand-muted)]/20 py-4">
            <span><strong>4</strong> Beds</span>
            <span><strong>5</strong> Baths</span>
            <span><strong>12</strong> Acres</span>
          </div>

          <Link 
            href="/properties/ironwood"
            className="relative overflow-hidden group border border-[var(--color-brand-onyx)] px-6 py-4 rounded-full text-xs font-sans font-semibold uppercase tracking-widest text-[var(--color-brand-onyx)] hover:text-white transition-colors duration-500 w-full flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center gap-3 transition-transform duration-500 group-hover:scale-105">
              Explore Gallery
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-[var(--color-brand-onyx)] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
          </Link>
        </motion.div>

      </div>

    </section>
  );
}