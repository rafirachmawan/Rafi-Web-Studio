// src/components/landing/LandingNavbar.jsx
// Clean navbar for multiple landing pages with hover effect

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import yamahaIcon from "../../assets/Yamaha/iconyamaha.png";

export function LandingNavbar({ category = "rental", waLink }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Different configurations based on category
  const getConfig = () => {
    switch (category) {
      case "hotel":
        return {
          logo: (
            <div className="flex items-center gap-2">
              <span className="text-purple-600 font-black text-xl">CROWN VICTORIA</span>
              <span className="text-zinc-900 text-xs font-semibold tracking-widest uppercase hidden sm:block">
                HOTEL
              </span>
            </div>
          ),
          navLinks: [
            { href: "#rooms", label: "Rooms" },
            { href: "#facilities", label: "Facilities" },
            { href: "#gallery", label: "Gallery" },
            { href: "#reviews", label: "Reviews" },
          ],
          ctaText: "Book Now",
          textColor: "text-zinc-800",
          hoverColor: "hover:text-purple-600",
          buttonBg: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800",
        };

      case "rental":
        return {
          logo: (
            <div className="flex items-center gap-2">
              <img
                src={yamahaIcon}
                alt="Yamaha Logo"
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-zinc-900 font-black text-sm tracking-widest uppercase">
                  YAMAHA
                </span>
                <span className="text-zinc-600 text-[10px] font-medium tracking-wide uppercase hidden sm:block">
                  Motor Indonesia
                </span>
              </div>
            </div>
          ),
          navLinks: [
            { href: "#products", label: "Products" },
            { href: "#service", label: "Service" },
            { href: "#dealers", label: "Dealers" },
            { href: "#racing", label: "Racing" },
          ],
          ctaText: "Contact",
          textColor: "text-zinc-800",
          hoverColor: "hover:text-blue-600",
          buttonBg:
            "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
        };

      default:
        return {
          logo: null,
          navLinks: [],
          ctaText: "",
          textColor: "text-white",
          hoverColor: "hover:text-blue-500",
        };
    }
  };

  const config = getConfig();

  // Dynamic navbar behavior based on category
  const getNavBackground = () => {
    if (category === "rental" || category === "hotel") {
      return scrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-white/95 backdrop-blur-md';
    }
    return 'bg-transparent';
  };

  return (
    // Navbar - Clean Minimalist Design
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getNavBackground()}`}
    >
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#"
          className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
        >
          {config.logo}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {config.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold ${config.textColor} ${config.hoverColor} px-4 py-2.5 rounded-lg transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-current after:rounded-full hover:after:w-full after:transition-all after:duration-300`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Contact Button */}
          <a
            href={waLink}
            className={`flex-shrink-0 ${config.buttonBg} text-white font-semibold px-6 py-2.5 rounded-full text-sm shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95`}
          >
            {config.ctaText}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden p-2 rounded-lg hover:bg-zinc-100 transition-all duration-300 ${
              category === 'rental' || category === 'hotel'
                ? 'text-zinc-700 hover:text-zinc-900'
                : 'text-white hover:text-zinc-300'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col p-4 gap-2">
            {config.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`${config.textColor} font-medium px-4 py-3 rounded-lg transition-all duration-300 ${config.hoverColor} hover:bg-zinc-50`}
              >
                {link.label}
              </a>
            ))}

            <a
              href={waLink}
              onClick={() => setIsMobileOpen(false)}
              className={`mt-2 ${config.buttonBg} text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md text-center`}
            >
              {config.ctaText}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
