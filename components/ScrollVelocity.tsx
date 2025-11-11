'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';

interface ScrollVelocityProps {
  text: string;
  baseVelocity?: number;
  className?: string;
}

const ScrollVelocity = ({ text, baseVelocity = 2, className = '' }: ScrollVelocityProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const displayText = `${text} • ${text} • ${text} • ${text} • `;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div style={{ x }} className="inline-block">
        <span className="inline-block">
          {displayText}
        </span>
        <span className="inline-block">
          {displayText}
        </span>
      </motion.div>
    </div>
  );
};

export default ScrollVelocity;