// src/components/landing/LandingNavbar.jsx
// Clean navbar for multiple landing pages with hover effect

import { useState } from "react";
import { Menu, X } from "lucide-react";
import yamahaIcon from "../../assets/Yamaha/iconyamaha.png";

export function LandingNavbar({ category = "rental", waLink }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
              <span className="text-blue-500 font-black text-xl">YAMAHA</span>
              <span className="text-zinc-900 text-xs font-semibold tracking-widest uppercase hidden sm:block">
                Indonesia
              </span>
            </div>
          ),
          navLinks: [
            { href: "#products", label: "Products" },
            { href: "#service", label: "Service" },
            { href: "#dealers", label: "Dealers" },
            { href: "#racing", label: "Racing" },
          ],
          ctaText: "Contact",
          textColor: "text-white",
          hoverColor: "hover:text-blue-500",
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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto min-w-[700px]">
      <div className="bg-white/80 backdrop-blur-xl rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/40 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(59,130,246,0.2)] hover:border-blue-200">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <a
            href="#"
            className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            {/* Yamaha Logo */}
            <img
              src={yamahaIcon}
              alt="Yamaha Logo"
              className="w-8 h-8 object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {config.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-700 hover:text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:translate-y-[-2px]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href={waLink}
            className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-2.5 rounded-full text-sm shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105 active:scale-95"
          >
            {config.ctaText}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-zinc-700 hover:text-blue-500 rounded-lg hover:bg-blue-50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-zinc-200/50 pt-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-2">
              {config.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-sm font-medium text-zinc-700 hover:text-blue-500 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={waLink}
                onClick={() => setIsMobileOpen(false)}
                className="mt-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-full text-sm shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105 text-center"
              >
                {config.ctaText}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
