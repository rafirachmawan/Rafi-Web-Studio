import { motion } from "framer-motion";

/**
 * TextMarqueeDivider — large scrolling text used as a visual section divider.
 * Props:
 *   texts: string[]  — array of words to repeat (e.g. ["WEBSITE", "MOBILE APP", "SISTEM WEB"])
 *   direction: "left" | "right" — scroll direction (default "left")
 *   speed: number — duration in seconds per loop (default 30)
 *   size: "sm" | "md" | "lg" | "xl" — text size (default "lg")
 *   className: string — extra wrapper classes
 */
export default function TextMarqueeDivider({
  texts = ["DIGITALISASI", "WEBSITE", "MOBILE APP", "SISTEM WEB", "DESAIN UI/UX"],
  direction = "left",
  speed = 30,
  size = "lg",
  className = "",
}) {
  // Triple repeat for seamless infinite loop
  const repeated = [...texts, ...texts, ...texts, ...texts];

  const sizeClasses = {
    sm: "text-4xl md:text-5xl",
    md: "text-5xl md:text-7xl",
    lg: "text-6xl md:text-[5rem] lg:text-[7rem]",
    xl: "text-[5rem] md:text-[8rem] lg:text-[11rem]",
  };

  const animateX = direction === "left" 
    ? ["0%", "-25%"] 
    : ["-25%", "0%"];

  return (
    <div className={`relative w-full overflow-hidden py-4 md:py-6 select-none border-y border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] ${className}`}>
      {/* Left & right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#fafafc] dark:from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#fafafc] dark:from-[#050508] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex w-max gap-8 md:gap-12 items-center"
        animate={{ x: animateX }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {repeated.map((text, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-12 shrink-0">
            {/* Text — stroke style (outline only) */}
            <span
              className={`
                ${sizeClasses[size]}
                font-black tracking-tight uppercase whitespace-nowrap
                text-transparent
                leading-none
              `}
              style={{
                WebkitTextStroke: "1.5px",
                WebkitTextStrokeColor: "currentColor",
              }}
            >
              <span className="text-zinc-300 dark:text-zinc-700">{text}</span>
            </span>

            {/* Decorative diamond separator */}
            <span className="text-amber-400/50 dark:text-amber-500/30 text-2xl md:text-3xl leading-none font-black">
              ✦
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
