"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdvisoryInvitation() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  
  // NEW: State for handling the form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasDismissed) return;

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = scrolled / scrollHeight;

      if (scrollPercentage > 0.5 && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasDismissed, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    setHasDismissed(true); 
  };

  // NEW: The form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // After showing the success message for 3 seconds, close the modal completely
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-8 z-[100] w-[380px] bg-[#111111]/95 backdrop-blur-xl border border-white/10 p-8 shadow-2xl flex flex-col gap-6"
        >
          {/* Subtle Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Conditional Rendering: Show Success Message OR the Form */}
          {isSuccess ? (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="flex flex-col items-center justify-center text-center py-6"
             >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-white mb-2">Request Secured</h3>
                <p className="text-xs font-light text-white/60 font-sans leading-relaxed">
                  A managing partner will contact you shortly.
                </p>
             </motion.div>
          ) : (
            <>
              {/* Invitation Header */}
              <div>
                <span className="text-white/40 font-sans text-[10px] uppercase tracking-[0.3em] block mb-2">
                  Private Advisory
                </span>
                <h3 className="text-2xl font-serif text-white leading-snug">
                  Require specialized representation?
                </h3>
              </div>

              <p className="text-sm font-light text-white/60 font-sans leading-relaxed">
                Connect directly with a managing partner to discuss off-market acquisitions and portfolio strategy.
              </p>

              {/* Minimalist Form */}
              <form className="flex flex-col gap-4 mt-2" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-sans text-sm placeholder:text-white/30 focus:outline-none focus:border-white transition-colors disabled:opacity-50"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-sans text-sm placeholder:text-white/30 focus:outline-none focus:border-white transition-colors disabled:opacity-50"
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full bg-white text-black py-4 font-sans text-xs uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors disabled:bg-white/50 disabled:cursor-wait"
                >
                  {isSubmitting ? "Establishing Connection..." : "Request Connection"}
                </button>
              </form>
            </>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
}