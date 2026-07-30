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
import { useLanguage } from "../../context/LanguageContext";

export default function DemoSection({ filter, setFilter, filtered, isStandalone = false }) {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  // Reset showAll when filter category changes
  useEffect(() => {
    setShowAll(false);
  }, [filter]);

  // CATEGORY CONFIG
  const categories = [
    { id: "all", label: t("Semua Karya", "All Works"), icon: LayoutGrid },
    { id: "landing page", label: t("Website", "Websites"), icon: Globe },
    { id: "mobile app", label: t("Aplikasi Mobile", "Mobile Apps"), icon: Smartphone },
    { id: "sistem berbasis web", label: t("Sistem Web", "Web Systems"), icon: MonitorSmartphone },
    { id: "software", label: t("Software", "Software"), icon: Code2 },
  ];

  // Helper for category descriptions
  const getCategoryInfo = (id) => {
    switch(id) {
      case "landing page": 
        return t("Landing pages modern dengan desain profesional, responsive, dan fokus pada konversi.", "Modern landing pages with professional design, responsive layout, and focus on conversions.");
      case "mobile app":
        return t("Aplikasi mobile & PWA untuk operasional bisnis, inventory, dan monitoring.", "Mobile apps & PWA for business operations, inventory, and monitoring.");
      case "sistem berbasis web":
        return t("Dashboard interaktif, ERP, CRM, dan sistem manajemen internal perusahaan.", "Interactive dashboard, ERP, CRM, and company internal management system.");
      case "software":
        return t("Software custom & aplikasi desktop untuk solusi otomatisasi bisnis spesifik.", "Custom software & desktop applications for specific business automation solutions.");
      default:
        return t("Koleksi karya digital terbaik kami dari berbagai industri dan platform.", "Our best digital collection across various industries and platforms.");
    }
  };

  const initialItemsCount = 6;
  const displayItems = showAll ? filtered : filtered.slice(0, initialItemsCount);

  return (
    <section 
      id="demo" 
      className={`${isStandalone ? "pb-20 md:pb-32" : "pt-8 pb-20 md:pt-12 md:pb-32"} bg-transparent dark:bg-[#050508] relative`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold mb-6 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>{t("Rebranding & Redesign", "Rebranding & Redesign")}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              {t("Evolusi Digital Bisnis Anda", "Your Business's Digital Evolution")}
            </span>
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed mx-auto max-w-2xl">
            {getCategoryInfo(filter)} {t("Tinggalkan desain lama yang kaku. Kami siap me-rebrand dan mendesain ulang sistem atau website Anda menjadi lebih modern, memukau, dan berstandar tinggi seperti inspirasi di bawah ini.", "Leave the old, rigid design behind. We are ready to rebrand and redesign your system or website to be more modern, stunning, and high-standard like the inspirations below.")}
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="flex mb-12 overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible pb-2 md:pb-0 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-3 min-w-max md:min-w-0 w-full md:w-auto mx-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? "bg-amber-500 text-white shadow-md shadow-amber-500/20 border border-amber-500" 
                      : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-amber-500/50 hover:text-amber-600 dark:hover:text-amber-500"
                  }`}
                >
                  <Icon size={16} />
                  <span className="capitalize">{cat.label}</span>
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
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{t("Segera Hadir", "Coming Soon")}</h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {t("Software custom & aplikasi desktop kami sedang dalam tahap kurasi untuk ditampilkan.", "Our custom software & desktop applications are currently being curated for display.")}
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
                  {showAll ? t("Tampilkan Lebih Sedikit", "Show Less") : `${t("Lihat Semua Portofolio", "View All Portfolio")} (${filtered.length})`}
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
          className="mt-20 md:mt-24 max-w-3xl mx-auto px-4"
        >
          <div className="bg-white dark:bg-zinc-900/50 rounded-[2rem] border border-zinc-200/80 dark:border-zinc-800/60 p-8 md:p-12 text-center shadow-xl shadow-zinc-200/20 dark:shadow-none hover:border-amber-500/30 transition-colors duration-500 relative overflow-hidden group">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 text-amber-500">
                <Sparkles className="w-6 h-6" />
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg font-medium mb-8">
                {t("Punya kebutuhan sistem khusus? Kami siap membantu mewujudkannya.", "Have specific system requirements? We are ready to help make it happen.")}
              </p>
              
              <a 
                href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white dark:hover:text-white transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-amber-500/20 active:scale-95 group/btn"
              >
                {t("Konsultasi Project", "Project Consultation")} 
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
