import { useState, useEffect, useRef } from "react";

/**
 * LazySection — only mounts/renders its children when the section
 * is near the viewport. This dramatically reduces initial render cost
 * on slow mobile devices by deferring heavy components (animations,
 * images, framer-motion, etc.) until they are actually needed.
 *
 * Props:
 *   rootMargin   — IntersectionObserver rootMargin (default "200px")
 *   minHeight    — minimum height placeholder before content loads (default "200px")
 *   className    — extra classes for the wrapper div
 *   as           — wrapper element type (default "div")
 *   children     — the section content to lazily render
 */
export default function LazySection({
  children,
  rootMargin = "300px",
  minHeight = "200px",
  className = "",
  as: Component = "div",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver not supported, just show immediately
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Once visible, never hide again
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <Component
      ref={ref}
      className={className}
      style={!isVisible ? { minHeight } : undefined}
    >
      {isVisible ? children : null}
    </Component>
  );
}
