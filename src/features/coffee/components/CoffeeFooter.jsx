// src/features/coffee/components/CoffeeFooter.jsx
// Starbucks Premium Footer Component with Bilingual Support & Responsive Spacing

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import { useLanguage } from "../../../context/LanguageContext";
import starbucksLogo from "../../../assets/starbuck/starbuck icon.png";

// Accurate Vector Brand Icons
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export function CoffeeFooter({ waLink }) {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/starbucksindonesia/",
      icon: InstagramIcon,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/StarbucksIndonesia",
      icon: FacebookIcon,
    },
    {
      name: "X (Twitter)",
      href: "https://twitter.com/SbuxIndonesia",
      icon: TwitterIcon,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@StarbucksIndonesiaOfficial",
      icon: YoutubeIcon,
    },
  ];

  const aboutLinks = [
    { name: t("Kisah Kami & Heritage", "Our Heritage"), href: "#about" },
    { name: t("Keahlian Kopi Barista", "Coffee Mastery"), href: "#coffee" },
    { name: t("Dewata Sanctuary Bali", "Dewata Sanctuary"), href: "#dewata" },
    { name: t("Ruang Berita & Press", "Pressroom"), href: "https://www.starbucks.co.id/about-us/pressroom", external: true },
    { name: t("Karir & Mitra Barista", "Career Center"), href: "https://www.starbucks.co.id/about-us/career-center", external: true },
  ];

  const serviceLinks = [
    { name: t("Pertanyaan Umum (FAQ)", "Customer FAQ"), href: "#about" },
    { name: t("Temukan Lokasi Gerai", "Store Locator"), href: "https://www.starbucks.co.id/store-locator", external: true },
    { name: t("Pesan Online Delivery", "Order Online"), href: "#menu" },
    { name: t("Tanggung Jawab Sosial", "Social Responsibility"), href: "#responsibility" },
    { name: t("Bantuan & Konsultasi", "Help & Consultation"), href: waLink || "#", external: true },
  ];

  const legalLinks = [
    { name: t("Pernyataan Privasi", "Privacy Statement"), href: "#" },
    { name: t("Syarat & Ketentuan", "Terms of Use"), href: "#" },
    { name: t("Peta Situs", "Site Map"), href: "#" },
    { name: t("Preferensi Cookie", "Cookie Preferences"), href: "#" },
  ];

  return (
    <footer className="bg-[#080E0C] border-t border-white/10 pt-16 pb-20 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle Glow Accent */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[150px] bg-[#00704A]/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1600px] mx-auto relative z-10"
      >
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          {/* Column 1: Brand & Socials (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo */}
            <a href="#" className="inline-flex items-center gap-3 group">
              <img
                src={starbucksLogo}
                alt="Starbucks Logo"
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-xl font-black tracking-[0.25em] font-serif text-[#D4E9E2]">
                STARBUCKS
              </span>
            </a>

            {/* Mission Statement */}
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              {t(
                "Menginspirasi dan memupuk semangat jiwa manusia – satu orang, satu cangkir, dan satu lingkungan di setiap saat.",
                "To inspire and nurture the human spirit – one person, one cup and one neighborhood at a time."
              )}
            </p>

            {/* Social Media Buttons */}
            <div>
              <span className="block text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-3">
                {t("Ikuti Kami", "Follow Us")}
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#00704A] hover:border-[#00704A] hover:shadow-lg hover:shadow-[#00704A]/30 transition-all duration-300 transform hover:-translate-y-0.5"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Certifications Badge Pills */}
            <div className="pt-2 flex items-center gap-2.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00704A]/10 border border-[#00704A]/30 text-emerald-400 text-[10px] font-bold tracking-wide">
                <ShieldCheck size={12} />
                Halal Certified BPJPH
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-bold tracking-wide">
                <ShieldCheck size={12} className="text-emerald-400" />
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Column 2: About Us Links (Span 2) */}
          <div className="lg:col-span-2 sm:pl-4 lg:pl-0">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#D4E9E2] mb-5">
              {t("Tentang Kami", "About Us")}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {aboutLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-zinc-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    {link.external && (
                      <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Service (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#D4E9E2] mb-5">
              {t("Layanan Pelanggan", "Customer Service")}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-zinc-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    {link.external && (
                      <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Rewards Card (Span 3) */}
          <div className="lg:col-span-3">
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#0E1B17] to-[#0A1310] border border-[#00704A]/30 relative overflow-hidden shadow-xl group">
              {/* Subtle top light bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

              <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/40 mb-3">
                Starbucks Rewards™
              </span>

              <h5 className="text-sm font-bold text-white font-serif mb-2">
                {t("Nikmati Kopi Gratis & Promo Eksklusif", "Unlock Free Drinks & Exclusive Perks")}
              </h5>

              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {t(
                  "Kumpulkan Bintang di setiap transaksi dan nikmati berbagai reward lezat gratis.",
                  "Earn Stars with every sip and treat yourself to free drinks, food, and birthday rewards."
                )}
              </p>

              <a href="#rewards" className="block">
                <Button
                  variant="primary"
                  fullWidth
                  className="bg-[#00704A] hover:bg-[#00875a] text-white font-bold py-2.5 text-xs rounded-full shadow-md shadow-[#00704A]/25 flex items-center justify-center gap-1.5"
                >
                  <span>{t("Gabung Rewards", "Join Rewards")}</span>
                  <ArrowRight size={13} />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Bar: with generous right padding to avoid overlap with floating WA & back-to-top buttons */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-center lg:text-left pr-0 lg:pr-36">
          <p className="text-xs text-zinc-500">
            © 2026 Starbucks Coffee Company. {t("Seluruh Hak Cipta Dilindungi.", "All Rights Reserved.")}
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
