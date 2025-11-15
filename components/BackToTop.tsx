'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-primary-600 to-pink-600 text-white shadow-2xl shadow-primary-600/50 backdrop-blur-xl border border-white/10 group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-600 to-pink-600 blur-xl opacity-50 -z-10 group-hover:opacity-75 transition-opacity" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;