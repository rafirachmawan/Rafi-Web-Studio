import { useRef } from "react";
import { Link } from "react-router-dom";
import { realProjects } from "../../constants/realProjects";
import { ChevronLeft, ChevronRight, Tag, ArrowRight, Eye } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import AnimatedCounter from "../common/AnimatedCounter";
import CleanPlaceholder from "../common/CleanPlaceholder";

export default function RealProjectsSection({ isStandalone = false }) {
  const { t } = useLanguage();
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector(".snap-center");
      const cardWidth = card ? card.offsetWidth + 24 : 400;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
        {/* HEADER CLEAN & MINIMALIS */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-heading leading-tight text-zinc-900 dark:text-white">
            {t("Hasil Nyata.", "Real Results.")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              {t("Bukan Sekadar Janji.", "Not Just Promises.")}
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t(
              "Setiap detail dirancang untuk meningkatkan kredibilitas, performa, dan pertumbuhan bisnis Anda.",
              "Every detail is crafted to enhance credibility, performance, and your business growth."
            )}
          </p>
        </div>

        {/* SLIDER CAROUSEL WRAPPER DENGAN TOMBOL NAVIGASI */}
        <div className="relative max-w-7xl mx-auto group/carousel">
          {/* Tombol Panah Kiri */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous Slide"
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-zinc-900/80 hover:bg-amber-500 text-white backdrop-blur-md border border-zinc-700/50 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 z-30 opacity-35 sm:opacity-35 group-hover/carousel:opacity-85 hover:!opacity-100"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Tombol Panah Kanan */}
          <button
            onClick={() => scroll("right")}
            aria-label="Next Slide"
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-zinc-900/80 hover:bg-amber-500 text-white backdrop-blur-md border border-zinc-700/50 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 z-30 opacity-35 sm:opacity-35 group-hover/carousel:opacity-85 hover:!opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          {/* SLIDER CONTAINER */}
          <div
            ref={sliderRef}
            className="flex items-center gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2 sm:px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {realProjects.map((project) => (
              <div
                key={project.id}
                className="snap-center shrink-0 w-[85vw] sm:w-[340px] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] h-[480px] md:h-[510px] rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group cursor-pointer border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 shadow-sm hover:shadow-2xl hover:border-amber-500/40 dark:hover:border-amber-500/40 hover:-translate-y-2 transition-all duration-500"
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  className="w-full h-full flex flex-col justify-between p-6 sm:p-7 select-none"
                >
                  {/* TOP BADGE */}
                  <div className="flex justify-center z-10">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 text-xs font-semibold border border-zinc-200/80 dark:border-zinc-700/80 shadow-sm">
                      <Tag size={12} className="text-amber-500" />
                      <span className="capitalize">{project.category}</span>
                    </span>
                  </div>

                  {/* PLACEHOLDER MOCKUP PROYEK DENGAN OVERLAY HOVER */}
                  <div className="relative flex-1 flex flex-col items-center justify-center my-3 overflow-hidden rounded-2xl p-1 group/img w-full min-h-[220px]">
                    <CleanPlaceholder
                      width={800}
                      height={500}
                      ratio="16:10"
                      label={t("Placeholder Portofolio", "Portfolio Placeholder")}
                      sublabel={project.client}
                      badge={project.category}
                      className="min-h-[210px] aspect-[16/10]"
                    />

                    {/* OVERLAY BUTTON SAAT KURSOR DI AREA PROJECT */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px] rounded-2xl z-20 pointer-events-none">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/30 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        <Eye size={16} />
                        <span>{t("Lihat Project", "View Project")}</span>
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>

                  {/* BOTTOM TITLE & CLIENT */}
                  <div className="z-10 text-center pt-2 pb-1">
                    <h3 className="text-zinc-900 dark:text-white font-extrabold text-sm sm:text-base md:text-lg tracking-tight line-clamp-2 min-h-[2.5rem] flex items-center justify-center group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                      {t(project.name)}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium mt-1 line-clamp-1">
                      {project.client}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM LINK & STATS */}
        <div className="mt-12 flex flex-col items-center gap-8">
          <Link
            to="/project"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-amber-500 dark:hover:bg-amber-500 dark:hover:text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-xl hover:shadow-amber-500/20 group cursor-pointer"
          >
            <span>{t("Eksplorasi Semua Portofolio", "Explore All Portfolio")}</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* STATS HIGHLIGHT */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-6 px-8 w-full max-w-3xl mx-auto bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                <AnimatedCounter value={50} suffix="+" />
              </span>
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">
                {t("Project Selesai", "Projects Completed")}
              </span>
            </div>
            <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                <AnimatedCounter value={40} suffix="+" />
              </span>
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">
                {t("Klien Aktif", "Active Clients")}
              </span>
            </div>
            <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                <AnimatedCounter value={4} suffix="+" />
              </span>
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">
                {t("Tahun Pengalaman", "Years Experience")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
