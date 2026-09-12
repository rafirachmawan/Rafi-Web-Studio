// src/constants/themes.js
// Centralized Design Tokens for all landing pages

export const themes = {
  starbucks: {
    // Official Starbucks Brand Colors
    primary: '#00704A',           // Starbucks Green
    primaryLight: '#00875a',      // Hover state
    secondary: '#D4E9E2',         // Cream/Teal accent
    accent: '#F59E0B',            // Amber for highlights
    background: '#0B1512',        // Dark background
    surface: '#09100E',           // Card surface
    textPrimary: '#FFFFFF',       // Main text
    textSecondary: '#A1A1AA',     // Secondary text (zinc-400)
    textMuted: '#71717A',         // Tertiary text (zinc-500)
    border: 'rgba(255, 255, 255, 0.1)',
    success: '#10B981',
    error: '#EF4444',
    
    // Spacing System (based on 4px grid)
    spacing: {
      xs: '0.5rem',   // 8px
      sm: '1rem',     // 16px
      md: '1.5rem',   // 24px
      lg: '2rem',     // 32px
      xl: '3rem',     // 48px
      xxl: '4rem',    // 64px
      xxxl: '6rem',   // 96px
    },
    
    // Border Radius
    borderRadius: {
      sm: '0.375rem',   // 6px
      md: '0.5rem',     // 8px
      lg: '0.75rem',    // 12px
      xl: '1rem',       // 16px
      '2xl': '1.5rem',  // 24px
      full: '9999px'    // Pill shape
    },
    
    // Shadows
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      glow: '0 0 40px rgba(0, 112, 74, 0.3)'
    }
  },
  
  generic: {
    // Universal theme for most landing pages
    primary: '#F59E0B',      // Amber-500
    primaryLight: '#FBBF24', // Amber-400
    primaryDark: '#D97706',  // Amber-600
    secondary: '#FEF3C7',    // Amber-100
    accent: '#EA580C',       // Orange-600
    background: '#FAFAFC',   // Light bg
    darkBackground: '#050508', // Dark mode bg
    surface: '#FFFFFF',
    textPrimary: '#18181B',  // Zinc-900
    textSecondary: '#71717A', // Zinc-500
    textMuted: '#A1A1AA',    // Zinc-400
    border: 'rgba(0, 0, 0, 0.1)',
    success: '#10B981',
    error: '#EF4444',
    
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
      xxl: '4rem',
      xxxl: '6rem',
    },
    
    borderRadius: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      '2xl': '1.5rem',
      full: '9999px'
    },
    
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    }
  },
  
  rental: {
    // Premium Rental Theme
    primary: '#F59E0B',
    primaryLight: '#FBBF24',
    secondary: '#18181B',
    background: '#0F0F0F',
    surface: '#1A1A1A',
    textPrimary: '#FFFFFF',
    textSecondary: '#ACA899',
    border: 'rgba(255, 255, 255, 0.1)',
  },
  
  hotel: {
    // Luxury Hotel Theme
    primary: '#F59E0B',
    secondary: '#18181B',
    background: '#0B0B0B',
    surface: '#141414',
    textPrimary: '#FFFFFF',
    textSecondary: '#A1A1AA',
    border: 'rgba(255, 255, 255, 0.1)',
  }
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export const zIndex = {
  hide: '-1',
  base: '0',
  docking: '10',
  dropdown: '1000',
  sticky: '1100',
  banner: '1200',
  overlay: '1300',
  modal: '1400',
  popover: '1500',
  skipLink: '1600',
  toast: '1700',
  tooltip: '1800'
};
