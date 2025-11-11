'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion';

interface ScrollVelocityFramerProps {
  text: string;
  velocity?: number;
  className?: string;
}

const ScrollVelocityFramer = ({ text, velocity = 5, className = '' }: ScrollVelocityFramerProps) => {
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

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef<number>(1);

  function wrap(min: number, max: number, v: number) {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  }

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * velocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full overflow-hidden whitespace-nowrap">
      <motion.div style={{ x }} className="flex whitespace-nowrap w-full">
        {/* Repeat 10x untuk ensure 100% coverage */}
        <span className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold inline-block ${className}`}>
          {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text}
        </span>
        <span className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold inline-block ${className}`}>
          {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text} {text}
        </span>
      </motion.div>
    </div>
  );
};

export default ScrollVelocityFramer;