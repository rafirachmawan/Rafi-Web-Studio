// src/features/coffee/components/CoffeeNavigation.jsx
// Starbucks Navigation Component with Language Switcher (ID/EN)

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import { useLanguage } from "../../../context/LanguageContext";
import starbucksLogo from "../../../assets/starbuck/starbuck icon.png";

export function CoffeeNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#menu", label: t("Menu", "Menu") },
    { href: "#coffee", label: t("Keahlian Kopi", "Coffee Mastery") },
    { href: "#rewards", label: t("Rewards", "Rewards") },
    { href: "#dewata", label: t("Dewata Sanctuary", "Dewata Sanctuary") },
    { href: "#responsibility", label: t("Tanggung Jawab", "Responsibility") },
    { href: "#about", label: t("Tentang Kami", "About Us") },
  ];

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Main Navigation"
    >
      {/* Background appears on hover */}
      <div
        className={`w-full border-b border-white/10 backdrop-blur-xl transition-all duration-300 ${
          isHovered ? "bg-[#0B1512]/90" : "bg-transparent"
        }`}
      >
        {/* Centered content container */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-[64px] sm:h-[80px] flex justify-between items-center">
          {/* Logo - Left aligned */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="Starbucks Home"
          >
            <img
              src={starbucksLogo}
              alt="Starbucks Logo"
              className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-lg font-black tracking-[0.25em] font-serif text-[#D4E9E2] transition-colors duration-300">
              STARBUCKS
            </span>
          </a>

          {/* Desktop Navigation - Center aligned */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-zinc-300 hover:text-emerald-400 transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Section: Language Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-4 ml-6">
            {/* Language Switcher Pill */}
            <div className="flex items-center bg-white/10 border border-white/15 rounded-full p-0.5 text-xs font-bold tracking-wider backdrop-blur-md">
              <button
                type="button"
                onClick={() => setLanguage("id")}
                className={`px-3 py-1 rounded-full transition-all duration-300 ${
                  language === "id"
                    ? "bg-[#00704A] text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="Ganti ke Bahasa Indonesia"
                aria-label="Bahasa Indonesia"
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full transition-all duration-300 ${
                  language === "en"
                    ? "bg-[#00704A] text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="Switch to English"
                aria-label="English"
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <a href="#menu">
              <Button
                variant="outline"
                size="md"
                className={`border border-white/20 rounded-full px-5 py-2 transition-all duration-300 font-semibold ${
                  isHovered
                    ? "bg-[#0B1512]/80 backdrop-blur-sm text-[#D4E9E2] hover:bg-[#00704A] hover:text-white hover:border-[#00704A]"
                    : "bg-white/5 text-[#D4E9E2] hover:bg-[#00704A] hover:text-white hover:border-[#00704A]"
                }`}
              >
                {t("Jelajahi Menu", "Explore Menu")}
              </Button>
            </a>
          </div>

          {/* Mobile Right Controls: Language Toggle & Hamburger Menu */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center bg-white/10 border border-white/15 rounded-full p-0.5 text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLanguage("id")}
                className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
                  language === "id" ? "bg-[#00704A] text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
                  language === "en" ? "bg-[#00704A] text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full transition-all duration-300 text-zinc-300 hover:text-emerald-400 ${
                isHovered ? "hover:bg-[#00704A]/10" : "hover:bg-[#00704A]/10"
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden border-t border-white/10 backdrop-blur-xl px-6 py-6 flex flex-col gap-4 animate-fade-in transition-all duration-300 ${
            isHovered ? "bg-[#0B1512]/95" : "bg-[#0B1512]/95"
          }`}
          role="dialog"
          aria-modal="true"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-all duration-300 py-2 rounded-lg hover:bg-[#00704A]/10 px-3 -mx-3"
            >
              {link.label}
            </a>
          ))}

          <a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>
            <Button
              variant="outline"
              fullWidth
              className="border border-transparent bg-[#00704A] text-white hover:bg-[#00704A]/90 transition-all duration-300 rounded-full"
            >
              {t("Jelajahi Menu", "Explore Menu")}
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
