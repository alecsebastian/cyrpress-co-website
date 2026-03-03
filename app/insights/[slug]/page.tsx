import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PortfolioFooter from "@/components/PortfolioFooter";

// 1. The Article Database (with full body content)
const articleData = {
  "family-compound": {
    title: "The Resurgence of the Private Family Compound",
    category: "Market Intelligence",
    date: "October 12, 2026",
    author: "Elias Kensington",
    readTime: "6 Min Read",
    heroImage: "/glass-house-ext.jpg", // Reusing an existing image
    quote: "The modern family compound is no longer just a retreat; it is a sovereign sanctuary designed to endure for generations.",
    content: [
      "In an era defined by global interconnectivity, the ultimate luxury has paradoxically become isolation. We are witnessing a monumental shift in how ultra-high-net-worth individuals structure their real estate portfolios.",
      "Historically, the pinnacle of status was a penthouse overlooking Central Park or a triplex in Mayfair. Today, while urban pied-à-terres remain essential, the primary focus has shifted toward the multi-generational family compound.",
      "This pivot is driven by two primary factors: absolute privacy and total autonomy. Modern compounds are not just sprawling estates; they are self-sustaining ecosystems. They feature commercial-grade security, independent power grids, private medical suites, and educational facilities.",
      "At Cypress & Co., we have quietly orchestrated a 400% increase in requests for contiguous land parcels exceeding 50 acres, specifically located within a two-hour helicopter flight of major global financial hubs."
    ]
  },
  "collecting-trophies": {
    title: "Collecting Trophies: Art vs. Real Estate",
    category: "Architecture",
    date: "September 28, 2026",
    author: "Julian Thorne",
    readTime: "8 Min Read",
    heroImage: "/ironwood-ext.jpg", 
    quote: "You do not appraise a masterpiece by measuring its canvas. The same rule applies to architectural trophies.",
    content: [
      "When does a house cease to be a dwelling and become a sculpture? For the world's most prolific art collectors, the line between the art on the wall and the wall itself has completely dissolved.",
      "We are seeing a trend where the architectural provenance of a home is scrutinized with the same rigor as the provenance of a Rothko or a Basquiat.",
      "Properties designed by legendary starchitects—Tadao Ando, Zaha Hadid, Richard Meier—are trading at premiums that defy standard real estate valuation models. They are being acquired not based on price-per-square-foot, but on their intrinsic value as limited-edition masterpieces.",
      "This requires a completely different advisory approach. Navigating the acquisition of a living sculpture demands absolute discretion and an intimate understanding of the global art market."
    ]
  }
};

// 2. The Dynamic Page Component
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  
  // Unwrap the URL parameters
  const resolvedParams = await params;
  const article = articleData[resolvedParams.slug as keyof typeof articleData];

  // If the article URL doesn't match our database, show 404
  if (!article) return notFound();

  return (
    <main className="w-full bg-white">
      
      {/* 1. EDITORIAL HEADER */}
      <section data-theme="light" className="w-full pt-48 pb-20 px-12 max-w-[1000px] mx-auto text-center">
        <span className="text-[var(--color-brand-onyx)] font-sans text-xs uppercase tracking-widest font-bold mb-8 block">
          {article.category} // {article.readTime}
        </span>
        
        <h1 className="font-serif text-5xl md:text-7xl text-[var(--color-brand-onyx)] leading-tight mb-12">
          {article.title}
        </h1>
        
        <div className="flex items-center justify-center gap-6 font-sans text-sm uppercase tracking-widest text-[var(--color-brand-charcoal)]">
          <span>By {article.author}</span>
          <span className="w-1 h-1 bg-black/20 rounded-full"></span>
          <span>{article.date}</span>
        </div>
      </section>

      {/* 2. HERO IMAGE */}
      <section data-theme="light" className="w-full px-12 max-w-[1440px] mx-auto mb-20">
        <div className="relative w-full aspect-[21/9] bg-gray-200 overflow-hidden shadow-xl">
          <Image 
            src={article.heroImage} 
            alt={article.title} 
            fill 
            priority
            className="object-cover" 
          />
        </div>
      </section>

      {/* 3. THE READING EXPERIENCE */}
      <section data-theme="light" className="w-full px-12 pb-32">
        {/* We restrict the width to max-w-3xl (approx 768px) because lines of text that are too long cause eye fatigue! */}
        <div className="max-w-3xl mx-auto">
          
          {/* First paragraph with a classic Editorial Drop-Cap */}
          <p className="text-xl md:text-2xl font-light text-[var(--color-brand-charcoal)] leading-relaxed font-sans mb-10 first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:text-[var(--color-brand-onyx)] first-letter:mt-2">
            {article.content[0]}
          </p>

          {/* Subsequent paragraphs */}
          <p className="text-xl md:text-2xl font-light text-[var(--color-brand-charcoal)] leading-relaxed font-sans mb-16">
            {article.content[1]}
          </p>

          {/* Cinematic Pull Quote */}
          <div className="my-20 py-10 border-t-2 border-b-2 border-black/10 text-center px-8">
            <h3 className="text-3xl md:text-5xl font-serif text-[var(--color-brand-onyx)] leading-snug">
              "{article.quote}"
            </h3>
          </div>

          {/* Remaining content */}
          {article.content.slice(2).map((paragraph, index) => (
            <p key={index} className="text-xl md:text-2xl font-light text-[var(--color-brand-charcoal)] leading-relaxed font-sans mb-10">
              {paragraph}
            </p>
          ))}

        </div>
      </section>

      {/* 4. BACK TO INDEX CTA */}
      <section data-theme="light" className="w-full py-20 border-t border-black/10 text-center bg-[var(--color-brand-offwhite)]">
        <Link 
          href="/insights" 
          className="inline-flex px-10 py-5 rounded-full border border-[var(--color-brand-onyx)]/30 text-[var(--color-brand-onyx)] font-sans text-xs uppercase tracking-widest hover:bg-[var(--color-brand-onyx)] hover:text-white transition-all duration-500 items-center gap-4 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          Return to Journal
        </Link>
      </section>

      {/* 5. PORTFOLIO FOOTER */}
      <PortfolioFooter />

    </main>
  );
}