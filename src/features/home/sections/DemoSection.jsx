import { useState, useEffect, useMemo } from "react";
import DemoCard from "../../../components/shared/DemoCard";
import {
  LayoutGrid,
  Smartphone,
  Globe,
  MonitorSmartphone,
  Code2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { useLanguage } from "../../../context/LanguageContext";
import { useConsultation } from "../../../context/ConsultationContext";
import { demos as allDemos } from "../data/demos";

/* ===== Animasi scroll-reveal =====
   Grid demo memakai pendekatan deterministik (hook useInView + class reveal)
   alih-alih stagger-variant framer-motion. Alasan: saat user mengganti filter tab,
   hook useInView sudah aktif (sekali trigger, tetap true), sehingga kartu baru
   langsung tampil — tidak pernah stuck di opacity:0. */

export default function DemoSection({ filter, setFilter, filtered, isStandalone = false }) {
  const { t } = useLanguage();
  const { openConsultation } = useConsultation();
  const [showAll, setShowAll] = useState(false);

  // Scroll-reveal header (sekali trigger, lalu tetap tampil — deterministik)
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });
  // Scroll-reveal grid kartu (sekali trigger, lalu tetap tampil)
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation({ threshold: 0.05 });

  useEffect(() => {
    setShowAll(false);
  }, [filter]);

  const categories = [
    { id: "all", label: t("Semua Karya", "All Works"), icon: LayoutGrid },
    { id: "landing page", label: t("Website", "Websites"), icon: Globe },
    { id: "mobile app", label: t("Aplikasi Mobile", "Mobile Apps"), icon: Smartphone },
    { id: "sistem berbasis web", label: t("Sistem Web", "Web Systems"), icon: MonitorSmartphone },
    { id: "software", label: t("Software", "Software"), icon: Code2 },
  ];

  const getCategoryInfo = (id) => {
    switch (id) {
      case "landing page":
        return t(
          "Referensi redesign website & landing page yang lebih rapi, modern, dan memikat calon pelanggan.",
          "Website & landing page redesign references that look clean, modern, and attractive to clients."
        );
      case "mobile app":
        return t(
          "Demo antarmuka aplikasi mobile & PWA yang responsif, cepat, dan nyaman di ponsel.",
          "Mobile & PWA UI demos that are responsive, fast, and smooth on phones."
        );
      case "sistem berbasis web":
        return t(
          "Demo interaktif dashboard dan sistem web untuk otomatisasi operasional dan manajemen data.",
          "Interactive dashboard & web system demos for business operational automation."
        );
      case "software":
        return t(
          "Demo tampilan software desktop dengan desain antarmuka yang bersih dan intuitif.",
          "Desktop software UI demos with a clean and intuitive layout."
        );
      default:
        return t(
          "Temukan referensi redesign website dan demo interaktif aplikasi (web, mobile, hingga sistem) sebagai gambaran nyata sebelum memulai proyek Anda.",
          "Explore our modern redesign references and interactive app demos (web, mobile, to systems) to visualize your project before building."
        );
    }
  };

  const initialItemsCount = 6;
  const displayItems = showAll ? filtered : filtered.slice(0, initialItemsCount);

  const counts = useMemo(() => {
    const map = { all: allDemos.length };
    for (const c of ["landing page", "mobile app", "sistem berbasis web", "software"]) {
      map[c] = allDemos.filter((d) => d.category === c).length;
    }
    return map;
  }, []);

  return (
    <section
      id="demo"
      className={`${
        isStandalone ? "pb-20 md:pb-32" : "pt-8 pb-16 md:pt-12 md:pb-24"
      } bg-transparent dark:bg-[#050508] relative`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* HEADER — badge + judul + divider + deskripsi (reveal saat di-scroll) */}
        <div
          ref={headerRef}
          className={`scroll-unit max-w-3xl mx-auto text-center mb-8 md:mb-12 flex flex-col items-center ${
            headerInView ? "scroll-reveal-item" : ""
          }`}
        >
          {/* Badge / eyebrow */}
          <div className="scroll-sub scroll-d1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[11px] font-bold mb-5 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("Demo & Redesign", "Demo & Redesign")}</span>
          </div>

          {/* Judul section */}
          <h2 className="scroll-sub scroll-d2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight text-zinc-900 dark:text-white text-balance">
            {t("Katalog Demo & Redesign.", "Demo & Redesign Catalog.")}
          </h2>

          {/* Pembeda: garis gradasi pendek pemisah judul & deskripsi */}
          <div aria-hidden="true" className="scroll-sub scroll-d3 flex items-center justify-center gap-2 my-4 md:my-5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-500/70 rounded-full" />
            <span className="w-2 h-2 rotate-45 rounded-[2px] bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-500/70 rounded-full" />
          </div>

          {/* Deskripsi section */}
          <p className="scroll-sub scroll-d4 text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed mx-auto max-w-xl">
            {t(
              "14+ demo website, aplikasi mobile, dan sistem web yang bisa dicoba langsung sebelum mulai proyek.",
              "14+ website, mobile app, and web system demos you can try live before starting your project."
            )}
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="flex flex-col items-center mb-8 md:mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-2.5 w-full max-w-2xl md:max-w-none mx-auto" role="tablist" aria-label={t("Filter kategori demo", "Demo category filter")}>
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-pressed={isActive}
                  onClick={() => setFilter(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-[13px] font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 ${
                    isActive
                      ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-md border border-zinc-900 dark:border-white"
                      : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  <Icon size={14} className="md:w-4 md:h-4" />
                  <span className="capitalize">{cat.label}</span>
                  <span
                    className={`text-[10px] font-bold tabular-nums px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 dark:bg-zinc-900/10 text-white dark:text-zinc-900"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    {counts[cat.id] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
          <p aria-live="polite" className="mt-3 text-xs text-zinc-500 dark:text-zinc-500 max-w-xl text-center leading-relaxed">
            {getCategoryInfo(filter)}
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="px-1 sm:px-2 md:px-4">
          {filter === "software" ? (
            <div className="max-w-2xl mx-auto py-12 md:py-16 px-6 md:px-8 rounded-[2rem] border border-dashed border-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-white/[0.02] text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-7 h-7 md:w-8 md:h-8 text-amber-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white mb-2">{t("Segera Hadir", "Coming Soon")}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-[13px] md:text-sm leading-relaxed">
                {t("Software custom & aplikasi desktop kami sedang dalam tahap kurasi untuk ditampilkan.", "Our custom software & desktop applications are currently being curated for display.")}
              </p>
            </div>
          ) : (
            /* Grid deterministik: sekali gridInView aktif, SEMUA kartu (termasuk yang
               baru dirender karena ganti filter / "Lihat Semua") langsung tampil. */
            <div
              ref={gridRef}
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 items-stretch ${
                gridInView ? "" : "scroll-reveal-until"
              }`}
            >
              {displayItems.map((demo, i) => (
                <div
                  key={demo.id || i}
                  className={`scroll-unit h-full ${gridInView ? "scroll-reveal-now" : ""}`}
                  style={gridInView ? { transitionDelay: `${Math.min(i, 6) * 90}ms` } : undefined}
                >
                  <DemoCard demo={demo} />
                </div>
              ))}
            </div>
          )}

          {filter !== "software" && filtered.length > initialItemsCount && (
            <div className="flex justify-center mt-8 md:mt-12 relative z-20">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group/btn inline-flex items-center gap-2 px-7 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-amber-500 dark:hover:bg-amber-500 dark:hover:text-white hover:text-white text-xs font-bold transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-amber-500/20 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
              >
                <span className="flex items-center gap-2">
                  {showAll ? t("Tampilkan Lebih Sedikit", "Show Less") : `${t("Lihat Semua Portofolio", "View All Portfolio")} (${filtered.length})`}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          )}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 md:mt-20 max-w-3xl mx-auto px-2 sm:px-4">
          <div className="bg-white dark:bg-zinc-900/50 rounded-[2rem] border border-zinc-200/80 dark:border-zinc-800/60 p-6 sm:p-8 md:p-12 text-center shadow-xl shadow-zinc-200/20 dark:shadow-none hover:border-amber-500/30 transition-colors duration-300 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-5 md:mb-6 text-amber-500">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base md:text-lg font-medium mb-6 md:mb-8 leading-relaxed max-w-xl">
                {t("Punya kebutuhan sistem khusus? Kami siap membantu mewujudkannya.", "Have specific system requirements? We are ready to help make it happen.")}
              </p>
              
              <button 
                onClick={() => openConsultation("Custom System")}
                className="inline-flex items-center gap-2 sm:gap-3 bg-zinc-900 dark:bg-white text-white dark:text-black px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-bold hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white dark:hover:text-white transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-amber-500/20 active:scale-95 group/btn cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
              >
                {t("Konsultasi Project", "Project Consultation")} 
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
