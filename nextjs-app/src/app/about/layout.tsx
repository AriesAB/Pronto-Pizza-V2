import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pronto Pizza Calgary",
  description: "Learn about the Bruno family and the story behind PRONTO Pizza. From our father Annibale's decades of restaurant experience to the next generation carrying on the tradition in Calgary.",
  keywords: "Pronto Pizza story, Bruno family Calgary, Italian restaurant history, family owned pizza Calgary",
  openGraph: {
    title: "About Us | Pronto Pizza Calgary",
    description: "The Bruno family story - more than just pizza, it's family, tradition, and hospitality.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
