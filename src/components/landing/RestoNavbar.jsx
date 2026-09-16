import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoMieGacoan from "../../assets/mieGacoan/logoMieGacoan.png";

export function RestoNavbar({ waLink }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white shadow-md" 
        : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logoMieGacoan} alt="Mie Gacoan" className="h-10 w-auto object-contain" />
          <span className="font-black text-lg tracking-wide text-slate-900">
            MIE GACOAN
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-wider text-slate-700">
          <a href="#menu" className="hover:text-[#db2777] transition-colors">Menu</a>
          <a href="#customizer" className="hover:text-[#db2777] transition-colors">Custom Order</a>
          <a href="#locations" className="hover:text-[#db2777] transition-colors">Locations</a>
          <a href="#franchise" className="hover:text-[#db2777] transition-colors">Franchise</a>
        </div>

        {/* CTA Button */}
        <a
          href={waLink}
          className="px-6 py-2.5 rounded-xl bg-[#db2777] text-white font-black text-xs uppercase tracking-wider transition-all hover:bg-[#be185d] shadow-md hover:shadow-lg shadow-pink-500/30"
        >
          Order Now
        </a>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white p-6 flex flex-col gap-4 md:hidden shadow-xl">
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-bold text-sm uppercase tracking-wider py-2 hover:text-[#db2777]">Menu</a>
          <a href="#customizer" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-bold text-sm uppercase tracking-wider py-2 hover:text-[#db2777]">Custom Order</a>
          <a href="#locations" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-bold text-sm uppercase tracking-wider py-2 hover:text-[#db2777]">Locations</a>
          <a href="#franchise" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-bold text-sm uppercase tracking-wider py-2 hover:text-[#db2777]">Franchise</a>
          <a
            href={waLink}
            className="mt-2 bg-[#db2777] text-white text-center font-black text-xs uppercase tracking-wider py-3 rounded-xl hover:bg-[#be185d] shadow-lg shadow-pink-500/30"
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
}
