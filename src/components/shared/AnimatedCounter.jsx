import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract integer number from value string, e.g. "50+" -> 50, "100%" -> 100
  const numericTarget = parseInt(String(value).replace(/[^0-9]/g, ""), 10) || 0;

  useEffect(() => {
    if (!isInView || numericTarget === 0) return;

    let start = 0;
    const end = numericTarget;
    const totalFrames = Math.round(duration / 16);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.floor(end * Math.min(progress, 1));
      setCount(currentCount);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, numericTarget, duration]);

  return (
    <span ref={ref}>
      {isInView ? count : 0}
      {suffix}
    </span>
  );
}
