import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Safety', path: '/safety' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md h-16 shadow-md border-b border-industrial-border' : 'bg-transparent h-20 md:h-24'
      }`}>
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <Logo className={scrolled ? "h-8 md:h-10" : "h-10 md:h-12"} />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-[13px] font-bold uppercase tracking-[0.15em] transition-all relative py-2 ${
                    isActive ? 'text-industrial-primary' : 'text-industrial-muted hover:text-industrial-text'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline" 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-industrial-primary" 
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-industrial-text bg-slate-100 rounded-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[-1] md:hidden"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl z-[101] md:hidden flex flex-col"
              >
                <div className="p-6 flex items-center justify-between border-b border-slate-100">
                  <Logo className="h-8" showText={false} />
                  <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                    <X size={20} />
                  </button>
                </div>
                
                <div className="flex flex-col p-8 gap-6 overflow-y-auto flex-grow">
                  {links.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) => 
                          `text-xl font-bold flex justify-between items-center transition-colors ${
                            isActive ? 'text-industrial-primary' : 'text-industrial-text'
                          }`
                        }
                      >
                        {link.name}
                        <ChevronRight size={20} className="opacity-20" />
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                <div className="p-8 border-t border-slate-100 bg-slate-50">
                  <p className="text-[10px] uppercase font-bold text-industrial-muted tracking-widest mb-4">Quick Connect</p>
                  <a href="tel:+918242409905" className="block text-industrial-text font-bold mb-2">+91 824 240 9905</a>
                  <a href="mailto:info@perfectlogistics.in" className="block text-industrial-primary text-sm font-medium">info@perfectlogistics.in</a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;