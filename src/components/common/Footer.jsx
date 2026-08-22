import { MessageCircle, Mail, ArrowRight, Code2, Smartphone, Globe, MapPin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useConsultation } from "../../context/ConsultationContext";
import { Link } from "react-router-dom";

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  const { openConsultation } = useConsultation();

  const services = [
    { icon: Globe, label: t("Landing Page Premium", "Premium Landing Pages"), href: "/harga" },
    { icon: Smartphone, label: t("Aplikasi Mobile (iOS/Android)", "Mobile Apps (iOS/Android)"), href: "/harga" },
    { icon: Code2, label: t("Sistem Web Kustom", "Custom Web Systems"), href: "/harga" },
  ];

  const navLinks = [
    { label: t("Home", "Home"), href: "/" },
    { label: t("Project Client", "Client Projects"), href: "/project" },
    { label: t("Demo Template", "Demo Template"), href: "/demo" },
    { label: t("Alur Kerja", "Workflow"), href: "/proses" },
    { label: t("Paket & Harga", "Packages & Pricing"), href: "/harga" },
    { label: t("Testimoni", "Testimonials"), href: "/testimoni" },
    { label: t("FAQ", "FAQ"), href: "/faq" },
  ];

  const legalLinks = [
    { label: t("Syarat & Ketentuan", "Terms of Service"), href: "/terms" },
    { label: t("Kebijakan Privasi", "Privacy Policy"), href: "/privacy" },
    { label: t("Tanya Jawab (FAQ)", "FAQ"), href: "/faq" },
  ];

  const contacts = [
    { icon: MessageCircle, label: t("WhatsApp Resmi", "Official WhatsApp"), href: "https://wa.me/6285707185783", external: true },
    { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/gapaidigital", external: true },
    { icon: Mail, label: "gapaidigital@gmail.com", href: "mailto:gapaidigital@gmail.com", external: false },
    { icon: MapPin, label: t("Tulungagung, Jawa Timur", "Tulungagung, East Java"), href: null, external: false },
  ];

  return (
    <footer
      id="contact"
      className="relative mt-24 border-t border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 pt-12 md:pt-16 pb-8">

        {/* MINI CTA CARD */}
        <div className="mb-12 md:mb-16 rounded-[2rem] bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-900 dark:to-zinc-950 border border-white/5 p-6 md:p-10 shadow-xl shadow-black/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
                ✦ {t("Konsultasi 100% Gratis", "100% Free Consultation")}
              </p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-2 leading-tight">
                {t("Siap Mendigitalisasi Bisnis Anda?", "Ready to Digitalize Your Business?")}
              </h3>
              <p className="text-zinc-400 text-sm md:text-base font-medium max-w-lg">
                {t("Mari berdiskusi tentang bagaimana kami bisa membantu bisnis Anda berkembang secara digital.", "Let's discuss how we can help your business grow digitally.")}
              </p>
            </div>
            <button
              onClick={() => openConsultation()}
              className="shrink-0 w-full md:w-auto flex items-center justify-center gap-2 px-7 py-4 bg-amber-500 hover:bg-amber-400 text-black rounded-full font-black text-sm transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-95 group cursor-pointer"
            >
              {t("Konsultasi Gratis", "Free Consultation")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none p-6 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 text-left">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div>
              <h2 className="text-2xl font-black text-black dark:text-white">
                Gapai<span className="text-amber-500">Digital</span>
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest mt-1">
                {t("Solusi Digital Indonesia", "Indonesia Digital Solutions")}
              </p>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm">
              {t("Partner digitalisasi tepercaya untuk landing page premium, aplikasi mobile, dan sistem web kustom.", "Trusted digitalization partner for premium landing pages, mobile apps, and custom web systems.")}
            </p>
            {/* Social Icons */}
            <div className="flex gap-2 pt-1">
              <a href="https://wa.me/6285707185783" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-200">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/gapaidigital" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-200">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="mailto:gapaidigital@gmail.com"
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-200">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LAYANAN KAMI */}
          <div>
            <h3 className="text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-amber-500 inline-block"></span>
              {t("Layanan Kami", "Our Services")}
            </h3>
            <ul className="space-y-3">
              {services.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link to={href} className="group flex items-center gap-2.5 text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors text-sm font-medium">
                    <Icon className="w-4 h-4 shrink-0 text-zinc-400 dark:text-zinc-600 group-hover:text-amber-500 transition-colors" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL & FAQ */}
          <div>
            <h3 className="text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-amber-500 inline-block"></span>
              {t("Informasi & Legal", "Legal & Support")}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="group text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
                    <span className="group-hover:translate-x-0.5 transition-transform">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HUBUNGI KAMI */}
          <div>
            <h3 className="text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-amber-500 inline-block"></span>
              {t("Hubungi Kami", "Contact Us")}
            </h3>
            <ul className="space-y-3">
              {contacts.map(({ icon: Icon, label, href, external }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-2.5 text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors text-sm font-medium"
                    >
                      <div className="p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-lg group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="group-hover:translate-x-0.5 transition-transform">{label}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-2.5 text-zinc-600 dark:text-zinc-400 text-sm font-medium">
                      <div className="p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-lg shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-zinc-400 dark:text-zinc-600 text-xs font-medium">
          <p>© {new Date().getFullYear()} <span className="text-zinc-600 dark:text-zinc-400 font-bold">GapaiDigital</span>. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-amber-500 transition">{t("Syarat & Ketentuan", "Terms")}</Link>
            <Link to="/privacy" className="hover:text-amber-500 transition">{t("Kebijakan Privasi", "Privacy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


