import React from 'react';
import { motion } from 'framer-motion';

interface MenuItemData {
  name: string;
  price: string;
  ingredients: string;
  isFeature?: boolean;
}

interface MenuSectionData {
  id: string;
  title: string;
  items: MenuItemData[];
  note?: string;
}

const menuSections: MenuSectionData[] = [
  {
    id: "antipasti",
    title: "ANTIPASTI",
    items: [
      {
        name: "BRUSCHETTA",
        price: "10",
        ingredients: "Italian style grilled homemade bread with classic pomodoro and Basil topping (6pc). Add Burrata +$6"
      },
      {
        name: "CAPRESE",
        price: "12.50",
        ingredients: "Mozzarella, Pomodori, Arugula, with olive oil dressing"
      },
      {
        name: "FOCACCIA",
        price: "6",
        ingredients: "Homemade Focaccia bread, with a side of Balsamic vinegar and olive oil (4pc)"
      },
      {
        name: "ANTIPASTO PLATTER",
        price: "22",
        ingredients: "Italian-style board with prosciutto, soppresata, olives, manchego, brie, chili fig jam, and rosemary croccantini"
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
        ingredients: "San marzano Tomato sauce, Mozzarella di bufala, Basil, Olive Oil"
      },
      {
        name: "QUATTRO FORMAGGI",
        price: "25 / 35",
        ingredients: "San marzano Tomato sauce, Parmigiano, Mozzarella di bufala, provolone, Asiago, hot Honey drizzle"
      },
      {
        name: "MAMMA MIA",
        price: "27 / 37",
        ingredients: "San marzano Tomato sauce, Spicy Calabrese Sausage, Mozzarella di bufala, Pepperoncino, Parmigiano"
      },
      {
        name: "TONY PEPPERONI",
        price: "27 / 37",
        ingredients: "San marzano Tomato sauce, Mozzarella cheese, Ezzo Pepperoni, dollop of Ricotta, Hot Honey drizzle"
      },
      {
        name: "FORBIDDEN PIE",
        price: "25 / 35",
        ingredients: "San marzano tomato sauce, Pineapple slices, Prosciutto Cotto, Asiago, Mozzarella di bufala"
      },
      {
        name: "PARMA-DRAMA",
        price: "27 / 37",
        ingredients: "San marzano Tomato sauce, Mozzarella cheese, carmalized cherry tomato, Prosciutto, Arugula, shaved Parmesan cheese"
      },
      {
        name: "FUN GUY",
        price: "27 / 37",
        ingredients: "San marzano Tomato sauce, Mozzarella di bufala, italian Meatball, marinated oyster Mushroom, and Gorgonzola"
      },
      {
        name: "FUGGADEBOUTIT",
        price: "27 / 37",
        ingredients: "Olive Oil base, Mozzarella di bufala, Arugula, Prosciutto, chili Fig Jam, dollop of Ricotta"
      },
      {
        name: "ITALIAN STALLION",
        price: "28 / 38",
        ingredients: "San marzano tomato sauce, Ezzo Pepperoni, fennel Sausage, Pancetta, Mozzarella di bufala"
      },
      {
        name: "LA MORTA BELLA",
        price: "28 / 38",
        ingredients: "San marzano tomato sauce, mortadella, creamy Burrata, crushed roasted pistachios, finished with house made pesto"
      },
      {
        name: "SAUCY ROSSA",
        price: "23 / 33",
        ingredients: "San marzano tomato sauce, basil, oregano, garlic, extra virgin olive oil"
      }
    ]
  },
  {
    id: "panini",
    title: "PANINI",
    items: [
      {
        name: "ITALIAN CUT",
        price: "18.50",
        ingredients: "Salami, Prosciutto, Mozzarella di bufala, Arugula, Roasted Bell Pepper spread"
      },
      {
        name: "POLLO",
        price: "18.50",
        ingredients: "Grilled chicken, aged cheddar, carmalized cherry tomato, arugula, Roasted Bell Pepper spread"
      },
      {
        name: "PARMA",
        price: "18.50",
        ingredients: "Proscuitto, mozzarella di bufala, carmalized cherry tomato, arugula, house made pesto spread"
      },
      {
        name: "FIG AND PIG",
        price: "18.50",
        ingredients: "Proscuitto, goat cheese, chili fig jam spread, arugula"
      }
    ]
  },
  {
    id: "coffee",
    title: "COFFEE",
    note: "SUB: ALMOND / OAT / CHOCOLATE MILK + $0.75 | ADD: EXTRA ESPRESSO SHOT (2OZ) + $2",
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
        name: "MACCHIATO",
        price: "3.75",
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
    note: "VINO PRICES ARE 6OZ / 8OZ",
    items: [
      {
        name: "WAVE POOL IPA",
        price: "8.75",
        ingredients: "EIGHTY EIGHT BREWING 6.2% - 12 OZ"
      },
      {
        name: "HI-FI IPA",
        price: "8.75",
        ingredients: "EIGHTY EIGHT BREWING 6.7% - 12 OZ"
      },
      {
        name: "PRETTY IN PINK",
        price: "8.75",
        ingredients: "EIGHTY EIGHT BREWING 5% - 12 OZ"
      },
      {
        name: "BIRRA MORETTI",
        price: "9",
        ingredients: "BOTTLED 4.6% - 11 OZ"
      },
      {
        name: "STELLA ARTOIS",
        price: "9",
        ingredients: "BOTTLED 5% - 11 OZ"
      },
      {
        name: "PINOT GRIGIO",
        price: "15 / 20",
        ingredients: "SANTA MARGHERITA (WHITE)"
      },
      {
        name: "INCASTRO BIANCO",
        price: "15 / 20",
        ingredients: "TORRE ZAMBRA (WHITE)"
      },
      {
        name: "CHARDONNAY",
        price: "18 / 21",
        ingredients: "(WHITE)"
      },
      {
        name: "CAFAGGIO",
        price: "13 / 16",
        ingredients: "SANGIOVESE CHIANTI CLASSICO (RED)"
      },
      {
        name: "CATENA MALBEC",
        price: "15 / 18",
        ingredients: "(RED)"
      },
      {
        name: "CHIANTI CECCHI",
        price: "13 / 16",
        ingredients: "(RED)"
      },
      {
        name: "SODAS",
        price: "3.50",
        ingredients: "BLOOD ORANGE SAN PELLEGRINO, COKE ZERO, COCA-COLA, DR PEPPER, ICE TEA, PEPSI, DIET PEPSI"
      }
    ]
  },
  {
    id: "cocktail",
    title: "COCKTAIL",
    items: [
      {
        name: "MOSCOW MULE",
        price: "13.75",
        ingredients: "VODKA, LIME JUICE, GINGER BEER, MINT"
      },
      {
        name: "THATS AMORE",
        price: "12",
        ingredients: "SPRITZ - CLINK RASPBERRY LIMONCELLO VODKA COCKTAIL, MINT"
      },
      {
        name: "APEROL SPRITZ",
        price: "12.50",
        ingredients: "PROSECCO, APEROL, SODA WATER, ORANGE SLICE"
      }
    ]
  },
  {
    id: "dessert",
    title: "DESSERT",
    items: [
      {
        name: "GELATO",
        price: "6 / 9 / 12",
        ingredients: "Tahitian Vanilla Bean, Caramel Seasalt, Chocolate Honeycomb, Roasted Strawberry, Almond Chocolate, Espresso Toffee Pretzel (1, 2, or 3 scoops)"
      },
      {
        name: "TIRAMISU",
        price: "12.50",
        ingredients: "Traditional homemade tiramisu topped with cocoa powder"
      },
      {
        name: "AFFOGATO",
        price: "7 / 10",
        ingredients: "Espresso shot with choice of gelato. Add shot of Bailey +$5"
      }
    ]
  }
];

