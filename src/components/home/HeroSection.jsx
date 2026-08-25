import { useEffect, useRef, useState } from "react";
import heroVideo from "../../assets/Video.mp4";
import { Star, CheckCircle, Zap, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useConsultation } from "../../context/ConsultationContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const { openConsultation } = useConsultation();
  const containerRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile or has small screen/touch screen
    const checkMobile = () => {
      const mobile =
        window.innerWidth < 768 ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      setIsMobile(mobile);

      // ONLY load video source on DESKTOP (non-mobile) to save bandwidth & memory on mobile!
      if (!mobile) {
        setVideoSrc(heroVideo);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 pt-6 md:pt-10 pb-16 md:pb-24 overflow-hidden bg-transparent"
    >
      {/* FLOATING BLOBS — hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 dark:bg-amber-500/5 blur-[100px] rounded-full"
          style={{ animation: "blob-float-1 12s ease-in-out infinite", willChange: "transform" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 dark:bg-orange-500/5 blur-[100px] rounded-full"
          style={{ animation: "blob-float-2 15s ease-in-out infinite", willChange: "transform" }}
        />
        <style>{`
          @keyframes blob-float-1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,15px) scale(1.1); } }
          @keyframes blob-float-2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-15px,-30px) scale(1.05); } }
        `}</style>

        {/* GIANT DECORATIVE BACKGROUND TEXT — desktop only */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-0 overflow-hidden pointer-events-none">
          <span
            className="text-[5rem] sm:text-[8rem] md:text-[11rem] lg:text-[14rem] font-black uppercase tracking-tighter leading-none select-none text-transparent whitespace-nowrap"
            style={{
              WebkitTextStroke: "1px",
              WebkitTextStrokeColor: "rgba(245,158,11,0.07)",
              transform: "translateY(-5%)",
            }}
          >
            GAPAI
          </span>
          <span
            className="text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-[0.2em] leading-none select-none text-transparent whitespace-nowrap"
            style={{
              WebkitTextStroke: "1px",
              WebkitTextStrokeColor: "rgba(245,158,11,0.05)",
              transform: "translateY(5%)",
            }}
          >
            DIGITAL
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* TEXT & CTA - CENTERED */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center pb-8 md:pb-12">
          {/* BADGE */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-md"
          >
            <Zap className="w-4 h-4 text-amber-500 animate-pulse" /> 
            <span>{t("Mitra Digitalisasi Bisnis Terpercaya", "Trusted Business Digitalization Partner")}</span>
          </div>

          {/* HEADLINE */}
          <h1 
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-zinc-900 dark:text-white max-w-3xl text-center font-heading"
          >
            <span>{t("Solusi Digital Profesional", "Professional Digital Solutions")} </span>
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 font-extrabold">
              {t("Untuk Mengembangkan Bisnis Anda.", "To Scale Your Business.")}
            </span>
          </h1>
 
          {/* DESC */}
          <p 
            className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl text-center font-normal"
          >
            {t(
              "GapaiDigital membantu bisnis Anda tampil lebih profesional dan modern. Kami merancang Website, Aplikasi Mobile, dan Sistem Web Kustom yang cepat, responsif, serta dirancang khusus untuk meningkatkan kredibilitas dan penjualan Anda.",
              "GapaiDigital helps your business look more professional and modern. We design fast, responsive Websites, Mobile Apps, and Custom Web Systems tailored to boost your credibility and sales."
            )}
          </p>

          {/* CTA BUTTONS */}
          <div 
            className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 justify-center w-full sm:w-auto"
          >
            <button
              onClick={() => openConsultation()}
              className="group/btn relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-white px-7 py-3 rounded-full text-xs md:text-sm font-extrabold transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-amber-500/20 active:scale-95 overflow-hidden flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t("Konsultasi Gratis Sekarang", "Free Consultation Now")} <Sparkles className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            </button>

            <a
              href="#real-projects"
              className="group/btn2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-white/10 px-7 py-3 rounded-full text-xs md:text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/10 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto"
            >
              {t("Lihat Portofolio", "View Portfolio")}
            </a>
          </div>
        </div>

        {/* CINEMATIC VIDEO SHOWCASE */}
        <div className="relative w-full max-w-3xl mx-auto mt-2">
          <div className="relative rounded-2xl md:rounded-[28px] border border-zinc-200/80 dark:border-white/10 bg-zinc-950 group shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] dark:shadow-none">
            {/* ASPECT RATIO HOLDER */}
            <div className="aspect-[16/9] w-full rounded-2xl md:rounded-[28px] overflow-hidden">
              {videoSrc ? (
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-90 transition-all duration-700"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 flex items-center justify-center px-6">
                  {isMobile ? (
                    /* Mobile: informative message */
                    <div className="text-center max-w-xs">
                      <div className="w-12 h-12 bg-amber-500/15 border border-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <Sparkles className="w-6 h-6 text-amber-400" />
                      </div>
                      <p className="text-white font-bold text-xs md:text-sm mb-1">Preview Demo Video</p>
                      <p className="text-zinc-400 text-[10px] md:text-[11px] leading-relaxed">
                        {t(
                          "Buka di laptop atau PC untuk menonton preview video demo interaktif kami.",
                          "Open on a laptop or PC to watch our interactive demo preview video."
                        )}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold px-3 py-1 rounded-full">
                        <span>🖥️</span>
                        <span>{t("Tersedia di Desktop", "Available on Desktop")}</span>
                      </div>
                    </div>
                  ) : (
                    /* Desktop: loading state */
                    <div className="text-center">
                      <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mx-auto mb-3 animate-pulse">
                        <Sparkles className="w-6 h-6 text-zinc-600" />
                      </div>
                      <span className="text-zinc-500 text-xs font-medium">Loading preview...</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none rounded-2xl md:rounded-[28px]" />

            {/* Floating Badge 1 - Left */}
            <div 
              className="absolute -top-5 -left-4 sm:-left-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/80 dark:border-white/10 p-3.5 rounded-2xl items-center gap-3 shadow-xl group/badge1 cursor-default hidden lg:flex"
            >
              <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-amber-500/30 group-hover/badge1:scale-105 transition-transform">
                <Star className="w-4.5 h-4.5 fill-current" />
              </div>
              <div>
                <p className="text-zinc-900 dark:text-white font-extrabold text-xs sm:text-sm">{t("Rating 5.0 / 5.0", "5.0 / 5.0 Rating")}</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider">{t("Klien Puas & Terpercaya", "Satisfied Clients")}</p>
              </div>
            </div>
 
            {/* Floating Badge 2 - Right */}
            <div 
              className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/80 dark:border-white/10 p-3.5 rounded-2xl items-center gap-3 shadow-xl group/badge2 cursor-default hidden lg:flex"
            >
              <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-emerald-500/30 group-hover/badge2:scale-105 transition-transform">
                <CheckCircle className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-zinc-900 dark:text-white font-extrabold text-xs sm:text-sm">{t("100+ Proyek Selesai", "100+ Delivered Projects")}</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider">{t("Tepat Waktu & Bergaransi", "On Time & Guaranteed")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
