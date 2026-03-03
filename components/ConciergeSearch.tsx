"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function PortfolioFilter() {
  const router = useRouter();

  // 1. Set the initial state to blank ("") so the containers start empty
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [lifestyle, setLifestyle] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/properties?type=${propertyType}&loc=${location}&style=${lifestyle}`);
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto rounded-[2rem] md:rounded-full bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 px-8 md:pl-10 md:pr-4 py-8 md:py-3 shadow-2xl gap-8 md:gap-0"
    >
      
      {/* 1. Property Type Dropdown */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3 w-full md:w-auto">
        {/* Added 'relative group cursor-default w-max' and the animated line span */}
        <span className="relative group text-white/60 font-sans text-xs md:text-sm tracking-wide shrink-0 cursor-default w-max">
          I am seeking a:
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white/60 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </span>
        <select 
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          required
          // Removed the border-b underline properties
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
      <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3 md:border-l md:border-white/20 md:pl-6 w-full md:w-auto">
        <span className="relative group text-white/60 font-sans text-xs md:text-sm tracking-wide shrink-0 cursor-default w-max">
          near:
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white/60 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
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
      <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3 md:border-l md:border-white/20 md:pl-6 md:pr-6 w-full md:w-auto">
        <span className="relative group text-white/60 font-sans text-xs md:text-sm tracking-wide shrink-0 cursor-default w-max">
          designed for:
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white/60 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
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
      <button 
        type="submit" 
        className="w-full md:w-14 h-14 mt-4 md:mt-0 flex items-center justify-center bg-white rounded-full hover:scale-105 transition-transform duration-300 shrink-0 group"
        aria-label="Search Portfolio"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="black" 
          strokeWidth="1.5"
          className="group-hover:translate-x-1 transition-transform duration-300"
        >
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

    </form>
  );
}