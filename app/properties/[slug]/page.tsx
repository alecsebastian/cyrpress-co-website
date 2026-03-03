"use client"; 

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import PortfolioFooter from "@/components/PortfolioFooter";

// 1. The Expanded Property Database
const propertyData = {
  "glass-house": {
    title: "The Glass House",
    price: "$12,500,000",
    accommodations: "5 En-Suite Bedrooms",
    bathing: "7 Full, 2 Half Baths",
    scale: "12,000 Interior Sq. Ft.",
    grounds: "2.4 Private Acres",
    headline: "A Masterclass in Organic Modernism.",
    description: "Hovering above the pulse of the city, this sprawling residence offers a rare convergence of metropolitan energy and absolute tranquility. Every finish has been meticulously sourced—from the book-matched marble in the culinary gallery to the bespoke brass accents—creating an environment of quiet, undeniable power.",
    details: [
      "Book-matched Calacatta marble gallery",
      "1,000-bottle climate-controlled wine room",
      "Fully integrated Lutron smart-home system",
      "Private heated motor court"
    ],
    images: [
      "/glass-house/feature_strip1.jpg", 
      "/glass-house/feature_strip2.jpg", 
      "/glass-house/feature_strip3.jpg", 
      "/glass-house/feature_strip4.jpg", 
      "/glass-house/feature_strip5.jpg", 
      "/glass-house/feature_strip6.jpg"
    ] 
  },
  "ironwood": {
    title: "The Ironwood Sanctuary",
    price: "$8,950,000",
    accommodations: "4 En-Suite Bedrooms",
    bathing: "5 Full, 1 Half Baths",
    scale: "8,500 Interior Sq. Ft.",
    grounds: "12 Private Acres",
    headline: "Where Boundaries Dissolve.",
    description: "Clad in blackened timber and expansive glass, designed to disappear into the surrounding forest canopy while offering an uncompromising standard of living. Floor-to-ceiling glass volumes retract to reveal an expansive private terrace.",
    details: [
      "Reclaimed century-old timber beams",
      "Geothermal climate control system",
      "Private helipad access potential",
      "Custom blackened steel fireplaces"
    ],
    images: [
      "/ironwood/wooden_interiors_1.jpg", 
      "/ironwood/wooden_interiors_2.jpg", 
      "/ironwood/wooden_interiors_3.jpg", 
      "/ironwood/wooden_interiors_4.jpg", 
      "/ironwood/wooden_interiors_5.jpg",
    ] 
  },
  "summit": {
    title: "The Summit at Grand",
    price: "$18,200,000",
    accommodations: "3 En-Suite Bedrooms",
    bathing: "4 Full, 1 Half Baths",
    scale: "6,200 Interior Sq. Ft.",
    grounds: "Private Rooftop Terrace",
    headline: "The City, Curated.",
    description: "Designed for the ultimate cosmopolitan lifestyle, The Summit features a sweeping open-plan gallery, a bespoke marble wet bar, and a private terrace that turns the skyline into your personal backdrop.",
    details: [
      "Private elevator vestibule",
      "Bespoke brass and marble wet bar",
      "Automated retracting glass walls",
      "Radiant heated flooring throughout"
    ],
    images: [
      "/penthouse/penthouse_interior_1.jpg", 
      "/penthouse/penthouse_interior_2.jpg", 
      "/penthouse/penthouse_interior_3.jpg", 
      "/penthouse/penthouse_interior_4.jpg", 
      "/penthouse/penthouse_interior_5.jpg",
    ] 
  }
};

export default function PropertyGallery({ params }: { params: Promise<{ slug: string }> }) {
  
  const resolvedParams = React.use(params);
  const property = propertyData[resolvedParams.slug as keyof typeof propertyData];

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // UPDATED: Now we move exactly 100vw (one full screen width) per image
  const xMovement = useTransform(scrollYProgress, [0, 1], ["0%", `-${(property?.images.length - 1) * 100}vw`]);
  
  const scaleEffect = useTransform(scrollYProgress, [0, 0.05], [0.85, 1]);

  if (!property) return notFound();

  return (
    <main className="w-full bg-[var(--color-brand-offwhite)]">
      
      {/* 1. THE CINEMATIC SCROLL GALLERY */}
      <section ref={targetRef} data-theme="dark" className="relative h-[300vh] bg-[#111111]">
        
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          
          <motion.div 
            style={{ x: xMovement, scale: scaleEffect }} 
            className="flex will-change-transform h-screen"
          >
            {property.images.map((img, idx) => (
              // UPDATED: Each image now gets a full 100vw container with generous padding
              <div key={idx} className="relative w-[100vw] h-full shrink-0 flex items-center justify-center p-8 md:p-24">
                <Image 
                  src={img} 
                  alt={`${property.title} Gallery Image ${idx + 1}`} 
                  fill 
                  priority={idx === 0}
                  // UPDATED: object-contain preserves the exact portrait/landscape dimensions!
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 2. THE SPECIFICATION SHEET & MANIFESTO */}
      <section data-theme="light" className="relative z-10 py-32 px-12 max-w-[1440px] mx-auto bg-[var(--color-brand-offwhite)]">
        <div className="flex flex-col md:flex-row gap-20 md:gap-32">
          
          <div className="w-full md:w-[35%] flex flex-col gap-6 font-sans text-sm uppercase tracking-widest text-[var(--color-brand-onyx)]">
            <div className="mb-4">
              <span className="font-bold border-b-2 border-black pb-2 inline-block text-base">
                OFFERED AT {property.price}
              </span>
            </div>
            
            <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-black/10 pb-4 mt-4">
              <span className="text-black/60 font-semibold">Accommodations</span>
              <span>{property.accommodations}</span>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-black/10 pb-4">
              <span className="text-black/60 font-semibold">Bathing</span>
              <span>{property.bathing}</span>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-black/10 pb-4">
              <span className="text-black/60 font-semibold">Scale</span>
              <span>{property.scale}</span>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-4 border-b border-black/10 pb-4">
              <span className="text-black/60 font-semibold">Grounds</span>
              <span>{property.grounds}</span>
            </div>
          </div>

          <div className="w-full md:w-[65%]">
            <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-brand-onyx)] mb-10 leading-tight">
              {property.headline}
            </h2>
            
            <p className="text-xl md:text-2xl font-light text-[var(--color-brand-charcoal)] leading-relaxed font-sans max-w-3xl mb-16">
              {property.description}
            </p>

            <div className="border-t border-black/10 pt-16">
              <h3 className="text-sm font-sans uppercase tracking-widest text-[var(--color-brand-muted)] mb-10">
                Bespoke Details
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {property.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-lg md:text-xl text-[var(--color-brand-charcoal)] font-light leading-snug">
                    <span className="block mt-2.5 w-1.5 h-1.5 bg-[var(--color-brand-onyx)] rounded-full shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE PRIVATE DOSSIER CTA */}
      <section data-theme="light" className="relative z-10 py-32 px-12 max-w-[1440px] mx-auto text-center border-t border-[var(--color-brand-muted)]/20 bg-[var(--color-brand-offwhite)]">
        <p className="text-3xl md:text-4xl font-serif text-[var(--color-brand-onyx)] max-w-4xl mx-auto leading-relaxed mb-12">
          For security and discretion, floor plans, structural details, and private viewing schedules are available strictly upon request.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex px-12 py-6 rounded-full border border-[var(--color-brand-onyx)]/30 text-[var(--color-brand-onyx)] font-sans text-sm uppercase tracking-widest hover:bg-[var(--color-brand-onyx)] hover:text-white transition-all duration-500 items-center gap-4 group"
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