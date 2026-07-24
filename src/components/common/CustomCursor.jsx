import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Orb follows with spring (laggy, feels heavy)
  const springConfig = { stiffness: 120, damping: 20, mass: 0.8 };
  const orbX = useSpring(mouseX, springConfig);
  const orbY = useSpring(mouseY, springConfig);

  // Dot follows faster (almost instant)
  const dotSpring = { stiffness: 500, damping: 35 };
  const dotX = useSpring(mouseX, dotSpring);
  const dotY = useSpring(mouseY, dotSpring);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device — hide cursor on mobile
    const hasTouchScreen =
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
    if (hasTouchScreen) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnterInteractive = (e) => {
      if (
        e.target.closest("a, button, [role='button'], input, textarea, select, label, [tabindex]")
      ) {
        setIsHovering(true);
      }
    };
    const handleMouseLeaveInteractive = (e) => {
      if (
        e.target.closest("a, button, [role='button'], input, textarea, select, label, [tabindex]")
      ) {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseEnterInteractive);
    document.addEventListener("mouseout", handleMouseLeaveInteractive);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseEnterInteractive);
      document.removeEventListener("mouseout", handleMouseLeaveInteractive);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  // Hide on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Global cursor override */}
      <style>{`
        * { cursor: none !important; }
        body { cursor: none !important; }
      `}</style>

      {/* OUTER ORB — laggy amber circle */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-multiply dark:mix-blend-screen"
        style={{
          x: orbX,
          y: orbY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isClicking ? 30 : isHovering ? 48 : 36,
          height: isClicking ? 30 : isHovering ? 48 : 36,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering
            ? "rgba(245, 158, 11, 0.25)"
            : "rgba(245, 158, 11, 0.12)",
          border: isHovering
            ? "1.5px solid rgba(245, 158, 11, 0.8)"
            : "1.5px solid rgba(245, 158, 11, 0.4)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* INNER DOT — fast, crisp */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-amber-500"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isClicking ? 3 : isHovering ? 0 : 5,
          height: isClicking ? 3 : isHovering ? 0 : 5,
          opacity: isVisible ? (isHovering ? 0 : 1) : 0,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
