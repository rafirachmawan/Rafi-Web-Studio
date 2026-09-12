// src/utils/animations.js
// Reusable Framer Motion animation variants (GSAP removed)

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] // cubic-bezier(0.22, 1, 0.36, 1)
    } 
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4,
      ease: "easeOut" 
    } 
  }
};

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut" 
    } 
  }
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut" 
    } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
      when: "beforeChildren"
    }
  }
};

export const shimmer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

// Card-specific animations
export const cardHover = {
  idle: { 
    y: 0,
    transition: { duration: 0.2 }
  },
  hover: { 
    y: -8,
    transition: { duration: 0.3 }
  }
};

export const cardScaleOnHover = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.3,
      ease: "easeOut" 
    } 
  }
};

// List item animation
export const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      ease: "easeOut" 
    } 
  }
};

// Button pulse effect
export const buttonPulse = {
  rest: { 
    scale: 1,
    boxShadow: "0 0 0 0 rgba(245, 158, 11, 0.4)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.3
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 0 20px 5px rgba(245, 158, 11, 0.3)",
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95
  }
};

// Scroll-based parallax variants
export const parallax = {
  visible: {
    y: [-100, 100],
    transition: {
      duration: 1.5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
};

// Fade between states (for tab switching)
export const fadeBetween = {
  initial: { opacity: 0, y: 20 },
  active: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};

// Image reveal animation
export const imageReveal = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: "easeOut" 
    } 
  }
};

// Text stroke animation
export const textStroke = {
  hidden: { 
    strokeDashoffset: 1000,
    opacity: 0 
  },
  visible: { 
    strokeDashoffset: 0,
    opacity: 1,
    transition: { 
      duration: 1.5,
      ease: "easeInOut",
      delay: 0.2
    } 
  }
};

// Marquee animation constant
export const marqueeVariant = {
  animate: (speed) => ({
    x: "-50%",
    transition: {
      x: {
        repeat: Infinity,
        ease: "linear",
        duration: speed,
        timingFunction: "linear"
      }
    }
  })
};

// Export GSAP compatibility layer (if needed temporarily)
// TODO: Remove this once fully migrated to Framer Motion
export const gsapCompat = {
  timeline: () => ({
    fromTo: () => {},
    to: () => {}
  }),
  killTweensOf: () => {}
};
