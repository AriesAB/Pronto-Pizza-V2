import type { Metadata } from "next";
import Script from "next/script";

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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://yycpronto.com/inglewood",
  name: "Pronto Pizza - Inglewood",
  image: "https://yycpronto.com/assets/pronto-logo.png",
  url: "https://yycpronto.com/inglewood",
  telephone: "+1-403-993-9093",
  priceRange: "$$",
  servesCuisine: ["Italian", "Pizza"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1139 9 Ave SE",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T2G 0T3",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.036,
    longitude: -114.0497,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "12:00",
      closes: "22:00",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://yycpronto.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Inglewood",
      item: "https://yycpronto.com/inglewood",
    },
  ],
};

export default function InglewoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
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
