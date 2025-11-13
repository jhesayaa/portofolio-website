'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FolderOpen, Mail, Sparkles, Award, WorkflowIcon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [indicatorPosition, setIndicatorPosition] = useState({ x: 0, width: 0 });
  
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home size={24} /> },
    { name: 'About', href: '#about', icon: <User size={24} /> },
    { name: 'Skills', href: '#skills', icon: <Sparkles size={24} /> },
    { name: 'Projects', href: '#projects', icon: <FolderOpen size={24} /> },
    { name: 'Experience', href: '#experience', icon: <WorkflowIcon size={24} /> },
    { name: 'Certificates', href: '#certificates', icon: <Award size={24} /> }, 
    { name: 'Contact', href: '#contact', icon: <Mail size={24} /> },
  ];

  // Calculate indicator position based on actual element position
  const updateIndicatorPosition = (index: number) => {
    const targetElement = navRefs.current[index];
    const container = containerRef.current;
    
    if (targetElement && container) {
      const containerRect = container.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      
      const x = targetRect.left - containerRect.left;
      const width = targetRect.width;
      
      setIndicatorPosition({ x, width });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Auto-update active section based on scroll
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // ← Better detection
      
      // Check if we're at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isAtBottom) {
        // Force set to last section (Contact) when at bottom
        setActiveIndex(sections.length - 1);
        updateIndicatorPosition(sections.length - 1);
        return;
      }
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveIndex(index);
            updateIndicatorPosition(index);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => updateIndicatorPosition(activeIndex));
    
    // Initial position
    updateIndicatorPosition(0);
    
    // Trigger initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => updateIndicatorPosition(activeIndex));
    };
  }, [activeIndex]);

  // Update indicator on hover
  useEffect(() => {
    if (hoveredIndex !== null) {
      updateIndicatorPosition(hoveredIndex);
    } else {
      updateIndicatorPosition(activeIndex);
    }
  }, [hoveredIndex, activeIndex]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div
        ref={containerRef}
        className={`relative flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-3 sm:py-3.5 rounded-2xl sm:rounded-3xl backdrop-blur-2xl border shadow-2xl transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/60 border-white/20 shadow-black/20' 
            : 'bg-white/10 border-white/10 shadow-primary-600/10'
        }`}
        style={{
          boxShadow: isScrolled 
            ? '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
            : '0 8px 32px 0 rgba(124, 58, 237, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Gooey Blob Background */}
        <div 
          className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden pointer-events-none"
          style={{ filter: 'url(#gooey)' }}
        >
          {/* Outer glow */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-12 sm:h-14 rounded-xl sm:rounded-2xl"
            animate={{
              x: indicatorPosition.x,
              width: indicatorPosition.width,
            }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 28,
            }}
            style={{
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)',
            }}
          />

          {/* Main indicator */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-10 sm:h-12 rounded-xl sm:rounded-2xl"
            animate={{
              x: indicatorPosition.x,
              width: indicatorPosition.width,
            }}
            transition={{
              type: 'spring',
              stiffness: 320,
              damping: 26,
            }}
            style={{
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.8) 0%, rgba(236, 72, 153, 0.8) 100%)',
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            }}
          />
        </div>

        {/* Nav Items */}
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            ref={(el) => (navRefs.current[index] = el)}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
              updateIndicatorPosition(index);
              document.getElementById(item.href.substring(1))?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 z-10 group cursor-pointer"
            title={item.name}
          >
            <div
              className={`transition-all duration-300 flex items-center justify-center ${
                (hoveredIndex !== null ? hoveredIndex === index : activeIndex === index)
                  ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' 
                  : 'text-gray-400 group-hover:text-gray-200'
              }`}
            >
              {item.icon}
            </div>

            {/* Tooltip - MacOS Style */}
            <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="relative">
                <div className="bg-gray-900/95 backdrop-blur-xl text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap border border-white/10 shadow-xl">
                  {item.name}
                </div>
                {/* Arrow */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/95 border-l border-t border-white/10 rotate-45" />
              </div>
            </div>
          </motion.a>
        ))}

        {/* Separator dots - MacOS style */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
          {navItems.map((_, index) => (
            <motion.div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-primary-400 w-4' 
                  : 'bg-white/20'
              }`}
              animate={{
                scale: activeIndex === index ? 1.2 : 1,
              }}
            />
          ))}
        </div>
      </div>

      {/* SVG Filter for Gooey Effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
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