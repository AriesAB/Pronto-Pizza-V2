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
        name: "TIRAMISU",
        price: "12.50",
        ingredients: "Traditional homemade tiramisu topped with cocoa powder"
      }
    ]
  }
];

const MenuItem = ({ item }: { item: MenuItemData; key?: string }) => {
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
          className="font-mono-serif font-normal text-xl md:text-3xl text-white uppercase tracking-tight origin-left transition-colors duration-200 group-hover:text-pronto-orange"
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
          className="font-mono-serif text-base md:text-lg text-white/70 leading-relaxed max-w-2xl transition-colors duration-200 group-hover:text-pronto-orange/80"
        >
          {item.ingredients}
        </p>
      )}
    </motion.div>
  );
};

const MarqueeText: React.FC<{ text: string; direction?: 'left' | 'right'; speed?: number; className?: string }> = ({ 
  text, 
  direction = 'left', 
  speed = 20,
  className = ''
}) => {
  const repeatedText = Array(10).fill(text).join(' \u2022 ');
  
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        initial={{ x: direction === 'left' ? '0%' : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : '0%' }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="inline-block"
      >
        <span className="inline-block pr-8">{repeatedText}</span>
        <span className="inline-block pr-8">{repeatedText}</span>
      </motion.div>
    </div>
  );
};

const HeroTextAnimation: React.FC = () => {
  const text = "ANTIPASTI • PIZZA • PANINI • ";
  const repeatedText = Array(15).fill(text).join("");
  
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

const Inglewood: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-full w-full overflow-x-hidden"
    >
      {/* HERO SECTION - Similar to About page */}
      <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        
        {/* Pizza image background with cinematic zoom */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: [1, 1.08, 1] }}
          transition={{ 
            opacity: { duration: 1.5 },
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
            transition={{ duration: 1, delay: 0.8 }}
            className="text-pronto-cream font-mono-serif text-lg md:text-xl tracking-[0.2em] mt-4"
          >
            1139 9th Ave SE, Calgary, Alberta
          </motion.p>
        </div>
        
        {/* Hero text animation */}
        <HeroTextAnimation />
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 2, duration: 1 },
            y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-pronto-cream/80 z-20"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-mono-serif uppercase tracking-widest">Scroll for Menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* NEW MENU LAYOUT - SINGLE COLUMN CENTERED */}
      <div className="relative w-full max-w-5xl mx-auto px-6 py-24 min-h-screen">
             
             {/* Iterate Sections */}
             {menuSections.map((section, idx) => (
               <div 
                  key={section.id} 
                  id={section.id} 
                  className="mb-24 lg:mb-40 relative"
               >
                 
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
                        <p className="font-mono-serif text-white text-sm md:text-xl font-bold italic md:ml-auto max-w-md text-right">
                            {section.note}
                        </p>
                        )}
                    </motion.div>
                 </div>

                 <div className="flex flex-col gap-4">
                    {section.items.map((item) => (
                      <MenuItem key={item.name} item={item} />
                    ))}
                 </div>
               </div>
             ))}

             <div className="mt-12 mb-12 border-t-2 border-white pt-12 text-center">
                 <p className="font-mono-serif font-normal text-lg md:text-xl text-white/70 mb-4 uppercase tracking-wider">GLUTEN FRIENDLY CRUST + $4</p>
                 <div className="mb-8">
                   <p className="font-mono-serif font-normal text-lg md:text-xl text-white/70 mb-2 uppercase tracking-wider underline underline-offset-8">Dips</p>
                   <p className="font-mono-serif font-normal text-lg md:text-xl text-white/70 uppercase tracking-wider">Garlic Parmesan - $4</p>
                   <p className="font-mono-serif font-normal text-lg md:text-xl text-white/70 uppercase tracking-wider">Hot Honey - $4</p>
                 </div>
                 <p className="font-mono-serif font-normal text-lg md:text-xl text-white/70">(V) = VEGETARIAN</p>
             </div>

      </div>

      {/* FOOTER - INGLEWOOD Specific */}
      <div className="bg-black text-center py-20 px-4 flex flex-col items-center">
        <img 
          src="/attached_assets/Screenshot_2025-12-30_192545_1767574481771.png" 
          alt="PRONZO" 
          className="h-20 w-auto mb-8"
        />
        <h3 className="text-5xl font-display text-white mb-8 uppercase tracking-widest">Inglewood</h3>
        <div className="font-mono-serif text-xl text-white space-y-2">
           <p className="font-bold">1139 9th Ave SE</p>
           <p>403-993-9093</p>
           
           <div className="py-6 space-y-2">
             <p className="text-pronto-orange font-bold uppercase tracking-wider">Hours of operation</p>
             <p>Monday to Friday - 11 AM to 8 PM</p>
             <p>Saturday - 11 AM to 8 PM</p>
             <p>Sunday - Closed</p>
           </div>

           <p className="pt-4 text-pronto-orange font-bold">Follow us for updates!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Inglewood;
