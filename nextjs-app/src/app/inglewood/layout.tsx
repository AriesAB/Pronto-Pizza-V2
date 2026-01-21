import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inglewood Menu | Pronto Pizza Calgary",
  description: "Visit our Inglewood location at 1139 9 Ave SE for authentic Italian pizza, panini, and antipasti. Dine-in, takeout, and catering available.",
  keywords: "Inglewood pizza, Calgary pizza menu, Italian restaurant Inglewood, Pronto Pizza menu, pizza near me Calgary",
  alternates: {
    canonical: "https://yycpronto.com/inglewood",
  },
  openGraph: {
    title: "Inglewood Menu | Pronto Pizza Calgary",
    description: "Authentic Italian pizza, antipasti, panini, and more at our Inglewood location.",
    type: "website",
  },
};

export default function InglewoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
