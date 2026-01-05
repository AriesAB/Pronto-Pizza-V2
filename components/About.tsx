import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const AnimatedWord: React.FC<{ word: string; delay: number }> = ({ word, delay }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 50, rotateX: -90, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 15, 
        delay,
        mass: 0.8
      }}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  );
};

const AnimatedParagraph: React.FC<{ text: string; className?: string; delayStart?: number }> = ({ 
  text, 
  className = "",
  delayStart = 0 
}) => {
  const words = text.split(' ');
  
  return (
    <p className={className}>
      {words.map((word, i) => (
        <AnimatedWord key={i} word={word} delay={delayStart + i * 0.03} />
      ))}
    </p>
  );
};

const PulsingDot: React.FC<{ delay?: number }> = ({ delay = 0 }) => (
  <motion.span
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5]
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="inline-block w-2 h-2 md:w-3 md:h-3 bg-pronto-orange rounded-full mx-1"
  />
);

const FloatingEmoji: React.FC<{ emoji: string; className: string }> = ({ emoji, className }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0]
    }}
    transition={{
      opacity: { duration: 0.5 },
      scale: { type: "spring", stiffness: 300 },
      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }}
    className={`absolute text-4xl md:text-6xl pointer-events-none ${className}`}
  >
    {emoji}
  </motion.span>
);

