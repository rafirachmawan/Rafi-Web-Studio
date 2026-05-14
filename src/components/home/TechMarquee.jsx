import { motion } from "framer-motion";

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

  // Duplicate for seamless infinite scroll
  const marqueeItems = [...technologies, ...technologies, ...technologies];

  return (
    <div className="relative w-full overflow-hidden py-10 mb-16 border-y border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10" />

      <div className="flex w-fit">
        <motion.div
          className="flex gap-8 md:gap-16 items-center px-8"
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {marqueeItems.map((tech, i) => (
            <div
              key={i}
              className="text-lg md:text-xl font-bold text-zinc-400 dark:text-zinc-600 whitespace-nowrap"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
