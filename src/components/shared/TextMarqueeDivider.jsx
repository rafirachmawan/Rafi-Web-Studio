/**
 * TextMarqueeDivider — large scrolling text used as a visual section divider.
 * Props:
 *   texts: string[]  — array of words to repeat
 *   direction: "left" | "right" — scroll direction (default "left")
 *   speed: number — duration in seconds per loop (default 30)
 *   size: "xs" | "sm" | "md" | "lg" | "xl" — text size (default "lg")
 *   className: string — extra wrapper classes
 */
export default function TextMarqueeDivider({
  texts = ["DIGITALISASI", "WEBSITE", "MOBILE APP", "SISTEM WEB", "DESAIN UI/UX"],
  direction = "left",
  speed = 30,
  size = "lg",
  className = "",
}) {
  // Quadruple repeat for seamless infinite loop
  const repeated = [...texts, ...texts, ...texts, ...texts];

  const sizeClasses = {
    xs: "text-[10px] md:text-xs tracking-wider",
    sm: "text-4xl md:text-5xl",
    md: "text-5xl md:text-7xl",
    lg: "text-6xl md:text-[5rem] lg:text-[7rem]",
    xl: "text-[5rem] md:text-[8rem] lg:text-[11rem]",
  };

  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className={`relative w-full overflow-hidden py-4 md:py-6 select-none border-y border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] ${className}`}>
      {/* Left & right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#fafafc] dark:from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#fafafc] dark:from-[#050508] to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-8 md:gap-12 items-center`}
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
          willChange: "transform",
          width: "max-content",
        }}
      >
        {repeated.map((text, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-12 shrink-0">
            {/* Text */}
            <span
              className={`
                ${sizeClasses[size]}
                uppercase whitespace-nowrap
                ${size === "xs"
                  ? "font-bold text-zinc-400 dark:text-zinc-600"
                  : "font-black tracking-tight text-transparent leading-none"}
              `}
              style={size !== "xs" ? {
                WebkitTextStroke: "1.5px",
                WebkitTextStrokeColor: "currentColor",
              } : {}}
            >
              {size === "xs" ? text : <span className="text-zinc-300 dark:text-zinc-700">{text}</span>}
            </span>

            {/* Decorative diamond separator */}
            <span className={`text-amber-400/50 dark:text-amber-500/30 leading-none ${size === "xs" ? "text-[10px] md:text-xs font-bold mx-2" : "text-2xl md:text-3xl font-black"}`}>
              ✦
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
