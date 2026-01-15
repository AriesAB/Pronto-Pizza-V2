'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';

const RevealText: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true });
  const storyInView = useInView(storyRef, { once: true, margin: "-20%" });
  const teamInView = useInView(teamRef, { once: true, margin: "-20%" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-20%" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="bg-[#0a0a0a] min-h-full w-full overflow-x-hidden">
        {/* HERO SECTION */}
        <div className="relative h-screen w-full overflow-hidden flex items-center bg-[#0a0a0a]">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=2574&auto=format&fit=crop")'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-16">
            <div className="h-[2px] w-[120px] mb-8" style={{ backgroundColor: '#FF5A1F' }} />
            <p className="font-mono tracking-[0.3em] uppercase text-sm mb-6" style={{ color: '#FF5A1F' }}>Our Story</p>
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-mono-serif leading-[0.95] tracking-tight" style={{ color: '#FEFBF6' }}>
              More Than
            </h1>
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-mono-serif leading-[0.95] tracking-tight" style={{ color: '#FF5A1F' }}>
              Just Pizza
            </h1>
            <p className="mt-12 text-xl md:text-2xl max-w-2xl font-mono-serif leading-relaxed" style={{ color: 'rgba(254, 251, 246, 0.7)' }}>
              It's family, tradition, and a lifelong love for hospitality.
            </p>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: 'rgba(254, 251, 246, 0.3)' }}>
              <div className="w-1 h-2 rounded-full" style={{ backgroundColor: '#FF5A1F' }} />
            </div>
          </div>
        </div>

        {/* WHERE IT ALL BEGAN */}
        <section className="py-24 md:py-32 px-6 md:px-16 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-[8rem] md:text-[12rem] font-display text-[#FF5A1F]/10 absolute -top-16 -left-8 pointer-events-none select-none">01</span>
                <h2 className="text-4xl md:text-6xl font-display text-[#FEFBF6] mb-8">
                  Where It All <span className="text-[#FF5A1F]">Began</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-[#FEFBF6]/70 font-mono leading-relaxed">
                    Our story begins with our father, Annibale Bruno, whose passion for food and service spans decades. Before PRONTO Pizza, Annibale owned and operated multiple restaurants across the industry — from fine dining to fast food to food trucks. He's done it all.
                  </p>
                  <p className="text-lg text-[#FEFBF6]/70 font-mono leading-relaxed">
                    That journey ultimately led him to what he loves most: creating authentic Italian food that brings people together. Over eight years ago, he founded PRONTO Pizza, and it's been home ever since.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img src="/assets/about-1.png" alt="Enjoying PRONTO Pizza" className="w-full aspect-[4/5] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10">
                      <p className="text-[#FF5A1F] font-mono text-sm uppercase tracking-wider">Est. 2016</p>
                      <p className="text-[#FEFBF6] font-display text-xl mt-1">8+ Years of Love</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-12 -right-8 w-40 md:w-52 z-20 rounded-xl overflow-hidden shadow-2xl border-4 border-[#0a0a0a]">
                  <img src="/assets/about-2.jpg" alt="Pepperoni pizza spread" className="w-full aspect-square object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE NEXT GENERATION */}
        <section className="py-24 md:py-32 px-6 md:px-16 relative bg-gradient-to-b from-[#0a0a0a] via-[#1A1B8C]/20 to-[#0a0a0a]">
          <span className="text-[8rem] md:text-[12rem] font-display text-white/5 absolute top-8 right-8 pointer-events-none select-none">02</span>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-display text-[#FEFBF6] leading-tight">
              The Next <span className="text-[#FF5A1F]">Generation</span>
            </h2>
            <div className="space-y-6 mt-8">
              <p className="text-lg md:text-xl text-[#FEFBF6]/70 font-mono leading-relaxed">
                Growing up in the restaurant world, Giulia and Alessio were raised behind the counter, in the kitchen, and at the table — learning the importance of quality ingredients, genuine hospitality, and treating every guest like family. Naturally, they fell in love with the craft and the community that comes with it.
              </p>
              <p className="text-lg md:text-xl text-[#FEFBF6]/70 font-mono leading-relaxed">
                In 2022, we proudly opened our own PRONTO Pizza location, continuing the family legacy while bringing our own energy and vision to the brand. Now, we're beyond excited to announce the opening of our new PRONTO Pizza location in Inglewood, located at 1139 9th Ave SE, Calgary, Alberta.
              </p>
            </div>
            <div className="flex justify-center pt-8">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 rounded-full">
                <MapPin className="w-5 h-5 text-[#FF5A1F]" />
                <span className="text-[#FEFBF6] font-mono text-lg">1139 9th Ave SE, Calgary, Alberta</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE'RE ABOUT */}
        <section className="py-24 md:py-32 px-6 md:px-16 relative">
          <span className="text-[8rem] md:text-[12rem] font-display text-[#FF5A1F]/10 absolute -top-20 left-0 pointer-events-none select-none">03</span>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="/assets/about-3.jpg" alt="Friends enjoying pizza" className="w-full aspect-[3/4] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="lg:col-span-2 text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-display text-[#FEFBF6] mb-12">
                  What We're <span className="text-[#FF5A1F]">About</span>
                </h2>
                <p className="text-lg text-[#FEFBF6]/70 font-mono leading-relaxed">
                  At PRONTO, we stay true to the authentic Italian style we grew up with — using premium-quality ingredients to serve delicious pizza, fresh panini, and classic Italian favourites made with care. We're proud to share our food, our story, and our good vibes with the community.
                </p>
                <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
                  {["Authentic", "Quality", "Family", "Community"].map((value) => (
                    <span key={value} className="px-6 py-3 rounded-full border border-[#FEFBF6]/20 text-[#FEFBF6] font-mono text-sm uppercase tracking-wider">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 md:py-40 px-6 md:px-16 relative overflow-hidden bg-[#FF5A1F]">
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-8xl font-display text-white leading-tight">
              Ready for a taste?
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-white/80 font-mono leading-relaxed max-w-2xl mx-auto">
              Whether you're craving great pizza, a panini with gelato for dessert (espresso after 12?… okay, we're joking), or just a place that feels like home — come by PRONTO Pizza today.
            </p>
            <p className="mt-8 text-2xl md:text-4xl font-display text-white font-bold">
              We can't wait to serve you.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <button className="bg-white text-[#FF5A1F] font-display text-lg md:text-xl px-8 py-4 rounded-full shadow-xl">
                View Our Menu
              </button>
              <button className="bg-transparent border-2 border-white text-white font-display text-lg md:text-xl px-8 py-4 rounded-full">
                Find Us
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#0a0a0a] py-16 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <img src="/assets/pronto-logo.png" alt="PRONTO" className="h-16 w-auto mx-auto mb-8" />
            <div className="font-mono text-[#FEFBF6]/50 text-sm">
              <p>© 2026 PRONTO Pizza. All rights reserved.</p>
              <p className="mt-2 text-[#FF5A1F]">Made with love by the Bruno Family</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen w-full overflow-x-hidden">
      {/* EDITORIAL HERO */}
      <section ref={heroRef} className="min-h-screen relative flex flex-col justify-center px-6 md:px-16 py-20">
        {/* Background with slow zoom effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=2574&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Orange accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-pronto-orange mb-8"
          />
          
          {/* "OUR STORY" label */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-pronto-orange font-mono tracking-[0.3em] uppercase text-sm mb-6"
          >
            Our Story
          </motion.p>

          {/* "More Than" headline - reveal from below */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,12vw,10rem)] font-mono-serif text-pronto-cream leading-[0.9] tracking-tight"
            >
              More Than
            </motion.h1>
          </div>
          
          {/* "Just Pizza" headline - reveal from below with gradient */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,12vw,10rem)] font-mono-serif leading-[0.9] tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pronto-orange to-orange-400">Just Pizza</span>
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-xl md:text-2xl text-pronto-cream/70 max-w-2xl font-mono-serif leading-relaxed"
          >
            It's family, tradition, and a lifelong love for hospitality.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-pronto-cream/30 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-pronto-orange rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* THE ORIGIN - HORIZONTAL LAYOUT */}
      <section ref={storyRef} className="py-24 md:py-32 px-6 md:px-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pronto-orange/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <motion.span
                initial={{ opacity: 0 }}
                animate={storyInView ? { opacity: 1 } : { opacity: 0 }}
                className="text-[8rem] md:text-[12rem] font-mono-serif text-pronto-orange/10 absolute -top-16 -left-8 pointer-events-none select-none"
              >
                01
              </motion.span>
              
              <RevealText>
                <h2 className="text-4xl md:text-6xl font-mono-serif text-pronto-cream mb-8">
                  Where It All <span className="text-pronto-orange">Began</span>
                </h2>
              </RevealText>

              <div className="space-y-6 relative z-10">
                <RevealText delay={0.1}>
                  <p className="text-lg text-pronto-cream/70 font-mono-serif leading-relaxed">
                    Our story begins with our father, Annibale Bruno, whose passion for food and service spans decades. Before PRONTO Pizza, Annibale owned and operated multiple restaurants across the industry — from fine dining to fast food to food trucks. He's done it all.
                  </p>
                </RevealText>

                <RevealText delay={0.2}>
                  <p className="text-lg text-pronto-cream/70 font-mono-serif leading-relaxed">
                    That journey ultimately led him to what he loves most: creating authentic Italian food that brings people together. Over eight years ago, he founded PRONTO Pizza, and it's been home ever since.
                  </p>
                </RevealText>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <div className="relative z-10">
                  <div className="absolute -inset-4 bg-gradient-to-br from-pronto-orange/20 to-pronto-blue/20 rounded-3xl blur-2xl" />
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src="/assets/about-1.png"
                      alt="Enjoying PRONTO Pizza"
                      className="w-full aspect-[4/5] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10">
                        <p className="text-pronto-orange font-mono text-sm uppercase tracking-wider">Est. 2016</p>
                        <p className="text-pronto-cream font-mono-serif text-xl mt-1">8+ Years of Love</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-12 -right-8 w-40 md:w-52 z-20 rotate-6">
                  <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-[#0a0a0a]">
                    <img
                      src="/assets/about-2.jpg"
                      alt="Pepperoni pizza spread"
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE NEXT GENERATION - TEXT CENTERED */}
      <section ref={teamRef} className="py-24 md:py-32 px-6 md:px-16 relative bg-gradient-to-b from-[#0a0a0a] via-pronto-blue/20 to-[#0a0a0a]">
        <motion.span
          initial={{ opacity: 0 }}
          animate={teamInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-[8rem] md:text-[12rem] font-mono-serif text-white/5 absolute top-8 right-8 pointer-events-none select-none"
        >
          02
        </motion.span>

        <div className="max-w-4xl mx-auto text-center">
          <div className="relative z-10 space-y-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pronto-orange/10 rounded-full blur-3xl" />
            
            <RevealText delay={0.1}>
              <h2 className="text-4xl md:text-7xl font-mono-serif text-pronto-cream leading-tight">
                The Next <span className="text-pronto-orange">Generation</span>
              </h2>
            </RevealText>

            <div className="space-y-6">
              <RevealText delay={0.2}>
                <p className="text-lg md:text-xl text-pronto-cream/70 font-mono-serif leading-relaxed">
                  Growing up in the restaurant world, Giulia and Alessio were raised behind the counter, in the kitchen, and at the table — learning the importance of quality ingredients, genuine hospitality, and treating every guest like family. Naturally, they fell in love with the craft and the community that comes with it.
                </p>
              </RevealText>

              <RevealText delay={0.3}>
                <p className="text-lg md:text-xl text-pronto-cream/70 font-mono-serif leading-relaxed">
                  In 2022, we proudly opened our own PRONTO Pizza location, continuing the family legacy while bringing our own energy and vision to the brand. Now, we're beyond excited to announce the opening of our new PRONTO Pizza location in Inglewood, located at 1139 9th Ave SE, Calgary, Alberta.
                </p>
              </RevealText>
            </div>

            <RevealText delay={0.4}>
              <div className="flex justify-center pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-pronto-orange/10 border border-pronto-orange/30 rounded-full"
                >
                  <MapPin className="w-5 h-5 text-pronto-orange" />
                  <span className="text-pronto-cream font-mono text-lg">1139 9th Ave SE, Calgary, Alberta</span>
                </motion.div>
              </div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* OUR VALUES - MINIMAL SECTION */}
      <section ref={valuesRef} className="py-24 md:py-32 px-6 md:px-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-pronto-orange/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-pronto-blue/10 rounded-full"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={valuesInView ? { opacity: 1 } : { opacity: 0 }}
            className="text-[8rem] md:text-[12rem] font-mono-serif text-pronto-orange/10 absolute -top-20 left-0 pointer-events-none select-none"
          >
            03
          </motion.span>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: 3 }}
              animate={valuesInView ? { opacity: 1, x: 0, rotate: -3 } : { opacity: 0, x: -30, rotate: 3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-pronto-orange/20 to-pronto-cream/10 rounded-3xl blur-2xl" />
              <motion.div
                whileHover={{ scale: 1.03, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/assets/about-3.jpg"
                  alt="Friends enjoying pizza"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            <div className="lg:col-span-2 text-center lg:text-left">
              <RevealText>
                <h2 className="text-4xl md:text-6xl font-mono-serif text-pronto-cream mb-12">
                  What We're <span className="text-pronto-orange">About</span>
                </h2>
              </RevealText>

              <RevealText delay={0.2}>
                <p className="text-lg text-pronto-cream/70 font-mono-serif leading-relaxed">
                  At PRONTO, we stay true to the authentic Italian style we grew up with — using premium-quality ingredients to serve delicious pizza, fresh panini, and classic Italian favourites made with care. We're proud to share our food, our story, and our good vibes with the community.
                </p>
              </RevealText>

              <RevealText delay={0.3}>
                <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
                  {["Authentic", "Quality", "Family", "Community"].map((value, i) => (
                    <motion.span
                      key={value}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={valuesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 107, 53, 0.2)" }}
                      className="px-6 py-3 rounded-full border border-pronto-cream/20 text-pronto-cream font-mono text-sm uppercase tracking-wider transition-colors"
                    >
                      {value}
                    </motion.span>
                  ))}
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - BOLD STATEMENT */}
      <section className="py-24 md:py-40 px-6 md:px-16 relative overflow-hidden bg-pronto-orange">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap"
        >
          <span className="text-[15rem] md:text-[25rem] font-mono-serif text-white/10">
            PRONTO • PIZZA • PRONTO • PIZZA • PRONTO • PIZZA •
          </span>
        </motion.div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <RevealText>
            <h2 className="text-4xl md:text-8xl font-mono-serif text-white leading-tight">
              Ready for a taste?
            </h2>
          </RevealText>

          <RevealText delay={0.2}>
            <p className="mt-8 text-xl md:text-2xl text-white/80 font-mono-serif leading-relaxed max-w-2xl mx-auto">
              Whether you're craving great pizza, a panini with gelato for dessert (espresso after 12?… okay, we're joking), or just a place that feels like home — come by PRONTO Pizza today.
            </p>
          </RevealText>

          <RevealText delay={0.3}>
            <p className="mt-8 text-2xl md:text-4xl font-mono-serif text-white font-bold">
              We can't wait to serve you.
            </p>
          </RevealText>

          <RevealText delay={0.4}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-pronto-orange font-mono-serif text-lg md:text-xl px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-shadow"
              >
                View Our Menu
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white font-mono-serif text-lg md:text-xl px-8 py-4 rounded-full hover:bg-white hover:text-pronto-orange transition-colors"
              >
                Find Us
              </motion.button>
            </div>
          </RevealText>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] py-16 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.img
            src="/assets/pronto-logo.png"
            alt="PRONTO"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-16 w-auto mx-auto mb-8"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-pronto-cream/50 text-sm"
          >
            <p>© 2026 PRONTO Pizza. All rights reserved.</p>
            <p className="mt-2 text-pronto-orange">Made with love by the Bruno Family</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
