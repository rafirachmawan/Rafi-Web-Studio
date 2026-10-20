import { useRef } from "react";
import { Link } from "react-router-dom";
import { realProjects } from "../data/realProjects";
import { ChevronLeft, ChevronRight, Tag, ArrowRight, Eye, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";
import AnimatedCounter from "../../../components/shared/AnimatedCounter";
import CleanPlaceholder from "../../../components/ui/CleanPlaceholder";

/* ===== Variants scroll-reveal (kartu muncul 1 per 1 saat di-scroll) ===== */
const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const headerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const sliderVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function RealProjectsSection({ isStandalone = false }) {
  const { t } = useLanguage();
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const card = slider.querySelector(".snap-center");
      const gap = parseInt(getComputedStyle(slider).columnGap || "24", 10) || 24;
      const cardWidth = card ? card.offsetWidth + gap : 400;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="real-projects"
      className={`${
        isStandalone ? "pb-20 md:pb-32" : "pt-8 pb-20 md:pt-14 md:pb-28"
      } relative bg-transparent dark:bg-[#050508] scroll-mt-24`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* HEADER — badge + judul + divider + deskripsi (reveal saat di-scroll) */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl mx-auto text-center mb-10 md:mb-14"
        >
          {/* Badge / eyebrow */}
          <motion.div
            variants={headerItem}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4"
          >
            <LayoutGrid size={14} className="text-amber-500" />
            <span>{t("Portofolio • Proyek Nyata", "Portfolio • Real Projects")}</span>
          </motion.div>

          {/* Judul section */}
          <motion.h2
            variants={headerItem}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight text-zinc-900 dark:text-white text-balance"
          >
            {t("Portofolio Proyek Klien.", "Client Project Portfolio.")}
          </motion.h2>

          {/* Pembeda: garis gradasi pendek sebagai pemisah judul & deskripsi */}
          <motion.div
            variants={headerItem}
            aria-hidden="true"
            className="flex items-center justify-center gap-2 my-4 md:my-5"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-500/70 rounded-full" />
            <span className="w-2 h-2 rotate-45 rounded-[2px] bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-500/70 rounded-full" />
          </motion.div>

          {/* Deskripsi section */}
          <motion.p
            variants={headerItem}
            className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto"
          >
            {t(
              "50+ sistem web, aplikasi mobile, dan software yang dipakai harian oleh sekolah, bank, dan komunitas.",
              "50+ web systems, mobile apps, and software used daily by schools, banks, and communities."
            )}
          </motion.p>
        </motion.div>

        {/* SLIDER CAROUSEL WRAPPER DENGAN TOMBOL NAVIGASI */}
        <div className="relative max-w-7xl mx-auto group/carousel">
          {/* Tombol Panah Kiri — desktop only agar tidak menutupi card di 360px */}
          <button
            onClick={() => scroll("left")}
            aria-label={t("Slide sebelumnya", "Previous slide")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-zinc-900/80 hover:bg-amber-500 text-white backdrop-blur-md border border-zinc-700/50 hidden md:flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 z-30 opacity-0 group-hover/carousel:opacity-85 hover:!opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Tombol Panah Kanan — desktop only */}
          <button
            onClick={() => scroll("right")}
            aria-label={t("Slide berikutnya", "Next slide")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-zinc-900/80 hover:bg-amber-500 text-white backdrop-blur-md border border-zinc-700/50 hidden md:flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 z-30 opacity-0 group-hover/carousel:opacity-85 hover:!opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950"
          >
            <ChevronRight size={24} />
          </button>

          {/* SLIDER CONTAINER — kartu muncul 1 per 1 (stagger) saat masuk viewport */}
          <motion.div
            variants={sliderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            ref={sliderRef}
            role="region"
            aria-roledescription="carousel"
            aria-label={t("Portofolio proyek klien", "Client project portfolio")}
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scroll-px-4 py-4 px-1 sm:px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {realProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="snap-center shrink-0 w-[84vw] max-w-[320px] sm:max-w-none sm:w-[340px] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] h-[495px] sm:h-[480px] md:h-[510px] rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group cursor-pointer border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 shadow-sm hover:shadow-2xl hover:border-amber-500/40 dark:hover:border-amber-500/40 hover:-translate-y-2 focus-within:ring-2 focus-within:ring-amber-500 focus-within:border-amber-500/40 transition-all duration-500"
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  aria-label={`${t(project.name)} — ${project.client}`}
                  className="w-full h-full flex flex-col justify-between p-5 sm:p-7 select-none focus-visible:outline-none rounded-[2rem] md:rounded-[2.5rem]"
                >
                  {/* TOP META ROW */}
                  <div className="flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 text-[11px] font-bold uppercase tracking-wider border border-zinc-200/80 dark:border-zinc-700/80">
                      <Tag size={12} className="text-amber-500" />
                      <span className="capitalize">{project.category}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                      <span>Live</span>
                    </span>
                  </div>

                  {/* IMAGE / PLACEHOLDER MOCKUP PROYEK DENGAN OVERLAY HOVER */}
                  <div className="relative flex-1 flex flex-col items-center justify-center my-3 overflow-hidden rounded-2xl p-1 group/img w-full min-h-[200px] sm:min-h-[220px]">
                    {["jadwal-booking-shiningsun", "absensi-shiningsun", "antrian-bri"].includes(project.id) && project.image ? (
                      <img
                        src={project.image}
                        alt={t(project.name)}
                        className={
                          project.category === "mobile app"
                            ? "w-full min-h-[200px] sm:min-h-[210px] aspect-[16/10] object-contain bg-white rounded-2xl border border-zinc-200/80 dark:border-zinc-700/60 p-2"
                            : "w-full min-h-[200px] sm:min-h-[210px] aspect-[16/10] object-cover rounded-2xl border border-zinc-200/80 dark:border-zinc-700/60"
                        }
                        loading="lazy"
                      />
                    ) : (
                      <CleanPlaceholder
                        width={800}
                        height={500}
                        ratio="16:10"
                        label={t("Placeholder Portofolio", "Portfolio Placeholder")}
                        sublabel={project.client}
                        badge={project.category}
                        className="min-h-[200px] sm:min-h-[210px] aspect-[16/10]"
                      />
                    )}

                    {/* OVERLAY BUTTON SAAT KURSOR DI AREA PROJECT */}
                    <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px] rounded-2xl z-20 pointer-events-none">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/30 transform translate-y-3 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300 ease-out">
                        <Eye size={16} />
                        <span>{t("Lihat Project", "View Project")}</span>
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>

                  {/* BOTTOM CONTENT */}
                  <div className="z-10 pt-3">
                    <h3 className="text-zinc-900 dark:text-white font-extrabold text-[15px] sm:text-base leading-snug tracking-tight line-clamp-2 min-h-[2.75rem] group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors text-left">
                      {t(project.name)}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed mt-1.5 line-clamp-2 text-left">
                      {t(project.desc)}
                    </p>

                    {/* Tech stack */}
                    {project.techStack && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-semibold border border-zinc-200/60 dark:border-zinc-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 rounded-md text-zinc-500 dark:text-zinc-500 text-[10px] font-bold">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-zinc-200/70 dark:border-zinc-800">
                      <p className="text-zinc-500 dark:text-zinc-400 text-[11px] font-semibold truncate text-left">
                        {project.client}
                      </p>
                      <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-500 text-[11px] font-bold shrink-0">
                        <span>{t("Detail", "Details")}</span>
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                      </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile nav — di bawah slider agar tidak menutupi card di 360px */}
          <div className="mt-5 flex md:hidden items-center justify-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label={t("Slide sebelumnya", "Previous slide")}
              className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200 flex items-center justify-center shadow-sm active:scale-95 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
              {t("Geser untuk lihat lainnya", "Swipe to see more")}
            </span>
            <button
              onClick={() => scroll("right")}
              aria-label={t("Slide berikutnya", "Next slide")}
              className="w-10 h-10 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center shadow-md active:scale-95 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-12 flex flex-col items-center gap-8"
        >
          <Link
            to="/project"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-amber-500 dark:hover:bg-amber-500 dark:hover:text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-xl hover:shadow-amber-500/20 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
          >
            <span>{t("Eksplorasi Semua Portofolio", "Explore All Portfolio")}</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* STATS HIGHLIGHT */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-16 py-6 px-5 sm:px-8 w-full max-w-3xl mx-auto bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm">
            <div className="flex flex-col items-center min-w-[84px]">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tabular-nums">
                <AnimatedCounter value={50} suffix="+" />
              </span>
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">
                {t("Project Selesai", "Projects Completed")}
              </span>
            </div>
            <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800 hidden md:block"></div>
            <div className="flex flex-col items-center min-w-[84px]">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tabular-nums">
                <AnimatedCounter value={40} suffix="+" />
              </span>
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">
                {t("Klien Aktif", "Active Clients")}
              </span>
            </div>
            <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800 hidden md:block"></div>
            <div className="flex flex-col items-center min-w-[84px]">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tabular-nums">
                <AnimatedCounter value={4} suffix="+" />
              </span>
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">
                {t("Tahun Pengalaman", "Years Experience")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
