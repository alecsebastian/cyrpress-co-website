"use client"; 

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import PortfolioFooter from "@/components/PortfolioFooter";

// We define what the property object looks like for TypeScript
type PropertyType = {
  title: string;
  price: string;
  accommodations: string;
  bathing: string;
  scale: string;
  grounds: string;
  headline: string;
  description: string;
  details: string[];
  images: string[];
};

export default function PropertyGalleryClient({ property }: { property: PropertyType }) {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const xMovement = useTransform(scrollYProgress, [0, 1], ["0%", `-${(property.images.length - 1) * 100}vw`]);
  const scaleEffect = useTransform(scrollYProgress, [0, 0.05], [0.85, 1]);

  return (
    <main className="w-full bg-[var(--color-brand-offwhite)]">
      
      {/* 1. THE GALLERY (Desktop: Cinematic Scroll | Mobile: Native Horizontal Swipe) */}
      <section ref={targetRef} data-theme="dark" className="relative bg-[#111111] h-[80dvh] md:h-[300vh]">
        
        {/* --- DESKTOP VERSION --- */}
        <div className="hidden md:flex sticky top-0 h-screen items-center overflow-hidden">
          <motion.div 
            style={{ x: xMovement, scale: scaleEffect }} 
            className="flex will-change-transform h-screen"
          >
            {property.images.map((img, idx) => (
              <div key={idx} className="relative w-[100vw] h-full shrink-0 flex items-center justify-center p-24">
                <Image 
                  src={img} 
                  alt={`${property.title} Gallery Image ${idx + 1}`} 
                  fill 
                  priority={idx === 0}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- MOBILE VERSION --- */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory h-full w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {property.images.map((img, idx) => (
            <div key={idx} className="relative w-screen h-full shrink-0 flex items-center justify-center snap-center p-6">
              <Image 
                src={img} 
                alt={`${property.title} Gallery Image ${idx + 1}`} 
                fill 
                priority={idx === 0}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 2. THE SPECIFICATION SHEET & MANIFESTO */}
      <section data-theme="light" className="relative z-10 py-32 px-6 md:px-12 max-w-[1440px] mx-auto bg-[var(--color-brand-offwhite)]">
        <div className="flex flex-col md:flex-row gap-20 md:gap-32">
          
          <div className="w-full md:w-[35%] flex flex-col gap-6 font-sans text-sm uppercase tracking-widest text-[var(--color-brand-onyx)]">
            <div className="mb-4">
              <span className="font-bold border-b-2 border-black pb-2 inline-block text-base">
                OFFERED AT {property.price}
              </span>
            </div>
            
            <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] gap-4 border-b border-black/10 pb-4 mt-4">
              <span className="text-black/60 font-semibold">Accommodations</span>
              <span>{property.accommodations}</span>
            </div>
            <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] gap-4 border-b border-black/10 pb-4">
              <span className="text-black/60 font-semibold">Bathing</span>
              <span>{property.bathing}</span>
            </div>
            <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] gap-4 border-b border-black/10 pb-4">
              <span className="text-black/60 font-semibold">Scale</span>
              <span>{property.scale}</span>
            </div>
            <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] gap-4 border-b border-black/10 pb-4">
              <span className="text-black/60 font-semibold">Grounds</span>
              <span>{property.grounds}</span>
            </div>
          </div>

          <div className="w-full md:w-[65%]">
            <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-brand-onyx)] mb-10 leading-tight">
              {property.headline}
            </h2>
            
            <p className="text-lg md:text-2xl font-light text-[var(--color-brand-charcoal)] leading-relaxed font-sans max-w-3xl mb-16">
              {property.description}
            </p>

            <div className="border-t border-black/10 pt-16">
              <h3 className="text-sm font-sans uppercase tracking-widest text-[var(--color-brand-muted)] mb-10">
                Bespoke Details
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {property.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-base md:text-xl text-[var(--color-brand-charcoal)] font-light leading-snug">
                    <span className="block mt-2 md:mt-2.5 w-1.5 h-1.5 bg-[var(--color-brand-onyx)] rounded-full shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE PRIVATE DOSSIER CTA */}
      <section data-theme="light" className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto text-center border-t border-[var(--color-brand-muted)]/20 bg-[var(--color-brand-offwhite)]">
        <p className="text-2xl md:text-4xl font-serif text-[var(--color-brand-onyx)] max-w-4xl mx-auto leading-relaxed mb-12">
          For security and discretion, floor plans, structural details, and private viewing schedules are available strictly upon request.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex w-full md:w-auto justify-center px-8 md:px-12 py-5 md:py-6 rounded-full border border-[var(--color-brand-onyx)]/30 text-[var(--color-brand-onyx)] font-sans text-xs md:text-sm uppercase tracking-widest hover:bg-[var(--color-brand-onyx)] hover:text-white transition-all duration-500 items-center gap-4 group"
        >
          Request the Private Dossier
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </section>

      {/* 4. PORTFOLIO FOOTER */}
      <div className="relative z-10">
        <PortfolioFooter />
      </div>

    </main>
  );
}