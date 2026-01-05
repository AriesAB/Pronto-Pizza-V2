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
  const text = "PIZZA • PASTA • PAGNOTTA • ";
  const repeatedText = Array(20).fill(text).join("");
  
  return (
    <div className="absolute inset-x-0 bottom-20 pointer-events-none z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: '0%' }}
            animate={{ x: '-50%' }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
            className="whitespace-nowrap flex"
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
      className="bg-white min-h-full w-full overflow-x-hidden"
    >
      {/* HERO SECTION - Similar to About page */}
      <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center bg-black">
        
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
            className="text-7xl md:text-[12rem] font-display text-pronto-cream tracking-wide drop-shadow-2xl leading-none"
          >
            INGLEWOOD
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-pronto-cream font-mono-serif text-xl md:text-3xl tracking-[0.2em] mt-6"
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
                 {/* Floating section icons */}
                 {section.id === 'antipasti' && (
                   <>
                     <motion.img
                       src="/attached_assets/Gemini_Generated_Image_kz2xxakz2xxakz2x_(1)_1767580646949.png"
                       alt="Appetizer plate"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -12, 0], rotate: [0, -4, 4, 0] }}
                       transition={{
                         opacity: { duration: 0.5 },
                         scale: { type: "spring", stiffness: 300 },
                         y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -right-12 md:-right-40 top-32 md:top-48 w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                     <motion.img
                       src="/attached_assets/Screenshot_2026-01-04_193607_1767580652649.png"
                       alt="Soup with crackers"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                       transition={{
                         opacity: { duration: 0.5, delay: 0.2 },
                         scale: { type: "spring", stiffness: 300, delay: 0.2 },
                         y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 3.6, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -left-12 md:-left-40 top-64 md:top-96 w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                   </>
                 )}
                 {section.id === 'panini' && (
                   <>
                     <motion.img
                       src="/attached_assets/Screenshot_2026-01-04_194824_1767581374349.png"
                       alt="Panini halves"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                       transition={{
                         opacity: { duration: 0.5 },
                         scale: { type: "spring", stiffness: 300 },
                         y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -right-12 md:-right-40 top-0 w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                     <motion.img
                       src="/attached_assets/Screenshot_2026-01-04_194832_1767581372425.png"
                       alt="Panini"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -12, 0], rotate: [0, -4, 4, 0] }}
                       transition={{
                         opacity: { duration: 0.5, delay: 0.2 },
                         scale: { type: "spring", stiffness: 300, delay: 0.2 },
                         y: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 4.4, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -left-12 md:-left-40 top-[12rem] md:top-[16rem] w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                     <motion.img
                       src="/attached_assets/Screenshot_2026-01-04_194841_1767581370484.png"
                       alt="Panini in bag"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -10, 0], rotate: [0, 6, -6, 0] }}
                       transition={{
                         opacity: { duration: 0.5, delay: 0.3 },
                         scale: { type: "spring", stiffness: 300, delay: 0.3 },
                         y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 3.8, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -right-12 md:-right-40 top-[24rem] md:top-[32rem] w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                   </>
                 )}
                 {section.id === 'pizza' && (
                   <>
                     <motion.img
                       src="/attached_assets/Screenshot_2026-01-04_194052_1767580964963.png"
                       alt="Whole Pizza"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                       transition={{
                         opacity: { duration: 0.5 },
                         scale: { type: "spring", stiffness: 300 },
                         y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -right-12 md:-right-40 top-0 w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                     <motion.img
                       src="/attached_assets/Screenshot_2026-01-04_194129_1767580962260.png"
                       alt="Pizza Box"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -12, 0], rotate: [0, -4, 4, 0] }}
                       transition={{
                         opacity: { duration: 0.5, delay: 0.2 },
                         scale: { type: "spring", stiffness: 300, delay: 0.2 },
                         y: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 4.4, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -left-12 md:-left-40 top-[20rem] md:top-[28rem] w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                     <motion.img
                       src="/attached_assets/Screenshot_2026-01-04_182854_1767581039044.png"
                       alt="Pizza Slice"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -10, 0], rotate: [0, 6, -6, 0] }}
                       transition={{
                         opacity: { duration: 0.5, delay: 0.3 },
                         scale: { type: "spring", stiffness: 300, delay: 0.3 },
                         y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 3.8, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -right-12 md:-right-40 top-[40rem] md:top-[56rem] w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                   </>
                 )}
                 {section.id === 'coffee' && (
                   <>
                     <motion.img
                       src="/attached_assets/Screenshot_2026-01-04_195639_1767581855982.png"
                       alt="Coffee cup"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                       transition={{
                         opacity: { duration: 0.5 },
                         scale: { type: "spring", stiffness: 300 },
                         y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -right-12 md:-right-40 top-0 w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                     <motion.img
                       src="/attached_assets/Screenshot_2026-01-04_195650_1767581855983.png"
                       alt="Coffee saucer"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -12, 0], rotate: [0, -4, 4, 0] }}
                       transition={{
                         opacity: { duration: 0.5, delay: 0.2 },
                         scale: { type: "spring", stiffness: 300, delay: 0.2 },
                         y: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 4.4, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -left-12 md:-left-40 top-[12rem] md:top-[16rem] w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                   </>
                 )}
                 {section.id === 'bar' && (
                   <>
                     <motion.img
                       src="/attached_assets/Screenshot_2026-01-04_200053_1767582080825.png"
                       alt="Whiskey glass"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -12, 0], rotate: [0, -5, 5, 0] }}
                       transition={{
                         opacity: { duration: 0.5 },
                         scale: { type: "spring", stiffness: 300 },
                         y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -left-12 md:-left-40 top-0 w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                     <motion.img
                       src="/attached_assets/Gemini_Generated_Image_uqgikduqgikduqgi_(1)_1767580147823.png"
                       alt="Drink"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -10, 0], rotate: [0, 6, -6, 0] }}
                       transition={{
                         opacity: { duration: 0.5, delay: 0.2 },
                         scale: { type: "spring", stiffness: 300, delay: 0.2 },
                         y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -right-12 md:-right-40 top-[12rem] md:top-[16rem] w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                   </>
                 )}
                 {section.id === 'cocktail' && (
                   <>
                     <motion.img
                       src="/attached_assets/Screenshot_2026-01-04_200041_1767582080826.png"
                       alt="Martini"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -10, 0], rotate: [0, 8, -8, 0] }}
                       transition={{
                         opacity: { duration: 0.5 },
                         scale: { type: "spring", stiffness: 300 },
                         y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 3.8, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -right-12 md:-right-40 top-0 w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                     <motion.img
                       src="/attached_assets/Screenshot_2026-01-04_200053_1767582080825.png"
                       alt="Whiskey glass"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -12, 0], rotate: [0, -6, 6, 0] }}
                       transition={{
                         opacity: { duration: 0.5, delay: 0.2 },
                         scale: { type: "spring", stiffness: 300, delay: 0.2 },
                         y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -left-12 md:-left-40 top-[12rem] md:top-[16rem] w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                   </>
                 )}
                 {section.id === 'dessert' && (
                   <>
                     <motion.img
                       src="/attached_assets/Screenshot_2026-01-04_200312_1767582275868.png"
                       alt="Cake slice"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
                       transition={{
                         opacity: { duration: 0.5 },
                         scale: { type: "spring", stiffness: 300 },
                         y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -right-12 md:-right-40 top-0 w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                     <motion.img
                       src="/attached_assets/Screenshot_2026-01-04_200345_1767582273815.png"
                       alt="Ice cream"
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       animate={{ y: [0, -10, 0], rotate: [0, -6, 6, 0] }}
                       transition={{
                         opacity: { duration: 0.5, delay: 0.2 },
                         scale: { type: "spring", stiffness: 300, delay: 0.2 },
                         y: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
                         rotate: { duration: 4.4, repeat: Infinity, ease: "easeInOut" }
                       }}
                       className="absolute -left-12 md:-left-40 top-[12rem] md:top-[16rem] w-24 h-24 md:w-40 md:h-40 object-contain z-10 pointer-events-none hidden md:block"
                     />
                   </>
                 )}

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
      <div className="bg-black text-center py-20 px-4 flex flex-col items-center">
        <img 
          src="/attached_assets/Screenshot_2025-12-30_192545_1767574481771.png" 
          alt="PRONZO" 
          className="h-20 w-auto mb-8"
        />
        <h3 className="text-5xl font-display text-white mb-8">VISIT US</h3>
        <div className="font-mono-serif text-xl text-white space-y-2">
           <p className="font-bold">COMING SOON</p>
           <p className="pt-4 text-pronto-orange font-bold">TUE-SUN: 4PM - LATE</p>
           <p className="text-white/60">MON: CLOSED</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Inglewood;