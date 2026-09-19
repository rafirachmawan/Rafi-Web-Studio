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
              <span className="text-amber-500 font-black text-xl">HOTEL</span>
              <span className="text-zinc-900 text-xs font-semibold tracking-widest uppercase hidden sm:block">
                LUXURY
              </span>
            </div>
          ),
          navLinks: [
            { href: "#rooms", label: "Rooms" },
            { href: "#facilities", label: "Facilities" },
            { href: "#gallery", label: "Gallery" },
            { href: "#testimonials", label: "Reviews" },
          ],
          ctaText: "Book Now",
          bgColor: "bg-[#0a0a0c]/95",
          textColor: "text-zinc-300",
          hoverColor: "hover:text-amber-500",
          buttonBg: "bg-amber-500 hover:bg-amber-600",
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

  // Dynamic button style for rental when hovered
  const getButtonClassName = () => {
    if (category === "rental") {
      return isHovered
        ? "bg-blue-500 hover:bg-blue-600 text-black"
        : "bg-white hover:bg-gray-100 text-zinc-900";
    }
    return category === "hotel"
      ? "bg-amber-500 hover:bg-amber-600"
      : "bg-blue-500 hover:bg-blue-600";
  };

  return (
    // Navbar - Clean Minimalist Design
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
      }`}
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
            className="md:hidden p-2 text-zinc-700 hover:text-blue-600 rounded-lg hover:bg-zinc-100 transition-all duration-300"
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
