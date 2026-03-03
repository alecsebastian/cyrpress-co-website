"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textBlur = useTransform(scrollYProgress, [0.1, 0.4], ["blur(15px)", "blur(0px)"]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [40, 0]);

  return (
    <footer ref={containerRef} data-theme="dark" className="bg-[var(--color-brand-onyx)] text-white">
      
      {/* 1. THE PRIVATE PORTFOLIO CTA */}
      <section className="relative h-[150vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            
            <motion.div style={{ scale: imageScale }} className="absolute inset-0 z-0">
              <Image 
                src="/private-portfolio.jpg" 
                alt="Private Portfolio Vault" 
                fill 
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-onyx)] via-transparent to-[var(--color-brand-onyx)]" />
            </motion.div>

            <motion.div 
              style={{ filter: textBlur, opacity: textOpacity, y: textY }}
              className="relative z-10 text-center max-w-4xl px-8"
            >
              {/* Bumped text-xs to text-sm md:text-base for easier reading */}
              <span className="text-sm md:text-base uppercase tracking-[0.3em] text-white/70 mb-8 block font-sans">
                Discrete Transactions // Off-Market
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-10 leading-tight">
                The Private Portfolio
              </h2>
              {/* Bumped text-lg to text-xl md:text-2xl */}
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80 mb-12 font-sans">
                For our most discerning clientele. Many of our pinnacle properties are 
                transacted with absolute discretion and never reach the public market.
              </p>
              
              <Link href="/contact" className="group relative inline-flex items-center gap-4 px-12 py-6 border border-white/30 rounded-full hover:border-white transition-all duration-500 hover:bg-white hover:text-black">
                {/* Bumped text-xs to text-sm */}
                <span className="text-sm md:text-base uppercase tracking-widest font-sans font-bold">Schedule Consultation</span>
                <div className="w-2.5 h-2.5 rounded-full bg-current animate-pulse" />
              </Link>
            </motion.div>
        </div>
      </section>

      {/* 2. THE MEGA BRANDING FOOTER */}
      <section className="relative z-20 px-8 md:px-12 pb-20 pt-20 bg-[var(--color-brand-onyx)]">
        
        <div className="border-b border-white/20 pb-16 mb-16 text-center overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[14vw] font-sans font-bold tracking-tighter leading-none select-none opacity-90"
          >
            CYPRESS & CO.
          </motion.h1>
        </div>

        {/* Improved Grid: sm:grid-cols-2 makes it stack perfectly on mobile/tablets */}
        {/* Increased base text size to text-base md:text-lg and contrast to white/80 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 max-w-[1440px] mx-auto text-base md:text-lg font-light text-white/80 font-sans">
          
          <div className="flex flex-col gap-5">
            <p className="text-white mb-2 uppercase tracking-widest text-sm md:text-base font-bold">Office</p>
            <p className="leading-relaxed">100 Avenue of the Americas<br />New York, NY 10013</p>
          </div>
          
          <div className="flex flex-col gap-5">
            <p className="text-white mb-2 uppercase tracking-widest text-sm md:text-base font-bold">Explore</p>
            {/* Added relative group + w-max + animated underline span */}
            <Link href="/properties" className="relative group w-max hover:text-white transition-colors">
              The Collection
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
            <Link href="/the-firm" className="relative group w-max hover:text-white transition-colors">
              The Firm
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          </div>
          
          <div className="flex flex-col gap-5">
            <p className="text-white mb-2 uppercase tracking-widest text-sm md:text-base font-bold">Social</p>
            <Link href="#" className="relative group w-max hover:text-white transition-colors">
              Instagram
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          </div>
          
          {/* Changed items-end to text-left on mobile, items-end on desktop for better flow */}
          <div className="flex flex-col gap-5 md:items-end">
            <p className="text-white mb-2 uppercase tracking-widest text-sm md:text-base font-bold">Legal</p>
            <p>© 2026 Cypress & Co.</p>
            <Link href="/privacy" className="relative group w-max hover:text-white transition-colors">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          </div>

        </div>
      </section>
    </footer>
  );
}