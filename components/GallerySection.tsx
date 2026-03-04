"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { section } from "framer-motion/m";

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Track the user's scroll progress through this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. The Math: Mapping scroll progress (0 to 1) to visual changes
  
  // Background smoothly crossfades from Dark to your Off-White
  const bgColor = useTransform(scrollYProgress, [0, 0.3], ["#111111", "#F9F8F6"]);

  // The Main Image shrinks from full-screen to an editorial card
  const imageWidth = useTransform(scrollYProgress, [0, 0.5], ["100vw", "38vw"]);
  const imageHeight = useTransform(scrollYProgress, [0, 0.5], ["100vh", "75vh"]);
  const imageLeft = useTransform(scrollYProgress, [0, 0.5], ["0vw", "8vw"]);
  const imageTop = useTransform(scrollYProgress, [0, 0.5], ["0vh", "12vh"]);

  // The Text safely waits, then smoothly glides up and fades in
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 0.6], [40, 0]);

// The Secondary Overlapping Image fades in last
const secondaryImageOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
const secondaryImageY = useTransform(scrollYProgress, [0.5, 0.7], [40, 0]);

// Mobile versions of animations
const mobileImageWidth = useTransform(scrollYProgress, [0, 0.5], ["100vw", "70vw"]);
const mobileImageHeight = useTransform(scrollYProgress, [0, 0.5], ["60vh", "40vh"]);
const mobileImageLeft = useTransform(scrollYProgress, [0, 0.5], ["0vw", "5vw"]);
const mobileImageTop = useTransform(scrollYProgress, [0, 0.5], ["0vh", "8vh"]);
const mobileImageRadius = useTransform(scrollYProgress, [0.3, 0.5], [0, 16]);
const mobileSecondaryImageOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
const mobileSecondaryImageY = useTransform(scrollYProgress, [0.5, 0.7], [40, 0]);
const mobileTextOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
const mobileTextY = useTransform(scrollYProgress, [0.55, 0.75], [40, 0]);

