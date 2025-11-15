'use client';

import React, { useState } from 'react';

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  customClass?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

const gradientMapping: Record<string, string> = {
  primary: 'linear-gradient(135deg, hsl(283, 90%, 60%), hsl(318, 90%, 60%))',
  secondary: 'linear-gradient(135deg, hsl(268, 90%, 60%), hsl(333, 90%, 60%))',
  accent: 'linear-gradient(135deg, hsl(253, 90%, 60%), hsl(308, 90%, 60%))',
  cyan: 'linear-gradient(135deg, hsl(283, 90%, 60%), hsl(198, 90%, 60%))',
  blue: 'linear-gradient(135deg, hsl(268, 90%, 60%), hsl(223, 90%, 60%))',
  purple: 'linear-gradient(135deg, hsl(283, 90%, 60%), hsl(268, 90%, 60%))',
  pink: 'linear-gradient(135deg, hsl(318, 90%, 60%), hsl(333, 90%, 60%))',
  green: 'linear-gradient(135deg, hsl(283, 90%, 60%), hsl(123, 80%, 50%))',
  orange: 'linear-gradient(135deg, hsl(318, 90%, 60%), hsl(28, 90%, 60%))',
};

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      setTimeout(() => {
        setActiveIndex(null);
      }, 2000);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth >= 1024) {
      setActiveIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveIndex(null);
    }
  };

  return (
    <div className={`grid gap-[3em] grid-cols-5 md:grid-cols-7 lg:grid-cols-10 justify-items-center mx-auto py-[2em] overflow-visible ${className || ''}`}>
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          aria-label={item.label}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className={`relative bg-transparent outline-none w-[3.5em] h-[3.5em] [perspective:24em] [transform-style:preserve-3d] touch-manipulation cursor-pointer select-none ${
            item.customClass || ''
          }`}
          style={{
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation',
          }}
        >
          <span
            className={`absolute top-0 left-0 w-full h-full rounded-[1em] block transition-[transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] ${
              activeIndex === index ? '[transform:rotate(25deg)_translate3d(-0.4em,-0.4em,0.4em)]' : ''
            }`}
            style={{
              ...getBackgroundStyle(item.color),
              boxShadow: '0.4em -0.4em 0.6em hsla(283, 30%, 20%, 0.3)',
            }}
          ></span>

          <span
            className={`absolute top-0 left-0 w-full h-full rounded-[1em] bg-[hsla(0,0%,100%,0.15)] transition-[transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.6em] [-webkit-backdrop-filter:blur(0.6em)] ${
              activeIndex === index ? '[transform:translateZ(1.5em)]' : ''
            }`}
            style={{
              boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset',
            }}
          >
            <span className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center text-white" aria-hidden="true">
              {item.icon}
            </span>
          </span>

          <span 
            className={`absolute top-full left-1/2 -translate-x-1/2 text-center whitespace-nowrap leading-[2] text-xs font-medium text-white transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] pointer-events-none ${
              activeIndex === index 
                ? 'opacity-100 translate-y-[20%]' 
                : 'opacity-0 translate-y-0'
            }`}
          >
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;