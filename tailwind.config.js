export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
    extend: {
      // Brand Colors
      colors: {
        starbucks: {
          green: '#00704A',
          greenLight: '#00875a',
          cream: '#D4E9E2',
          dark: '#0B1512',
          darker: '#09100E',
        },
        amber: {
          400: '#FBBF24',
          500: '#D97706',
        }
      },
      
      // Spacing System (4px grid)
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      
      // Border Radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      
      // Typography
      fontFamily: {
        sans: ['"Helvena Grotesk"', 'sans-serif'],
        heading: ['"Helvena Grotesk"', 'sans-serif'],
        helvena: ['"Helvena Grotesk"', 'sans-serif'],
        inter: ['"Helvena Grotesk"', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      
      // Shadows
      boxShadow: {
        'starbucks-glow': '0 0 40px rgba(0, 112, 74, 0.3)',
        'ambient-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      
      // Transitions
      transitionDuration: {
        '700': '700ms',
        '1000': '1000ms',
      },
      
      // Animation
      animation: {
        'blob-float-1': 'blob-float-1 12s ease-in-out infinite',
        'blob-float-2': 'blob-float-2 15s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      
      keyframes: {
        'blob-float-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, 15px) scale(1.1)' },
        },
        'blob-float-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-15px, -30px) scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  
  plugins: [],
};
