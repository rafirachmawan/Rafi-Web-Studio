// src/sections/coffee/CoffeeHero.jsx
// Starbucks Hero Section with Framer Motion animations
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Globe, ShieldCheck } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import bgHero from "../../../assets/AmbienceCoffe.jpg";

const coffee = {
  hero: {
    tagline: "EVERYDAY PREMIUM COFFEE RITUAL",
    title: "To Inspire & Nurture The Human Spirit",
    subtitle:
      "One person, one cup, and one neighborhood at a time. Experience Starbucks' signature crafting and ethically sourced Arabica beans.",
    ctaText: "Explore Our Menu",
  },
  socialMedia: {
    instagram: "https://www.instagram.com/starbucksindonesia/",
    facebook: "https://www.facebook.com/StarbucksIndonesia",
    twitter: "https://twitter.com/SbuxIndonesia",
  },
  certifications: [
    {
      name: "ISO CERTIFIED",
      link: "/about-us/our-heritage/starbucks-in-indonesia",
    },
    {
      name: "HALAL CERTIFIED",
      link: "/about-us/our-heritage/starbucks-in-indonesia",
    },
  ],
};

export function CoffeeHero() {
  const heroRef = useRef(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#0B1512]"
      aria-label="Starbucks Hero Section"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={bgHero}
          alt="Starbucks Reserve Vibe - Premium coffee shop atmosphere"
          className="w-full h-full object-cover opacity-45 scale-105"
          loading="eager"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1512]/90 via-[#0B1512]/70 to-[#0B1512]" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 pt-28 max-w-7xl mx-auto">
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00704A]/30 bg-[#00704A]/10 text-[#D4E9E2] text-xs font-extrabold uppercase tracking-[4px] mb-8"
        >
          <Sparkles size={12} className="text-emerald-400 animate-pulse" />
          {coffee.hero.tagline || "EVERYDAY PREMIUM COFFEE RITUAL"}
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-[1.05] max-w-4xl mx-auto text-white"
        >
          {coffee.hero.title.split("&").map((part, idx) => (
            <span key={idx}>
              {part.trim()}
              {idx < coffee.hero.title.split("&").length - 1 && " & "}
              <br />
            </span>
          ))}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-[#D4E9E2]">
            Spirit
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed"
        >
          {coffee.hero.subtitle}
        </motion.p>

        {/* Social Media & Certifications Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-4 mt-8 text-[10px] text-zinc-500 font-semibold uppercase tracking-wider"
        >
          {coffee.certifications?.map((cert, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <ShieldCheck size={12} className="text-[#00704A]" />
              <a
                href={cert.link}
                className="hover:text-[#00704A] transition-colors"
              >
                {cert.name}
              </a>
            </div>
          ))}

          {coffee.socialMedia?.instagram && (
            <a
              href={coffee.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#00704A] transition-colors"
            >
              <Globe size={12} />
              Instagram
            </a>
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-10"
        >
          <Button
            variant="primary"
            size="lg"
            className="bg-[#00704A] hover:bg-[#00875a] px-10 py-4"
          >
            {coffee.hero.ctaText || "Explore Our Menu"}
          </Button>
        </motion.div>
      </div>

      {/* Cinematic Transition Divider */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-0 left-0 w-full h-[220px] pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1512] to-[#0B1512]" />
      </motion.div>
    </section>
  );
}
