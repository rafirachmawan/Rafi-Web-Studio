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
    <nav className="fixed top-0 left-0 z-50 w-full" aria-label="Main Navigation">
      {/* Full width background */}
      <div className="w-full border-b border-white/10 backdrop-blur-xl bg-[#0B1512]/90 transition-all duration-300">
        {/* Centered content container */}
        <div className="max-w-[1600px] mx-auto px-6 h-[80px] flex justify-between items-center">
          {/* Logo - Left aligned */}
          <a href="#" className="flex items-center gap-3 group" aria-label="Starbucks Home">
            <img 
              src={starbucksLogo} 
              alt="Starbucks Logo" 
              className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-lg font-black tracking-[0.25em] font-serif text-[#D4E9E2] transition-colors duration-300">
              STARBUCKS
            </span>
          </a>

          {/* Desktop Navigation - Center aligned */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-zinc-300 hover:text-emerald-400 transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button - Right aligned */}
          <div className="hidden md:block ml-8">
            <Button variant="outline" size="md" className="border border-transparent bg-[#0B1512]/80 backdrop-blur-sm text-[#D4E9E2] hover:bg-[#00704A]/90 hover:text-white transition-all duration-300 rounded-full px-6 py-2.5">
              Explore Menu
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-[#00704A]/10 rounded-full transition-all duration-300 hover:text-emerald-400"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden bg-[#0B1512]/95 border-t border-white/10 backdrop-blur-xl px-6 py-6 flex flex-col gap-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-all duration-300 py-2 rounded-lg hover:bg-[#00704A]/10 px-3 -mx-3"
            >
              {link.label}
            </a>
          ))}
          
          <Button variant="outline" fullWidth className="border border-transparent bg-[#00704A] text-white hover:bg-[#00704A]/90 transition-all duration-300 rounded-full">
            Explore Menu
          </Button>
        </div>
      )}
    </nav>
  );
}
