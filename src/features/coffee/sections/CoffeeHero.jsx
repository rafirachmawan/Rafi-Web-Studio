// src/features/coffee/sections/CoffeeHero.jsx
// Starbucks Hero Section — smooth staggered entrance after splash screen
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Globe, ShieldCheck } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import { useLanguage } from "../../../context/LanguageContext";
import bgHero from "../../../assets/AmbienceCoffe.jpg";

export function CoffeeHero() {
  const heroRef = useRef(null);
  const { t } = useLanguage();

  // Wait until splash screen is gone, then start animations
  const [startAnim, setStartAnim] = useState(false);
  useEffect(() => {
    // Splash screen lasts ~1800ms + 400ms exit = ~2200ms
    // Wait a bit extra so the animation starts after splash fully fades out
    const timer = setTimeout(() => setStartAnim(true), 2300);
    return () => clearTimeout(timer);
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const bgOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Animation helper
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 35 },
    animate: startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] overflow-hidden flex items-center justify-center bg-[#0B1512] py-20 sm:py-24"
      aria-label="Starbucks Hero Section"
    >
      {/* Background Image with Parallax + Breathing Zoom */}
      <motion.div
        style={{ y: y1, opacity: bgOpacity }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={bgHero}
          alt="Starbucks Reserve Vibe - Premium coffee shop atmosphere"
          className="w-full h-full object-cover opacity-55"
          loading="eager"
          style={{
            animation: "heroBreathZoom 18s ease-in-out infinite alternate",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1512]/80 via-[#0B1512]/60 to-[#0B1512]" />
      </motion.div>

      {/* Keyframes for breathing zoom */}
      <style>{`
        @keyframes heroBreathZoom {
          0%   { transform: scale(1);    }
          100% { transform: scale(1.15); }
        }
      `}</style>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Subtitle Badge */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[#00704A]/30 bg-[#00704A]/10 text-[#D4E9E2] text-[10px] sm:text-xs font-extrabold uppercase tracking-[2px] sm:tracking-[4px] mb-4 sm:mb-8"
        >
          <Sparkles size={12} className="text-emerald-400 animate-pulse" />
          {t("RITUAL KOPI PREMIUM SETIAP HARI", "EVERYDAY PREMIUM COFFEE RITUAL")}
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-[1.1] max-w-4xl mx-auto text-white"
        >
          {t("Menginspirasi & Memupuk", "To Inspire & Nurture The")}
          <br />
          {t("Semangat ", "Human ")}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-[#D4E9E2]">
            {t("Jiwa", "Spirit")}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp(0.3)}
          className="mt-4 sm:mt-6 text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed px-2 sm:px-0"
        >
          {t(
            "Satu orang, satu cangkir, dan satu lingkungan di setiap saat. Nikmati racikan kopi khas Starbucks dengan biji Arabika pilihan yang dipanen secara etis.",
            "One person, one cup, and one neighborhood at a time. Experience Starbucks' signature crafting and ethically sourced Arabica beans."
          )}
        </motion.p>

        {/* Social Media & Certifications Badges */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex justify-center items-center flex-wrap gap-3 sm:gap-4 mt-5 sm:mt-8 text-[9px] sm:text-[10px] text-zinc-400 font-semibold uppercase tracking-wider"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-emerald-400" />
            <span>{t("BERSERTIFIKAT ISO", "ISO CERTIFIED")}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-emerald-400" />
            <span>{t("BERSERTIFIKAT HALAL", "HALAL CERTIFIED")}</span>
          </div>

          <a
            href="https://www.instagram.com/starbucksindonesia/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <Globe size={13} />
            <span>Instagram</span>
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.55)}
          className="flex justify-center mt-6 sm:mt-10"
        >
          <a href="#menu">
            <Button
              variant="primary"
              size="lg"
              className="bg-[#00704A] hover:bg-[#00875a] px-8 sm:px-10 py-3.5 sm:py-4 font-bold rounded-full shadow-lg shadow-[#00704A]/30 text-sm sm:text-base"
            >
              {t("Jelajahi Menu Kami", "Explore Our Menu")}
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Cinematic Transition Divider */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute bottom-0 left-0 w-full h-[220px] pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1512] to-[#0B1512]" />
      </motion.div>
    </section>
  );
}
