// src/components/atoms/Button/Button.jsx
// Reusable button component with multiple variants

import React from 'react';

const buttonVariants = {
  primary: 'from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white shadow-lg shadow-amber-500/20',
  secondary: 'bg-zinc-900 dark:bg-white/10 text-white dark:text-zinc-200 border border-zinc-200 dark:border-white/10 hover:bg-zinc-800 dark:hover:bg-white/20',
  outline: 'bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white',
  ghost: 'bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5'
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base'
};

export const Button = React.forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  isLoading = false,
  isDisabled = false,
  icon = null,
  iconPosition = 'left',
  fullWidth = false,
  onClick,
  ...props
}, ref) => {
  
  const baseStyles = 'relative inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100';
  
  const variantClass = buttonVariants[variant] || buttonVariants.primary;
  const sizeClass = buttonSizes[size] || buttonSizes.md;
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variantClass} ${sizeClass} ${widthClass} ${className}`}
      onClick={!isDisabled && !isLoading ? onClick : undefined}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {!isLoading && icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      
      <span>{children}</span>
      
      {!isLoading && icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
});

Button.displayName = 'Button';

// Convenience components for common use cases
export const PrimaryButton = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />;
export const OutlineButton = (props) => <Button variant="outline" {...props} />;
export const GhostButton = (props) => <Button variant="ghost" {...props} />;

export default Button;
