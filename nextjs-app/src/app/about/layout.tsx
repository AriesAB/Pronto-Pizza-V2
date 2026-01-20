import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Us | Pronto Pizza Calgary",
  description: "Learn about the Bruno family and the story behind PRONTO Pizza. From our father Annibale's decades of restaurant experience to the next generation carrying on the tradition in Calgary.",
  keywords: "Pronto Pizza story, Bruno family Calgary, Italian restaurant history, family owned pizza Calgary",
  openGraph: {
    title: "About Us | Pronto Pizza Calgary",
    description: "The Bruno family story - more than just pizza, it's family, tradition, and hospitality.",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://yycpronto.vercel.app/#organization",
  name: "Pronto Pizza",
  url: "https://yycpronto.vercel.app",
  logo: "https://yycpronto.vercel.app/assets/logo.jpg",
  foundingDate: "2022",
  founders: [
    {
      "@type": "Person",
      name: "Bruno Family",
    },
  ],
  description: "Family-owned Italian pizza restaurant in Calgary, continuing a tradition of authentic Italian cuisine and hospitality since 2022",
  slogan: "More than just pizza - it's family, tradition, and hospitality",
  areaServed: {
    "@type": "Place",
    name: "Calgary, AB, Canada",
  },
  knowsAbout: ["Italian Cuisine", "Pizza", "Family Dining", "Catering"],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Pronto Pizza",
  description: "The Bruno family story - more than just pizza, it's family, tradition, and hospitality",
  url: "https://yycpronto.vercel.app/about",
  mainEntity: {
    "@id": "https://yycpronto.vercel.app/#organization",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://yycpronto.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://yycpronto.vercel.app/about",
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="aboutpage-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {children}
    </>
  );
}
