// src/components/landing/LandingNavbar.jsx
// Clean navbar for multiple landing pages

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function LandingNavbar({ category = "rental", waLink }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
      default:
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
          bgColor: "bg-white/95",
          textColor: "text-zinc-700",
          hoverColor: "hover:text-blue-500",
          buttonBg: "bg-blue-500 hover:bg-blue-600",
        };
    }
  };

  const config = getConfig();

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b ${category === "hotel" ? "border-white/10" : ""}`}
      aria-label="Main Navigation"
    >
      <div className={`${config.bgColor} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              {config.logo}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {config.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium ${category === "hotel" ? "text-zinc-300" : config.textColor} ${config.hoverColor} transition-colors`}
                >
                  {link.label}
                </a>
              ))}

              <a
                href={waLink}
                className={`px-5 py-2.5 ${config.buttonBg} text-black font-semibold rounded-lg text-sm transition-colors`}
              >
                {config.ctaText}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`md:hidden p-2 ${category === "hotel" ? "text-zinc-300 hover:text-amber-500" : config.textColor} ${config.hoverColor}`}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileOpen && (
            <div
              className={`md:hidden mt-4 pb-4 border-t ${category === "hotel" ? "border-white/10" : ""}`}
            >
              <div className="flex flex-col gap-3 pt-4">
                {config.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`text-sm font-medium ${category === "hotel" ? "text-zinc-300" : config.textColor} ${config.hoverColor} py-2`}
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href={waLink}
                  onClick={() => setIsMobileOpen(false)}
                  className={`px-5 py-2.5 ${config.buttonBg} text-black font-semibold rounded-lg text-sm text-center`}
                >
                  {config.ctaText}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
