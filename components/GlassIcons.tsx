import React from 'react';

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
  // Portfolio theme gradients - Purple & Pink
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
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div className={`grid gap-[5em] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center mx-auto py-[3em] overflow-visible ${className || ''}`}>
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          aria-label={item.label}
          className={`relative bg-transparent outline-none w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group ${
            item.customClass || ''
          }`}
        >
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
            style={{
              ...getBackgroundStyle(item.color),
              boxShadow: '0.5em -0.5em 0.75em hsla(283, 30%, 20%, 0.3)'
            }}
          ></span>

          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"
            style={{
              boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset'
            }}
          >
            <span className="m-auto w-[2em] h-[2em] flex items-center justify-center text-white" aria-hidden="true">
              {item.icon}
            </span>
          </span>

          <span className="absolute top-full left-1/2 -translate-x-1/2 text-center whitespace-nowrap leading-[2] text-sm font-medium text-white opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)_translateX(-50%)]">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;