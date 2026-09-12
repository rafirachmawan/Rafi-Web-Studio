import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Menu, X, Truck } from "lucide-react";
// Using direct image URL to avoid path issues
const LOGO_URL = "/assets/loundry/logoLoundry.png";
let logoLoundry = null; // Will be replaced with actual import if available

export function LaundryNavbar({ waLink }) {
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
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-4 shadow-sm" 
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
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md p-1 border border-slate-100">
            <img src={LOGO_URL || undefined} alt="Aio Laundry" className="w-full h-full object-contain" onError={(e) => e.target.style.display='none'} />
            <span className="text-lg font-bold text-blue-600">AL</span> {/* Fallback if image fails */}
          </div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">
            Aio<span className="text-blue-600">Laundry</span>
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <a href="#layanan" className="hover:text-blue-600 transition-colors">Layanan</a>
          <a href="#tracking" className="hover:text-blue-600 transition-colors">Cek Resi</a>
          <a href="#keunggulan" className="hover:text-blue-600 transition-colors">Keunggulan</a>
        </div>

        {/* CTA Button */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          href={waLink}
          className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all hover:-translate-y-0.5 active:translate-y-0 ${
            isScrolled
              ? "bg-slate-900 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
              : "bg-slate-900 text-white hover:bg-blue-600 drop-shadow-lg"
          }`}
        >
          Pick-up Sekarang
        </motion.a>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 relative z-50"
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
            className="md:hidden absolute top-0 left-0 w-full bg-white/95 backdrop-blur-xl flex flex-col pt-24 px-6 z-40 border-b border-slate-200"
          >
            <div className="flex flex-col gap-6 text-xl font-bold text-center">
              <a href="#layanan" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 pb-4 border-b border-slate-100">Layanan</a>
              <a href="#tracking" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 pb-4 border-b border-slate-100">Cek Status Cucian</a>
              <a href="#keunggulan" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 pb-4 border-b border-slate-100">Keunggulan Kami</a>
              <a
                href={waLink}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-4 rounded-xl font-bold mt-4 shadow-lg shadow-blue-500/30"
              >
                <Truck className="w-5 h-5" /> Minta Penjemputan
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
