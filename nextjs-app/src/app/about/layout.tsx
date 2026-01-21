import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Us | Pronto Pizza Calgary - The Bruno Family Story",
  description: "Discover the story behind Pronto Pizza Calgary. From Annibale Bruno's passion for authentic Italian cuisine to the next generation continuing the family legacy in Inglewood and Downtown.",
  keywords: "Pronto Pizza story, Bruno family Calgary, Italian restaurant history, family owned pizza Calgary, authentic Italian cuisine",
  openGraph: {
    title: "About Us | Pronto Pizza Calgary - The Bruno Family Story",
    description: "Discover the story behind Pronto Pizza Calgary. From Annibale Bruno's passion for authentic Italian cuisine to the next generation continuing the family legacy in Inglewood and Downtown.",
    type: "website",
  },
  alternates: {
    canonical: "https://yycpronto.com/about",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://yycpronto.com/#organization",
  name: "Pronto Pizza",
  url: "https://yycpronto.com",
  logo: "https://yycpronto.com/assets/logo.jpg",
  foundingDate: "2016",
  founders: [
    {
      "@type": "Person",
      name: "Annibale Bruno",
    },
  ],
  description: "Family-owned Italian pizza restaurant in Calgary, continuing a tradition of authentic Italian cuisine and hospitality since 2016",
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
  url: "https://yycpronto.com/about",
  mainEntity: {
    "@id": "https://yycpronto.com/#organization",
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
      item: "https://yycpronto.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://yycpronto.com/about",
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
