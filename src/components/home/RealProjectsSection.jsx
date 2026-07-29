import { useState } from "react";
import { Link } from "react-router-dom";
import { realProjects } from "../../constants/realProjects";
import { ArrowRight, Trophy, LayoutGrid, ArrowUp } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function RealProjectsSection({ isStandalone = false }) {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  // Di homepage, tampilkan hanya 2 project pertama jika belum diexpand
  const displayedProjects = isStandalone || isExpanded ? realProjects : realProjects.slice(0, 2);
  const hiddenCount = realProjects.length - 2;

  return (
    <section 
      id="real-projects" 
      className={`${isStandalone ? "pb-20 md:pb-32" : "pt-8 pb-20 md:pt-12 md:pb-32"} relative bg-transparent dark:bg-[#050508]`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold mb-6 uppercase tracking-widest">
            <Trophy className="w-4 h-4" />
            <span>{t("Siap Produksi", "Production Ready")}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              {t("Project Client", "Client Projects")}
            </span>
          </h2>
          
          <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed mx-auto max-w-2xl mb-10">
            {t(
              "Ini bukan sekadar desain mockup atau template. Semua portofolio di bawah adalah 100% project asli yang telah kami rancang, kembangkan, dan kini aktif digunakan oleh klien-klien kami.",
              "These are not just mockup designs or templates. All portfolios below are 100% real projects that we have designed, developed, and are now actively used by our clients."
            )}
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/5"
            >
              {/* IMAGE */}
              <Link 
                to={`/portfolio/${project.id}`}
                className="block relative overflow-hidden aspect-[16/10] bg-zinc-200 dark:bg-black/50"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* DETAILS */}
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20">
                    {project.category}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                  <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    {project.client}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">
                  {t(project.name)}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                  {t(project.desc)}
                </p>

                {/* TECH STACK & LINK */}
                <div className="flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800/80 pt-5 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-500 bg-transparent border border-dashed border-zinc-300 dark:border-zinc-700 px-2 py-1 rounded-md">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/portfolio/${project.id}`}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black group-hover:bg-amber-500 group-hover:text-white dark:group-hover:bg-amber-500 dark:group-hover:text-white transition-all duration-300 shrink-0"
                  >
                    <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LIHAT SEMUA / SEMBUNYIKAN — hanya tampil di homepage (bukan standalone) */}
        {!isStandalone && hiddenCount > 0 && (
          <div className="mt-12 flex flex-col items-center gap-4">
            {/* Hint text */}
            {!isExpanded && (
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                {t(
                  `+${hiddenCount} project client lainnya menunggu untuk dieksplorasi`,
                  `+${hiddenCount} more client projects waiting to be explored`
                )}
              </p>
            )}

            {/* CTA Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              id="btn-lihat-semua-project-client"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-bold hover:bg-amber-500 dark:hover:bg-amber-500 dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <LayoutGrid className="w-4 h-4" />
              <span>
                {isExpanded
                  ? t("Tampilkan Lebih Sedikit", "Show Less Projects")
                  : t("Lihat Semua Project Client", "View All Client Projects")}
              </span>
              {isExpanded ? (
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              ) : (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              )}
            </button>
          </div>
        )}

        {/* BOTTOM SECTION: STATS & CTA */}
        <div className={`${!isStandalone ? "mt-16" : "mt-20"} flex flex-col items-center gap-10`}>
          {/* STATS HIGHLIGHT */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-6 md:py-8 px-8 w-full max-w-3xl mx-auto bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">50+</span>
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">{t("Project Selesai", "Projects Completed")}</span>
            </div>
            <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">40+</span>
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">{t("Klien Aktif", "Active Clients")}</span>
            </div>
            <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">4+</span>
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">{t("Tahun Pengalaman", "Years Experience")}</span>
            </div>
          </div>

          {/* BOTTOM CTA — hanya di halaman /project (standalone) */}
          {isStandalone && (
            <div className="text-center">
              <Link
                to="/project"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-600 dark:text-amber-500 text-sm font-bold hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-amber-500/20 group"
              >
                <span>{t("Eksplorasi 50+ Project Lainnya", "Explore 50+ Other Projects")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
