import { useState, useEffect, useRef } from "react";

/**
 * LazySection — defers rendering AND reveals with a smooth CSS
 * fade-up animation. On slow mobile devices this means:
 *   1. Section DOM + JS is NOT created until user scrolls near it
 *   2. Once mounted the section glides in smoothly (GPU-accelerated)
 *   3. No framer-motion overhead — pure CSS transform + opacity
 */
export default function LazySection({
  children,
  rootMargin = "250px",
  minHeight = "200px",
  className = "",
  /** Stagger delay in ms — use to cascade adjacent sections */
  delay = 0,
}) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setShouldRender(true);
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Mount children first
          setShouldRender(true);
          // Then trigger CSS reveal after a micro-delay so the browser
          // can paint the initial (hidden) state before animating
          const timer = setTimeout(() => setIsRevealed(true), Math.max(30, delay));
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, delay]);

  return (
    <div
      ref={ref}
      className={`lazy-section ${isRevealed ? "lazy-section--visible" : ""} ${className}`}
      style={!shouldRender ? { minHeight } : undefined}
    >
      {shouldRender ? children : null}
    </div>
  );
}
