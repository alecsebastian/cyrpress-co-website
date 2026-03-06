import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PropertyGalleryClient from "./PropertyGalleryClient";

// 1. The Expanded Property Database (Kept safely on the server)
const propertyData = {
  "glass-house": {
    title: "The Glass House",
    price: "$12,500,000",
    accommodations: "5 En-Suite Bedrooms",
    bathing: "7 Full, 2 Half Baths",
    scale: "12,000 Interior Sq. Ft.",
    grounds: "2.4 Private Acres",
    headline: "A Masterclass in Organic Modernism.",
    description: "Hovering above the pulse of the city, this sprawling residence offers a rare convergence of metropolitan energy and absolute tranquility. Every finish has been meticulously sourced—from the book-matched marble in the culinary gallery to the bespoke brass accents—creating an environment of quiet, undeniable power.",
    details: [
      "Book-matched Calacatta marble gallery",
      "1,000-bottle climate-controlled wine room",
      "Fully integrated Lutron smart-home system",
      "Private heated motor court"
    ],
    images: [
      "/glass-house/feature_strip1.jpg", 
      "/glass-house/feature_strip2.jpg", 
      "/glass-house/feature_strip3.jpg", 
      "/glass-house/feature_strip4.jpg", 
      "/glass-house/feature_strip5.jpg", 
      "/glass-house/feature_strip6.jpg"
    ] 
  },
  "ironwood": {
    title: "The Ironwood Sanctuary",
    price: "$8,950,000",
    accommodations: "4 En-Suite Bedrooms",
    bathing: "5 Full, 1 Half Baths",
    scale: "8,500 Interior Sq. Ft.",
    grounds: "12 Private Acres",
    headline: "Where Boundaries Dissolve.",
    description: "Clad in blackened timber and expansive glass, designed to disappear into the surrounding forest canopy while offering an uncompromising standard of living. Floor-to-ceiling glass volumes retract to reveal an expansive private terrace.",
    details: [
      "Reclaimed century-old timber beams",
      "Geothermal climate control system",
      "Private helipad access potential",
      "Custom blackened steel fireplaces"
    ],
    images: [
      "/ironwood/wooden_interiors_1.jpg", 
      "/ironwood/wooden_interiors_2.jpg", 
      "/ironwood/wooden_interiors_3.jpg", 
      "/ironwood/wooden_interiors_4.jpg", 
      "/ironwood/wooden_interiors_5.jpg",
    ] 
  },
  "summit": {
    title: "The Summit at Grand",
    price: "$18,200,000",
    accommodations: "3 En-Suite Bedrooms",
    bathing: "4 Full, 1 Half Baths",
    scale: "6,200 Interior Sq. Ft.",
    grounds: "Private Rooftop Terrace",
    headline: "The City, Curated.",
    description: "Designed for the ultimate cosmopolitan lifestyle, The Summit features a sweeping open-plan gallery, a bespoke marble wet bar, and a private terrace that turns the skyline into your personal backdrop.",
    details: [
      "Private elevator vestibule",
      "Bespoke brass and marble wet bar",
      "Automated retracting glass walls",
      "Radiant heated flooring throughout"
    ],
    images: [
      "/penthouse/penthouse_interior_1.jpg", 
      "/penthouse/penthouse_interior_2.jpg", 
      "/penthouse/penthouse_interior_3.jpg", 
      "/penthouse/penthouse_interior_4.jpg", 
      "/penthouse/penthouse_interior_5.jpg",
    ] 
  }
};

// 2. Dynamic Metadata Generator
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const property = propertyData[resolvedParams.slug as keyof typeof propertyData];

  if (!property) {
    return { title: "Property Not Found | Cypress & Co." };
  }

  return {
    title: property.title,
    description: property.description,
    openGraph: {
      title: `${property.title} | Cypress & Co.`,
      description: property.headline,
      images: [
        {
          url: property.images[0],
          width: 1200,
          height: 630,
          alt: `${property.title} exterior view`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${property.title} | Cypress & Co.`,
      description: property.headline,
      images: [property.images[0]],
    },
  };
}

// 3. The Server Page Component
export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const property = propertyData[resolvedParams.slug as keyof typeof propertyData];

  // If URL is invalid, trigger the Next.js 404 page
  if (!property) return notFound();

  // Pass the raw data down to our interactive client component!
  return <PropertyGalleryClient property={property} />;
}