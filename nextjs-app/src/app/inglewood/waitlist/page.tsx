'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function WaitlistPage() {
  useEffect(() => {
    const existingScript = document.getElementById('wlme_inclscript');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'wlme_inclscript';
      script.src = 'https://www.waitlist.me/load_widget/?wg=18711190655';
      script.async = true;
      document.body.appendChild(script);
    }
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

          <h1 className="text-5xl md:text-8xl font-display text-pronto-cream tracking-wide leading-none mb-4">
            JOIN THE
          </h1>
          <h1 className="text-5xl md:text-8xl font-display text-pronto-orange tracking-wide leading-none mb-6">
            WAITLIST
          </h1>
          <p className="font-mono-serif text-lg md:text-xl text-white/70 tracking-wide mb-12">
            Inglewood &mdash; 1139 9th Ave SE, Calgary
          </p>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-10 min-h-[400px]">
            <div id="wlme_widget_container"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
