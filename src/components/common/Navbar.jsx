import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
      <div className="backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-4 md:px-6 py-3 flex justify-between items-center shadow-lg transition-colors duration-300">
        <h1 className="font-heading font-extrabold text-base tracking-tight text-black dark:text-white">
          Gapai<span className="text-amber-500">Digital</span>
        </h1>

        {/* MENU */}
        <div className="hidden md:flex gap-6 text-sm text-gray-700 dark:text-gray-300">
          <a href="#home" className="hover:text-amber-400 transition">
            Home
          </a>

          <a href="#demo" className="hover:text-amber-400 transition">
            Demo
          </a>

          <a href="#proses" className="hover:text-amber-400 transition">
            Proses
          </a>

          <a href="#harga" className="hover:text-amber-400 transition">
            Harga
          </a>

          <a href="#testimoni" className="hover:text-amber-400 transition">
            Testimoni
          </a>

          <a href="#contact" className="hover:text-amber-400 transition">
            Contact
          </a>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3">
          {/* THEME TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.05] flex items-center justify-center text-lg transition hover:scale-105"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* CTA BUTTON */}
          <button className="bg-amber-500 hover:bg-amber-400 text-black px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition">
            Konsultasi
          </button>
        </div>
      </div>
    </div>
  );
}
