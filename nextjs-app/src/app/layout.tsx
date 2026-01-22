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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Pronto Pizza | Calgary",
    description: "Authentic Italian pizza in Calgary. Visit our Inglewood and Downtown locations.",
    type: "website",
    locale: "en_CA",
    siteName: "Pronto Pizza",
    images: [
      {
        url: "/assets/pronto-logo.png",
        width: 1080,
        height: 330,
        alt: "Pronto Pizza Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pronto Pizza | Calgary",
    description: "Authentic Italian pizza in Calgary. Visit our Inglewood and Downtown locations.",
    images: ["/assets/pronto-logo.png"],
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
