import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Tag,
  ExternalLink,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Building2,
  Layers,
  ShieldCheck,
  MessageCircle,
  Smartphone,
  LayoutDashboard,
} from "lucide-react";
import { demos } from "../features/home/data/demos";
import { realProjects } from "../features/home/data/realProjects";
import Footer from "../components/layout/Footer";
import CleanPlaceholder from "../components/ui/CleanPlaceholder";
import { useLanguage } from "../context/LanguageContext";

function ProjectDetailGallery({ gallery, name, project }) {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const isMobileApp = project.category === "mobile app";
  const isWebSystem =
    project.category === "sistem berbasis web" || project.category === "sistem";
  const isSystemOrMobileDemo = isMobileApp || isWebSystem;

  const images =
    gallery && gallery.length > 0
      ? gallery
      : project.image
        ? [project.image]
        : [];

  const prevImage = () => {
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-5">
      {/* BROWSER FRAME MOCKUP */}
      <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 group">
        {/* Mockup Top Window Toolbar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-100/90 dark:bg-zinc-900/90 border-b border-zinc-200/70 dark:border-zinc-800/70">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400/90" />
            <span className="w-3 h-3 rounded-full bg-amber-400/90" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
          </div>

          {/* Fake Address Bar */}
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500 dark:text-zinc-400 max-w-sm sm:max-w-md w-full justify-center shadow-inner">
            <span className="text-zinc-400">🔒</span>
            <span className="truncate">
              https://{project.id || "app"}.gapai.digital
            </span>
          </div>

          {/* Slide Indicator */}
          {!isSystemOrMobileDemo && images.length > 1 ? (
            <div className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-200/70 dark:bg-zinc-800 px-2.5 py-1 rounded-full">
              {activeIdx + 1} / {images.length}
            </div>
          ) : (
            <div className="w-10" />
          )}
        </div>

        {/* Screen Image Display or Dedicated UI Mockup Placeholder */}
        {project.id === "antrian-bri" ? (
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-gradient-to-br from-[#06182c] via-[#092244] to-[#041224] p-5 sm:p-8 flex flex-col justify-between select-none overflow-hidden text-white font-sans">
            {/* Ambient blue bank glow */}
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* TOP BAR: Bank Brand & Clock */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-blue-400/20 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600 border border-blue-400/40 flex items-center justify-center font-black text-xs sm:text-sm text-white shadow-md tracking-wider">
                  BRI
                </div>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm tracking-wide text-white font-heading">
                    BANK BRI • KANTOR CABANG SURABAYA
                  </h4>
                  <p className="text-[10px] text-blue-300/80 font-mono">
                    Sistem Antrean Digital Desktop v2.4
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Sistem Aktif & Terhubung</span>
                </div>
                <div className="text-right">
                  <div className="text-xs sm:text-sm font-mono font-bold text-white tracking-widest">
                    09:42:15 WIB
                  </div>
                  <div className="text-[10px] text-blue-300/70">
                    Senin, 20 Sep 2026
                  </div>
                </div>
              </div>
            </div>

            {/* CENTER: 3 CALLING PANELS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 my-auto py-3 relative z-10">
              {/* Panel 1: Active Calling Teller */}
              <div className="rounded-2xl p-4 sm:p-5 bg-blue-950/60 border-2 border-amber-400/80 shadow-lg shadow-amber-500/10 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-amber-500 text-black text-[9px] font-black uppercase tracking-wider animate-pulse">
                  Panggilan Aktif
                </span>
                <span className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-1">
                  TELLER 1
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400 tracking-tight font-mono my-1 drop-shadow-md">
                  A-012
                </span>
                <span className="text-[11px] font-medium text-blue-300">
                  Menuju Loket Teller 1
                </span>
              </div>

              {/* Panel 2: CS 1 */}
              <div className="rounded-2xl p-4 sm:p-5 bg-blue-950/40 border border-blue-400/20 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-1">
                  CUSTOMER SERVICE 1
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-mono my-1">
                  B-008
                </span>
                <span className="text-[11px] font-medium text-blue-300/80">
                  Menuju Meja CS 1
                </span>
              </div>

              {/* Panel 3: CS 2 */}
              <div className="rounded-2xl p-4 sm:p-5 bg-blue-950/40 border border-blue-400/20 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-1">
                  CUSTOMER SERVICE 2
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-mono my-1">
                  B-009
                </span>
                <span className="text-[11px] font-medium text-blue-300/80">
                  Menuju Meja CS 2
                </span>
              </div>
            </div>

            {/* BOTTOM BAR: TTS Voice Call Announcement & Placeholder Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-blue-400/20 relative z-10">
              <div className="flex items-center gap-2.5 text-xs text-blue-200">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
                </span>
                <span className="font-semibold text-amber-300">Suara Otomatis (TTS):</span>
                <span className="text-blue-100 italic truncate max-w-xs sm:max-w-md">
                  "Nomor Antrean A, Kosong, Satu, Dua, Menuju Loket Satu"
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-[10px] font-mono font-medium text-blue-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{t("Mockup Sistem • 1920 × 1080 px (16:9)", "System Mockup • 1920 × 1080 px (16:9)")}</span>
              </div>
            </div>
          </div>
        ) : isSystemOrMobileDemo ? (
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[380px] sm:min-h-[460px] md:min-h-[500px] bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-4 sm:p-8 overflow-hidden">
            <CleanPlaceholder
              width={isMobileApp ? 1080 : 1920}
              height={isMobileApp ? 1920 : 1080}
              ratio={isMobileApp ? "9:16" : "16:9"}
              label={project.name}
              sublabel={
                isMobileApp
                  ? t(
                      "Mockup Demo Aplikasi Mobile (Android & iOS)",
                      "Mobile App Demo Mockup (Android & iOS)"
                    )
                  : t(
                      "Mockup Demo Dashboard Sistem Berbasis Web",
                      "Web-based Dashboard System Demo Mockup"
                    )
              }
              badge={
                isMobileApp
                  ? "Mobile App • Android / iOS"
                  : "Sistem Web • Dashboard"
              }
              icon={isMobileApp ? Smartphone : LayoutDashboard}
              className="w-full h-full max-w-2xl max-h-full shadow-inner"
            />
          </div>
        ) : (
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-zinc-900 flex items-center justify-center overflow-hidden">
            <img
              key={activeIdx}
              src={images[activeIdx]}
              alt={`${name} - preview ${activeIdx + 1}`}
              className="w-full h-full object-contain p-2 sm:p-4 transition-all duration-300 select-none"
            />

            {images.length > 1 && (
              <>
                {/* Prev Arrow */}
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-black/60 hover:bg-amber-500 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 cursor-pointer z-20 opacity-35 sm:opacity-40 group-hover:opacity-85 hover:!opacity-100"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Next Arrow */}
                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-black/60 hover:bg-amber-500 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 cursor-pointer z-20 opacity-35 sm:opacity-40 group-hover:opacity-85 hover:!opacity-100"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* THUMBNAIL STRIP */}
      {!isSystemOrMobileDemo && images.length > 1 && (
        <div className="flex items-center justify-center gap-3 overflow-x-auto py-2 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 shrink-0 w-24 sm:w-28 aspect-[16/10] cursor-pointer bg-white dark:bg-zinc-900 ${
                activeIdx === idx
                  ? "border-amber-500 ring-4 ring-amber-500/20 scale-105 shadow-md"
                  : "border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-400"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectDetail() {
  const { t } = useLanguage();
  const { id } = useParams();

  const allList = [
    ...realProjects,
    ...demos.filter((d) => !realProjects.some((r) => r.id === d.id)),
  ];
  const currentIndex = allList.findIndex((p) => p.id === id);
  const project = currentIndex !== -1 ? allList[currentIndex] : null;
  const nextProject =
    currentIndex !== -1 ? allList[(currentIndex + 1) % allList.length] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafc] dark:bg-[#050508] text-black dark:text-white px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-black mb-4 font-heading">
          {t("Project Tidak Ditemukan", "Project Not Found")}
        </h1>
        <p className="text-zinc-500 text-sm mb-6 max-w-md">
          {t(
            "Halaman portofolio yang Anda cari mungkin telah dipindahkan atau belum tersedia.",
            "The portfolio page you are looking for may have been moved or is not yet available."
          )}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20"
        >
          <ArrowLeft size={16} /> {t("Kembali ke Beranda", "Back to Home")}
        </Link>
      </div>
    );
  }

  const categoryLabel = t(
    project.category === "landing page"
      ? "Website"
      : project.category === "mobile app"
        ? "Aplikasi Mobile"
        : project.category === "sistem berbasis web"
          ? "Sistem Berbasis Web"
          : project.category === "software"
            ? "Software"
            : project.category,
    project.category === "landing page"
      ? "Website"
      : project.category === "mobile app"
        ? "Mobile App"
        : project.category === "sistem berbasis web"
          ? "Web-based System"
          : project.category === "software"
            ? "Software"
            : project.category
  );

  return (
    <div className="min-h-screen bg-[#fafafc] dark:bg-[#050508] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-amber-500/30 relative overflow-hidden">
      {/* Ambient Top Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[400px] bg-gradient-to-b from-amber-500/12 via-orange-500/6 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-24 -left-24 w-[350px] h-[350px] bg-amber-500/8 blur-3xl rounded-full" />
        <div className="absolute top-36 -right-24 w-[350px] h-[350px] bg-orange-500/8 blur-3xl rounded-full" />
      </div>

      {/* NAVBAR STICKY */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-[#050508]/85 backdrop-blur-xl border-b border-zinc-200/80 dark:border-white/5 px-4 py-3.5 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all cursor-pointer"
          >
            <ArrowLeft size={15} />
            <span>{t("Kembali ke Beranda", "Back to Home")}</span>
          </Link>

          <Link to="/" className="font-heading font-extrabold text-lg tracking-tight text-black dark:text-white">
            Gapai<span className="text-amber-500">Digital</span>
          </Link>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28 relative z-10">
        {/* ─── 1. HERO HEADER (FULL-WIDTH CENTERPIECE) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-5">
            <Link to="/" className="hover:text-amber-500 transition-colors">
              {t("Beranda", "Home")}
            </Link>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <Link
              to="/#real-projects"
              className="hover:text-amber-500 transition-colors"
            >
              {t("Portofolio", "Portfolio")}
            </Link>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <span className="text-zinc-900 dark:text-white font-semibold truncate max-w-[200px] sm:max-w-none">
              {t(project.name)}
            </span>
          </div>

          {/* Category & Status Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-500/20 tracking-wide uppercase">
              <Tag size={12} />
              <span>{categoryLabel}</span>
            </span>

            {project.isReal && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{t("Project Rilis (Live)", "Live Project")}</span>
              </span>
            )}
          </div>

          {/* Title Row with Brand Logo & Action CTA Button */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-5">
            <div className="flex items-center gap-4 sm:gap-5">
              {/* Brand Logo Container */}
              {project.icon && (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-2.5 sm:p-3 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-md shadow-zinc-950/5 dark:shadow-black/30 flex items-center justify-center shrink-0">
                  {typeof project.icon === "string" &&
                  (project.icon.includes("/") || project.icon.includes(".")) ? (
                    <img
                      src={project.icon}
                      alt={t(project.name)}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-3xl text-amber-500 flex items-center justify-center">
                      {project.icon}
                    </div>
                  )}
                </div>
              )}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading leading-tight">
                  {t(project.name)}
                </h1>
                {project.client && (
                  <p className="text-xs sm:text-sm font-semibold text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1.5">
                    <Building2 size={13} className="text-amber-500" />
                    <span>{project.client}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Primary Action Button */}
            {project.path && project.path !== "#" && (
              <div className="shrink-0 flex items-center">
                {project.path.startsWith("/") ? (
                  <Link
                    to={project.path}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
                  >
                    <span>{t("Kunjungi Website", "Visit Website")}</span>
                    <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                ) : (
                  <a
                    href={project.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
                  >
                    <span>{t("Kunjungi Website", "Visit Website")}</span>
                    <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* ─── 2. META INFO BAR (HORIZONTAL GLASS TILES GRID) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-3xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm mb-12 sm:mb-16"
        >
          {/* Client */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-800/50 flex flex-col justify-between">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5 mb-2">
              <Building2 size={13} className="text-amber-500" />
              <span>{t("Klien", "Client")}</span>
            </span>
            <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white truncate">
              {project.client || "GapaiDigital Showcase"}
            </p>
          </div>

          {/* Category */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-800/50 flex flex-col justify-between">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5 mb-2">
              <Tag size={13} className="text-amber-500" />
              <span>{t("Kategori", "Category")}</span>
            </span>
            <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white capitalize truncate">
              {categoryLabel}
            </p>
          </div>

          {/* Solution Type */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-800/50 flex flex-col justify-between">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5 mb-2">
              <Layers size={13} className="text-amber-500" />
              <span>{t("Tipe Solusi", "Solution Type")}</span>
            </span>
            <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white truncate">
              {project.category === "sistem berbasis web"
                ? "Progressive Web App"
                : project.category === "mobile app"
                  ? "Android Mobile App"
                  : project.category === "software"
                    ? "Desktop Application"
                    : "High-Converting Web"}
            </p>
          </div>

          {/* Access / Link */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-800/50 flex flex-col justify-between">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5 mb-2">
              <ShieldCheck size={13} className="text-amber-500" />
              <span>{t("Status Akses", "Access")}</span>
            </span>
            <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
              {project.path && project.path !== "#" ? t("UMUM", "PUBLIC") : t("Internal", "Internal")}
            </p>
          </div>
        </motion.div>

        {/* ─── 3. SHOWCASE CENTERPIECE (LARGE BROWSER FRAME) ─── */}
        <div className="mb-16 sm:mb-24 relative">
          {/* Subtle Ambient Glow behind canvas */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

          <ProjectDetailGallery
            gallery={project.gallery}
            name={t(project.name)}
            project={project}
          />
        </div>

        {/* ─── 4. EDITORIAL 2-COLUMN CONTENT SECTION ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT COLUMN: Overview & Tech Stack (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles size={14} />
                <span>{t("Gambaran Kasus & Solusi", "Case & Solution")}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white font-heading tracking-tight mb-5">
                {t(
                  "Arsitektur & Implementasi Proyek",
                  "Architecture & Project Implementation"
                )}
              </h2>
              <div className="text-zinc-600 dark:text-zinc-300 text-base sm:text-[17px] leading-relaxed space-y-4">
                <p>{t(project.fullDescription || project.desc)}</p>
              </div>
            </div>

            {/* Tech Stack List */}
            <div className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
              <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
                {t("Teknologi yang Digunakan", "Technologies Used")}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {(
                  project.techStack || [
                    "Next.js",
                    "React JS",
                    "Tailwind CSS",
                    "Supabase",
                  ]
                ).map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 shadow-sm hover:border-amber-500/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Key Features & CTA Card (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Key Features Card */}
            <div className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-heading tracking-tight mb-5 flex items-center gap-2">
                <CheckCircle2 className="text-amber-500" size={20} />
                <span>{t("Fitur Unggulan Sistem", "Key System Features")}</span>
              </h3>

              <div className="space-y-3">
                {project.features && project.features.length > 0 ? (
                  project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-950/60 border border-zinc-200/50 dark:border-zinc-800/50 group hover:border-amber-500/30 transition-all"
                    >
                      <div className="shrink-0 w-6 h-6 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-600 dark:text-amber-400 mt-0.5 group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={13} strokeWidth={2.5} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                        {t(feature)}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-zinc-500 text-sm">
                    {t(
                      "Detail fitur sedang dirangkum...",
                      "Feature details are being compiled..."
                    )}
                  </p>
                )}
              </div>
            </div>

            {/* Direct Consultation CTA Card */}
            <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 text-white border border-zinc-800 shadow-xl relative overflow-hidden">
              {/* Subtle ambient amber spot */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                  <MessageCircle size={20} />
                </div>
                <h4 className="text-xl font-bold font-heading mb-2">
                  {t("Ingin Sistem Seperti Ini?", "Want a System Like This?")}
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {t(
                    "Konsultasikan ide atau kendala operasional bisnis Anda bersama tim kami. Dapatkan solusi sistem digital yang presisi & siap pakai.",
                    "Consult your business ideas or operational challenges with our team. Get precise & production-ready digital solutions."
                  )}
                </p>

                <a
                  href={`https://wa.me/085196221716?text=${encodeURIComponent(
                    `Halo GapaiDigital, saya tertarik membuat sistem seperti di portofolio "${t(project.name)}"`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-sm shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-98"
                >
                  <span>{t("Konsultasi via WhatsApp", "Consult via WhatsApp")}</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 5. NEXT PROJECT NAVIGATION BANNER ─── */}
        {nextProject && (
          <div className="mt-20 pt-12 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-7 sm:p-9 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                  {t("Proyek Selanjutnya", "Next Project")}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white font-heading mt-1">
                  {t(nextProject.name)}
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm mt-1">
                  {nextProject.client || nextProject.category}
                </p>
              </div>

              <Link
                to={`/portfolio/${nextProject.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-amber-500 dark:hover:bg-amber-500 dark:hover:text-white text-xs sm:text-sm font-bold transition-all shadow-md group shrink-0 cursor-pointer"
              >
                <span>{t("Lihat Proyek Berikutnya", "View Next Project")}</span>
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
