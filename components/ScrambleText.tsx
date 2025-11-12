'use client';

import { useState, ReactNode } from 'react';

interface ScrambleTextProps {
  children: ReactNode;
  className?: string;
}

const ScrambleText = ({ children, className = '' }: ScrambleTextProps) => {
  // Extract text from children (handle both string and React elements)
  const getTextContent = (node: ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(getTextContent).join('');
    if (node && typeof node === 'object' && 'props' in node) {
      return getTextContent(node.props.children);
    }
    return '';
  };

  const originalText = getTextContent(children);
  const [text, setText] = useState(originalText);
  const [isScrambling, setIsScrambling] = useState(false);

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const handleMouseEnter = () => {
    if (isScrambling) return;
    
    setIsScrambling(true);
    let iteration = 0;

    const interval = setInterval(() => {
      setText(() =>
        originalText
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return ' ';
            if (letter === '&') return '&';
            
            if (index < iteration) {
              return originalText[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join('')
      );

      if (iteration >= originalText.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += 1 / 3;
    }, 30);
  };

  // Check if children contains gradient-text
  const hasGradient = typeof children === 'object' && children && 'props' in children && 
    children.props?.className?.includes('gradient-text');

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className={`cursor-pointer ${className}`}
    >
      {hasGradient ? (
        <span className="gradient-text">{text}</span>
      ) : (
        text
      )}
    </span>
  );
};

export default ScrambleText;