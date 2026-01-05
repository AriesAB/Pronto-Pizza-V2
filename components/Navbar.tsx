import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavItem, Page } from '../types';

const navItems: NavItem[] = [
  { label: 'HOME', href: '#', page: 'home' },
  { label: 'INGLEWOOD', href: '#inglewood', page: 'inglewood' },
  { label: 'DOWNTOWN', href: '#downtown', page: 'downtown' },
  { label: 'ABOUT', href: '#about', page: 'about' },
  { label: 'ORDER NOW', href: '#order', isButton: true },
];

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (item: NavItem) => {
    if (item.page) {
      onNavigate(item.page);
    }
    setIsOpen(false);
  };

  return (
    <nav className="relative z-50 px-8 py-6 w-full bg-pronto-navy border-b border-white/10 shrink-0">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')} 
          className="relative z-50 group text-left" 
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/assets/logo.png" 
              alt="PRONZO" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </motion.div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => handleNavClick(item)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`text-2xl font-bold font-mono-serif tracking-widest transition-colors relative group ${
                item.isButton 
                  ? 'px-8 py-2 border-2 border-pronto-blue text-pronto-blue hover:border-pronto-orange hover:text-pronto-orange inline-flex flex-col items-center justify-center leading-tight' 
                  : currentPage === item.page 
                    ? 'text-pronto-orange'
                    : 'text-pronto-blue hover:text-pronto-orange'
              }`}
            >
              <span>{item.label}</span>
              {item.label === 'ORDER NOW' && (
                <span className="text-xs font-normal lowercase opacity-80 font-sans mt-0.5">(coming soon)</span>
              )}
              {!item.isButton && (
                <span className={`absolute -bottom-1 left-0 h-1 bg-pronto-orange transition-all duration-300 ${currentPage === item.page ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 text-pronto-blue"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
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
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`text-4xl font-mono-serif font-bold my-4 transition-colors flex flex-col items-center ${
                  item.isButton 
                    ? 'text-pronto-blue hover:text-pronto-orange' 
                    : currentPage === item.page
                      ? 'text-pronto-orange'
                      : 'text-pronto-blue hover:text-pronto-orange'
                }`}
              >
                <span>{item.label}</span>
                {item.label === 'ORDER NOW' && (
                  <span className="text-lg font-sans font-normal mt-1 opacity-70">(coming soon)</span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;