'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offset = element.offsetTop;
          
          if (scrollPosition >= offset - windowHeight / 3 && 
              scrollPosition < offset + element.offsetHeight - windowHeight / 3) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/30 backdrop-blur-md rounded-full px-6 py-3"
      >
        <ul className="flex gap-6">
          {sections.map((section) => (
            <motion.li
              key={section.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToSection(section.id)}
                className={`px-5 py-2 rounded-full text-base font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-white/20 text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
} 