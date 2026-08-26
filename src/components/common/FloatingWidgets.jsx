import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useConsultation } from "../../context/ConsultationContext";
import { useLanguage } from "../../context/LanguageContext";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { openConsultation } = useConsultation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 rounded-full bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 shadow-lg hover:shadow-xl hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 dark:hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Floating WhatsApp CTA */}
      <button
        onClick={() => openConsultation("Floating Widget")}
        aria-label="Chat WhatsApp"
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <MessageCircle size={20} className="fill-white/20 animate-pulse" />
        <span className="text-xs font-extrabold tracking-wide hidden sm:inline">
          {t("Konsultasi WA", "WA Consultation")}
        </span>
        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-zinc-900 text-white text-[11px] font-bold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
          {t("Chat WhatsApp Gratis", "Free WhatsApp Chat")}
        </span>
      </button>
    </div>
  );
}
