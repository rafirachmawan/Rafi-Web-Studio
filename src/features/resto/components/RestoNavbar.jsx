import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, UtensilsCrossed, Clock, MapPin } from "lucide-react";
import { restoInfo } from "../data/resto";

export function RestoNavbar({ waLink }) {
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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-100/60 py-3"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={restoInfo.logo}
            alt="Mie Gacoan Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 leading-none group-hover:text-violet-700 transition-colors">
              MIE GACOAN
            </span>
            <span className="text-[10px] font-semibold text-violet-600 tracking-wider uppercase">
              Mojokerto • 24 Jam
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-700">
          <a href="#menu" className="hover:text-violet-600 transition-colors flex items-center gap-1.5">
            <UtensilsCrossed className="w-3.5 h-3.5 text-violet-500" />
            Menu
          </a>
          <a href="#features" className="hover:text-violet-600 transition-colors">
            Keunggulan
          </a>
          <a href="#info" className="hover:text-violet-600 transition-colors flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-violet-500" />
            Jam & Lokasi
          </a>
          <a href="#cta" className="hover:text-violet-600 transition-colors">
            Reservasi
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={waLink || restoInfo.waOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-violet-500/25 hover:shadow-lg hover:shadow-violet-600/30 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order WhatsApp</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900 p-2 rounded-lg hover:bg-violet-50 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-violet-600" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-purple-100 px-6 py-5 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2">
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-800 font-bold text-sm uppercase tracking-wider py-2 hover:text-violet-600 flex items-center gap-2"
          >
            <UtensilsCrossed className="w-4 h-4 text-violet-600" />
            Menu (46 Item)
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-800 font-bold text-sm uppercase tracking-wider py-2 hover:text-violet-600"
          >
            Keunggulan
          </a>
          <a
            href="#info"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-800 font-bold text-sm uppercase tracking-wider py-2 hover:text-violet-600 flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-violet-600" />
            Jam & Lokasi
          </a>
          <a
            href="#cta"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-800 font-bold text-sm uppercase tracking-wider py-2 hover:text-violet-600"
          >
            Reservasi & Kontak
          </a>
          <a
            href={waLink || restoInfo.waOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-violet-600 text-white text-center font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl hover:bg-violet-700 shadow-lg shadow-violet-500/25 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order WhatsApp Sekarang</span>
          </a>
        </div>
      )}
    </nav>
  );
}
