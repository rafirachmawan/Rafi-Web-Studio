// src/features/hotel/components/HotelFooter.jsx
// Authentic luxury footer for Crown Victoria Hotel Tulungagung (Purple Theme)

import { Phone, MapPin, Mail, ShieldCheck, Heart } from "lucide-react";
import { HOTEL_INFO } from "../data/hotelData";

export function HotelFooter({ name = "Crown Victoria Hotel", waLink }) {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-black shadow-md shadow-purple-500/25">
              👑
            </div>
            <div>
              <span className="text-white font-black text-lg tracking-tight block">
                CROWN VICTORIA
              </span>
              <span className="text-purple-400 text-[10px] font-bold tracking-widest uppercase block">
                HOTEL TULUNGAGUNG ★★★★
              </span>
            </div>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            Menghadirkan arsitektur klasik Victorian yang megah dengan fasilitas bintang 4 modern di pusat Tulungagung. Kenyamanan paripurna untuk istirahat, bisnis, dan liburan keluarga.
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs text-purple-400/90 font-semibold">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>Rating Resmi Bintang 4 Terakreditasi</span>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
            Eksplorasi Properti
          </h4>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            <li>
              <a href="#rooms" className="hover:text-purple-400 transition-colors">
                Kamar & Suites
              </a>
            </li>
            <li>
              <a href="#facilities" className="hover:text-purple-400 transition-colors">
                Kolam Renang Indoor & Water Slide
              </a>
            </li>
            <li>
              <a href="#dining" className="hover:text-purple-400 transition-colors">
                Sultan Café & Venezia Pool Bar
              </a>
            </li>
            <li>
              <a href="#mice" className="hover:text-purple-400 transition-colors">
                Victoria Grand Ballroom & MICE
              </a>
            </li>
            <li>
              <a href="#facilities" className="hover:text-purple-400 transition-colors">
                Gymnasium, Spa & Sauna
              </a>
            </li>
          </ul>
        </div>

        {/* Local Area & Policy */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
            Informasi & Lokasi
          </h4>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            <li>
              <a href="#location" className="hover:text-purple-400 transition-colors">
                Akses Stasiun KA (5 Menit)
              </a>
            </li>
            <li>
              <a href="#location" className="hover:text-purple-400 transition-colors">
                Panduan Wisata Tulungagung
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-purple-400 transition-colors">
                Ulasan Tamu Terverifikasi (7.3/10)
              </a>
            </li>
            <li>
              <span className="text-zinc-500 block">Check-in: 14:00 WIB</span>
            </li>
            <li>
              <span className="text-zinc-500 block">Check-out: 12:00 WIB</span>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
            Kontak & Reservasi
          </h4>

          <div className="flex items-start gap-2.5 text-xs text-zinc-400">
            <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>{HOTEL_INFO.address}</span>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-zinc-400">
            <Phone className="w-4 h-4 text-purple-400 shrink-0" />
            <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-white transition-colors">
              Telp: {HOTEL_INFO.phone}
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-zinc-400">
            <svg
              className="w-4 h-4 text-purple-400 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <a
              href={`https://instagram.com/${HOTEL_INFO.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram: {HOTEL_INFO.instagram}
            </a>
          </div>

          <div className="pt-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-purple-500/20 transition-all cursor-pointer"
            >
              <span>Booking via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-zinc-900 py-6 px-4 text-center text-[11px] text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Crown Victoria Hotel Tulungagung. All rights reserved.</p>
          <p className="flex items-center gap-1 justify-center text-purple-400/80">
            Pemesanan Online • Jaminan Tarif Terbaik Resmi
          </p>
        </div>
      </div>
    </footer>
  );
}
