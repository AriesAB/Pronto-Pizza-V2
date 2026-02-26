'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://yycpronto.com/inglewood",
  "name": "Pronto Pizza - Inglewood",
  "image": "https://yycpronto.com/assets/pronto-logo.png",
  "url": "https://yycpronto.com/inglewood",
  "telephone": "+1-403-555-1234",
  "priceRange": "$$",
  "servesCuisine": ["Italian", "Pizza"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1139 9 Ave SE",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "postalCode": "T2G 0T3",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.0360,
    "longitude": -114.0497
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "11:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday"],
      "opens": "11:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "11:00",
      "closes": "21:00"
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://yycpronto.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Inglewood",
      "item": "https://yycpronto.com/inglewood"
    }
  ]
};

interface MenuItemData {
  name: string;
  price: string;
  ingredients: string;
  isFeature?: boolean;
}

interface BarSubcategory {
  title: string;
  note?: string;
  items: MenuItemData[];
}

interface MenuSectionData {
  id: string;
  title: string;
  items?: MenuItemData[];
  note?: string;
  subcategories?: BarSubcategory[];
}

const menuSections: MenuSectionData[] = [
  {
    id: "antipasti",
    title: "ANTIPASTI",
    items: [
      {
        name: "BRUSCHETTA",
        price: "12",
        ingredients: "Italian Style Grilled Homemade Bread with Classic Pomodoro and Basil Topping (6pc). Add Burrata $8"
      },
      {
        name: "CAESAR SALAD",
        price: "15.50",
        ingredients: "Romaine, Croutons, Shaved Parmesan with Homemade Caesar Dressing"
      },
      {
        name: "CAPRESE",
        price: "13.50",
        ingredients: "Mozzarella, Pomodori, Arugula, with Olive Oil Dressing"
      },
      {
        name: "POLPETTE",
        price: "18",
        ingredients: "House-made Meatballs Simmered in Rich Tomato Sauce, Finished with Shaved Parmesan"
      },
      {
        name: "ANTIPASTO PLATTER",
        price: "22",
        ingredients: "Italian-Style Board with Proscuitto, Soppresata, Assorted Marinated Olives, Manchego, Taleggio, Chili Fig Jam, and Rosemary Croccantini"
      }
    ]
  },
  {
    id: "pizza",
    title: '12" / 18" PIZZA',
    note: "Ask your server what the pizza of the week is!",
    items: [
      {
        name: "THE OG",
        price: "23 / 33",
        ingredients: "San Marzano Tomato Sauce, Mozzarella di Bufala, Basil, Olive Oil"
      },
      {
        name: "QUATTRO FORMAGGI",
        price: "25 / 35",
        ingredients: "San Marzano Tomato Sauce, Parmigiano, Mozzarella di Bufala, Provolone, Asiago, hot Honey Drizzle"
      },
      {
        name: "MAMMA MIA",
        price: "27 / 37",
        ingredients: "San Marzano Tomato Sauce, Spicy Calabrese Sausage, Mozzarella di Bufala, Pepperoncino, Parmigiano"
      },
      {
        name: "TONY PEPPERONI",
        price: "27 / 37",
        ingredients: "San Marzano Tomato Sauce, Mozzarella di Bufala, Ezzo Pepperoni, Dollop of Ricotta, Hot Honey Drizzle"
      },
      {
        name: "FORBIDDEN PIE",
        price: "25 / 35",
        ingredients: "San Marzano Tomato Sauce, Pineapple slices, Prosciutto Cotto, Asiago, Mozzarella di Bufala"
      },
      {
        name: "PARMA-DRAMA",
        price: "27 / 37",
        ingredients: "San Marzano Tomato Sauce, Mozzarella di Bufala, Caramelized Cherry Tomato, Prosciutto, Arugula, Shaved Parmesan cheese"
      },
      {
        name: "FUN GUY",
        price: "27 / 37",
        ingredients: "San Marzano Tomato Sauce, Mozzarella di Bufala, Italian Meatball, Marinated Oyster Mushroom, and Gorgonzola"
      },
      {
        name: "FUGGADEBOUTIT",
        price: "27 / 37",
        ingredients: "Olive Oil base, Mozzarella di Bufala, Arugula, Prosciutto, Chili Fig Jam, Dollop of Ricotta"
      },
      {
        name: "ITALIAN STALLION",
        price: "28 / 38",
        ingredients: "San Marzano Tomato Sauce, Ezzo Pepperoni, Fennel Sausage, Pancetta, Mozzarella di Bufala"
      },
      {
        name: "LA MORTA BELLA",
        price: "30 / 40",
        ingredients: "San Marzano Tomato Sauce, Mortadella, Creamy Burrata, Crushed Roasted Pistachios, Finished with house made Pesto"
      },
      {
        name: "NONNAS GARDEN",
        price: "27 / 37",
        ingredients: "San Marzano Tomato Sauce, Bell Peppers, Caramelized Cherry Tomato, Marinated Oyster Mushroom, Artichoke hearts, Mozzarella di Bufala"
      },
      {
        name: "PEP & SHROOM",
        price: "25 / 35",
        ingredients: "San Marzano Tomato Sauce, Ezzo Pepperoni, Mozzarella di Bufala, Marinated Oyster mushrooms"
      }
    ]
  },
  {
    id: "dips",
    title: "",
    subcategories: [
      {
        title: "DIPS",
        items: [
          {
            name: "",
            price: "4",
            ingredients: "Garlic Parmesan Dip"
          },
          {
            name: "",
            price: "4",
            ingredients: "Hot Honey"
          }
        ]
      }
    ]
  },
  {
    id: "dessert",
    title: "DESSERT",
    items: [
      {
        name: "TIRAMISU",
        price: "12.50",
        ingredients: "Espresso-Soaked Ladyfingers Layered with Silky Mascarpone Cream and Topped with Cocoa"
      },
      {
        name: "CHEESECAKE",
        price: "12.50",
        ingredients: "Rich, Creamy Cheesecake with a buttery Graham Cracker Crust"
      }
    ]
  },
  {
    id: "coffee",
    title: "COFFEE",
    note: "SUB: ALMOND / OAT / — + $0.75 | ADD: EXTRA ESPRESSO SHOT (2OZ) — + $2",
    items: [
      {
        name: "AMERICANO",
        price: "4.00",
        ingredients: ""
      },
      {
        name: "CAPPUCCINO",
        price: "4.00",
        ingredients: ""
      },
      {
        name: "ESPRESSO",
        price: "3.00",
        ingredients: ""
      },
      {
        name: "LATTE",
        price: "4.50",
        ingredients: ""
      }
    ]
  },
  {
    id: "bar",
    title: "BAR",
    subcategories: [
      {
        title: "BEERS ON TAP",
        note: "ASK YOUR SERVER ABOUT OUR SEASONAL TAP BEER",
        items: [
          {
            name: "NIGHT GALLERY IPA",
            price: "12.75",
            ingredients: "EIGHTY EIGHT BREWING - 18 OZ"
          },
          {
            name: "PREMIUM LAGER",
            price: "11.75",
            ingredients: "COLD GARDEN - 18 OZ"
          }
        ]
      },
      {
        title: "BEERS",
        items: [
          {
            name: "JAPANESE ALE",
            price: "8.75",
            ingredients: "OL'BEAUTIFUL - 355 ML"
          },
          {
            name: "PERONI",
            price: "11",
            ingredients: "12 OZ"
          },
          {
            name: "PRETTY IN PINK",
            price: "8.75",
            ingredients: "EIGHTY EIGHT BREWING - 12 OZ"
          }
        ]
      },
      {
        title: "COCKTAIL",
        items: [
          {
            name: "MOSCOW MULE",
            price: "15.50",
            ingredients: "VODKA • LIME JUICE • GINGER BEER • MINT"
          },
          {
            name: "THATS AMORE SPRITZ",
            price: "16",
            ingredients: "RASPBERRY • LIMONCELLO • PROSECCO • SODA WATER • MINT"
          },
          {
            name: "APEROL SPRITZ",
            price: "17",
            ingredients: "PROSECCO • APEROL • SODA WATER • ORANGE SLICE"
          },
          {
            name: "ESPRESSO MARTINI",
            price: "17",
            ingredients: "VODKA • ESPRESSO • COFFEE LIQUEUR"
          }
        ]
      },
      {
        title: "SODAS / JUICE",
        items: [
          {
            name: "",
            price: "3.50",
            ingredients: "BLOOD ORANGE SAN PALLEGRINO, COKE ZERO, COCA-COLA, DR PEPPER, ICE TEA, PEPSI, DIET PEPSI, GINGERALE, APPLE JUICE, ORANGE JUICE"
          }
        ]
      }
    ]
  },
  {
    id: "vino",
    title: "VINO",
    note: "6oz / 9oz / 750ml\nTuesdays ½ Price on Bottled Wine!!",
    subcategories: [
      {
        title: "WHITE WINE",
        items: [
          {
            name: "",
            price: "14 / 21 / 54",
            ingredients: "PINOT GRIGIO - TAVO"
          },
          {
            name: "",
            price: "14.50 / 21.50 / 55",
            ingredients: "PINOT GRIGIO - QUALIS GATE"
          },
          {
            name: "",
            price: "14 / 21 / 54",
            ingredients: "PINOT GRIGIO - DELLE VENEZIE"
          },
          {
            name: "",
            price: "14 / 21 / 54",
            ingredients: "PROSECCO SPUMANTE VENETO - RIONDO"
          }
        ]
      },
      {
        title: "RED WINE",
        items: [
          {
            name: "",
            price: "14 / 21 / 54",
            ingredients: "MONTEPULCIANO D'ABRUZZO - BAJO"
          },
          {
            name: "",
            price: "15.50 / 22.75 / 60",
            ingredients: "DOLCETTO D'ALBA PIEDMONT - VAJRA"
          },
          {
            name: "",
            price: "14.50 / 21 / 55",
            ingredients: "LAMBRUSCO EMILIA ROMAGNA - LINI 910"
          },
          {
            name: "",
            price: "15 / 21.75 / 57",
            ingredients: "ROSÉ IGP MEDITERRANEE - DOMAINE TRIENNES"
          }
        ]
      }
    ]
  }
];

