import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  alternates: { canonical: "/insights" },
  openGraph: { url: "/insights", images: ["/og-image.png"] },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
