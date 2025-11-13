'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma
} from 'react-icons/si';
import { useEffect, useState } from 'react';

const FloatingIcons = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const icons = [
    { Icon: SiReact, color: '#61DAFB', delay: 0, x: '10%', y: '20%' },
    { Icon: SiNextdotjs, color: '#FFFFFF', delay: 0.5, x: '80%', y: '15%' },
    { Icon: SiTypescript, color: '#3178C6', delay: 1, x: '15%', y: '70%' },
    { Icon: SiTailwindcss, color: '#06B6D4', delay: 1.5, x: '85%', y: '65%' },
    { Icon: SiNodedotjs, color: '#339933', delay: 2, x: '5%', y: '45%' },
    { Icon: SiMongodb, color: '#47A248', delay: 2.5, x: '90%', y: '40%' },
    { Icon: SiPostgresql, color: '#4169E1', delay: 3, x: '25%', y: '85%' },
    { Icon: SiGit, color: '#F05032', delay: 3.5, x: '75%', y: '80%' },
    { Icon: SiDocker, color: '#2496ED', delay: 4, x: '50%', y: '10%' },
    { Icon: SiFigma, color: '#F24E1E', delay: 4.5, x: '50%', y: '90%' },
  ];

  // Icon size based on screen size
  const iconSize = isMobile ? 28 : 48;
  const padding = isMobile ? 'p-1' : 'p-2';

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, color, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute" // ← NO 'hidden sm:block'
          style={{ 
            left: x, 
            top: y,
            filter: `drop-shadow(0 0 ${isMobile ? '5px' : '10px'} ${color})`
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isMobile ? [0.3, 0.5, 0.3] : [0.4, 0.7, 0.4],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            <div 
              className={`backdrop-blur-sm bg-white/5 rounded-lg ${padding} border border-white/10`}
              style={{ 
                boxShadow: `0 0 ${isMobile ? '8px' : '20px'} ${color}40`
              }}
            >
              <Icon size={iconSize} style={{ color }} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;