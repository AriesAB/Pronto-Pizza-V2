import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inglewood Menu | Pronto Pizza Calgary",
  description: "View our Inglewood location menu. Authentic Italian pizza, antipasti, panini, and more at 1139 9th Ave SE, Calgary. Open Sunday-Thursday 4PM-10PM, Friday-Saturday 4PM-12AM.",
  keywords: "Inglewood pizza, Calgary pizza menu, Italian restaurant Inglewood, Pronto Pizza menu, pizza near me Calgary",
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
