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

  return (
    <div className="relative w-full overflow-hidden py-10 mb-16 border-y border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
      {/* GRADIENT FADES MATCHING HOME PAGE BG */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#fafafc] dark:from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#fafafc] dark:from-[#050508] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden select-none w-full">
        <div className="animate-marquee gap-8 md:gap-16 items-center px-4">
          {/* First set of technologies */}
          {technologies.map((tech, i) => (
            <div
              key={`tech-1-${i}`}
              className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-zinc-400 dark:text-zinc-600 whitespace-nowrap"
            >
              {tech}
            </div>
          ))}
          {/* Duplicated set for seamless loop */}
          {technologies.map((tech, i) => (
            <div
              key={`tech-2-${i}`}
              className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-zinc-400 dark:text-zinc-600 whitespace-nowrap"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
