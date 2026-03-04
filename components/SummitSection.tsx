"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function SummitSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // THE FIX: We split the parallax math into two separate hooks so Framer Motion 
  // doesn't glitch when one of the layouts is hidden by Tailwind.
  const desktopParallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const mobileParallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section 
      ref={containerRef} 
      data-theme="light" 
      className="relative w-full min-h-screen py-20 md:py-32 flex flex-col justify-center overflow-hidden bg-[#F9F8F6]"
    >
      
      {/* ==========================================
          1. ORIGINAL DESKTOP VERSION (Untouched & Safe)
          ========================================== */}
      <div className="hidden md:block w-full">
        <div className="max-w-[1440px] mx-auto w-full px-12 flex flex-col md:flex-row items-center justify-between gap-20">
          
          {/* -- LEFT SIDE: ASYMMETRICAL IMAGES -- */}
          <div className="relative w-full md:w-[50%] h-[80vh]">
            
            {/* Main Exterior Image Container */}
            <div className="absolute top-0 left-0 w-[85%] h-[85%] shadow-2xl overflow-hidden bg-gray-100">
              <motion.div
                initial={{ scale: 1.4 }} 
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 3, ease: [0.33, 1, 0.68, 1] }}
                className="relative w-full h-full"
              >
                <Image
                  src="/summit-ext.jpg"
                  alt="The Summit Skyline"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* THE "CURTAIN" MASK */}
              <motion.div
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
                style={{ originY: 0 }}
                className="absolute inset-0 bg-[#F9F8F6] z-10"
              />
            </div>

            {/* Overlapping Interior Image (Now using its own dedicated desktop hook) */}
            <motion.div 
              style={{ y: desktopParallaxY }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-0 right-0 w-[45%] h-[45%] z-20 shadow-2xl"
            >
              <div className="relative w-full h-full border-4 border-white">
                <Image
                  src="/summit-int.jpg"
                  alt="The Summit Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* -- RIGHT SIDE: TEXT BLOCK -- */}
          <div className="w-full md:w-[40%] flex flex-col z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-500 font-sans text-xs uppercase tracking-widest mb-6"
            >
              03 // The Collection
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl font-serif text-[#1A1A1A] mb-8 leading-tight"
            >
              The Summit at <br /> Grand
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-lg text-gray-700 leading-relaxed mb-10"
            >
              Designed for the ultimate cosmopolitan lifestyle, The Summit features a sweeping open-plan gallery, a bespoke marble wet bar, and a private terrace that turns the skyline into your personal backdrop.
            </motion.p>

            <Link 
              href="/properties/summit"
              className="mt-8 relative overflow-hidden group border border-[var(--color-brand-onyx)] px-8 py-5 rounded-full text-xs font-sans uppercase tracking-widest text-[var(--color-brand-onyx)] hover:text-white transition-colors duration-500 w-full md:w-auto self-start flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center gap-3 transition-transform duration-500 group-hover:scale-105">
                Explore the Gallery
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-[var(--color-brand-onyx)] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
            </Link>
          </div>
        </div>
      </div>

      {/* ==========================================
          2. NEW MOBILE VERSION (Highly Legible & Tactile)
          ========================================== */}
      <div className="block md:hidden w-full px-4">
        
        {/* Mobile Images */}
        <div className="relative w-full h-[60dvh] mb-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-[85%] h-[80%] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image src="/summit-ext.jpg" alt="The Summit Skyline" fill className="object-cover" />
          </motion.div>

          {/* Overlapping Interior Image (Now using its own dedicated mobile hook) */}
          <motion.div 
            style={{ y: mobileParallaxY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-[60%] h-[45%] z-20 shadow-2xl rounded-xl overflow-hidden border-4 border-white"
          >
            <Image src="/summit-int.jpg" alt="The Summit Interior" fill className="object-cover" />
          </motion.div>
        </div>

        {/* Mobile Text Block (The Box Frame with fixed mt-4) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col z-30 relative mx-2 mt-4 border border-black/5"
        >
          <span className="text-gray-500 font-sans text-sm font-semibold uppercase tracking-widest mb-4">
            03 // The Collection
          </span>
          
          <h2 className="text-4xl font-serif text-[#1A1A1A] mb-6 leading-[1.15]">
            The Summit at <br /> Grand
          </h2>
          
          <p className="font-sans text-gray-700 font-medium text-base leading-relaxed mb-8">
            Designed for the ultimate cosmopolitan lifestyle, The Summit features a sweeping open-plan gallery, a bespoke marble wet bar, and a private terrace that turns the skyline into your personal backdrop.
          </p>

          <Link 
            href="/properties/summit"
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