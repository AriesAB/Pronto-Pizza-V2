import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Pronto Pizza Calgary",
  description: "Get in touch with Pronto Pizza. Find our Inglewood and Downtown locations, hours of operation, phone number, and social media. We'd love to hear from you!",
  keywords: "contact Pronto Pizza, Calgary pizza phone number, Inglewood restaurant hours, Downtown Calgary pizza location",
  openGraph: {
    title: "Contact Us | Pronto Pizza Calgary",
    description: "Find our locations, hours, and get in touch with Pronto Pizza Calgary.",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Pronto Pizza",
  description: "Find our locations, hours, and get in touch with Pronto Pizza Calgary",
  url: "https://yycpronto.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Pronto Pizza",
  },
};

const contactPointSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pronto Pizza",
  telephone: "+1-403-993-9093",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-403-993-9093",
    contactType: "customer service",
    areaServed: "CA",
    availableLanguage: ["English", "Italian"],
  },
  location: [
    {
      "@type": "Place",
      name: "Pronto Pizza Inglewood",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1139 9 Ave SE",
        addressLocality: "Calgary",
        addressRegion: "AB",
        postalCode: "T2G 0T3",
        addressCountry: "CA",
      },
    },
    {
      "@type": "Place",
      name: "Pronto Pizza Downtown",
      address: {
        "@type": "PostalAddress",
        streetAddress: "605 5th Ave SW",
        addressLocality: "Calgary",
        addressRegion: "AB",
        postalCode: "T2P 0M6",
        addressCountry: "CA",
      },
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
      name: "Contact Us",
      item: "https://yycpronto.com/contact",
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
