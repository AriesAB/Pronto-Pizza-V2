import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downtown Catering Menu | Pronto Pizza Calgary",
  description: "View our Downtown catering menu at 605 5th Ave SW, Calgary. Perfect for corporate events and catering. Pizza, pasta, salads, and more. On-site Monday-Friday 11AM-2PM.",
  keywords: "Downtown Calgary catering, corporate catering Calgary, pizza catering, Pronto Pizza Downtown, 5th and 5th Calgary",
  openGraph: {
    title: "Downtown Catering Menu | Pronto Pizza Calgary",
    description: "Corporate catering and lunch service at our Downtown Calgary location.",
    type: "website",
  },
};

export default function DowntownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
