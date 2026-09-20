import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";

export function SekolahNavbar({ phone }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-violet-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            Sekolah Masa Depan
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#program" className="hover:text-teal-400 transition-colors">Program</a>
          <a href="#alur" className="hover:text-teal-400 transition-colors">Pendaftaran</a>
          <a href="#mentor" className="hover:text-teal-400 transition-colors">Mentor</a>
          <a href="#galeri" className="hover:text-teal-400 transition-colors">Galeri</a>
        </div>

        {/* CTA Button */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          href={`https://wa.me/${phone}`}
          className="hidden md:flex items-center gap-2 bg-white text-zinc-950 px-6 py-2.5 rounded-full font-bold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
        >
          Daftar Sekarang
        </motion.a>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-300 hover:text-white relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 w-full bg-[#09090b] flex flex-col pt-24 px-6 z-40 border-b border-white/5"
          >
            <div className="flex flex-col gap-6 text-xl font-bold">
              <a href="#program" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white border-b border-white/5 pb-4">Program Unggulan</a>
              <a href="#alur" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white border-b border-white/5 pb-4">Alur Pendaftaran</a>
              <a href="#mentor" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white border-b border-white/5 pb-4">Mentor</a>
              <a href="#galeri" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white border-b border-white/5 pb-4">Galeri Kegiatan</a>
              <a
                href={`https://wa.me/${phone}`}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-400 to-violet-500 text-white px-5 py-4 rounded-xl font-bold mt-4"
              >
                Daftar Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
