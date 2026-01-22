import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Downtown Catering Menu | Pronto Pizza Calgary",
  description: "Downtown Calgary catering at 605 5th Ave SW. Corporate catering, pizza, pasta, and pagnotta for events and meetings. Order online or call for custom packages.",
  keywords: "Downtown Calgary catering, corporate catering Calgary, pizza catering, Pronto Pizza Downtown, 5th and 5th Calgary",
  alternates: {
    canonical: "https://yycpronto.com/downtown",
  },
  openGraph: {
    title: "Downtown Catering Menu | Pronto Pizza Calgary",
    description: "Corporate catering and lunch service at our Downtown Calgary location.",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://yycpronto.com/downtown",
  name: "Pronto Pizza - 5th & 5th",
  image: "https://yycpronto.com/assets/pronto-logo.png",
  logo: "https://yycpronto.com/assets/pronto-logo.png",
  url: "https://yycpronto.com/downtown",
  telephone: "+1-403-993-9093",
  priceRange: "$$",
  servesCuisine: ["Italian", "Pizza", "Catering"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "605 5th Ave SW",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T2P 0M5",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.0447,
    longitude: -114.0719,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      name: "On-site",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      name: "Catering",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
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
      name: "Downtown",
      item: "https://yycpronto.com/downtown",
    },
  ],
};

export default function DowntownLayout({
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
