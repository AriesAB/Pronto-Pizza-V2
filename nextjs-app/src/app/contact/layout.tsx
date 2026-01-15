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
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
