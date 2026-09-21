import { MapPin, Phone, Clock, MessageCircle, Heart, UtensilsCrossed } from "lucide-react";
import { restoInfo } from "../data/resto";

export function RestoFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-purple-950/60 pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={restoInfo.logo}
                alt="Mie Gacoan"
                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <span className="font-black text-xl tracking-tight text-white block">
                  MIE GACOAN
                </span>
                <span className="text-xs text-violet-400 font-semibold tracking-wider uppercase">
                  Mojokerto • Jawa Timur
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Mie pedas no.1 di Indonesia dengan bumbu rahasia otentik, dimsum gurih renyah, dan aneka minuman segar. Buka 24 Jam melayani seluruh pecinta kuliner pedas.
            </p>

            <div className="flex gap-2.5 pt-2">
              <a
                href={restoInfo.waOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-violet-600/30 hover:bg-violet-600 text-violet-300 hover:text-white text-xs font-semibold transition-all border border-violet-500/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order WA ({restoInfo.phoneDisplay})</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-bold text-violet-300 text-xs uppercase tracking-widest mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#menu" className="text-slate-400 hover:text-violet-400 transition-colors flex items-center gap-2">
                  <span className="text-violet-500">›</span> Daftar Menu (46 Item)
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-violet-400 transition-colors flex items-center gap-2">
                  <span className="text-violet-500">›</span> Keunggulan Kami
                </a>
              </li>
              <li>
                <a href="#info" className="text-slate-400 hover:text-violet-400 transition-colors flex items-center gap-2">
                  <span className="text-violet-500">›</span> Jam Operasional
                </a>
              </li>
              <li>
                <a href="#cta" className="text-slate-400 hover:text-violet-400 transition-colors flex items-center gap-2">
                  <span className="text-violet-500">›</span> Reservasi Rombongan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div>
            <h4 className="font-bold text-violet-300 text-xs uppercase tracking-widest mb-4">
              Lokasi & Kontak
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{restoInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-violet-400 shrink-0" />
                <span>{restoInfo.hours}</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-violet-400 shrink-0" />
                <a
                  href={restoInfo.waOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400 transition-colors font-medium text-white"
                >
                  {restoInfo.phoneDisplay} (WA)
                </a>
              </li>
              <li className="text-[11px] text-slate-500 pl-6.5">
                Reservasi: {restoInfo.reservationContact}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-800 mb-6" />

        {/* Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {restoInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Pedas Mantap, Harga Bersahabat</span>
            <span>•</span>
            <span className="text-violet-400">Digitalized with GapaiDigital 🚀</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
