'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offset = element.offsetTop;
          
          if (scrollPosition >= offset && scrollPosition < offset + element.offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-4xl">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-5 py-3 text-white/60 hover:text-white transition-colors relative ${
                  activeSection === section.id ? 'text-white' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-3 flex justify-between items-center text-white/60"
            >
              <span>Menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Mobile Menu */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="border-t border-white/10"
              >
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full px-5 py-3 text-left text-white/60 hover:text-white transition-colors hover:bg-white/5 relative ${
                      activeSection === section.id ? 'text-white' : ''
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {section.label}
                    {activeSection === section.id && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-white"
                        layoutId="activeSectionMobile"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 