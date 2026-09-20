import { Phone, Mail, MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import { rental } from "../data/rental";
import yamahaLogo from "../../../assets/Yamaha/iconyamaha.png";

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" />
    </svg>
  );
}

function TwitterIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function RentalFooter() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Social Channels Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-12 border-b border-zinc-800/80">
          <div className="flex items-center gap-3">
            <img
              src={yamahaLogo}
              alt="Yamaha Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <span className="font-black tracking-wider text-base text-white block">
                YAMAHA MOTOR INDONESIA
              </span>
              <span className="text-xs text-zinc-400">
                Revs Your Heart • Semakin di Depan
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-zinc-400 mr-2 hidden sm:inline">
              Follow Our Channel:
            </span>
            <a
              href="https://instagram.com/yamahaindonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
              aria-label="Instagram"
            >
              <InstagramIcon size={17} />
            </a>
            <a
              href="https://youtube.com/@yamahamotorindonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all"
              aria-label="YouTube"
            >
              <YoutubeIcon size={17} />
            </a>
            <a
              href="https://twitter.com/yamahaindonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all"
              aria-label="Twitter / X"
            >
              <TwitterIcon size={17} />
            </a>
            <a
              href="https://facebook.com/yamaholigan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-blue-700 hover:border-blue-700 transition-all"
              aria-label="Facebook"
            >
              <FacebookIcon size={17} />
            </a>
          </div>
        </div>

        {/* 4-Column Main Sitemap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 py-12 border-b border-zinc-800/80">
          {/* Col 1: Corporate & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              KANTOR PUSAT RESMI
            </h4>
            <p className="text-sm font-bold text-zinc-100">
              PT. YAMAHA INDONESIA MOTOR MANUFACTURING
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Jl. DR KRT Radjiman Widyodiningrat RT/RW 009-06, Rawa Terate, Cakung, Jakarta Timur 13920, Indonesia
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <a
                href="tel:02124575555"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-blue-400 transition-colors"
              >
                <Phone size={14} className="text-blue-500" />
                <span className="font-mono font-bold">(021) 2457 5555</span>
                <span className="text-zinc-500 text-[11px]">(Call Center)</span>
              </a>

              <a
                href="mailto:contact_center@yamaha-motor.co.id"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-blue-400 transition-colors"
              >
                <Mail size={14} className="text-blue-500" />
                <span>contact_center@yamaha-motor.co.id</span>
              </a>
            </div>
          </div>

          {/* Col 2: Kategori Produk */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              KATEGORI MOTOR
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#products" className="hover:text-white transition-colors">MAXi Yamaha (NMAX, XMAX, Aerox)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Classy (Fazzio, Grand Filano)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Matic (Gear, FreeGo, Mio M3)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Sport (R15M, R25, MT-15, XSR)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Off-Road (WR155R, YZ125X)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Moped (MX King, Jupiter, Vega)</a></li>
            </ul>
          </div>

          {/* Col 3: Layanan & Digital */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              LAYANAN & TEKNOLOGI
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#calculator" className="hover:text-white transition-colors">Simulasi Kredit Online</a></li>
              <li><a href="#service" className="hover:text-white transition-colors">Booking Servis Resmi</a></li>
              <li><a href="#service" className="hover:text-white transition-colors">Y-Connect Connectivity</a></li>
              <li><a href="#service" className="hover:text-white transition-colors">My Yamaha Motor Members</a></li>
              <li><a href="#service" className="hover:text-white transition-colors">Garansi Rangka 5 Tahun</a></li>
              <li><a href="#service" className="hover:text-white transition-colors">YES24 Emergency Assistance</a></li>
            </ul>
          </div>

          {/* Col 4: Parts & Racing */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              PARTS & RACING
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#service" className="hover:text-white transition-colors">Yamaha Genuine Parts (YGP)</a></li>
              <li><a href="#service" className="hover:text-white transition-colors">Pelumas Resmi Yamalube</a></li>
              <li><a href="#racing" className="hover:text-white transition-colors">bLU cRU Indonesia</a></li>
              <li><a href="#racing" className="hover:text-white transition-colors">Yamaha Racing Update</a></li>
              <li><a href="https://global.yamaha-motor.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                <span>Yamaha Global</span>
                <ExternalLink size={10} />
              </a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 PT. Yamaha Indonesia Motor Manufacturing. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-zinc-300 transition-colors">General Privacy Policy</span>
            <span>•</span>
            <span className="cursor-pointer hover:text-zinc-300 transition-colors">Recruitment Privacy Policy</span>
            <span>•</span>
            <span className="cursor-pointer hover:text-zinc-300 transition-colors">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
