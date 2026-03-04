"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GallerySection from "@/components/GallerySection"; 
import IronwoodSection from "@/components/IronwoodSection"; 
import SummitSection from "@/components/SummitSection"; 
import ConciergeSearch from "@/components/ConciergeSearch";
import PortfolioFooter from "@/components/PortfolioFooter";
import CaseStudies from "@/components/CaseStudies";

export default function Home() {
  
  // Smooth scroll function for our new cinematic button
  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <main className="w-full">
      
      {/* 1. THE HERO SECTION */}
      <section data-theme="dark" className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden">
        
        {/* Background Image & Dark Overlay (Darkened slightly at the top/bottom for better text contrast on mobile) */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-landing.jpg" 
            alt="Luxury Architecture at Dusk" 
            fill 
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10"></div>
        </div>

        {/* Content Container (Adjusted to px-6 on mobile, px-12 on desktop) */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-24 md:pt-32 flex flex-col justify-center h-full">
          
          {/* The Concierge Search Pill (Added margin-bottom to separate it from the text on mobile) */}
          <div className="mb-12 md:mb-16">
            <ConciergeSearch />
          </div>

          {/* The Hero Typography (Fluid sizing so it doesn't break on a phone screen!) */}
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl sm:text-7xl md:text-[90px] text-white leading-[1.1] mb-6 md:mb-8">
              The Art of <br /> Living, Refined.
            </h1>
            <p className="font-sans text-lg md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light">
              Where visionary design meets unparalleled craftsmanship. Your lifestyle, meticulously rendered in stone and glass.
            </p>
          </div>

        </div>

        

      </section>

      {/* 2. THE COLLECTION SECTION */}
      <GallerySection />
      <IronwoodSection />
      <SummitSection />
      <CaseStudies />
      <PortfolioFooter />

    </main>
  );
}
