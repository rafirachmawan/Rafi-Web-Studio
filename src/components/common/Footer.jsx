import { MessageCircle, Mail, ArrowRight, Code2, Smartphone, Globe } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  return (
    <div
      id="contact"
      className="relative mt-32 border-t border-black/10 dark:border-white/10 pt-16 pb-10 transition-colors duration-300 overflow-hidden"
    >
      {/* SUBTLE GLOW BACKGROUND */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 dark:bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* MINI CTA */}
        <div className="mb-16 flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              {t("Siap Mendigitalisasi Bisnis Anda?", "Ready to Digitalize Your Business?")}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
              {t("Mari berdiskusi tentang bagaimana kami bisa membantu skala bisnis Anda berkembang.", "Let's discuss how we can help your business scale grow.")}
            </p>
          </div>
          <a
            href="https://wa.me/6285707185783"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 group whitespace-nowrap"
          >
            {t("Konsultasi Gratis", "Free Consultation")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {/* BRAND (LEFT) */}
          <div className="space-y-4 lg:col-span-1">
            <h2 className="text-2xl font-black text-black dark:text-white">
              Gapai<span className="text-amber-500">Digital</span>
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-medium">
              {t("Partner digitalisasi tepercaya untuk pembuatan landing page premium, pengembangan aplikasi mobile, serta sistem web kustom guna mengotomatisasi operasional Anda.", "Trusted digitalization partner for creating premium landing pages, developing mobile apps, and custom web systems to automate your operations.")}
            </p>
          </div>

          {/* LAYANAN KAMI */}
          <div>
            <h3 className="text-zinc-900 dark:text-white font-bold text-sm mb-5 uppercase tracking-wider">
              {t("Layanan Kami", "Our Services")}
            </h3>

            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 text-sm font-medium">
              <li>
                <a href="#harga" className="group flex items-center gap-2 hover:text-amber-500 transition-colors duration-300">
                  <Globe className="w-4 h-4" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t("Landing Page Premium", "Premium Landing Pages")}</span>
                </a>
              </li>
              <li>
                <a href="#harga" className="group flex items-center gap-2 hover:text-amber-500 transition-colors duration-300">
                  <Smartphone className="w-4 h-4" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t("Aplikasi Mobile (iOS/Android)", "Mobile Apps (iOS/Android)")}</span>
                </a>
              </li>
              <li>
                <a href="#harga" className="group flex items-center gap-2 hover:text-amber-500 transition-colors duration-300">
                  <Code2 className="w-4 h-4" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t("Sistem Web Kustom", "Custom Web Systems")}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* MENU UTAMA */}
          <div>
            <h3 className="text-zinc-900 dark:text-white font-bold text-sm mb-5 uppercase tracking-wider">
              {t("Menu Utama", "Main Menu")}
            </h3>

            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 text-sm font-medium">
              <li>
                <a href="#home" className="group inline-flex items-center hover:text-amber-500 transition-colors duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t("Home", "Home")}</span>
                </a>
              </li>
              <li>
                <a href="#demo" className="group inline-flex items-center hover:text-amber-500 transition-colors duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t("Portofolio Demo", "Demo Portfolio")}</span>
                </a>
              </li>
              <li>
                <a href="#proses" className="group inline-flex items-center hover:text-amber-500 transition-colors duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t("Alur Kerja", "Workflow")}</span>
                </a>
              </li>
              <li>
                <a href="#harga" className="group inline-flex items-center hover:text-amber-500 transition-colors duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t("Paket Investasi", "Investment Packages")}</span>
                </a>
              </li>
              <li>
                <a href="#testimoni" className="group inline-flex items-center hover:text-amber-500 transition-colors duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t("Kisah Sukses Klien", "Client Success Stories")}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* HUBUNGI KAMI */}
          <div>
            <h3 className="text-zinc-900 dark:text-white font-bold text-sm mb-5 uppercase tracking-wider">
              {t("Hubungi Kami", "Contact Us")}
            </h3>

            <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm font-medium">
              <li>
                <a
                  href="https://wa.me/6285707185783"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hover:text-amber-500 transition-colors duration-300"
                >
                  <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t("WhatsApp Resmi", "Official WhatsApp")}</span>
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/gapaidigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hover:text-amber-500 transition-colors duration-300"
                >
                  <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Instagram</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:gapaidigital@gmail.com"
                  className="group flex items-center gap-3 hover:text-amber-500 transition-colors duration-300"
                >
                  <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">gapaidigital@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* LINE & COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 dark:text-zinc-500 text-xs font-medium">
          <p>© {new Date().getFullYear()} GapaiDigital. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            {t("Solusi Website & Aplikasi Profesional untuk Bisnis Modern", "Professional Website & App Solutions for Modern Businesses")} 
          </p>
        </div>
      </div>
    </div>
  );
}