const MenuItem = ({ item, isMounted }: { item: MenuItemData; isMounted: boolean }) => {
  if (!isMounted) {
    return (
      <div className="flex flex-col mb-10 break-inside-avoid group cursor-pointer">
        <div className="flex items-baseline justify-between border-b-2 border-pronto-blue/20 pb-1 mb-2 border-dashed relative transition-colors duration-200">
          {item.name ? (
            <h4 className="font-mono-serif font-normal text-xl md:text-3xl text-white uppercase tracking-tight origin-left transition-colors duration-200">
              {item.name}
            </h4>
          ) : item.ingredients && (
            <p className="font-mono-serif text-base md:text-lg text-white/70 leading-relaxed max-w-2xl transition-colors duration-200">
              {item.ingredients}
            </p>
          )}
          <span className={`font-mono-serif font-bold text-lg md:text-2xl text-pronto-orange whitespace-nowrap origin-right transition-colors duration-200 ${item.name ? 'ml-4' : 'ml-auto'}`}>
            {item.price}
          </span>
        </div>
        {item.name && item.ingredients && (
          <p className="font-mono-serif text-base md:text-lg text-white/70 leading-relaxed max-w-2xl transition-colors duration-200">
            {item.ingredients}
          </p>
        )}
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", stiffness: 300, damping: 18, mass: 0.8 }}
      className="flex flex-col mb-10 break-inside-avoid group cursor-pointer"
    >
      <div 
        className="flex items-baseline justify-between border-b-2 border-pronto-blue/20 pb-1 mb-2 border-dashed relative transition-colors duration-200 group-hover:border-pronto-orange group-hover:border-solid"
      >
        {item.name ? (
          <h4 
            className="font-mono-serif font-normal text-xl md:text-3xl text-white uppercase tracking-tight origin-left transition-colors duration-200 group-hover:text-pronto-orange"
          >
            {item.name}
          </h4>
        ) : item.ingredients && (
          <p 
            className="font-mono-serif text-base md:text-lg text-white/70 leading-relaxed max-w-2xl transition-colors duration-200 group-hover:text-pronto-orange/80"
          >
            {item.ingredients}
          </p>
        )}
        <span 
          className={`font-mono-serif font-bold text-lg md:text-2xl text-pronto-orange whitespace-nowrap origin-right transition-colors duration-200 ${item.name ? 'ml-4' : 'ml-auto'}`}
        >
          {item.price}
        </span>
      </div>
      
      {item.name && item.ingredients && (
        <p 
          className="font-mono-serif text-base md:text-lg text-white/70 leading-relaxed max-w-2xl transition-colors duration-200 group-hover:text-pronto-orange/80"
        >
          {item.ingredients}
        </p>
      )}
    </motion.div>
  );
};

const HeroTextAnimation: React.FC<{ isMounted: boolean }> = ({ isMounted }) => {
  const text = "ANTIPASTI • PIZZA • DESSERT • ";
  const repeatedText = Array(15).fill(text).join("");
  
  if (!isMounted) {
    return (
      <div className="absolute inset-x-0 bottom-20 pointer-events-none z-10 overflow-hidden">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-flex">
            <span className="text-4xl md:text-7xl font-mono-serif tracking-[0.2em] text-pronto-orange/60 uppercase">
              {repeatedText}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-x-0 bottom-20 pointer-events-none z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              x: {
                duration: 180,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }
            }}
            className="inline-flex"
          >
            <span className="text-4xl md:text-7xl font-mono-serif tracking-[0.2em] text-pronto-orange/60 uppercase">
              {repeatedText}
            </span>
            <span className="text-4xl md:text-7xl font-mono-serif tracking-[0.2em] text-pronto-orange/60 uppercase">
              {repeatedText}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default function InglewoodPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="bg-black min-h-full w-full overflow-x-hidden">
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=2574&auto=format&fit=crop")',
              filter: 'contrast(1.05) brightness(0.75) saturate(1.15)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/40" />
          <div className="relative z-10 text-center -translate-y-16">
            <h1 className="text-6xl md:text-[9rem] font-display text-pronto-cream tracking-wide drop-shadow-2xl leading-none">
              INGLEWOOD
            </h1>
            <p className="text-pronto-cream font-mono-serif text-lg md:text-xl tracking-[0.2em] mt-4">
              1139 9th Ave SE, Calgary, Alberta
            </p>
            <a
              href="/inglewood/waitlist"
              className="mt-6 inline-block bg-pronto-orange text-pronto-navy px-8 py-3 font-bold text-lg uppercase tracking-wider hover:bg-white transition-colors"
            >
              Join Waitlist
            </a>
          </div>
          
          {/* Hero text animation - static version */}
          <HeroTextAnimation isMounted={isMounted} />
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={false}
      animate={{ opacity: 1 }}
      className="bg-black min-h-full w-full overflow-x-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* HERO SECTION */}
      <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        
        {/* Pizza image background with cinematic zoom */}
        <motion.div 
          initial={false}
          animate={{ opacity: 1, scale: [1, 1.08, 1] }}
          transition={{ 
            scale: { duration: 20, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=2574&auto=format&fit=crop")',
            filter: 'contrast(1.05) brightness(0.75) saturate(1.15)'
          }}
        />
        
        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/40" />

        {/* Decorative rotating circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -left-24 w-48 h-48 border-[25px] border-pronto-orange/15 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-64 h-64 border-[30px] border-pronto-blue/15 rounded-full"
        />
        
        {/* Main INGLEWOOD title - centered and moved higher */}
        <div className="relative z-10 text-center -translate-y-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl md:text-[9rem] font-display text-pronto-cream tracking-wide drop-shadow-2xl leading-none"
          >
            INGLEWOOD
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-pronto-cream font-mono-serif text-lg md:text-xl tracking-[0.2em] mt-4"
          >
            1139 9th Ave SE, Calgary, Alberta
          </motion.p>
          <motion.a
            href="/inglewood/waitlist"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
            className="mt-6 inline-block bg-pronto-orange text-pronto-navy px-8 py-3 font-bold text-lg uppercase tracking-wider hover:bg-white transition-colors"
          >
            Join Waitlist
          </motion.a>
        </div>
        
        {/* Hero text animation */}
        <HeroTextAnimation isMounted={isMounted} />
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="hidden md:block absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 text-pronto-cream/80 z-20"
        >
          <div className="flex flex-col items-start md:items-center gap-2">
            <span className="text-sm font-mono-serif uppercase tracking-widest">Scroll for Menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* MENU LAYOUT */}
      <div className="relative w-full max-w-5xl mx-auto px-6 py-24 min-h-screen">
             
             {/* Iterate Sections */}
             {menuSections.map((section) => (
               <div 
                  key={section.id} 
                  id={section.id} 
                  className="mb-24 lg:mb-40 relative"
               >
                 
                 {section.title && (
                 <div className="flex flex-col mb-16 relative">
                    <motion.div 
                        initial={{ opacity: 0, y: 40, rotateX: 90 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="flex flex-col md:flex-row items-baseline gap-4 border-b-8 border-white pb-4 origin-bottom"
                        style={{ perspective: 1000 }}
                    >
                        <h3 className="text-6xl md:text-9xl font-display text-white uppercase leading-none hover:text-pronto-orange transition-colors duration-200 cursor-default">
                        {section.title}
                        </h3>
                        {section.note && (
                        <p className="font-mono-serif text-white text-sm md:text-xl font-bold italic md:ml-auto max-w-md text-right whitespace-pre-line">
                            {section.note}
                        </p>
                        )}
                    </motion.div>
                 </div>
                 )}

                 <div className="flex flex-col gap-4">
                    {section.items && section.items.map((item) => (
                      <MenuItem key={item.name} item={item} isMounted={isMounted} />
                    ))}
                    
                    {section.subcategories && section.subcategories.map((subcategory) => (
                      <div key={subcategory.title} className="mb-8">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ duration: 0.4 }}
                          className="flex items-baseline gap-4 mb-6 border-b-2 border-white/40 pb-2"
                        >
                          <h4 className="text-3xl md:text-5xl font-display text-white uppercase">
                            {subcategory.title}
                          </h4>
                          {subcategory.note && (
                            <span className="font-mono-serif text-white/70 text-sm md:text-base italic ml-auto">
                              {subcategory.note}
                            </span>
                          )}
                        </motion.div>
                        {subcategory.items && subcategory.items.length > 0 && subcategory.items.map((item) => (
                          <MenuItem key={item.name || item.ingredients} item={item} isMounted={isMounted} />
                        ))}
                      </div>
                    ))}
                 </div>
               </div>
             ))}

             <div className="mt-12 mb-12 border-t-2 border-white pt-12 text-center">
                 <p className="font-mono-serif font-normal text-lg md:text-xl text-white/70 mb-8 uppercase tracking-wider">GLUTEN FRIENDLY CRUST - $5</p>
                 <p className="font-mono-serif font-normal text-lg md:text-xl text-white/70">(V) = VEGETARIAN</p>
             </div>
      </div>

      {/* FOOTER - INGLEWOOD Specific */}
      <div className="bg-black text-center py-20 px-4 flex flex-col items-center">
        <img 
          src="/assets/pronto-logo.png" 
          alt="PRONTO" 
          className="h-20 w-auto mb-8"
        />
        <h3 className="text-5xl font-display text-white mb-8 uppercase tracking-widest">Inglewood</h3>
        <div className="font-mono-serif text-xl text-white space-y-2">
           <p className="font-bold">1139 9th Ave SE</p>
           <p>403-993-9093</p>
           
           <div className="py-6">
             <p className="text-pronto-orange font-bold uppercase tracking-wider mb-4">Hours of operation</p>
             <div className="space-y-1 text-base">
                <p>Monday to Thursday - 11 AM - 2 PM, 4 - 10 PM</p>
                <p>Friday to Saturday - 11 AM - 2 PM, 4 - 11 PM</p>
                <p>Sunday - 4 - 9 PM</p>
             </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
