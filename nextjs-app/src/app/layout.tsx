import type { Metadata } from "next";
import { Anton, Syne, Permanent_Marker, Courier_Prime } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  display: "swap",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yycpronto.com"),
  title: "Pronto Pizza | Calgary",
  description: "Authentic Italian pizza in Calgary. Visit our Inglewood and Downtown locations for delicious pizza, fresh panini, and classic Italian favourites made with care.",
  keywords: "pizza, Calgary, Italian food, Inglewood, Downtown, Pronto Pizza, authentic Italian, panini",
  authors: [{ name: "PRONTO Pizza" }],
  openGraph: {
    title: "Pronto Pizza | Calgary",
    description: "Authentic Italian pizza in Calgary. Visit our Inglewood and Downtown locations.",
    type: "website",
    locale: "en_CA",
    siteName: "Pronto Pizza",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pronto Pizza | Calgary",
    description: "Authentic Italian pizza in Calgary. Visit our Inglewood and Downtown locations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${syne.variable} ${permanentMarker.variable} ${courierPrime.variable}`}>
      <body className="antialiased">
        <div className="bg-pronto-navy h-screen flex flex-col text-pronto-cream font-sans selection:bg-pronto-orange selection:text-white">
          <Navbar />
          <main className="flex-1 relative overflow-y-auto overflow-x-hidden no-scrollbar">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
