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

 return (
    <section data-theme="light" ref={containerRef} className="relative h-[300vh] hidden md:block">
      {/* This wrapper is 300vh tall to give the user enough "scroll distance" to trigger the animation */}
      
      {/* This container "sticks" to the screen while the user scrolls through the 300vh */}
      <motion.div
        style={{ backgroundColor: bgColor }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        
        {/* -- THE MAIN GLASS HOUSE IMAGE -- */}
        <motion.div
          style={{
            width: imageWidth,
            height: imageHeight,
            left: imageLeft,
            top: imageTop,
          }}
          className="absolute origin-top-left shadow-2xl"
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/glass-house-ext.jpg"
              alt="The Glass House Exterior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* -- THE OVERLAPPING INTERIOR IMAGE -- */}
        <motion.div
          style={{
            opacity: secondaryImageOpacity,
            y: secondaryImageY,
          }}
          className="absolute left-[28vw] bottom-[6vh] w-[22vw] h-[35vh] z-20 shadow-2xl"
        >
          {/* Notice the very subtle white border to separate it from the main image */}
          <div className="relative w-full h-full border-4 border-[var(--color-brand-offwhite)]">
            <Image
              src="/glass-house-int.jpg"
              alt="The Glass House Interior"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* -- THE TEXT BLOCK -- */}
        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
          }}
          className="absolute right-[8vw] top-[22vh] w-[35vw] flex flex-col z-10"
        >
          <span className="text-[var(--color-brand-muted)] font-sans text-xs uppercase tracking-widest mb-6">
            01 // The Collection
          </span>
          
          <h2 className="text-5xl lg:text-6xl font-serif text-[var(--color-brand-onyx)] mb-8 leading-[1.1]">
            The Glass House at <br /> Cypress Point
          </h2>
          
          <p className="font-sans text-[var(--color-brand-charcoal)] text-lg leading-relaxed mb-10">
            Where boundaries dissolve. This architectural triumph offers a
            masterclass in seamless indoor-outdoor living. Floor-to-ceiling glass
            volumes retract to reveal an expansive private terrace and pool, while
            the meticulously curated interiors boast bespoke geometric lighting and
            gallery-white finishes.
          </p>

          <div className="flex gap-8 font-sans text-sm text-[var(--color-brand-onyx)] mb-12 border-y border-[var(--color-brand-muted)]/20 py-4">
            <span><strong>5</strong> Beds</span>
            <span><strong>7</strong> Baths</span>
            <span><strong>12,000</strong> Sq.Ft.</span>
          </div>

          <Link 
            href="/properties/glass-house"
            className="mt-8 relative overflow-hidden group border border-[var(--color-brand-onyx)] px-8 py-5 rounded-full text-xs font-sans uppercase tracking-widest text-[var(--color-brand-onyx)] hover:text-white transition-colors duration-500 w-full md:w-auto self-start flex items-center justify-center"
          >
            {/* The Text and Arrow (Wrapped in z-10 so they stay above the black sweep) */}
            <span className="relative z-10 flex items-center gap-3 transition-transform duration-500 group-hover:scale-105">
              Explore the Gallery
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            
            {/* The "Clearance Scan" black sweep effect on hover */}
            <div className="absolute inset-0 bg-[var(--color-brand-onyx)] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}