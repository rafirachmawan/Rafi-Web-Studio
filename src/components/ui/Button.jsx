// src/components/atoms/Button/Button.jsx
// Unified Button Component

import { cn } from "../../utils/cn";

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-white border border-transparent",
    outline: "border-2 border-white/30 bg-transparent text-white hover:border-emerald-500 hover:text-emerald-500",
    ghost: "bg-transparent hover:bg-white/10 text-zinc-300 hover:text-white"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
