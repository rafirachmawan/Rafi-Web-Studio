// src/components/atoms/Card/BaseCard.jsx
// Reusable card component with consistent design

import { forwardRef } from "react";

export const BaseCard = forwardRef(({ 
  children,
  variant = 'default',
  className = '',
  ...props
}, ref) => {
  
  const variants = {
    default: 'bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 shadow-xl shadow-black/[0.02] dark:shadow-none',
    elevated: 'bg-white dark:bg-zinc-900 border-2 border-amber-400 shadow-2xl shadow-amber-500/20',
    ghost: 'bg-transparent border border-white/5 hover:border-white/10',
    gradient: 'bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border border-white/10'
  };

  return (
    <div
      ref={ref}
      className={`
        rounded-[2.5rem] 
        p-8 
        ${variants[variant]} 
        transition-all duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});

BaseCard.displayName = 'BaseCard';

export default BaseCard;
