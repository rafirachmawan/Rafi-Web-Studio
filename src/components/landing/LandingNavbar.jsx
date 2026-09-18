// src/components/landing/LandingNavbar.jsx
// Clean navbar for multiple landing pages

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function LandingNavbar({ category = "rental", waLink }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Rental (Car/Yamaha) specific configuration
  const rentalConfig = {
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
    bgColor: "bg-white/95",
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-white/10"
      aria-label="Main Navigation"
    >
      <div className={`${rentalConfig.bgColor} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              {rentalConfig.logo}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {rentalConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-zinc-700 hover:text-blue-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={waLink}
                className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded-lg text-sm transition-colors"
              >
                {rentalConfig.ctaText}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-zinc-700 hover:text-blue-500"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col gap-3 pt-4">
                {rentalConfig.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-sm font-medium text-zinc-700 hover:text-red-500 py-2"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href={waLink}
                  onClick={() => setIsMobileOpen(false)}
                  className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-black font-semibold rounded-lg text-sm text-center"
                >
                  {rentalConfig.ctaText}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
