import { useState, useEffect, useRef } from "react";

/**
 * LazySection — Ultra-lightweight IntersectionObserver section loader.
 * Loads sections 350px before entering viewport so they mount silently off-screen
 * and fade in with 60fps GPU animation without blocking JS main thread.
 */
export default function LazySection({
  children,
  rootMargin = "350px 0px",
  minHeight = "180px",
  className = "",
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
          setShouldRender(true);
          // Micro delay to ensure paint completes before triggering CSS transition
          const timer = setTimeout(() => setIsRevealed(true), Math.max(20, delay));
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
