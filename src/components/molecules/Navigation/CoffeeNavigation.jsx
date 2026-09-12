// src/components/molecules/Navigation/CoffeeNavigation.jsx
// Starbucks Navigation Component

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../../atoms/Button/Button';
import starbucksLogo from '../../../assets/starbuck/starbuck icon.png';

export function CoffeeNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { href: '#menu', label: 'Menu' },
    { href: '#coffee', label: 'Coffee' },
    { href: '#rewards', label: 'Rewards' },
    { href: '#responsibility', label: 'Responsibility' },
    { href: '#about', label: 'About Us' }
  ];

  return (
    <nav
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1400px]"
      aria-label="Main Navigation"
    >
      <div className="w-full border-b border-white/5 backdrop-blur-xl bg-[#0B1512]/80">
        <div className="max-w-7xl mx-auto px-6 h-[90px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" aria-label="Starbucks Home">
            <img 
              src={starbucksLogo} 
              alt="Starbucks Logo" 
              className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-black tracking-[0.2em] font-serif text-[#D4E9E2]">
              STARBUCKS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-zinc-300 hover:text-emerald-400 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="outline" size="md" className="border-[#00704A] text-[#D4E9E2] hover:bg-[#00704A]">
              Explore Menu
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden bg-[#0B1512] border-t border-white/10 px-6 py-6 flex flex-col gap-5"
          role="dialog"
          aria-modal="true"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <Button variant="outline" fullWidth className="border-[#00704A] text-[#D4E9E2] hover:bg-[#00704A]">
            Explore Menu
          </Button>
        </div>
      )}
    </nav>
  );
}
