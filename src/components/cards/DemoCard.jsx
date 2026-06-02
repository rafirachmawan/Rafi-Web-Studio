import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DemoCard({ demo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/portfolio/${demo.id}`}
        className="group block w-full text-left bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 rounded-[32px] overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/30 relative"
      >
        {/* IMAGE WITH PREMIUM HOVER SCALE EFFECT */}
        <div className="h-52 md:h-64 overflow-hidden relative border-b border-zinc-100 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900">
          <img
            src={demo.image}
            alt={demo.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          {/* CATEGORY BADGE ON IMAGE */}
          <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
            <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
              {demo.category}
            </div>
            {demo.isReal && (
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-amber-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Real Project
              </div>
            )}
          </div>

          {/* Overlay to hint it's interactive */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-black px-6 py-2.5 rounded-full text-xs font-black shadow-2xl flex items-center gap-2">
              View Project <span className="text-amber-600">→</span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 md:p-6 relative z-10">
          {/* ICON & TITLE */}
          <div className="flex items-center gap-3 mb-3">
            <div className="text-xl bg-amber-500/10 w-10 h-10 flex items-center justify-center rounded-xl shadow-inner group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
              {demo.icon}
            </div>
            <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
              {demo.name}
            </h3>
          </div>

          {/* DESC */}
          <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed line-clamp-2">
            {demo.desc}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
