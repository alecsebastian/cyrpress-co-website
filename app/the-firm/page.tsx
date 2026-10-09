import Image from "next/image";
import FirmContent from "@/components/FirmComponent";
import PortfolioFooter from "@/components/PortfolioFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Firm",
  alternates: { canonical: "/the-firm" },
  openGraph: { url: "/the-firm", images: ["/og-image.png"] },
};

export default function FirmPage() {
  return (
    <main className="w-full">

      {/* 1. THE MANIFESTO HERO */}
      {/* Notice the data-theme="dark" tag! Our navbar will instantly turn white here. */}
      <section data-theme="dark" className="relative h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Background Staircase Image & Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-staircase.jpg" 
            alt="The Cypress & Co. Legacy Staircase" 
            fill 
            priority
            className="object-cover"
          />
          {/* A heavy gradient to make the manifesto text absolute pure white and readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--color-brand-onyx)] z-10"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-12 pt-32">
          
          <div className="max-w-5xl mx-auto text-center">
            {/* The Eyebrow */}
            <span className="text-white/60 font-sans text-sm uppercase tracking-[0.3em] mb-8 block">
              The Firm
            </span>
            
            {/* The Manifesto */}
            <h1 className="font-serif text-6xl md:text-[100px] text-white leading-tight mb-12">
              We do not list homes.<br />
              <span className="italic opacity-90">We curate legacies.</span>
            </h1>
            
            <p className="font-sans text-xl md:text-2xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
              Cypress & Co. was founded on a singular premise: the most extraordinary properties in the world require a level of representation that transcends traditional real estate.
            </p>
          </div>

        </div>
      </section>

      {/* The rest of the page will go here! */}
        <FirmContent />
        <PortfolioFooter />

    </main>
  );
}