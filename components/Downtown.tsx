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
    id: "specials",
    title: "SPECIALS",
    items: [
      {
        name: "CANNELLONI",
        price: "13.95",
        ingredients: "AA-grade ground beef, creamy ricotta cheese, and fresh spinach nestled in a delicate pasta shell, topped off with a perfect blend of bechamel and tomato sauce, all crowned with a golden layer of mozzarella cheese."
      },
      {
        name: "LASAGNA",
        price: "26.95",
        ingredients: "AA-grade ground beef layered between tender pasta shells and smothered with a perfect blend of creamy bechamel and tangy tomato sauce, all crowned with a layer of mozzarella cheese."
      },
      {
        name: "CHICKEN ALFREDO",
        price: "13.95",
        ingredients: "Tender chicken and crispy bacon mixed with smooth whipping cream, all tossed together with perfectly cooked penne pasta finished with parsley."
      },
      {
        name: "LEMON CHICKEN",
        price: "13.95",
        ingredients: "Penne pasta mixed with tender chicken and a creamy sauce made with lemon zest and lemon juice."
      }
    ]
  },
  {
    id: "pizza",
    title: '8" / 12" PIZZA',
    items: [
      {
        name: "CHEESE",
        price: "11.25 / 22.50",
        ingredients: "Bocconcini Cheese, Mozzarella Cheese, Parmesan Cheese, Tomato Sauce"
      },
      {
        name: "PEPPERONI",
        price: "11.99 / 23.95",
        ingredients: "Pepperoni, Bocconcini Cheese, Mozzarella Cheese, Tomato Sauce"
      },
      {
        name: "HAWAIIAN",
        price: "12.49 / 24.95",
        ingredients: "Ham, Pineapple, Mozzarella Cheese, Tomato Sauce"
      },
      {
        name: "MEATLOVERS",
        price: "13.49 / 26.95",
        ingredients: "Pepperoni, Italian Sausage, Bacon, Mozzarella Cheese, Tomato Sauce"
      },
      {
        name: "BURGER BACON BRIE (BBB)",
        price: "12.99 / 25.95",
        ingredients: "Seasoned ground beef, Spinach, Mozzarella Cheese, Brie Cheese, Cheddar Cheese, Bacon, Homemade Donair Sauce"
      },
      {
        name: "DONAIR",
        price: "12.99 / 25.95",
        ingredients: "Halal Donair, Bell Peppers, Red Onions, Mozzarella Cheese, Homemade Donair Sauce"
      },
      {
        name: "CANADIAN",
        price: "12.99 / 25.95",
        ingredients: "Pepperoni, Mushrooms, Bacon, Mozzarella Cheese, Tomato Sauce"
      },
      {
        name: "MUSHROOM & BACON & SAUSAGE",
        price: "12.99 / 25.95",
        ingredients: "Italian Sausage, Mushrooms, Bacon, Mozzarella Cheese, Tomato Sauce, Pesto"
      },
      {
        name: "CHICKEN",
        price: "12.99 / 25.95",
        ingredients: "Seasoned Grilled Chicken, Mushrooms, Bell Peppers, Mozzarella Cheese, Homemade Donair Sauce"
      },
      {
        name: "MUSHROOM & MEATBALL",
        price: "12.99 / 25.95",
        ingredients: "Homemade Italian Meatballs, Mushrooms, Blue Cheese, Mozzarella Cheese, Tomato Sauce"
      },
      {
        name: "VEGETARIAN",
        price: "12.49 / 24.95",
        ingredients: "Mushrooms, Bell Peppers, Artichoke, Red Onions, Cherry Tomatoes, Olives, Mozzarella Cheese, Donair Sauce"
      },
      {
        name: "MEXICAN",
        price: "12.99 / 25.95",
        ingredients: "Seasoned Ground Beef, Bell Peppers, Banana Peppers, Red Onions, Mozzarella Cheese, Tomato Sauce"
      },
      {
        name: "PROSCIUTTO",
        price: "11.99 / 24.95",
        ingredients: "Mozzarella Cheese, Bocconcini Cheese, Italian Prosciutto, Bell Peppers, Tomato Sauce"
      }
    ]
  },
  {
    id: "salads",
    title: "SALADS",
    note: "Serves 6 people per bowl",
    items: [
      {
        name: "MEDITERRANEAN",
        price: "35.70",
        ingredients: "Mixed Lettuce, Tomato, Cucumber, Italian Dressing"
      },
      {
        name: "CAPRESE",
        price: "41.70",
        ingredients: "Tomato, Fresh Mozzarella, Italian Dressing"
      },
      {
        name: "GREEK",
        price: "41.70",
        ingredients: "Mixed Lettuce, Tomato, Cucumber, Olives, Feta Cheese"
      },
      {
        name: "CAESAR",
        price: "38.70",
        ingredients: "Romaine Lettuce, Croutons, Parmesan Cheese, Caesar Dressing"
      }
    ]
  },
  {
    id: "pagnotta",
    title: "PAGNOTTA",
    items: [
      {
        name: "CHICKEN",
        price: "9.95",
        ingredients: "Seasoned Grill Chicken, Cheddar, Tomato, Lettuce, Homemade Aioli"
      },
      {
        name: "STEAK",
        price: "9.95",
        ingredients: "AAA Steak, Brie Cheese, Tomato, Lettuce, Homemade Aioli"
      },
      {
        name: "PROSCIUTTO",
        price: "8.95",
        ingredients: "Prosciutto, Mozzarella Cheese, Tomato, Lettuce, Pesto"
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

const Downtown: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-full w-full overflow-x-hidden"
    >
      {/* HERO SECTION - Similar to Inglewood page */}
      <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        
        {/* Background image with cinematic zoom */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: [1, 1.08, 1] }}
          transition={{ 
            opacity: { duration: 1.5 },
            scale: { duration: 20, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/attached_assets/IconsofEataly_17-1-1024x711_1767573750861.jpg")',
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
        
        {/* Main DOWNTOWN title - centered and moved higher */}
        <div className="relative z-10 text-center -translate-y-16">
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl md:text-[9rem] font-display text-pronto-cream tracking-wide drop-shadow-2xl leading-none"
          >
            DOWNTOWN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-pronto-cream font-mono-serif text-lg md:text-xl tracking-[0.2em] mt-4"
          >
            605 5th Ave, SW, Calgary, Alberta
          </motion.p>
        </div>
        
        {/* Hero text animation */}
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
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }
                }}
                className="inline-flex"
              >
                <span className="text-4xl md:text-7xl font-mono-serif tracking-[0.2em] text-pronto-orange/60 uppercase">
                  {Array(15).fill("ANTIPASTI - PIZZA - PANINI - ").join("")}
                </span>
                <span className="text-4xl md:text-7xl font-mono-serif tracking-[0.2em] text-pronto-orange/60 uppercase">
                  {Array(15).fill("ANTIPASTI - PIZZA - PANINI - ").join("")}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
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

      <div className="relative w-full max-w-5xl mx-auto px-6 py-24 min-h-screen">
             
             {menuSections.map((section, idx) => (
               <div 
                  key={section.id} 
                  id={section.id} 
                  className="mb-24 lg:mb-40"
               >
                 <motion.div 
                    initial={{ opacity: 0, y: 40, rotateX: 90 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex flex-col md:flex-row items-baseline gap-4 mb-16 border-b-8 border-pronto-blue pb-4 origin-bottom"
                    style={{ perspective: 1000 }}
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

                 <div className="flex flex-col gap-4">
                    {section.items.map((item) => (
                      <MenuItem key={item.name} item={item} />
                    ))}
                 </div>
               </div>
             ))}

             <div className="mt-12 mb-12 border-t-2 border-pronto-blue pt-12 text-center">
                 <p className="font-mono-serif font-bold text-2xl text-pronto-blue">(V) = VEGETARIAN</p>
                 <p className="font-mono-serif font-bold text-2xl text-pronto-orange mt-4">GLUTEN FRIENDLY OPTIONS AVAILABLE</p>
             </div>

      </div>

      <div className="bg-black text-center py-20 px-4 flex flex-col items-center">
        <img 
          src="/attached_assets/Screenshot_2025-12-30_192545_1767574481771.png" 
          alt="PRONZO" 
          className="h-20 w-auto mb-8"
        />
        <h3 className="text-5xl font-display text-white mb-8">5TH & 5TH</h3>
        <div className="font-mono-serif text-xl text-white space-y-2">
           <p className="font-bold">605 5th Ave, SW</p>
           <p>403-993-9093</p>
           
           <div className="py-6 space-y-2">
             <p className="text-pronto-orange font-bold uppercase tracking-wider">Hours of operation</p>
             <p>On-site: Monday to Friday - 11 AM to 2 PM</p>
             <p>Catering: Monday to Saturday - 9 AM to 8 PM</p>
           </div>

           <p className="pt-4 text-pronto-orange font-bold">Contact us for your next event!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Downtown;
