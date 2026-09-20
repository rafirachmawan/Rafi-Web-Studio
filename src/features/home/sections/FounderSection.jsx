import { ExternalLink, Send, Code, Users, Calendar } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import founderPortrait from "../../../assets/foto formal.jpg";

const stats = [
  { icon: Code, valueKey: "50+", labelId: "Project Selesai", labelEn: "Projects Done" },
  { icon: Users, valueKey: "40+", labelId: "Klien Aktif", labelEn: "Active Clients" },
  { icon: Calendar, valueKey: "4+", labelId: "Tahun Pengalaman", labelEn: "Years Experience" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/rafirachmawan",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rrrafi.rachmawan/",
    icon: (
      <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rafi-rachmawan-2a8728233/",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
];

export default function FounderSection() {
  const { t } = useLanguage();
  const portfolioUrl = "https://website-profile-react.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnUVJ8I1A5zVVGCgB5W7plomzM5RRp7ppn3IqwgT5QFrbQaI1jZmmVOwaB1As_aem_FeRrnkq3nQfVmpCoe8hsvw";

  return (
    <section id="founder" className="relative py-20 md:py-28 overflow-hidden border-t border-amber-500/10 dark:border-white/5 bg-transparent dark:bg-transparent">
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ═══ PROFILE CARD ═══ */}
        <div className="relative bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/60 rounded-[2.5rem] p-8 sm:p-10 shadow-xl dark:shadow-none text-center overflow-hidden group transition-all duration-500 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/5">

          {/* Decorative corner accents */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-amber-500/20 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-amber-500/20 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-amber-500/20 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-amber-500/20 rounded-br-lg pointer-events-none" />

          {/* ─── Badge ─── */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400 text-[10px] font-extrabold uppercase tracking-widest mb-6">
            {t("👤 Di Balik Layar", "👤 Behind The Scenes")}
          </div>

          {/* ─── Avatar ─── */}
          <div className="relative mx-auto mb-6 w-32 h-32 sm:w-36 sm:h-36">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 p-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-full h-full rounded-full bg-white dark:bg-zinc-900" />
            </div>
            {/* Photo */}
            <img
              src={founderPortrait}
              alt="Rafi Rachmawan"
              loading="lazy"
              className="absolute inset-[4px] w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
            />
            {/* Online indicator */}
            <span className="absolute bottom-1 right-1 flex h-4 w-4 z-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-zinc-900" />
            </span>
          </div>

          {/* ─── Name & Role ─── */}
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-white">
            Rafi Rachmawan
          </h3>
          <p className="text-xs sm:text-sm font-bold text-amber-500 uppercase tracking-widest mt-1.5">
            Founder & Lead Developer
          </p>

          {/* ─── Bio ─── */}
          <p className="mt-5 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed font-medium max-w-md mx-auto">
            {t(
              "Membangun solusi digital berkualitas enterprise untuk bisnis lokal, UMKM, dan personal branding—tanpa membebani anggaran Anda. Setiap project dikerjakan dengan standar terbaik: cepat, responsif, dan aman.",
              "Building enterprise-grade digital solutions for local businesses, MSMEs, and personal branding—without straining your budget. Every project is built to the highest standards: fast, responsive, and secure."
            )}
          </p>

          {/* ─── Stats Grid ─── */}
          <div className="grid grid-cols-3 gap-3 mt-8 mb-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="relative py-4 px-2 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800/80 hover:border-amber-500/30 transition-all duration-300 group/stat"
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover/stat:bg-amber-500 group-hover/stat:text-white transition-all duration-300">
                      <Icon size={16} strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 leading-none">
                    {stat.valueKey}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mt-1.5">
                    {t(stat.labelId, stat.labelEn)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ─── Social Links ─── */}
          <div className="flex items-center justify-center gap-2 mb-7">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-700/80 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-amber-500 hover:border-amber-500 hover:text-white dark:hover:bg-amber-500 dark:hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* ─── CTA Buttons ─── */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-95"
            >
              {t("Portofolio Saya", "My Portfolio")}
              <ExternalLink size={14} />
            </a>

            <a
              href="https://wa.me/085196221716?text=Halo%20Rafi,%20saya%20ingin%20berdiskusi%20mengenai%20project%20custom"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-700 hover:border-amber-500/50 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-white dark:hover:bg-zinc-800 text-zinc-800 dark:text-white font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              {t("Diskusi via WA", "Chat via WA")}
              <Send size={14} className="text-amber-500" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
