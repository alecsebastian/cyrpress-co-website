import type { MetadataRoute } from "next";

const origin = "https://realestate.adrocitystudios.com";
const paths = [
  "/", "/the-firm", "/properties", "/advisors", "/insights", "/contact", "/privacy",
  "/properties/glass-house", "/properties/ironwood", "/properties/summit",
  "/insights/family-compound", "/insights/collecting-trophies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${origin}${path}` }));
}
