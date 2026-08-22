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

      <div className="relative z-10 flex flex-col items-center">
        {/* TEXT & CTA - CENTERED */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center pb-8 md:pb-12">
          {/* BADGE */}
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400 text-xs font-bold mb-5 shadow-sm group/badge relative overflow-hidden"
          >
            <Zap className="w-3.5 h-3.5 fill-amber-500/20 group-hover:scale-110 transition-transform" /> 
            <span>{t("Startup Digitalisasi Indonesia", "Indonesia Digitalization Startup")}</span>
          </div>

          {/* HEADLINE */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-zinc-900 dark:text-white flex flex-col items-center gap-1 md:gap-1.5 text-center"
          >
            <span className="opacity-90">{t("Transformasi Digital", "Digital Transformation")}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 pb-1 drop-shadow-sm font-black">
              {t("Bisnis Anda.", "Your Business.")}
            </span>
          </h1>
 
          {/* DESC */}
          <p 
            className="mt-5 text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl text-center font-medium"
          >
            {t(
              "GapaiDigital hadir sebagai mitra strategis transformasi digital bisnis Anda. Kami merancang dan mengembangkan solusi teknologi komprehensif—mulai dari Landing Page, Aplikasi Mobile, hingga Sistem Web Custom—yang dirancang khusus untuk mengakselerasi efisiensi dan eskalasi bisnis Anda di era modern.",
              "GapaiDigital is your strategic partner for business digital transformation. We design and develop comprehensive tech solutions—from Landing Pages, Mobile Apps, to Custom Web Systems—tailored to accelerate your business efficiency and scalability in the modern era."
            )}
          </p>

          {/* CTA BUTTONS */}
          <div 
            className="flex flex-col sm:flex-row gap-3 mt-5 md:mt-7 justify-center w-full sm:w-auto"
          >
            <button
              onClick={() => openConsultation()}
              className="group/btn relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-amber-500/15 active:scale-95 overflow-hidden flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t("Konsultasi Gratis", "Free Consultation")} <Sparkles className="w-3.5 h-3.5" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            </button>

 
            <a
              href="#real-projects"
              className="group/btn2 bg-white dark:bg-transparent border border-zinc-200 dark:border-white/10 px-6 py-2.5 rounded-full text-xs md:text-sm font-bold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-300 dark:hover:bg-white/5 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 shadow-sm dark:shadow-none"
            >
              {t("Lihat Portofolio", "View Portfolio")}
            </a>
          </div>
        </div>

        {/* CINEMATIC VIDEO SHOWCASE - SHRUNK TO max-w-3xl */}
        <div className="relative w-full max-w-3xl mx-auto mt-4">
          <div className="relative rounded-2xl md:rounded-[28px] border border-zinc-200/80 dark:border-white/10 bg-zinc-950 group shadow-[0_30px_80px_-15px_rgba(0,0,0,0.25)] dark:shadow-none">
            {/* ASPECT RATIO HOLDER */}
            <div className="aspect-[16/9] w-full rounded-2xl md:rounded-[32px] overflow-hidden">
              {videoSrc ? (
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-all duration-700"
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none rounded-2xl md:rounded-[32px]" />

            {/* Floating Badge 1 - Left */}
            <div 
              className="absolute -top-6 -left-6 bg-white/70 dark:bg-zinc-900/90 border border-white/60 dark:border-white/10 p-4 rounded-2xl items-center gap-3.5 shadow-xl group/badge1 cursor-default hidden lg:flex"
            >
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-amber-500/30 group-hover/badge1:scale-110 transition-transform">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-zinc-900 dark:text-white font-black text-sm">Rating 5.0</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider">{t("Klien Puas", "Satisfied Clients")}</p>
              </div>
            </div>
 
            {/* Floating Badge 2 - Right */}
            <div 
              className="absolute -bottom-6 -right-6 bg-white/70 dark:bg-zinc-900/90 border border-white/60 dark:border-white/10 p-4 rounded-2xl items-center gap-3.5 shadow-xl group/badge2 cursor-default hidden lg:flex"
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 group-hover/badge2:scale-110 transition-transform">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-zinc-900 dark:text-white font-black text-sm">{t("100+ Project", "100+ Projects")}</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider">{t("Tepat Waktu", "On Time")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
