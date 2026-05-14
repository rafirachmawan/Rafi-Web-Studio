import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DemoCard({ demo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={demo.path}
        className="group block bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black/[0.03] dark:shadow-none hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/30 relative"
      >
        {/* Glow behind the card on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/0 to-amber-500/0 group-hover:to-amber-500/5 transition-all duration-500" />

        {/* IMAGE WITH AUTO-SCROLL EFFECT */}
        <div className="h-48 md:h-56 overflow-hidden relative border-b border-black/5 dark:border-white/5 bg-zinc-100 dark:bg-zinc-900">
          <img
            src={demo.image}
            alt={demo.name}
            loading="lazy"
            className="w-full h-auto object-top transition-transform duration-[6s] ease-in-out group-hover:-translate-y-[calc(100%-14rem)]"
          />
          {/* Overlay to hint it's interactive */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-xs font-bold shadow-xl">
              Preview
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 relative z-10">
          {/* ICON & TITLE */}
          <div className="flex items-center gap-3 mb-3">
            <div className="text-2xl bg-amber-500/10 w-10 h-10 flex items-center justify-center rounded-xl">
              {demo.icon}
            </div>
            <h2 className="text-xl font-bold text-black dark:text-white group-hover:text-amber-500 transition-colors">
              {demo.name}
            </h2>
          </div>

          {/* DESC */}
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
            {demo.desc}
          </p>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-amber-500 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
              Lihat Detail <span className="text-lg">→</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
