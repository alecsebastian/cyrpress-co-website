import Link from "next/link";
import PortfolioFooter from "@/components/PortfolioFooter";

export default function NotFound() {
  return (
    <main className="w-full bg-[#111111] min-h-screen flex flex-col justify-between pt-48">
      <section className="flex-grow flex flex-col items-center justify-center px-12 text-center">
        <span className="text-white/40 font-sans text-xs uppercase tracking-[0.4em] mb-8 block">
          Error 404 // Clearance Required
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-8">
          Dossier Unavailable
        </h1>
        <p className="text-lg text-white/60 font-light font-sans max-w-xl mx-auto mb-12 leading-relaxed">
          The portfolio asset you are attempting to access has been archived, securely transferred, or requires an executed NDA for viewing.
        </p>
        <Link 
          href="/" 
          className="inline-flex px-10 py-5 border border-white/30 text-white font-sans text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 items-center gap-4 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          Return to Main Portfolio
        </Link>
      </section>
      
      {/* Keeps the footer at the bottom of the screen */}
      <PortfolioFooter />
    </main>
  );
}