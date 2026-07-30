import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Tag,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { demos } from "../constants/demos";
import { realProjects } from "../constants/realProjects";
import Footer from "../components/common/Footer";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectDetail() {
  const { t } = useLanguage();
  const { id } = useParams();

  // Calculate directly during render instead of using state + effect
  const project =
    realProjects.find((d) => d.id === id) || demos.find((d) => d.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafc] dark:bg-[#050508] text-black dark:text-white">
        <h1 className="text-4xl font-black mb-4">
          {t("Project Tidak Ditemukan", "Project Not Found")}
        </h1>
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
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
          >
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
            <div className="sticky top-32 space-y-6 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200/80 dark:border-white/10 p-6 sm:p-8 lg:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
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
                              : project.category,
                    )}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] mb-6"
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
                    <CheckCircle2 size={16} className="text-emerald-500" />{" "}
                    {t("Project Rilis (Live)", "Live Project")}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {t(
                      "Project ini telah dikembangkan secara resmi untuk klien kami dan sedang beroperasi secara aktif.",
                      "This project has been officially developed for our client and is currently active.",
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
                    <span>💡</span>{" "}
                    {t("Konsep Rebranding", "Rebranding Concept")}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {t(
                      "Ini adalah showcase hasil desain ulang (redesign). Kami menggunakan brand ini sebagai studi kasus untuk mendemonstrasikan standar visual dan fungsionalitas modern yang kami tawarkan.",
                      "This is a redesign showcase. We use this brand as a case study to demonstrate the modern visual standards and functionality we offer.",
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
                    {t(
                      "Sistem Internal / Private",
                      "Internal / Private System",
                    )}
                  </div>
                ) : (
                  <a
                    href={project.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full text-sm font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-black/10 dark:shadow-white/10"
                  >
                    {t(
                      project.isReal
                        ? "Kunjungi Website Klien"
                        : "Kunjungi Live Website",
                      project.isReal
                        ? "Visit Client Website"
                        : "Visit Live Website",
                    )}{" "}
                    <ExternalLink
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
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
                  {project.techStack ? (
                    project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-white/5 px-3 py-1.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-zinc-500">
                      {t("Mendata tech stack...", "Loading tech stack...")}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column (Scrollable Content) */}
          <div className="lg:col-span-7 space-y-12 md:space-y-16">
            {/* Main Image (Only show if there is no before/after comparison) */}
            {!project.beforeImage && (
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
            )}

            {/* Before/After Laptop Mockup Comparison */}
            {project.beforeImage && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                {/* Section Header */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Sparkles size={15} className="text-amber-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white leading-tight">
                      {t("Transformasi Desain", "Design Transformation")}
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {t("Perbandingan tampilan website asli vs hasil redesign kami.", "Original website vs. our redesign result.")}
                    </p>
                  </div>
                </div>

                {/* Side-by-Side Grid for Comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* BEFORE — Laptop Mockup */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider">
                        {t("Sebelum", "Before")}
                      </span>
                      <span className="text-xs text-zinc-400">{t("Website Asli", "Original Website")}</span>
                    </div>
                    {/* Clean Image Container */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-white/5 shadow-md bg-zinc-100 dark:bg-zinc-900 group">
                      <img
                        src={project.beforeImage}
                        alt={`${project.name} - Before`}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* AFTER — Laptop Mockup */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider">
                        {t("Sesudah", "After")}
                      </span>
                      <span className="text-xs text-zinc-400">{t("Hasil Redesign", "Redesign Result")}</span>
                    </div>
                    {/* Clean Image Container with Amber Glow */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-amber-500/20 shadow-md shadow-amber-500/5 bg-zinc-100 dark:bg-zinc-900 ring-1 ring-amber-500/20 group">
                      <img
                        src={project.image}
                        alt={`${project.name} - After`}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                </div>
              </motion.section>
            )}

            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
                {t("Gambaran Project", "Project Overview")}
              </h2>
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
              <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
                {t("Fitur Unggulan", "Key Features")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {project.features ? (
                  project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-white dark:bg-zinc-900/50 p-5 rounded-2xl border border-zinc-200/60 dark:border-white/5 shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all group">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                      </div>
                      <span className="text-[15px] font-bold text-zinc-800 dark:text-zinc-200 leading-relaxed pt-1.5">
                        {t(feature)}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-zinc-500 p-5 bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200/60 dark:border-white/5">
                    {t(
                      "Detail fitur sedang disiapkan...",
                      "Feature details are being prepared...",
                    )}
                  </div>
                )}
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
