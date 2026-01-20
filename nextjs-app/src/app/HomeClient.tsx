'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import Script from 'next/script';

const restaurantSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": "https://yycpronto.vercel.app/#inglewood",
      "name": "Pronto Pizza - Inglewood",
      "image": "https://yycpronto.vercel.app/assets/logo.jpg",
      "url": "https://yycpronto.vercel.app/inglewood",
      "telephone": "+1-403-555-1234",
      "priceRange": "$$",
      "servesCuisine": ["Italian", "Pizza"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1139 9th Ave SE",
        "addressLocality": "Calgary",
        "addressRegion": "AB",
        "postalCode": "T2G 0T3",
        "addressCountry": "CA"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "11:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "12:00",
          "closes": "22:00"
        }
      ]
    },
    {
      "@type": "Restaurant",
      "@id": "https://yycpronto.vercel.app/#downtown",
      "name": "Pronto Pizza - Downtown (Catering)",
      "image": "https://yycpronto.vercel.app/assets/logo.jpg",
      "url": "https://yycpronto.vercel.app/downtown",
      "telephone": "+1-403-555-1234",
      "priceRange": "$$",
      "servesCuisine": ["Italian", "Pizza"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "605 5th Ave SW",
        "addressLocality": "Calgary",
        "addressRegion": "AB",
        "postalCode": "T2P 0M6",
        "addressCountry": "CA"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "11:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "12:00",
          "closes": "22:00"
        }
      ]
    }
  ]
};

type SectionType = 'top' | 'bottom' | null;

export default function Home() {
  const [hoveredSection, setHoveredSection] = useState<SectionType>(null);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    expanded: { height: '70%' },
    collapsed: { height: '30%' },
    default: { height: '50%' },
  };

  const imageVariants = {
    hovered: { scale: 1.1 },
    initial: { scale: 1 },
  };

  const getVariant = (section: 'top' | 'bottom') => {
    if (hoveredSection === null) return 'default';
    return hoveredSection === section ? 'expanded' : 'collapsed';
  };

  if (!isMounted) {
    return (
      <div className="h-full w-full flex flex-col relative overflow-hidden bg-pronto-navy">
        <div className="w-full h-1/2 relative overflow-hidden border-b-8 border-black">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop")',
            }}
          />
          <div className="absolute inset-0 bg-pronto-navy/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <h1 className="text-7xl md:text-9xl font-display font-black text-pronto-cream tracking-wide drop-shadow-lg leading-none">
              INGLEWOOD
            </h1>
          </div>
        </div>
        <div className="w-full h-1/2 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop")',
            }}
          />
          <div className="absolute inset-0 bg-pronto-orange/30 mix-blend-multiply" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <div className="relative inline-block">
              <h1 className="text-7xl md:text-9xl font-display font-black text-pronto-cream tracking-wide drop-shadow-lg leading-none relative z-10">
                DOWNTOWN
              </h1>
              <div className="absolute -bottom-2 right-0 md:bottom-2 md:-right-4 z-20 transform translate-y-1/2 rotate-[-6deg]">
                <span className="text-4xl md:text-6xl font-marker text-pronto-orange whitespace-nowrap drop-shadow-md">
                  (CATERING)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script
        id="restaurant-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <div className="h-full w-full flex flex-col relative overflow-hidden bg-pronto-navy">
      {/* TOP SECTION - INGLEWOOD */}
      <motion.div
        className="w-full relative overflow-hidden cursor-pointer group border-b-8 border-black"
        variants={containerVariants}
        initial="default"
        animate={getVariant('top')}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        onMouseEnter={() => setHoveredSection('top')}
        onMouseLeave={() => setHoveredSection(null)}
        onClick={() => router.push('/inglewood')}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop")',
          }}
          variants={imageVariants}
          animate={hoveredSection === 'top' ? 'hovered' : 'initial'}
          transition={{ duration: 0.8 }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-pronto-navy/40 group-hover:bg-pronto-navy/20 transition-colors duration-500" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <motion.div
            animate={{
              scale: hoveredSection === 'top' ? 1.1 : hoveredSection === 'bottom' ? 0.9 : 1,
              y: hoveredSection === 'top' ? 0 : hoveredSection === 'bottom' ? -20 : 0
            }}
            className="text-center"
          >
            <h1 className="text-7xl md:text-9xl font-display font-black text-pronto-cream tracking-wide drop-shadow-lg leading-none">
              INGLEWOOD
            </h1>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: hoveredSection === 'top' ? 1 : 0,
                height: hoveredSection === 'top' ? 'auto' : 0
              }}
              className="overflow-hidden"
            >
               <button 
                onClick={(e) => { e.stopPropagation(); router.push('/inglewood'); }}
                className="mt-6 bg-pronto-orange text-pronto-navy px-8 py-3 font-bold text-xl uppercase tracking-wider flex items-center gap-2 mx-auto hover:bg-white transition-colors"
               >
                  View Menu <ArrowUpRight />
               </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* BOTTOM SECTION - DOWNTOWN */}
      <motion.div
        className="w-full relative overflow-hidden cursor-pointer group"
        variants={containerVariants}
        initial="default"
        animate={getVariant('bottom')}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        onMouseEnter={() => setHoveredSection('bottom')}
        onMouseLeave={() => setHoveredSection(null)}
        onClick={() => router.push('/downtown')}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop")',
          }}
          variants={imageVariants}
          animate={hoveredSection === 'bottom' ? 'hovered' : 'initial'}
          transition={{ duration: 0.8 }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-pronto-orange/30 group-hover:bg-pronto-orange/10 transition-colors duration-500 mix-blend-multiply" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <motion.div
            animate={{
              scale: hoveredSection === 'bottom' ? 1.1 : hoveredSection === 'top' ? 0.9 : 1,
              y: hoveredSection === 'bottom' ? 0 : hoveredSection === 'top' ? 20 : 0
            }}
            className="text-center"
          >
            <div className="relative inline-block">
              <h1 className="text-7xl md:text-9xl font-display font-black text-pronto-cream tracking-wide drop-shadow-lg leading-none relative z-10">
                DOWNTOWN
              </h1>
              <div className="absolute -bottom-2 right-0 md:bottom-2 md:-right-4 z-20 transform translate-y-1/2 rotate-[-6deg]">
                 <span className="text-4xl md:text-6xl font-marker text-pronto-orange whitespace-nowrap drop-shadow-md">
                  (CATERING)
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: hoveredSection === 'bottom' ? 1 : 0,
                height: hoveredSection === 'bottom' ? 'auto' : 0
              }}
              className="overflow-hidden"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); router.push('/downtown'); }}
                className="mt-16 bg-pronto-blue text-pronto-cream px-8 py-3 font-bold text-xl uppercase tracking-wider flex items-center gap-2 mx-auto hover:bg-white hover:text-pronto-blue transition-colors"
              >
                  Book Catering <ArrowUpRight />
               </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
    </>
  );
}
