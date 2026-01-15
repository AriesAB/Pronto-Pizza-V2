import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Syne:wght@400;700;800&family=Permanent+Marker&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
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
