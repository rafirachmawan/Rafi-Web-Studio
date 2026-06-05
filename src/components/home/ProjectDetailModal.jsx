import { motion } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Layers, Tag, User } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectDetailModal({ project, onClose }) {
  const { t } = useLanguage();
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0a0a0a] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-zinc-200 dark:border-white/10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
        >
          <X size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto no-scrollbar flex-1 min-h-0 relative">
          
          {/* Header / Banner Image */}
          <div className="relative h-48 sm:h-72 w-full bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-white/5 shrink-0">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-top"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
                  <span className="px-2.5 py-1 bg-amber-500 text-black text-[9px] sm:text-[10px] font-black uppercase tracking-wider rounded-full flex items-center gap-1">
                    <Tag size={12} />{" "}
                    {t(
                      project.category === "landing page"
                        ? "Landing Page"
                        : project.category === "mobile app"
                        ? "Aplikasi Mobile"
                        : project.category === "sistem berbasis web"
                        ? "Sistem Berbasis Web"
                        : project.category === "software"
                        ? "Software"
                        : project.category,
                      project.category === "landing page"
                        ? "Landing Page"
                        : project.category === "mobile app"
                        ? "Mobile App"
                        : project.category === "sistem berbasis web"
                        ? "Web-based System"
                        : project.category === "software"
                        ? "Software"
                        : project.category
                    )}
                  </span>
                  {project.client && (
                    <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white border border-white/20 text-[9px] sm:text-[10px] font-black uppercase tracking-wider rounded-full flex items-center gap-1">
                      <User size={12} /> {t("Klien:", "Client:")} {project.client}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white flex items-center gap-2 sm:gap-3 leading-tight">
                  <span className="text-xl sm:text-3xl">{project.icon}</span> {project.name}
                </h2>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              {/* Left Column (Description & Features) */}
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">{t("Tentang Proyek", "About Project")}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                    {t(project.fullDescription || project.desc)}
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">{t("Fitur Utama", "Key Features")}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features ? project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-zinc-50 dark:bg-white/[0.02] p-4 rounded-2xl border border-zinc-100 dark:border-white/5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{t(feature)}</span>
                      </div>
                    )) : (
                      <p className="text-sm text-zinc-500">{t("Fitur sedang disiapkan...", "Features are being prepared...")}</p>
                    )}
                  </div>
                </section>
              </div>

              {/* Right Column (Tech Stack & CTA) */}
              <div className="space-y-8">
                <section className="bg-zinc-50 dark:bg-[#111] p-6 rounded-[2rem] border border-zinc-200 dark:border-white/5">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                    <Layers className="text-amber-500" size={20} /> Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack ? project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs font-bold text-zinc-700 dark:text-zinc-300">
                        {tech}
                      </span>
                    )) : (
                      <span className="text-sm text-zinc-500">{t("Mendata tech stack...", "Loading tech stack...")}</span>
                    )}
                  </div>
                </section>
              </div>

            </div>
          </div>
        </div>

        {/* Fixed Footer CTA */}
        <div className="p-4 sm:p-5 border-t border-zinc-200 dark:border-white/5 bg-zinc-50/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md flex flex-col-reverse sm:flex-row items-center justify-end gap-3 sm:gap-4 shrink-0">
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-center"
          >
            {t("Tutup", "Close")}
          </button>
          
          {project.path === "#" ? (
            <div className="w-full sm:w-auto text-center bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/5 text-zinc-500 dark:text-zinc-400 px-8 py-3.5 rounded-xl text-sm font-bold cursor-not-allowed">
              {t("Sistem Internal / Private", "Internal / Private System")}
            </div>
          ) : (
            <a
              href={project.path}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-8 py-3.5 rounded-xl text-sm font-black transition-all shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-95"
            >
              {t(
                project.isReal ? "Kunjungi Website Klien" : "Kunjungi Live Website",
                project.isReal ? "Visit Client Website" : "Visit Live Website"
              )}{" "}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>

      </motion.div>
    </div>
  );
}
