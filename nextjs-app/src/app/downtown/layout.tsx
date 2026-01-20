import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downtown Catering Menu | Pronto Pizza Calgary",
  description: "Downtown Calgary catering at 605 5th Ave SW. Corporate catering, pizza, pasta, and pagnotta for events and meetings. Order online or call for custom packages.",
  keywords: "Downtown Calgary catering, corporate catering Calgary, pizza catering, Pronto Pizza Downtown, 5th and 5th Calgary",
  alternates: {
    canonical: "/downtown",
  },
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
