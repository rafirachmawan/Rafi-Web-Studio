import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function RentalNavbar({ waLink }) {
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
        ? "bg-[#0b0b0e]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <h1 className={`font-black text-xl tracking-tighter transition-colors ${
            isScrolled ? "text-red-500" : "text-white drop-shadow-lg"
          }`}>
            RENTAL<span className="text-white">JAYA</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex gap-8 text-xs font-bold uppercase tracking-wider ${
          isScrolled ? "text-zinc-400" : "text-white/80 drop-shadow-lg"
        }`}>
          <a href="#inventory" className="hover:text-red-500 transition-colors">Inventory</a>
          <a href="#features" className="hover:text-red-500 transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-red-500 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <a
          href={waLink}
          className={`px-6 py-2.5 rounded-lg font-black text-xs uppercase tracking-wider transition-all ${
            isScrolled
              ? "bg-red-500 text-black hover:bg-red-600 shadow-lg shadow-red-500/30"
              : "bg-red-500 text-black hover:bg-red-600 drop-shadow-lg"
          }`}
        >
          Book Now
        </a>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-red-500 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0b0b0e]/98 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
          <a href="#inventory" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 font-bold text-sm uppercase tracking-wider py-2 hover:text-red-500">Inventory</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 font-bold text-sm uppercase tracking-wider py-2 hover:text-red-500">Features</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 font-bold text-sm uppercase tracking-wider py-2 hover:text-red-500">Testimonials</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 font-bold text-sm uppercase tracking-wider py-2 hover:text-red-500">Contact</a>
          <a
            href={waLink}
            className="mt-2 bg-red-500 text-black text-center font-black text-xs uppercase tracking-wider py-3 rounded-lg"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
