import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "../../assets/Video.mp4";
import { Star, CheckCircle, Zap, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile / touch device
    const touch = navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(touch);

    if (!touch) {
      // Only load video on desktop
      const timer = setTimeout(() => {
        setVideoSrc(heroVideo);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Mouse Glow Position (desktop only)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden border border-zinc-200/50 dark:border-white/5 rounded-[32px] md:rounded-[40px] p-5 sm:p-6 md:p-10 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-xl mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-none transition-colors duration-500"
    >
      {/* MOUSE GLOW — desktop only */}
      {!isMobile && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[32px] md:rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: mousePos.x
              ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245,158,11,0.04), transparent 80%)`
              : "none",
          }}
        />
      )}

      {/* FLOATING BLOBS — simplified on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 dark:bg-amber-500/5 blur-[100px] rounded-full"
          style={isMobile ? {} : { animation: "blob-float-1 12s ease-in-out infinite", willChange: "transform" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 dark:bg-orange-500/5 blur-[100px] rounded-full"
          style={isMobile ? {} : { animation: "blob-float-2 15s ease-in-out infinite", willChange: "transform" }}
        />
        <style>{`
          @keyframes blob-float-1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,15px) scale(1.1); } }
          @keyframes blob-float-2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-15px,-30px) scale(1.05); } }
        `}</style>

        {/* GIANT DECORATIVE BACKGROUND TEXT */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-0 overflow-hidden pointer-events-none">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-[5rem] sm:text-[8rem] md:text-[11rem] lg:text-[14rem] font-black uppercase tracking-tighter leading-none select-none text-transparent whitespace-nowrap"
            style={{
              WebkitTextStroke: "1px",
              WebkitTextStrokeColor: "rgba(245,158,11,0.07)",
              transform: "translateY(-5%)",
            }}
          >
            GAPAI
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-[0.2em] leading-none select-none text-transparent whitespace-nowrap"
            style={{
              WebkitTextStroke: "1px",
              WebkitTextStrokeColor: "rgba(245,158,11,0.05)",
              transform: "translateY(5%)",
            }}
          >
            DIGITAL
          </motion.span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* TEXT & CTA - CENTERED */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center pb-8 md:pb-12">
          {/* BADGE */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400 text-xs font-bold mb-5 shadow-sm group/badge relative overflow-hidden"
          >
            <Zap className="w-3.5 h-3.5 fill-amber-500/20 group-hover:scale-110 transition-transform" /> 
            <span>{t("Startup Digitalisasi Indonesia", "Indonesia Digitalization Startup")}</span>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-black tracking-tight leading-[1.1] text-zinc-900 dark:text-white flex flex-col items-center gap-1 text-center"
          >
            <span className="opacity-90">{t("Digitalisasi Apapun", "Digitalize Anything In")}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 pb-1 drop-shadow-sm font-black">
              {t("Bisnis Anda.", "Your Business.")}
            </span>
          </motion.h1>
 
          {/* DESC */}
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xs md:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl text-center font-medium"
          >
            {t(
              "GapaiDigital adalah startup digitalisasi modern yang membantu membangun Landing Page, Aplikasi Mobile, hingga Sistem Web Custom untuk mempercepat pertumbuhan bisnis Anda.",
              "GapaiDigital is a modern digitalization startup that helps build Landing Pages, Mobile Apps, and Custom Web Systems to accelerate your business growth."
            )}
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mt-5 md:mt-7 justify-center w-full sm:w-auto"
          >
            <a
              href="https://wa.me/6285707185783?text=Halo%20saya%20ingin%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-amber-500/15 active:scale-95 overflow-hidden flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t("Konsultasi Gratis", "Free Consultation")} <Sparkles className="w-3.5 h-3.5" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            </a>
 
            <a
              href="#real-projects"
              className="group/btn2 bg-white dark:bg-transparent border border-zinc-200 dark:border-white/10 px-6 py-2.5 rounded-full text-xs md:text-sm font-bold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-300 dark:hover:bg-white/5 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 shadow-sm dark:shadow-none"
            >
              {t("Lihat Portofolio", "View Portfolio")}
            </a>
          </motion.div>
        </div>

        {/* CINEMATIC VIDEO SHOWCASE - SHRUNK TO max-w-3xl */}
        <div className="relative w-full max-w-3xl mx-auto mt-4">
          {/* Light Mode Soft Glow Behind Image */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-orange-200/40 via-amber-200/20 to-orange-100/40 blur-[80px] dark:opacity-0 pointer-events-none rounded-[100px] transition-opacity duration-700" />
          
          {/* 3D tilt only on desktop */}
          <div 
            style={isMobile ? {} : { transform: "perspective(1000px)" }}
            className="relative rounded-2xl md:rounded-[28px] border border-zinc-200/80 dark:border-white/10 bg-zinc-950 group shadow-[0_30px_80px_-15px_rgba(0,0,0,0.25)] dark:shadow-none"
          >
            {/* ASPECT RATIO HOLDER */}
            <div className="aspect-[16/9] w-full rounded-2xl md:rounded-[32px] overflow-hidden">
              {videoSrc ? (
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-all duration-1000"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-8 h-8 text-amber-400" />
                    </div>
                    <span className="text-zinc-500 text-xs font-medium">{isMobile ? "GapaiDigital" : "Loading preview..."}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none rounded-2xl md:rounded-[32px]" />

            {/* Floating Badge 1 - Left */}
            <motion.div 
              style={{ transform: "translateZ(40px)" }}
              animate={isMobile ? {} : { y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white/70 dark:bg-zinc-900/90 backdrop-blur-2xl border border-white/60 dark:border-white/10 p-4 rounded-2xl items-center gap-3.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-xl group/badge1 cursor-default hidden lg:flex ring-1 ring-black/5 dark:ring-0"
            >
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-amber-500/30 group-hover/badge1:scale-110 transition-transform">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-zinc-900 dark:text-white font-black text-sm">Rating 5.0</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider">{t("Klien Puas", "Satisfied Clients")}</p>
              </div>
            </motion.div>
 
            {/* Floating Badge 2 - Right */}
            <motion.div 
              style={{ transform: "translateZ(30px)" }}
              animate={isMobile ? {} : { y: [8, -8, 8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white/70 dark:bg-zinc-900/90 backdrop-blur-2xl border border-white/60 dark:border-white/10 p-4 rounded-2xl items-center gap-3.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-xl group/badge2 cursor-default hidden lg:flex ring-1 ring-black/5 dark:ring-0"
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 group-hover/badge2:scale-110 transition-transform">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-zinc-900 dark:text-white font-black text-sm">{t("100+ Project", "100+ Projects")}</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider">{t("Tepat Waktu", "On Time")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
