"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  // This state holds our current theme (defaults to dark for the hero)
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  
  // NEW: State for the mobile menu
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    // 1. Find all sections that have a 'data-theme' tag
    const sections = document.querySelectorAll("[data-theme]");

    // 2. Set up the "sensor" to trigger when a section hits the top 10% of the screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTheme(entry.target.getAttribute("data-theme") as "dark" | "light");
          }
        });
      },
      { rootMargin: "-10% 0px -90% 0px" } // The sensor tripwire
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Set up our color palettes based on the active theme
  const isLight = theme === "light";
  
  const glassBg = isLight ? "bg-white/40" : "bg-black/20";
  const glassBorder = isLight ? "border-black/10" : "border-white/20";
  const textColor = isLight ? "text-[var(--color-brand-onyx)]" : "text-white";
  const hoverBg = isLight ? "hover:bg-[var(--color-brand-onyx)] hover:text-white" : "hover:bg-white hover:text-black";

  // Force text to be white when the mobile menu is open so it contrasts with the dark overlay
  const dynamicTextColor = isMobileOpen ? "text-white" : textColor;

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-center pt-6 md:pt-8 px-6 md:px-12 pointer-events-none"
    >
      {/* Left Aligned Brand Wordmark */}
      <div className="absolute left-6 md:left-12 pointer-events-auto z-[60]">
        <Link 
          href="/" 
          onClick={() => setIsMobileOpen(false)}
          className={`font-sans font-bold tracking-tighter uppercase text-xl md:text-2xl transition-colors duration-700 hover:opacity-70 ${dynamicTextColor}`}
        >
          CYPRESS & CO.
        </Link>
      </div>
      
      {/* Centered Glass Pill Menu (Hidden on Mobile) */}
      <motion.nav 
        layout
        className={`hidden md:flex pointer-events-auto items-center gap-10 px-10 py-3 rounded-full border backdrop-blur-md shadow-lg transition-all duration-700 ease-in-out ${glassBg} ${glassBorder}`}
      >
        {["The Firm", "Properties", "Advisors", "Insights"].map((item) => (
          <Link 
            key={item} 
            href={`/${item.toLowerCase().replace(" ", "-")}`}
            className={`relative group text-xs font-sans tracking-widest uppercase transition-colors duration-700 ease-in-out opacity-80 hover:opacity-100 ${textColor}`}
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>
        ))}
      </motion.nav>
      
      {/* Right Aligned Contact Button (Hidden on Mobile) */}
      <div className="hidden md:block absolute right-12 pointer-events-auto z-[60]">
        <Link 
          href="/contact"
          className={`px-6 py-3 rounded-full border text-xs font-sans tracking-widest uppercase transition-all duration-700 ease-in-out ${glassBg} ${glassBorder} ${textColor} ${hoverBg}`}
        >
          Contact Us
        </Link>
      </div>

      {/* NEW: Hamburger Button for Mobile */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className={`md:hidden absolute right-6 pointer-events-auto z-[60] p-2 transition-colors duration-700 ${dynamicTextColor}`}
        aria-label="Toggle Menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {isMobileOpen ? (
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <path d="M4 8h16M4 16h16" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </svg>
      </button>

      {/* NEW: Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-screen bg-[#111111]/95 backdrop-blur-2xl z-[50] pointer-events-auto flex flex-col items-center justify-center gap-10"
          >
            {["The Firm", "Properties", "Advisors", "Insights", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsMobileOpen(false)}
                // Added 'relative group w-max' so the container tightly wraps the text for the underline
                className="relative group w-max text-white text-3xl font-serif tracking-wide hover:opacity-100 transition-opacity"
              >
                {item}
                {/* The animated white underline! */}
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}