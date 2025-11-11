'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface TextPressureProps {
  text: string;
  className?: string;
  gradient?: boolean;
}

const TextPressure = ({ text, className = '', gradient = false }: TextPressureProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const letters = text.split('');

  return (
    <div className={`inline-flex ${className}`}>
      {letters.map((letter, index) => {
        const distance = hoveredIndex !== null ? Math.abs(index - hoveredIndex) : Infinity;
        const scale = hoveredIndex !== null ? Math.max(1, 1.5 - distance * 0.15) : 1;
        const fontWeight = hoveredIndex !== null ? Math.max(400, 900 - distance * 150) : 700;

        return (
          <motion.span
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              scale,
              fontWeight: gradient ? 700 : fontWeight, 
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
            className={`inline-block cursor-default ${gradient ? 'gradient-text' : ''}`}
            style={{
              fontWeight: gradient ? 700 : fontWeight,
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        );
      })}
    </div>
  );
};

export default TextPressure;