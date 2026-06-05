import { useEffect, useState, useRef } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: t("Home", "Home"), href: "#home" },
    { label: t("Project", "Projects"), href: "#real-projects" },
    { label: t("Demo Template", "Demo Catalog"), href: "#demo" },
    { label: t("Proses", "Process"), href: "#proses" },
    { label: t("Harga", "Pricing"), href: "#harga" },
    { label: t("Testimoni", "Testimonials"), href: "#testimoni" },
    { label: t("Contact", "Contact"), href: "#contact" }
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Offset by 150px to account for the navbar and scroll padding
          if (rect.top <= 150) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={navRef} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl flex flex-col gap-2">
      {/* MAIN BAR */}
      <div className="backdrop-blur-xl bg-white/70 dark:bg-zinc-950/70 border border-black/10 dark:border-white/10 rounded-full px-4 md:px-6 py-3 flex justify-between items-center shadow-lg transition-colors duration-300">
        <h1 className="font-heading font-extrabold text-base tracking-tight text-black dark:text-white">
          Gapai<span className="text-amber-500">Digital</span>
        </h1>

        {/* MENU */}
        <div className="hidden md:flex gap-6 text-sm text-gray-700 dark:text-gray-300 font-semibold">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className={`transition ${
                activeSection === link.href.substring(1) 
                  ? "text-amber-500" 
                  : "hover:text-amber-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2">
          {/* LANGUAGE TOGGLE */}
          <button
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
            className="w-10 h-8 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.05] flex items-center justify-center text-[10px] font-black tracking-wider text-zinc-700 dark:text-zinc-300 hover:scale-105 transition cursor-pointer"
            title={language === "id" ? "Ganti ke Bahasa Inggris" : "Switch to Indonesian"}
          >
            {language === "id" ? "ID" : "EN"}
          </button>

          {/* THEME TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-14 h-8 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.05] dark:bg-white/[0.05] flex items-center px-1 transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            <motion.div
              layout
              className="w-6 h-6 rounded-full bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center z-10"
              animate={{ x: darkMode ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {darkMode ? (
                <Moon size={14} className="text-zinc-300" />
              ) : (
                <Sun size={14} className="text-amber-500" />
              )}
            </motion.div>
            {/* Background Icons */}
            <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
              <Sun size={12} className="text-amber-500/50" />
              <Moon size={12} className="text-zinc-500/50" />
            </div>
          </button>

          {/* HAMBURGER TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.05] flex items-center justify-center text-zinc-700 dark:text-zinc-300 md:hidden transition hover:scale-105"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-full backdrop-blur-xl bg-white/95 dark:bg-zinc-950/95 border border-black/10 dark:border-white/10 rounded-3xl p-4 shadow-xl flex flex-col gap-1 z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition ${
                  activeSection === link.href.substring(1)
                    ? "text-amber-500 bg-amber-500/10 dark:text-amber-400 dark:bg-amber-500/10"
                    : "text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
