export default function TechMarquee() {
  const technologies = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Laravel",
    "Figma",
    "Flutter",
    "Framer Motion",
    "PostgreSQL",
    "Supabase",
  ];

  // Duplicate 4x for seamless infinite loop
  const items = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <div className="relative w-full overflow-hidden py-6 md:py-8 border-y border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
      {/* GRADIENT FADES MATCHING HOME PAGE BG */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#fafafc] dark:from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#fafafc] dark:from-[#050508] to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-8 md:gap-16 items-center select-none"
        style={{
          animation: "marquee-scroll 30s linear infinite",
          willChange: "transform",
          width: "max-content",
        }}
      >
        {items.map((tech, i) => (
          <span
            key={i}
            className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-zinc-400 dark:text-zinc-600 whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
