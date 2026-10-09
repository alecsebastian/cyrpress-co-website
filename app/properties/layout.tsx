import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties",
  alternates: { canonical: "/properties" },
  openGraph: { url: "/properties", images: ["/og-image.png"] },
};

export default function PropertiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
