// src/hooks/useScrollAnimation.js
// Custom hook for scroll-based animations (Intersection Observer)

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px',
    ...options
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Once visible, stop observing (animation should only trigger once)
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, defaultOptions);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [defaultOptions]);

  return { ref, isInView };
}

export function useStaggeredAnimation(itemsCount, options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  const defaultOptions = {
    threshold: 0.2,
    staggerDelay: 0.1, // seconds between each item
    ...options
  };

  const getDelay = (index) => {
    return isInView ? index * defaultOptions.staggerDelay : 0;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, defaultOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [defaultOptions]);

  return { ref, isInView, getDelay };
}

export function useParallaxScroll(sensitivity = 0.1) {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const elementVisible = elementTop < window.innerHeight && elementTop + rect.height > 0;

      if (elementVisible) {
        const elementOffset = elementTop - window.innerHeight / 2;
        setOffset(elementOffset * sensitivity);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sensitivity]);

  return { ref, offset };
}

export function useSmoothScroll(to, options = {}) {
  const { duration = 800, easing = 'easeInOut' } = options;

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.warn(`Element with id "${elementId}" not found`);
      return;
    }

    const startY = window.pageYOffset;
    const targetY = element.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetY - startY;
    
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easeProgress = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2; // easeInOut quadratic
      
      window.scrollTo(0, startY + distance * easeProgress);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return scrollTo;
}