const MenuItem = ({ item }: { item: MenuItemData }) => {
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
        <h4 
          className="font-mono-serif font-normal text-xl md:text-3xl text-pronto-blue uppercase tracking-tight origin-left transition-colors duration-200 group-hover:text-pronto-orange"
        >
          {item.name}
        </h4>
        <span 
          className="font-mono-serif font-bold text-lg md:text-2xl text-pronto-orange whitespace-nowrap ml-4 origin-right transition-colors duration-200"
        >
          {item.price}
        </span>
      </div>
      
      {item.ingredients && (
        <p 
          className="font-mono-serif text-base md:text-lg text-pronto-blue/70 leading-relaxed max-w-2xl transition-colors duration-200 group-hover:text-pronto-orange/80"
        >
          {item.ingredients}
        </p>
      )}
    </motion.div>
  );
};

const Inglewood: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-full w-full"
    >
      <style>{`
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slideRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .marquee-left {
          animation: slideLeft 40s linear infinite;
          will-change: transform;
        }
        .marquee-right {
          animation: slideRight 35s linear infinite;
          will-change: transform;
        }
        .hero-fade-in {
          animation: fadeInUp 1s ease-out forwards;
        }
        .hero-fade-in-delay {
          animation: fadeInUp 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .text-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
      
      {/* HERO SECTION - Noble Pie Inspired */}
      <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop")',
            filter: 'contrast(1.1) brightness(0.85) saturate(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        {/* Background Text Layers - CSS animated for performance */}
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none overflow-hidden">
          {/* Top scrolling text */}
          <div className="absolute top-[10%] left-0 whitespace-nowrap text-pulse">
            <div className="marquee-left inline-block">
              <span className="text-[6rem] md:text-[10rem] font-display text-white/15 leading-none tracking-tight">
                PRONTO • PIZZA • PRONTO • PIZZA • PRONTO • PIZZA • PRONTO • PIZZA • 
              </span>
              <span className="text-[6rem] md:text-[10rem] font-display text-white/15 leading-none tracking-tight">
                PRONTO • PIZZA • PRONTO • PIZZA • PRONTO • PIZZA • PRONTO • PIZZA • 
              </span>
            </div>
          </div>
          
          {/* Bottom scrolling text */}
          <div className="absolute bottom-[10%] left-0 whitespace-nowrap text-pulse">
            <div className="marquee-right inline-block">
              <span className="text-[4rem] md:text-[7rem] font-display text-white/10 leading-none tracking-tight">
                FRESH • HANDMADE • AUTHENTIC • CALGARY • FRESH • HANDMADE • AUTHENTIC • CALGARY • 
              </span>
              <span className="text-[4rem] md:text-[7rem] font-display text-white/10 leading-none tracking-tight">
                FRESH • HANDMADE • AUTHENTIC • CALGARY • FRESH • HANDMADE • AUTHENTIC • CALGARY • 
              </span>
            </div>
          </div>
        </div>
        
        {/* Main Title - Bold Noble Pie Style */}
        <div className="relative z-10 text-center px-4">
          <h1 className="hero-fade-in text-[4.5rem] md:text-[11rem] lg:text-[14rem] font-display text-white leading-[0.85] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            INGLEWOOD
          </h1>
          <p className="hero-fade-in-delay text-xl md:text-3xl font-marker text-pronto-orange mt-6 rotate-[-2deg]">
            Calgary's Finest Slice
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hero-fade-in-delay">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-mono-serif uppercase tracking-widest">Scroll for Menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* NEW MENU LAYOUT - SINGLE COLUMN CENTERED */}
      <div className="relative w-full max-w-5xl mx-auto px-6 py-24 min-h-screen">
             
             {/* Iterate Sections */}
             {menuSections.map((section, idx) => (
               <div 
                  key={section.id} 
                  id={section.id} 
                  className="mb-24 lg:mb-40"
               >
                 {/* Section Header */}
                 <motion.div 
                    initial={{ opacity: 0, y: 50, rotateX: 90 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: false, margin: "-15%" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="flex flex-col md:flex-row items-baseline gap-4 mb-16 border-b-8 border-pronto-blue pb-4 origin-bottom"
                 >
                    <h3 className="text-6xl md:text-9xl font-display text-pronto-blue uppercase leading-none hover:text-pronto-orange transition-colors duration-200 cursor-default">
                      {section.title}
                    </h3>
                    {section.note && (
                      <p className="font-mono-serif text-pronto-blue text-sm md:text-xl font-bold italic md:ml-auto max-w-md text-right">
                        {section.note}
                      </p>
                    )}
                 </motion.div>

                 {/* Single Column Layout for Items */}
                 <div className="flex flex-col gap-4">
                    {section.items.map((item) => (
                      <MenuItem key={item.name} item={item} />
                    ))}
                 </div>
               </div>
             ))}

             {/* Footer Note */}
             <div className="mt-12 mb-12 border-t-2 border-pronto-blue pt-12 text-center">
                 <p className="font-mono-serif font-bold text-2xl text-pronto-blue">(V) = VEGETARIAN</p>
                 <p className="font-mono-serif font-bold text-2xl text-pronto-orange mt-4">GLUTEN FRIENDLY CRUST + $4</p>
             </div>

      </div>

      {/* Footer / Location Info - Redesigned to match new theme */}
      <div className="bg-pronto-orange text-center py-20 px-4 flex flex-col items-center">
        <img 
          src="/assets/logo.png" 
          alt="PRONZO" 
          className="h-20 w-auto mb-8 brightness-0"
        />
        <h3 className="text-5xl font-display text-pronto-navy mb-8">VISIT US</h3>
        <div className="font-mono-serif text-xl text-white space-y-2">
           <p className="font-bold">1234 9th Ave SE, Calgary</p>
           <p>403-555-0199</p>
           <p className="pt-4 text-pronto-navy font-bold">TUE-SUN: 4PM - LATE</p>
           <p className="text-pronto-navy/60">MON: CLOSED</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Inglewood;