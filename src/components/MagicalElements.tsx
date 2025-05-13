
import React from 'react';

interface FloatingRuneProps {
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  symbol: string;
  size?: string;
  delay?: string;
}

export const FloatingRune: React.FC<FloatingRuneProps> = ({
  position = {},
  symbol,
  size = '2rem',
  delay = '0s'
}) => {
  const style = {
    ...position,
    fontSize: size,
    animationDelay: delay,
  };

  return (
    <div className="floating-rune animate-float" style={style}>
      {symbol}
    </div>
  );
};

export const MagicalDivider: React.FC<{ symbol?: string }> = ({ symbol = '★' }) => {
  return (
    <div className="magical-divider">
      <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background px-4">
        {symbol}
      </span>
    </div>
  );
};

interface MagicAccentTextProps {
  children: React.ReactNode;
  className?: string;
}

export const MagicAccentText: React.FC<MagicAccentTextProps> = ({ children, className }) => {
  return (
    <span className={`magic-accent inline-block ${className || ''}`}>
      {children}
    </span>
  );
};

export const MagicSymbols = {
  star: '★',
  smallStar: '✦',
  sparkle: '✧',
  burst: '✵',
  asterisk: '✹',
  plus: '✙',
  ornament: '❈',
  flower: '✿',
  swirl: '꩜',
  dot: '⋆',
};