return (
    <section data-theme="light" ref={containerRef} className="relative h-auto md:h-[300vh]">
      
      {/* ==========================================
          1. ORIGINAL DESKTOP VERSION (Untouched)
          ========================================== */}
      <div className="hidden md:block h-full w-full">
        <motion.div
          style={{ backgroundColor: bgColor }}
          className="sticky top-0 h-screen w-full overflow-hidden"
        >
          {/* -- THE MAIN GLASS HOUSE IMAGE -- */}
          <motion.div style={{ width: imageWidth, height: imageHeight, left: imageLeft, top: imageTop }} className="absolute origin-top-left shadow-2xl">
            <div className="relative w-full h-full overflow-hidden">
              <Image src="/glass-house-ext.jpg" alt="The Glass House Exterior" fill priority className="object-cover" />
            </div>
          </motion.div>

          {/* -- THE OVERLAPPING INTERIOR IMAGE -- */}
          <motion.div style={{ opacity: secondaryImageOpacity, y: secondaryImageY }} className="absolute left-[28vw] bottom-[6vh] w-[22vw] h-[35vh] z-20 shadow-2xl">
            <div className="relative w-full h-full border-4 border-[var(--color-brand-offwhite)]">
              <Image src="/glass-house-int.jpg" alt="The Glass House Interior" fill className="object-cover" />
            </div>
          </motion.div>

          {/* -- THE TEXT BLOCK -- */}
          <motion.div style={{ opacity: textOpacity, y: textY }} className="absolute right-[8vw] top-[22vh] w-[35vw] flex flex-col z-10">
            <span className="text-[var(--color-brand-muted)] font-sans text-xs uppercase tracking-widest mb-6">
              01 // The Collection
            </span>
            <h2 className="text-5xl lg:text-6xl font-serif text-[var(--color-brand-onyx)] mb-8 leading-[1.1]">
              The Glass House at <br /> Cypress Point
            </h2>
            <p className="font-sans text-[var(--color-brand-charcoal)] text-lg leading-relaxed mb-10">
              Where boundaries dissolve. This architectural triumph offers a masterclass in seamless indoor-outdoor living. Floor-to-ceiling glass volumes retract to reveal an expansive private terrace and pool, while the meticulously curated interiors boast bespoke geometric lighting and gallery-white finishes.
            </p>
            <div className="flex gap-8 font-sans text-sm text-[var(--color-brand-onyx)] mb-12 border-y border-[var(--color-brand-muted)]/20 py-4">
              <span><strong>5</strong> Beds</span>
              <span><strong>7</strong> Baths</span>
              <span><strong>12,000</strong> Sq.Ft.</span>
            </div>
            <Link href="/properties/glass-house" className="mt-8 relative overflow-hidden group border border-[var(--color-brand-onyx)] px-8 py-5 rounded-full text-xs font-sans uppercase tracking-widest text-[var(--color-brand-onyx)] hover:text-white transition-colors duration-500 w-full md:w-auto self-start flex items-center justify-center">
              <span className="relative z-10 flex items-center gap-3 transition-transform duration-500 group-hover:scale-105">
                Explore the Gallery
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-brand-onyx -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ==========================================
          2. NEW MOBILE VERSION (Highly Legible & Stacked)
          ========================================== */}
      <div className="block md:hidden w-full px-4 py-20">
        
        {/* Mobile Images (Stacked safely in their own container) */}
        <div className="relative w-full h-[60dvh] mb-8">
          {/* Main Exterior Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-[85%] h-[80%] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image src="/glass-house-ext.jpg" alt="The Glass House Exterior" fill className="object-cover" priority />
          </motion.div>

          {/* Overlapping Interior Image (Now contained safely within the 60dvh block) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-0 left-0 w-[60%] h-[45%] z-20 shadow-2xl rounded-xl overflow-hidden border-4 border-white"
          >
            <Image src="/glass-house-int.jpg" alt="The Glass House Interior" fill className="object-cover" />
          </motion.div>
        </div>

        {/* Mobile Text Block (The Box Frame with fixed mt-4 so it NEVER overlaps) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col z-30 relative mx-2 mt-4 border border-black/5"
        >
          <span className="text-[var(--color-brand-muted)] font-sans text-sm font-semibold uppercase tracking-widest mb-4">
            01 // The Collection
          </span>
          
          <h2 className="text-4xl font-serif text-[var(--color-brand-onyx)] mb-6 leading-[1.15]">
            The Glass House at <br /> Cypress Point
          </h2>
          
          <p className="font-sans text-[var(--color-brand-charcoal)] font-medium text-base leading-relaxed mb-8">
            Where boundaries dissolve. This architectural triumph offers a masterclass in seamless indoor-outdoor living.
          </p>

          <div className="flex flex-wrap justify-between gap-y-3 font-sans text-base text-[var(--color-brand-onyx)] mb-8 border-y border-[var(--color-brand-muted)]/20 py-4">
            <span><strong>5</strong> Beds</span>
            <span><strong>7</strong> Baths</span>
            <span><strong>12k</strong> Sq.Ft.</span>
          </div>

          <Link 
            href="/properties/glass-house"
            className="relative overflow-hidden group border border-[var(--color-brand-onyx)] px-6 py-4 rounded-full text-xs font-sans font-semibold uppercase tracking-widest text-[var(--color-brand-onyx)] hover:text-white transition-colors duration-500 w-full flex items-center justify-center"
          >
            {/* The Text and Arrow (Wrapped in z-10 so they stay above the black sweep) */}
            <span className="relative z-10 flex items-center gap-3 transition-transform duration-500 group-hover:scale-105">
              Explore Gallery
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            
            {/* The "Clearance Scan" black sweep effect on hover */}
            <div className="absolute inset-0 bg-[var(--color-brand-onyx)] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}