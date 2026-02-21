'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, Phone, MapPin } from 'lucide-react';

export default function WaitlistPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const existing = document.getElementById('wlme_inclscript');
    if (existing) existing.remove();

    const existingWrapper = document.getElementById('wlme_widget_wrapper');
    if (existingWrapper) existingWrapper.remove();

    const style = document.createElement('style');
    style.id = 'wlme_custom_styles';
    style.textContent = `
      #wlme_widget_wrapper,
      #wlme_widget_wrapper * {
        position: static !important;
        float: none !important;
      }
      #wlme_widget_wrapper {
        display: flex !important;
        justify-content: center !important;
        width: 100% !important;
      }
      #wlme_widget_wrapper > div {
        margin: 0 auto !important;
      }
    `;
    document.head.appendChild(style);

    const script = document.createElement('script');
    script.id = 'wlme_inclscript';
    script.src = 'https://www.waitlist.me/load_widget/?wg=18711190655';
    containerRef.current.appendChild(script);

    return () => {
      const s = document.getElementById('wlme_custom_styles');
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="bg-black min-h-full w-full overflow-x-hidden relative">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=2574&auto=format&fit=crop")',
          filter: 'contrast(1.05) brightness(0.3) saturate(1.15)'
        }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {isMounted && (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-24 -left-24 w-48 h-48 border-[25px] border-pronto-orange/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 w-64 h-64 border-[30px] border-pronto-blue/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -right-16 w-32 h-32 border-[15px] border-pronto-orange/5 rounded-full"
          />
        </>
      )}

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center min-h-full">
        <div className="w-full mb-8">
          <Link
            href="/inglewood"
            className="inline-flex items-center gap-2 text-pronto-cream/70 hover:text-pronto-orange font-mono-serif text-sm uppercase tracking-wider transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Menu
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <img
            src="/assets/pronto-logo.png"
            alt="Pronto Pizza"
            className="h-16 w-auto mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-8xl font-display text-pronto-cream tracking-wide leading-none mb-3">
            JOIN THE
          </h1>
          <h1 className="text-5xl md:text-8xl font-display text-pronto-orange tracking-wide leading-none mb-6">
            WAITLIST
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/60 font-mono-serif text-lg md:text-xl tracking-wide">
            <MapPin size={18} className="text-pronto-orange" />
            <span>Inglewood &mdash; 1139 9th Ave SE, Calgary</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-pronto-orange/5">
            <div className="flex items-center justify-center w-full">
              <div ref={containerRef} className="w-full min-h-[150px]"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/50 font-mono-serif text-sm">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-pronto-orange/70" />
              <span>403-993-9093</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-pronto-orange/70" />
              <span>Mon-Thu 11AM-10PM</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-pronto-orange/70" />
              <span>Fri-Sat 11AM-11PM</span>
            </div>
          </div>
          <p className="text-white/30 font-mono-serif text-xs mt-6 uppercase tracking-widest">
            Sunday 4-9PM
          </p>
        </motion.div>
      </div>
    </div>
  );
}
