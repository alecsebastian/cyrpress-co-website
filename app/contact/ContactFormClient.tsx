"use client";

import { useActionState } from "react";
import { submitInquiry } from "@/app/actions/contact";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ContactFormClient() {
  const [state, formAction, isPending] = useActionState(submitInquiry, undefined);

  return (
    // We set data-theme="light" so the global Navbar turns dark (frosted white glass/black text) 
    // to contrast nicely with the right side of the screen where the user is looking.
    <main data-theme="light" className="relative w-full min-h-screen flex flex-col md:flex-row bg-[var(--color-brand-offwhite)]">
      
      {/* -- LEFT COLUMN: THE ATMOSPHERE -- */}
      <section className="relative w-full md:w-[45%] min-h-[50vh] md:min-h-screen flex flex-col justify-end p-12 md:p-20 overflow-hidden text-white shadow-2xl z-10">
        <Image 
          src="/contact/hero.jpg" 
          fill 
          className="object-cover" 
          alt="Cypress & Co. Private Advisory" 
          priority
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

        <div className="relative z-10 flex flex-col gap-12 mt-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">Private<br/>Advisory</h1>
            <p className="font-sans font-light text-white/70 max-w-sm text-lg leading-relaxed">
              For acquisitions, dispositions, and exclusive access to our unlisted portfolio.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="flex flex-col gap-6 font-sans text-xs uppercase tracking-[0.2em] text-white/50"
          >
            <div>
              <strong className="text-white block mb-1">New York</strong>
              <p>100 Avenue of the Americas</p>
            </div>
            <div>
              <strong className="text-white block mb-1">London</strong>
              <p>15 Savile Row</p>
            </div>
            <div>
              <strong className="text-white block mb-1">Dubai</strong>
              <p>ICD Brookfield Place</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- RIGHT COLUMN: THE INQUIRY FORM -- */}
      <section className="relative w-full md:w-[55%] min-h-screen flex items-center justify-center p-12 md:p-24 pt-32 md:pt-24">
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.3 }} 
          className="w-full max-w-lg relative"
        >
           {/* AnimatePresence allows the form to fade out and the success message to fade in */}
           <AnimatePresence mode="wait">
             {state?.success ? (
               <motion.div 
                 key="success"
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 transition={{ duration: 0.5 }}
                 className="p-12 border border-[var(--color-brand-onyx)]/20 bg-white text-center flex flex-col items-center shadow-lg"
               >
                 <div className="w-16 h-16 rounded-full bg-[var(--color-brand-onyx)] flex items-center justify-center mb-8">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                     <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </div>
                 <h2 className="text-3xl font-serif text-[var(--color-brand-onyx)] mb-4">Request Secured</h2>
                 <p className="text-[var(--color-brand-charcoal)] font-light leading-relaxed">
                   {state.message}
                 </p>
               </motion.div>
             ) : (
               <motion.div 
                 key="form"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.5 }}
               >
                  <h2 className="text-xs font-sans uppercase tracking-[0.3em] text-[var(--color-brand-muted)] mb-16 block border-b border-[var(--color-brand-muted)]/20 pb-4">
                    Submit an Inquiry
                  </h2>

                  {/* Connected the formAction here! */}
                  <form action={formAction} className="flex flex-col gap-12">

                    {/* Floating Label Input: Name */}
                    <div className="relative group">
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required 
                        disabled={isPending}
                        placeholder=" " 
                        className="peer w-full border-b border-[var(--color-brand-muted)]/40 bg-transparent py-2 text-[var(--color-brand-onyx)] font-sans focus:border-[var(--color-brand-onyx)] focus:outline-none transition-colors rounded-none disabled:opacity-50" 
                      />
                      <label 
                        htmlFor="name" 
                        className="absolute left-0 -top-5 cursor-text text-[10px] uppercase tracking-widest text-[var(--color-brand-onyx)] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[var(--color-brand-muted)] peer-focus:-top-5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[var(--color-brand-onyx)]"
                      >
                        Full Name
                      </label>
                    </div>

                    {/* Floating Label Input: Email */}
                    <div className="relative group">
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required 
                        disabled={isPending}
                        placeholder=" " 
                        className="peer w-full border-b border-[var(--color-brand-muted)]/40 bg-transparent py-2 text-[var(--color-brand-onyx)] font-sans focus:border-[var(--color-brand-onyx)] focus:outline-none transition-colors rounded-none disabled:opacity-50" 
                      />
                      <label 
                        htmlFor="email" 
                        className="absolute left-0 -top-5 cursor-text text-[10px] uppercase tracking-widest text-[var(--color-brand-onyx)] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[var(--color-brand-muted)] peer-focus:-top-5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[var(--color-brand-onyx)]"
                      >
                        Email Address
                      </label>
                    </div>

                    {/* Floating Label Input: Phone */}
                    <div className="relative group">
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        disabled={isPending}
                        placeholder=" " 
                        className="peer w-full border-b border-[var(--color-brand-muted)]/40 bg-transparent py-2 text-[var(--color-brand-onyx)] font-sans focus:border-[var(--color-brand-onyx)] focus:outline-none transition-colors rounded-none disabled:opacity-50" 
                      />
                      <label 
                        htmlFor="phone" 
                        className="absolute left-0 -top-5 cursor-text text-[10px] uppercase tracking-widest text-[var(--color-brand-onyx)] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[var(--color-brand-muted)] peer-focus:-top-5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[var(--color-brand-onyx)]"
                      >
                        Phone Number (Optional)
                      </label>
                    </div>

                    {/* Custom Minimalist Dropdown */}
                    <div className="relative group mt-2">
                      <select 
                        id="inquiryType" 
                        name="inquiryType"
                        required 
                        disabled={isPending}
                        defaultValue=""
                        className="w-full border-b border-[var(--color-brand-muted)]/40 bg-transparent py-2 text-[var(--color-brand-onyx)] font-sans focus:border-[var(--color-brand-onyx)] focus:outline-none transition-colors appearance-none cursor-pointer rounded-none disabled:opacity-50"
                      >
                        <option value="" disabled hidden>Nature of Inquiry</option>
                        <option value="acquisition">Property Acquisition</option>
                        <option value="disposition">Property Disposition</option>
                        <option value="portfolio">Private Portfolio Access</option>
                        <option value="press">Media & Press</option>
                      </select>
                      {/* Custom SVG arrow to replace the ugly default browser dropdown arrow */}
                      <div className="absolute right-0 top-3 pointer-events-none text-[var(--color-brand-onyx)]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Error Message Display */}
                    {state?.success === false && (
                      <p className="text-red-700 font-sans text-sm mt-[-1rem]">{state.message}</p>
                    )}

                    {/* SECURITY & VETTING PROTOCOL */}
                    <div className="mt-4 p-6 bg-black/5 border-l-2 border-[var(--color-brand-onyx)]">
                      <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[var(--color-brand-onyx)] mb-2 font-bold">
                        Security & Vetting Protocol
                      </h3>
                      <p className="text-sm font-light text-[var(--color-brand-charcoal)] leading-relaxed">
                        Cypress & Co. operates under strict non-disclosure agreements. All prospective clients are subject to a rigorous financial vetting process prior to the release of structural dossiers, exact coordinates, or private viewing schedules.
                      </p>
                    </div>
                    
                    {/* Cinematic Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isPending}
                      className="mt-8 relative overflow-hidden group border border-[var(--color-brand-onyx)] px-8 py-5 rounded-full text-xs font-sans uppercase tracking-widest text-[var(--color-brand-onyx)] hover:text-white transition-colors duration-500 w-full md:w-auto self-start disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 block transition-transform duration-500 group-hover:scale-105">
                        {/* Dynamic Button Text */}
                        {isPending ? "Verifying..." : "Request Consultation"}
                      </span>
                      
                      {/* Only show the hover effect if the form is NOT pending */}
                      {!isPending && (
                        <div className="absolute inset-0 bg-[var(--color-brand-onyx)] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
                      )}
                    </button>

                  </form>
               </motion.div>
             )}
           </AnimatePresence>
        </motion.div>
      </section>

    </main>
  );
}