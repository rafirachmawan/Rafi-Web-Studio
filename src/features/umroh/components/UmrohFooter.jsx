import { Star, MapPin, Phone } from "lucide-react";

export function UmrohFooter() {
  return (
    <footer className="bg-orange-950 border-t border-orange-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Star className="text-amber-500 w-6 h-6 fill-current" />
            <span className="text-2xl font-black text-white">Jabal Noor.official</span>
          </div>
          <p className="text-orange-200/60 font-medium leading-relaxed max-w-xs">Melayani perjalanan ibadah Umroh dan Haji Plus dengan amanah, nyaman, dan sesuai sunnah.</p>
        </div>
        
        {/* Information */}
        <div>
          <h4 className="font-black text-white mb-4 uppercase tracking-wider text-sm">Informasi</h4>
          <div className="flex flex-col gap-3 text-orange-200/60 font-medium">
            <a href="#keunggulan" className="hover:text-amber-400 transition-colors">Tentang Kami</a>
            <a href="#paket" className="hover:text-amber-400 transition-colors">Paket Umroh</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-amber-400 transition-colors">FAQ</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-black text-white mb-4 uppercase tracking-wider text-sm">Hubungi Kami</h4>
          <div className="flex flex-col gap-4 text-orange-200/60 font-medium">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <span>Gedung Jabal Noor, Trenggalek, Jawa Timur</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-amber-500 shrink-0" />
              <span>+62 812 3456 7890</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-orange-500 font-medium text-sm pt-8 border-t border-orange-900/50">
        © {new Date().getFullYear()} Jabal Noor.official. All Rights Reserved. Website by GapaiDigital
      </div>
    </footer>
  );
}
