'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function WaitlistPage() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div className="bg-black min-h-full w-full overflow-x-hidden">
      <div className="relative w-full max-w-3xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/inglewood"
            className="inline-flex items-center gap-2 text-pronto-cream/70 hover:text-pronto-orange font-mono-serif text-sm uppercase tracking-wider mb-12 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Menu
          </Link>

          <h1 className="text-5xl md:text-8xl font-display text-pronto-cream tracking-wide leading-none mb-4 text-center">
            JOIN THE
          </h1>
          <h1 className="text-5xl md:text-8xl font-display text-pronto-orange tracking-wide leading-none mb-6 text-center">
            WAITLIST
          </h1>
          <p className="font-mono-serif text-lg md:text-xl text-white/70 tracking-wide mb-12 text-center">
            Inglewood &mdash; 1139 9th Ave SE, Calgary
          </p>

          <div className="flex items-center justify-center w-full">
            <div ref={containerRef} className="w-full max-w-md min-h-[200px] mx-auto"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
