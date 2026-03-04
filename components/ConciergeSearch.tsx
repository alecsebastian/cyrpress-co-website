"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function PortfolioFilter() {
  const router = useRouter();

  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/properties?type=${propertyType}&loc=${location}&style=${lifestyle}`);
  };

  return (
    <motion.form 
      // THE MAGIC: 'layout' tells Framer Motion to smoothly animate any shape/size changes
      layout
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      onSubmit={handleSearch}
      className={`flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden md:rounded-full md:pl-10 md:pr-4 md:py-3 md:gap-0 ${
        isExpanded 
          ? "rounded-3xl p-6" 
          : "rounded-full p-2" 
      }`}
    >
      
      {/* ==========================================
          MOBILE HEADER / TOGGLE
          ========================================== */}
      <motion.div layout className="w-full flex md:hidden items-center justify-between px-4 py-1">
        <motion.span layout className="text-white/80 font-sans text-sm tracking-widest uppercase">
          {isExpanded ? "Search Portfolio" : "Filter Collection"}
        </motion.span>
        
        <motion.button 
          layout
          type="button" 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:scale-105 transition-transform shrink-0"
          aria-label={isExpanded ? "Close Filters" : "Expand Filters"}
        >
          {isExpanded ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          )}
        </motion.button>
      </motion.div>

      {/* ==========================================
          THE FILTER CONTENT
          ========================================== */}
      {/* CHANGED: We replaced 'hidden' with a combination of h-0, opacity-0, and overflow-hidden.
          This ensures the DOM element is always there, allowing Framer Motion to smoothly animate it! */}
      <motion.div 
        layout
        className={`w-full flex-col md:flex-row items-start md:items-center justify-between md:flex overflow-hidden transition-opacity duration-300 ease-in-out md:h-auto md:opacity-100 md:pointer-events-auto md:mt-0 md:gap-0 ${
          isExpanded 
            ? "flex opacity-100 h-auto mt-6 gap-6 pointer-events-auto" 
            : "flex opacity-0 h-0 mt-0 gap-0 pointer-events-none"
        }`}
      >
        
        {/* 1. Property Type Dropdown */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3 w-full md:w-auto border-b border-white/10 md:border-none pb-3 md:pb-0">
          <span className="relative group text-white/60 font-sans text-xs md:text-sm tracking-wide shrink-0 cursor-default w-max">
            I am seeking a:
          </span>
          <select 
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            required
            className="bg-transparent text-white font-serif text-lg md:text-xl focus:outline-none cursor-pointer appearance-none outline-none w-full md:w-40 lg:w-48"
          >
            <option value="" disabled hidden></option>
            <option value="estate" className="text-black">Legacy Estate</option>
            <option value="compound" className="text-black">Family Compound</option>
            <option value="penthouse" className="text-black">Trophy Penthouse</option>
            <option value="land" className="text-black">Private Acreage</option>
          </select>
        </div>

        {/* 2. Location Dropdown */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3 w-full md:w-auto border-b border-white/10 md:border-none pb-3 md:pb-0 md:border-l md:border-white/20 md:pl-6">
          <span className="relative group text-white/60 font-sans text-xs md:text-sm tracking-wide shrink-0 cursor-default w-max">
            near:
          </span>
          <select 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="bg-transparent text-white font-serif text-lg md:text-xl focus:outline-none cursor-pointer appearance-none outline-none w-full md:w-32 lg:w-40"
          >
            <option value="" disabled hidden></option>
            <option value="global" className="text-black">Global Sanctuary</option>
            <option value="ny" className="text-black">New York</option>
            <option value="ldn" className="text-black">London</option>
            <option value="dxb" className="text-black">Dubai</option>
          </select>
        </div>

        {/* 3. Lifestyle Dropdown */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3 w-full md:w-auto border-b border-white/10 md:border-none pb-3 md:pb-0 md:border-l md:border-white/20 md:pl-6 md:pr-6">
          <span className="relative group text-white/60 font-sans text-xs md:text-sm tracking-wide shrink-0 cursor-default w-max">
            designed for:
          </span>
          <select 
            value={lifestyle}
            onChange={(e) => setLifestyle(e.target.value)}
            required
            className="bg-transparent text-white font-serif text-lg md:text-xl focus:outline-none cursor-pointer appearance-none outline-none w-full md:w-40 lg:w-48"
          >
            <option value="" disabled hidden></option>
            <option value="privacy" className="text-black">Absolute Privacy</option>
            <option value="entertaining" className="text-black">Grand Entertaining</option>
            <option value="art" className="text-black">Art Collecting</option>
            <option value="equestrian" className="text-black">Equestrian Pursuits</option>
          </select>
        </div>

        {/* 4. The Action Button */}
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <button 
            type="submit" 
            className="w-full md:w-14 h-14 flex items-center justify-center bg-white rounded-full hover:scale-105 transition-transform duration-300 shrink-0 group gap-3 md:gap-0 px-6 md:px-0"
            aria-label="Search Portfolio"
          >
            <span className="md:hidden text-black font-sans text-sm font-semibold tracking-widest uppercase">
              Explore
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform duration-300">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </motion.div>
    </motion.form>
  );
}