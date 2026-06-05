import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Layers, Tag, User, ExternalLink } from "lucide-react";
import { demos } from "../constants/demos";
import { realProjects } from "../constants/realProjects";
import Footer from "../components/common/Footer";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectDetail() {
  const { t } = useLanguage();
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProject = realProjects.find((d) => d.id === id) || demos.find((d) => d.id === id);
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafc] dark:bg-[#050508] text-black dark:text-white">
        <h1 className="text-4xl font-black mb-4">{t("Proyek Tidak Ditemukan", "Project Not Found")}</h1>
        <Link to="/" className="text-amber-500 font-bold hover:underline">
          &larr; {t("Kembali ke Beranda", "Back to Home")}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafc] dark:bg-[#050508] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-amber-500/30">
      
      {/* Simple Navbar for Detail Page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#050508]/80 backdrop-blur-xl border-b border-zinc-200 dark:border-white/5 px-4 py-4 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
            <ArrowLeft size={16} /> {t("Kembali", "Back")}
          </Link>
          <div className="font-heading font-extrabold text-lg tracking-tight text-black dark:text-white">
            Gapai<span className="text-amber-500">Digital</span>
          </div>
        </div>
      </nav>

      {/* Main Split Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column (Sticky Info) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 space-y-8">
              {/* Header Info */}
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4"
                >
                  <span className="text-amber-600 dark:text-amber-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                    <Tag size={14} />{" "}
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
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6"
                >
                  {t(project.name)}
                </motion.h1>
              </div>

              {/* Simulation Warning or Real Project Verification */}
              {project.isReal ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="pl-4 border-l-2 border-emerald-500/50"
                >
                  <p className="text-sm font-bold text-emerald-700 dark:text-emerald-500 mb-1 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" /> {t("Proyek Rilis (Live)", "Live Project")}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {t(
                      "Proyek ini telah dikembangkan secara resmi untuk klien kami dan sedang beroperasi secara aktif.",
                      "This project has been officially developed for our client and is currently active."
                    )}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="pl-4 border-l-2 border-amber-500/50"
                >
                  <p className="text-sm font-bold text-amber-700 dark:text-amber-500 mb-1 flex items-center gap-2">
                    <span>⚠️</span> {t("Peringatan Simulasi", "Simulation Notice")}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {t(
                      "Proyek ini hanyalah sebuah simulasi demo. Hasil akhir yang ditampilkan bukan merupakan real project atau entitas bisnis yang beroperasi.",
                      "This project is a simulation demo. The end result shown is not a real project or active business entity."
                    )}
                  </p>
                </motion.div>
              )}

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-4"
              >
                {project.path === "#" ? (
                  <div className="inline-flex items-center justify-center gap-2 bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/5 text-zinc-500 dark:text-zinc-400 px-8 py-4 rounded-full text-sm font-bold cursor-not-allowed">
                    {t("Sistem Internal / Private", "Internal / Private System")}
                  </div>
                ) : (
                  <a
                    href={project.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full text-sm font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-black/10 dark:shadow-white/10"
                  >
                    {t(
                      project.isReal ? "Kunjungi Website Klien" : "Kunjungi Live Website",
                      project.isReal ? "Visit Client Website" : "Visit Live Website"
                    )}{" "}
                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </motion.div>

              {/* Tech Stack (Minimalist) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="pt-8 border-t border-zinc-200 dark:border-white/10"
              >
                <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
                  {t("Teknologi yang Digunakan", "Technologies Used")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack ? project.techStack.map((tech, idx) => (
                    <span key={idx} className="text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-white/5 px-3 py-1.5 rounded-md">
                      {tech}
                    </span>
                  )) : (
                    <span className="text-sm text-zinc-500">{t("Mendata tech stack...", "Loading tech stack...")}</span>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column (Scrollable Content) */}
          <div className="lg:col-span-7 space-y-12 md:space-y-16">
            
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900"
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-auto block"
              />
            </motion.div>

            {/* Description */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">{t("Gambaran Proyek", "Project Overview")}</h2>
              <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed text-lg">
                <p>{t(project.fullDescription || project.desc)}</p>
              </div>
            </motion.section>

            {/* Features (Clean List) */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">{t("Fitur Unggulan", "Key Features")}</h2>
              <ul className="space-y-4">
                {project.features ? project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-lg font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">{t(feature)}</span>
                  </li>
                )) : (
                  <li className="text-zinc-500">{t("Detail fitur sedang disiapkan...", "Feature details are being prepared...")}</li>
                )}
              </ul>
            </motion.section>
            
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
