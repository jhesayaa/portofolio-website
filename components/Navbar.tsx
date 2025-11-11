'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home size={25} /> },
    { name: 'About', href: '#about', icon: <User size={25} /> },
    { name: 'Skills', href: '#skills', icon: <Briefcase size={25} /> },
    { name: 'Projects', href: '#projects', icon: <FolderOpen size={25} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={25} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div
        className={`relative flex items-center gap-2 px-6 py-4 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl transition-all duration-300 ${
          isScrolled ? 'bg-black/40' : 'bg-white/5'
        }`}
      >
        {/* Gooey Blob Container with Filter */}
        <div 
          className="absolute inset-0"
          style={{
            filter: 'url(#gooey)',
          }}
        >
          {/* Gooey Blob Background - Behind icons */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-14 bg-primary-600/40 rounded-full"
            initial={false}
            animate={{
              x: activeIndex * 70 + 12,
              width: '56px',
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          />

          {/* Solid indicator background */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-12 bg-primary-600 rounded-full"
            initial={false}
            animate={{
              x: activeIndex * 70 + 12,
              width: '56px',
            }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 25,
            }}
          />
        </div>

        {/* Nav Items - Above background */}
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-3 rounded-full transition-colors duration-300 z-10"
            title={item.name}
          >
            <div
              className={`transition-colors duration-300 ${
                activeIndex === index ? 'text-white' : 'text-gray-300'
              }`}
            >
              {item.icon}
            </div>

            {/* Tooltip */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap border border-primary-500/30">
                {item.name}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* SVG Filter for Gooey Effect - Adjusted values */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
    </motion.nav>
  );
};

export default Navbar;