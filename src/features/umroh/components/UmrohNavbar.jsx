import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Star } from "lucide-react";

export function UmrohNavbar({ waLink }) {
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
          ? "bg-[#fdfbf7]/90 backdrop-blur-xl border-b border-orange-900/10 py-4 shadow-sm" 
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
          <div className="w-10 h-10 rounded-full bg-orange-800 flex items-center justify-center text-amber-400 shadow-lg shadow-orange-900/20">
            <Star className="w-5 h-5 fill-current" />
          </div>
          <h1 className="text-2xl font-black tracking-tight text-orange-950">
            Jabal Noor<span className="text-amber-500">.official</span>
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-stone-600">
          <a href="#keunggulan" className="hover:text-orange-700 transition-colors">Keunggulan</a>
          <a href="#paket" className="hover:text-orange-700 transition-colors">Paket Umroh</a>
          <a href="#galeri" className="hover:text-orange-700 transition-colors">Galeri Pemberangkatan</a>
          <a href="#testimoni" className="hover:text-orange-700 transition-colors">Testimoni</a>
        </div>

        {/* CTA Button */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          href={waLink}
          className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all hover:-translate-y-0.5 active:translate-y-0 ${
            isScrolled
              ? "bg-orange-800 text-amber-400 hover:bg-orange-900 hover:shadow-lg hover:shadow-orange-900/30"
              : "bg-orange-800 text-amber-400 hover:bg-orange-900 drop-shadow-lg"
          }`}
        >
          Konsultasi Gratis
        </motion.a>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 text-orange-950"
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
            className="md:hidden absolute top-0 left-0 w-full bg-[#fdfbf7] flex flex-col pt-24 px-6 z-40 border-b border-stone-200"
          >
            <div className="flex flex-col gap-6 text-xl font-bold text-center">
              <a href="#keunggulan" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-orange-700 pb-4 border-b border-stone-100">Keunggulan Kami</a>
              <a href="#paket" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-orange-700 pb-4 border-b border-stone-100">Paket Umroh</a>
              <a href="#testimoni" onClick={() => setMobileMenuOpen(false)} className="text-stone-600 hover:text-orange-700 pb-4 border-b border-stone-100">Testimoni Jamaah</a>
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-2 bg-orange-800 text-amber-400 px-5 py-4 rounded-xl font-bold mt-4 shadow-lg shadow-orange-900/20"
              >
                <Phone className="w-5 h-5" /> Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
