import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { realProjects } from "../../constants/realProjects";
import { ArrowRight, Trophy, User, Sparkles } from "lucide-react";

export default function RealProjectsSection() {
  return (
    <section id="real-projects" className="relative py-20 md:py-28 overflow-hidden">
      {/* BACKGROUND DECOR */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold mb-6 uppercase tracking-widest"
          >
            <Trophy className="w-3.5 h-3.5" /> Production Ready
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-black dark:text-white tracking-tight mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Real Project</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xl mx-auto font-medium"
          >
            Portofolio proyek nyata yang telah kami rancang, kembangkan, dan luncurkan secara resmi untuk menunjang performa operasional bisnis klien kami di lapangan.
          </motion.p>
        </div>

        {/* PROJECTS ALTERNATING LIST */}
        <div className="space-y-16 md:space-y-24">
          {realProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="group relative w-full rounded-[32px] overflow-hidden border border-zinc-200/50 dark:border-white/10 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-xl p-5 sm:p-6 md:p-8 hover:shadow-[0_20px_50px_rgba(245,158,11,0.04)] hover:border-amber-500/30 transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                  {/* IMAGE - Desktop order alternates */}
                  <div className={`lg:col-span-6 relative overflow-hidden rounded-2xl aspect-[16/10] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}>
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>

                  {/* DETAILS */}
                  <div className={`lg:col-span-6 flex flex-col justify-center space-y-4 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}>
                    {/* BADGES */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md shadow-amber-500/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Real Project
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors duration-300">
                      {project.name}
                    </h3>

                    {/* CLIENT INFO */}
                    <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                      <User size={12} className="text-amber-500/70" />
                      <span>Klien: {project.client}</span>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed font-medium">
                      {project.desc}
                    </p>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] md:text-[11px] font-bold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-white/5 px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* ACTION BUTTON */}
                    <div className="pt-4">
                      <Link
                        to={`/portfolio/${project.id}`}
                        className="group/btn inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white hover:bg-amber-500 dark:hover:bg-amber-500 text-white dark:text-black hover:text-white dark:hover:text-white px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 shadow-lg shadow-black/5 active:scale-95"
                      >
                        Lihat Detail Proyek
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