const GlitchText: React.FC<{ text: string; className?: string }> = ({ text, className = "" }) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        animate={{
          x: [0, -2, 2, -1, 1, 0],
          opacity: [1, 0.8, 1, 0.9, 1]
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3
        }}
        className="relative z-10"
      >
        {text}
      </motion.span>
      <motion.span
        animate={{
          x: [0, 3, -3, 2, -2, 0],
          opacity: [0, 0.3, 0, 0.2, 0]
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3
        }}
        className="absolute inset-0 text-pronto-orange"
        aria-hidden
      >
        {text}
      </motion.span>
    </motion.span>
  );
};

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3]);

  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const legacyRef = useRef<HTMLDivElement>(null);
  const newLocationRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true });
  const storyInView = useInView(storyRef, { once: true, margin: "-20%" });
  const legacyInView = useInView(legacyRef, { once: true, margin: "-20%" });
  const newLocationInView = useInView(newLocationRef, { once: true, margin: "-20%" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-20%" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-20%" });

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-full w-full overflow-x-hidden relative"
    >
      {/* HERO SECTION */}
      <div 
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      >
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=2574&auto=format&fit=crop")',
              filter: 'contrast(1.1) brightness(0.7) saturate(1.2)'
            }}
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <motion.img 
          src="/attached_assets/Screenshot_2026-01-04_182854_1767576580110.png"
          alt="Pizza"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.8, 
            scale: 1,
            y: [0, -20, 0],
            rotate: [-5, 5, -5]
          }}
          transition={{
            opacity: { duration: 0.5, delay: Math.random() * 2 },
            scale: { duration: 0.5, delay: Math.random() * 2 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute w-16 h-16 md:w-24 md:h-24 object-contain top-20 left-10 md:left-20 z-0"
        />
        <FloatingEmoji emoji="🇮🇹" className="top-32 right-10 md:right-24" />
        <FloatingEmoji emoji="❤️" className="bottom-32 left-16 md:left-32" />
        <FloatingEmoji emoji="👨‍👩‍👧‍👦" className="bottom-40 right-12 md:right-36" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="font-mono-serif text-pronto-orange text-lg md:text-2xl uppercase tracking-[0.3em]">
              Our Story
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={heroInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15,
              delay: 0.4
            }}
            className="text-6xl md:text-[10rem] font-mono-serif text-pronto-cream leading-none mb-8"
          >
            <GlitchText text="FAMILY" />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4 text-4xl md:text-7xl font-mono-serif text-white/80"
          >
            <span>TRADITION</span>
            <PulsingDot delay={1} />
            <span>LOVE</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10 font-mono-serif text-xl md:text-3xl text-pronto-cream/90 max-w-3xl mx-auto"
          >
            PRONTO Pizza is more than just pizza — it's family, tradition, and a lifelong love for hospitality.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 15, 0] }}
          transition={{ 
            opacity: { delay: 2 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-pronto-cream"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-mono-serif uppercase tracking-widest">Scroll to discover</span>
            <motion.div
              animate={{ scaleY: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="2" width="16" height="28" rx="8" />
                <motion.circle
                  cx="12"
                  cy="12"
                  r="3"
                  fill="currentColor"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* THE ORIGIN STORY */}
      <div 
        ref={storyRef}
        className="relative py-24 md:py-40 px-6 bg-black overflow-hidden"
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={storyInView ? { x: "100%" } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-0 whitespace-nowrap pointer-events-none"
        >
          <span className="text-[8rem] md:text-[15rem] font-mono-serif text-pronto-cream/5">
            ANNIBALE • BRUNO • PASSION • FAMILY •
          </span>
        </motion.div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-8xl font-mono-serif text-pronto-cream uppercase">
              Where It All
              <br />
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={storyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="text-pronto-orange inline-block"
              >
                Began
              </motion.span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={storyInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative overflow-hidden rounded-lg shadow-2xl"
              >
                <img 
                  src="/attached_assets/IMG_6863_1767575536154.JPG" 
                  alt="Enjoying PRONTO Pizza"
                  className="w-full h-80 md:h-[500px] object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-pronto-orange/20"
                />
              </motion.div>
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  y: [0, -5, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-pronto-orange text-white p-6 rounded-lg shadow-xl"
              >
                <span className="font-mono-serif text-3xl md:text-5xl">8+</span>
                <p className="font-mono-serif text-sm">Years of Love</p>
              </motion.div>
            </motion.div>

            <div className="space-y-6">
              <AnimatedParagraph 
                text="Our story begins with our father, Annibale Bruno, whose passion for food and service spans decades. Before PRONTO Pizza, Annibale owned and operated multiple restaurants across the industry — from fine dining to fast food to food trucks. He's done it all."
                className="font-mono-serif text-lg md:text-xl text-pronto-cream/80 leading-relaxed"
                delayStart={0.4}
              />
              <AnimatedParagraph 
                text="That journey ultimately led him to what he loves most: creating authentic Italian food that brings people together. Over eight years ago, he founded PRONTO Pizza, and it's been home ever since."
                className="font-mono-serif text-lg md:text-xl text-pronto-cream/80 leading-relaxed"
                delayStart={0.6}
              />
            </div>
          </div>
        </div>
      </div>

      {/* THE NEXT GENERATION */}
      <div 
        ref={legacyRef}
        className="relative py-24 md:py-40 px-6 bg-pronto-blue overflow-hidden"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 border-[40px] border-pronto-orange/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-60 -left-60 w-[500px] h-[500px] border-[60px] border-white/5 rounded-full"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={legacyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 80 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={legacyInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block w-24 h-1 bg-pronto-orange mx-auto mb-8"
            />
            <h2 className="text-5xl md:text-8xl font-mono-serif text-pronto-cream uppercase">
              The Next
              <br />
              <span className="text-pronto-orange">Generation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {[
              { name: "Giulia Bruno", role: "Co-Owner" },
              { name: "Alessio Bruno", role: "Co-Owner" }
            ].map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, x: i === 0 ? -50 : 50, scale: 0.9 }}
                animate={legacyInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-32 h-32 mx-auto mb-6 rounded-full bg-pronto-orange/30 flex items-center justify-center"
                >
                  <span className="text-5xl">👨‍🍳</span>
                </motion.div>
                <h3 className="font-mono-serif text-3xl md:text-4xl text-pronto-cream group-hover:text-pronto-orange transition-colors">
                  {person.name}
                </h3>
                <p className="font-mono-serif text-pronto-cream/60 mt-2">{person.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={legacyInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <AnimatedParagraph 
              text="Growing up in the restaurant world, Giulia and Alessio were raised behind the counter, in the kitchen, and at the table — learning the importance of quality ingredients, genuine hospitality, and treating every guest like family. Naturally, they fell in love with the craft and the community that comes with it."
              className="font-mono-serif text-lg md:text-xl text-pronto-cream/80 leading-relaxed max-w-3xl mx-auto"
              delayStart={1}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={legacyInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-pronto-orange text-white px-8 py-4 rounded-lg">
              <span className="font-mono-serif text-2xl md:text-4xl">2022</span>
              <p className="font-mono-serif text-sm mt-1">Opened Our Own Location</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* NEW LOCATION ANNOUNCEMENT */}
      <div 
        ref={newLocationRef}
        className="relative py-24 md:py-40 px-6 bg-black overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0
              }}
              animate={{ 
                y: [null, Math.random() * 100 + "%"],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className="absolute w-12 h-12 md:w-16 md:h-16"
            >
              <img src="/attached_assets/Screenshot_2026-01-04_182854_1767576580110.png" alt="Pizza" className="w-full h-full object-contain" />
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={newLocationInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={newLocationInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <span className="bg-pronto-orange text-white font-mono-serif text-sm md:text-lg px-6 py-2 rounded-full uppercase tracking-widest">
                Exciting News!
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={newLocationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
              className="text-4xl md:text-7xl font-mono-serif text-pronto-cream uppercase mb-8"
            >
              Now Open in
              <br />
              <motion.span
                animate={{ 
                  color: ["#1A1B8C", "#FF5A1F", "#1A1B8C"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl md:text-9xl"
              >
                Inglewood
              </motion.span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={newLocationInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-pronto-blue p-8 rounded-2xl shadow-2xl border-4 border-pronto-orange"
            >
              <p className="font-mono-serif text-lg text-pronto-cream/60 mb-2">Find us at</p>
              <p className="font-mono-serif text-2xl md:text-4xl text-pronto-cream">
                1139 9th Ave SE
              </p>
              <p className="font-mono-serif text-xl text-pronto-orange mt-2">
                Calgary, Alberta
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* OUR VALUES */}
      <div 
        ref={valuesRef}
        className="relative py-24 md:py-40 px-6 bg-black overflow-hidden"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={valuesInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", stiffness: 80 }}
            className="text-5xl md:text-8xl font-mono-serif text-pronto-cream uppercase mb-16 text-center"
          >
            What We're
            <span className="text-pronto-orange"> About</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={valuesInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <AnimatedParagraph 
              text="At PRONTO, we stay true to the authentic Italian style we grew up with — using premium-quality ingredients to serve delicious pizza, fresh panini, and classic Italian favourites made with care. We're proud to share our food, our story, and our good vibes with the community."
              className="font-mono-serif text-lg md:text-xl text-pronto-cream/80 leading-relaxed"
              delayStart={1}
            />
          </motion.div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div 
        ref={ctaRef}
        className="relative py-24 md:py-40 px-6 bg-pronto-blue overflow-hidden"
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={ctaInView ? { x: "-100%" } : {}}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap"
        >
          <span className="text-[10rem] md:text-[20rem] font-mono-serif text-white/5">
            PRONTO • PIZZA • PRONTO • PIZZA •
          </span>
        </motion.div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h2 className="text-4xl md:text-7xl font-mono-serif text-pronto-cream uppercase mb-8">
              Ready for a taste?
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-mono-serif text-xl md:text-2xl text-pronto-cream/80 mb-8 max-w-2xl mx-auto"
          >
            Whether you're craving great pizza, a panini with gelato for dessert 
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block ml-1"
            >
              (espresso after 12?… okay, we're joking 😉)
            </motion.span>
            , or just a place that feels like home — come by PRONTO Pizza today.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="font-mono-serif text-3xl md:text-5xl text-pronto-orange"
          >
            We can't wait to serve you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pronto-orange text-white font-mono-serif text-xl md:text-2xl px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              View Our Menu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-pronto-cream text-pronto-cream font-mono-serif text-xl md:text-2xl px-10 py-4 rounded-lg hover:bg-pronto-cream hover:text-pronto-blue transition-colors"
            >
              Find Us
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-center py-20 px-4 flex flex-col items-center">
        <motion.img 
          src="/attached_assets/Screenshot_2025-12-30_192545_1767574481771.png" 
          alt="PRONTO" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-20 w-auto mb-8"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono-serif text-pronto-cream/60"
        >
          <p>© 2024 PRONTO Pizza. All rights reserved.</p>
          <p className="mt-2 text-pronto-orange">Made with ❤️ by the Bruno Family</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
