import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DemoCard from "../cards/DemoCard";
import {
  LayoutGrid,
  Smartphone,
  Globe,
  MonitorSmartphone,
  Code2,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function DemoSection({ filter, setFilter, filtered }) {
  const [showAll, setShowAll] = useState(false);

  // Reset showAll when filter category changes
  useEffect(() => {
    setShowAll(false);
  }, [filter]);

  // CATEGORY CONFIG
  const categories = [
    { id: "all", label: "All Works", icon: LayoutGrid },
    { id: "landing page", label: "Websites", icon: Globe },
    { id: "mobile app", label: "Mobile Apps", icon: Smartphone },
    { id: "sistem berbasis web", label: "Web Systems", icon: MonitorSmartphone },
    { id: "software", label: "Software", icon: Code2 },
  ];

  // Helper for category descriptions
  const getCategoryInfo = (id) => {
    switch(id) {
      case "landing page": 
        return "Landing pages modern dengan desain profesional, responsive, dan fokus pada konversi.";
      case "mobile app":
        return "Aplikasi mobile & PWA untuk operasional bisnis, inventory, dan monitoring.";
      case "sistem berbasis web":
        return "Dashboard interaktif, ERP, CRM, dan sistem manajemen internal perusahaan.";
      case "software":
        return "Software custom & aplikasi desktop untuk solusi otomatisasi bisnis spesifik.";
      default:
        return "Koleksi karya digital terbaik kami dari berbagai industri dan platform.";
    }
  };

  const initialItemsCount = 6;
  const displayItems = showAll ? filtered : filtered.slice(0, initialItemsCount);

  return (
    <section id="demo" className="relative py-20 md:py-32 overflow-hidden">
      {/* BACKGROUND DECOR */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold mb-6 uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" /> Demo Catalog
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl font-black text-black dark:text-white tracking-tight mb-4"
          >
            Digitalisasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Demo & Template</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xl mx-auto"
          >
            {getCategoryInfo(filter)} Kami menyediakan opsi demo interaktif ini sebagai blueprint/katalog template yang siap dikustomisasi penuh sesuai dengan jenis usaha Anda.
          </motion.p>
        </div>

        {/* FILTER TABS - MODERN PILL STYLE */}
        <div className="flex justify-center mb-12 px-4">
          <div className="inline-flex p-1 bg-zinc-100 dark:bg-white/5 backdrop-blur-xl rounded-full border border-black/5 dark:border-white/10 overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`relative flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-xs font-bold transition-all duration-500 whitespace-nowrap ${
                    isActive ? "text-white" : "text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-500/25"
                      style={{ borderRadius: 9999 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon size={16} className="relative z-10" />
                  <span className="relative z-10 capitalize">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="px-4">
          <AnimatePresence mode="wait">
            {filter === "software" ? (
              <motion.div
                key="coming-soon"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-2xl mx-auto py-20 px-8 rounded-[32px] border border-dashed border-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-white/[0.02] text-center"
              >
                <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code2 className="w-10 h-10 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Coming Soon</h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Software custom & aplikasi desktop kami sedang dalam tahap kurasi untuk ditampilkan.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {displayItems.map((demo, i) => (
                  <DemoCard key={demo.id || i} demo={demo} />
                ))}
                
                {/* Special Section for Mobile App if filter matches */}
                {(filter === "all" || filter === "mobile app") && (
                   // Adding mock mobile apps if they are not in the 'filtered' prop
                   // but based on the code provided, they were hardcoded before.
                   // For a cleaner look, I'll only show what's in 'filtered' 
                   // unless we want to keep those hardcoded ones.
                   // The USER mentioned it's too crowded, so I'll stick to filtered data.
                   null
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {filter !== "software" && filtered.length > initialItemsCount && (
            <div className="flex justify-center mt-12 relative z-20">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group/btn relative px-8 py-3.5 rounded-full overflow-hidden border border-amber-500/20 bg-amber-500/5 dark:bg-amber-500/5 hover:border-amber-500/30 text-amber-600 dark:text-amber-400 hover:text-white dark:hover:text-white text-xs font-bold transition-all duration-300 shadow-md shadow-amber-500/5 hover:shadow-lg hover:shadow-amber-500/10 active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10" />
                <span className="relative z-10 flex items-center gap-2">
                  {showAll ? "Tampilkan Lebih Sedikit" : `Lihat Semua Portofolio (${filtered.length})`}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          )}
        </div>

        {/* BOTTOM CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center px-4"
        >
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-medium mb-8">
            Punya kebutuhan sistem khusus? Kami siap membantu mewujudkannya.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="h-px w-12 bg-zinc-200 dark:bg-white/10 hidden sm:block" />
            <a 
              href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-black dark:text-white font-bold hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              Konsultasi Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="h-px w-12 bg-zinc-200 dark:bg-white/10 hidden sm:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
