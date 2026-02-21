'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  path: string;
  isButton?: boolean;
}

const navItems: NavItem[] = [
  { label: 'HOME', path: '/' },
  { label: 'INGLEWOOD', path: '/inglewood' },
  { label: 'DOWNTOWN', path: '/downtown' },
  { label: 'ABOUT', path: '/about' },
  { label: 'CONTACT', path: '/contact' },
  { label: 'JOIN WAITLIST', path: '/inglewood/waitlist' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const currentPath = usePathname();

  const hideCompletely = currentPath === '/inglewood/waitlist';
  const hideOnScrollPages = ['/inglewood', '/downtown', '/about', '/contact'];
  const shouldHideOnScroll = hideOnScrollPages.includes(currentPath);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!shouldHideOnScroll) {
      setIsVisible(true);
      return;
    }

    const mainElement = document.querySelector('main');
    if (!mainElement) return;

    const handleScroll = () => {
      const currentScrollY = mainElement.scrollTop;
      
      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    mainElement.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
    };
  }, [shouldHideOnScroll, lastScrollY]);

  useEffect(() => {
    setIsVisible(true);
    setLastScrollY(0);
  }, [currentPath]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  if (!isMounted) {
    return (
      <nav className={`z-50 px-8 py-6 w-full bg-pronto-navy border-b border-white/10 ${
        shouldHideOnScroll ? 'fixed top-0 left-0 right-0' : 'relative shrink-0'
      }`}>
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="relative z-50 group text-left">
            <img 
              src="/assets/logo.jpg" 
              alt="Pronto" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className={`text-2xl font-bold font-mono-serif tracking-widest transition-colors relative group ${
                  item.label === 'JOIN WAITLIST'
                    ? 'text-lg text-[#FF5A1F] hover:text-white border border-[#FF5A1F]/30 px-3 py-1 rounded whitespace-nowrap hover:border-white/40'
                    : currentPath === item.path 
                      ? 'text-[#FF5A1F]'
                      : 'text-[#1A1B8C] hover:text-[#FF5A1F]'
                }`}
              >
                <span>{item.label}</span>
                {item.label !== 'JOIN WAITLIST' && (
                  <span className={`absolute -bottom-1 left-0 h-1 bg-[#FF5A1F] transition-all duration-300 ${currentPath === item.path ? 'w-full' : 'w-0'}`} />
                )}
              </Link>
            ))}
          </div>
          <button className="md:hidden relative z-50 text-[#1A1B8C] hover:text-[#FF5A1F] transition-colors" aria-label="Open menu">
            <Menu size={32} aria-hidden="true" />
          </button>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav 
      initial={false}
      animate={{ 
        y: isVisible ? 0 : -120, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`z-50 px-8 py-6 w-full bg-pronto-navy border-b border-white/10 ${
        shouldHideOnScroll ? 'fixed top-0 left-0 right-0' : 'relative shrink-0'
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <Link 
          href="/"
          className="relative z-50 group text-left" 
        >
          <div>
            <img 
              src="/assets/logo.jpg" 
              alt="Pronto" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            item.isButton ? (
              <button
                key={item.label}
                className="text-2xl font-bold font-mono-serif tracking-widest transition-colors relative group px-8 py-2 border-2 border-[#1A1B8C] text-[#1A1B8C] hover:border-[#FF5A1F] hover:text-[#FF5A1F] inline-flex flex-col items-center justify-center leading-tight"
              >
                <span>{item.label}</span>
                <span className="text-xs font-normal lowercase opacity-80 font-sans mt-0.5">(coming soon)</span>
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.path}
                onClick={handleNavClick}
                className={`text-2xl font-bold font-mono-serif tracking-widest transition-colors relative group ${
                  item.label === 'JOIN WAITLIST'
                    ? 'text-lg text-[#FF5A1F] hover:text-white border border-[#FF5A1F]/30 px-3 py-1 rounded whitespace-nowrap hover:border-white/40'
                    : currentPath === item.path 
                      ? 'text-[#FF5A1F]'
                      : 'text-[#1A1B8C] hover:text-[#FF5A1F]'
                }`}
              >
                <span>{item.label}</span>
                {item.label !== 'JOIN WAITLIST' && (
                  <span className={`absolute -bottom-1 left-0 h-1 bg-[#FF5A1F] transition-all duration-300 ${currentPath === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                )}
              </Link>
            )
          ))}
        </div>

        <button
          className="md:hidden relative z-50 text-[#1A1B8C] hover:text-[#FF5A1F] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={32} aria-hidden="true" /> : <Menu size={32} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-pronto-navy flex flex-col justify-center items-center z-40"
          >
            {navItems.map((item, index) => (
              item.isButton ? (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-4xl font-mono-serif font-bold my-4 transition-colors flex flex-col items-center text-[#1A1B8C] hover:text-[#FF5A1F]"
                >
                  <span>{item.label}</span>
                  <span className="text-lg font-sans font-normal mt-1 opacity-70">(coming soon)</span>
                </motion.button>
              ) : (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    onClick={handleNavClick}
                    className={`text-4xl font-mono-serif font-bold my-4 transition-colors flex flex-col items-center ${
                      item.label === 'JOIN WAITLIST'
                        ? 'text-[#FF5A1F]'
                        : currentPath === item.path
                          ? 'text-[#FF5A1F]'
                          : 'text-[#1A1B8C] hover:text-[#FF5A1F]'
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
