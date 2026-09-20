// Laundry Footer Component
import { Zap, MapPin } from "lucide-react";
const FOOTER_LOGO_URL = "/assets/loundry/logoLoundry.png";
let logoLoundry; // Will use relative path below

export function LaundryFooter({ waLink }) {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={FOOTER_LOGO_URL} alt="Aio Laundry" className="w-7 h-7 object-contain" onError={(e) => e.target.style.display='none'} />
            <span className="text-xl font-black text-slate-900">Aio Laundry</span>
          </div>
          <p className="text-slate-500 font-medium leading-relaxed">Solusi cerdas untuk pakaian bersih, wangi, dan rapi tanpa perlu membuang waktu berharga Anda.</p>
        </div>
        
        {/* Services */}
        <div>
          <h4 className="font-black text-slate-900 mb-4 uppercase tracking-wider text-sm">Layanan</h4>
          <div className="flex flex-col gap-3 text-slate-500 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Cuci Pakaian Kiloan</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Cuci Sprei & Selimut</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Cuci Sepatu & Tas</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Cuci Stroller</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-black text-slate-900 mb-4 uppercase tracking-wider text-sm">Hubungi Kami</h4>
          <div className="flex flex-col gap-4 text-slate-500 font-medium">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
              <span>Jl. Ahmad Yani Timur No. 29, Tamanan, Kec. Tulungagung</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-blue-500 shrink-0" />
              <span>Buka Setiap Hari: 07.00 - 21.00</span>
            </div>
            <a href={waLink} className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
              WhatsApp: 628123456789
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center text-slate-400 font-medium text-sm pt-8 border-t border-slate-100">
        © {new Date().getFullYear()} Aio Laundry Tulungagung. All Rights Reserved. Website by GapaiDigital
      </div>
    </footer>
  );
}
