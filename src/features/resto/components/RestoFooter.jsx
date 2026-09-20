import logoMieGacoan from "../../../assets/mieGacoan/logoMieGacoan.png";
import { Heart, MapPin, Phone } from "lucide-react";

export function RestoFooter() {
  return (
    <footer className="bg-white border-t border-stone-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <img src={logoMieGacoan} alt="Mie Gacoan" className="h-16 w-auto object-contain mb-6" />
            <p className="text-zinc-600 text-sm leading-relaxed mb-6 max-w-md">
              Mie Gacoan Tulungagung - Mie pedas no.1 Indonesia dengan bumbu rahasia yang otentik dan menggugah selera.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center hover:bg-[#db2777] transition-all group">
                <Heart className="w-5 h-5 text-zinc-600 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center hover:bg-[#db2777] transition-all group">
                <MapPin className="w-5 h-5 text-zinc-600 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center hover:bg-[#db2777] transition-all group">
                <Phone className="w-5 h-5 text-zinc-600 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#menu" className="text-zinc-600 text-sm hover:text-[#db2777] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#customizer" className="text-zinc-600 text-sm hover:text-[#db2777] transition-colors">
                  Custom Order
                </a>
              </li>
              <li>
                <a href="#locations" className="text-zinc-600 text-sm hover:text-[#db2777] transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#franchise" className="text-zinc-600 text-sm hover:text-[#db2777] transition-colors">
                  Franchise
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-zinc-600 text-sm">
                <MapPin className="w-4 h-4 text-[#db2777] shrink-0 mt-0.5" />
                <span>Tulungagung, Jawa Timur</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-600 text-sm">
                <Phone className="w-4 h-4 text-[#db2777] shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-600 text-sm">
                <Phone className="w-4 h-4 text-[#db2777] shrink-0" />
                <a href="tel:+6281234567890" className="hover:text-[#db2777] transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-stone-200 mb-8" />
        
        {/* Copyright Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} Mie Gacoan Tulungagung. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 text-xs hover:text-[#db2777] transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 text-xs hover:text-[#db2777] transition-colors">Terms of Service</a>
            <span className="text-zinc-300">|</span>
            <a href="#" className="text-zinc-500 text-xs hover:text-[#db2777] transition-colors">
              Website by GapaiDigital 🚀
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
