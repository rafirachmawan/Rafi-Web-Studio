import { Star, XCircle, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function WhyUsSection() {
  const { t } = useLanguage();

  const stats = [
    { value: "50+", label: t("Proyek Bisnis Sukses", "Successful Business Projects") },
    { value: "99%", label: t("Klien Puas & Kembali", "Client Satisfaction Rate") },
    { value: "24/7", label: t("Bantuan & Garansi Tim", "Support & Team Warranty") },
  ];

  const comparisons = [
    {
      type: "biasa",
      title: t("Website Konvensional", "Ordinary Website"),
      icon: AlertCircle,
      iconColor: "text-red-500",
      bgClass: "bg-zinc-50 dark:bg-zinc-900/30 border-black/5 dark:border-white/5 opacity-80",
      titleClass: "text-zinc-500 dark:text-zinc-400",
      points: [
        t("Desain kaku, umum, dan kurang terlihat profesional", "Rigid, generic, and unprofessional design"),
        t("Lambat diakses & kurang optimal ditemukan di Google", "Slow loading speed & poor Google visibility"),
        t("Sistem terpisah (tidak bisa dihubungkan ke aplikasi lain)", "Standalone system (cannot connect to other apps)"),
        t("Pengelolaan data masih manual & membingungkan", "Manual & confusing data management"),
        t("Tanpa bantuan teknis dan garansi setelah website selesai", "No technical support & warranty after delivery"),
      ]
    },
    {
      type: "gapai",
      title: t("Solusi GapaiDigital", "GapaiDigital Solution"),
      icon: ShieldCheck,
      iconColor: "text-amber-500",
      bgClass: "bg-[#0a0a0a] border-amber-500/30 shadow-2xl shadow-amber-500/10 z-10 relative overflow-hidden",
      titleClass: "text-white",
      points: [
        t("Desain eksklusif, mewah & disesuaikan dengan identitas bisnis Anda", "Exclusive, modern design tailored to your brand identity"),
        t("Super cepat, responsif di HP & optimal untuk SEO Google", "Super fast, mobile responsive & optimized for Google SEO"),
        t("Ekosistem terintegrasi (Website, Aplikasi Mobile & Dashboard)", "Fully integrated ecosystem (Website, Mobile App & Dashboard)"),
        t("Sistem otomatis yang praktis & sangat mudah dioperasikan", "Practical automated system that is easy to operate"),
        t("Garansi pemeliharaan & tim bantuan yang selalu siap merespons", "Maintenance warranty & responsive technical support team"),
      ]
    }
  ];

  return (
    <section id="why-us" className="relative py-16 md:py-24 overflow-hidden bg-transparent dark:bg-[#050508]">
      {/* EDITORIAL SECTION NUMBER */}
      <div className="absolute top-8 left-4 md:left-8 select-none pointer-events-none z-0">
        <span 
          className="text-[6rem] md:text-[9rem] font-black leading-none text-transparent"
          style={{
            WebkitTextStroke: "1px",
            WebkitTextStrokeColor: "rgba(245,158,11,0.08)"
          }}
        >01</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION - CENTERED */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
            {t("⚡ ALASAN MEMILIH KAMI", "⚡ WHY CHOOSE US")}
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 font-heading leading-[1.15]">
            <span>{t("Standar Kualitas Terbaik ", "Highest Quality Standard ")}</span>
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              {t("Untuk Website & Aplikasi Anda", "For Your Website & Applications")}
            </span>
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t("Kami tidak sekadar membuat website, tetapi membangun sistem digital yang modern, cepat, aman, dan mudah digunakan untuk mendukung pertumbuhan bisnis Anda.", "We don't just build websites; we create modern, fast, secure, and user-friendly digital systems to power your business growth.")}
          </p>
        </div>

        {/* COMPARISON CARDS */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-5xl mx-auto items-stretch">
          {comparisons.map((item, idx) => {
             const Icon = item.icon;
             const isGapai = item.type === "gapai";
             return (
               <div
                  key={idx}
                  className={`p-8 md:p-10 rounded-3xl border transition-all duration-300 ${item.bgClass}`}
               >
                  {isGapai && (
                     <>
                        <div className="absolute top-0 right-6 sm:right-10 bg-amber-500 text-black text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-b-xl shadow-lg shadow-amber-500/20">
                           {t("Solusi Kami", "Our Standard")}
                        </div>
                     </>
                  )}
                  
                  <div className="flex items-center gap-4 mb-8 relative z-10 pb-6 border-b border-black/5 dark:border-white/5">
                     <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center ${isGapai ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-red-500/5 border border-red-500/10'} ${item.iconColor}`}>
                        <Icon size={28} className={isGapai ? 'stroke-[2]' : 'stroke-[1.5]'} />
                     </div>
                     <h3 className={`text-2xl sm:text-3xl font-black ${item.titleClass}`}>{item.title}</h3>
                  </div>

                  <ul className="space-y-5 relative z-10">
                     {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                           {isGapai ? (
                              <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                           ) : (
                              <XCircle size={20} className="text-red-500/40 shrink-0 mt-0.5" />
                           )}
                           <span className={`text-sm md:text-base leading-relaxed ${isGapai ? 'text-zinc-300 font-medium' : 'text-zinc-500 line-through decoration-red-500/30'}`}>
                               {point}
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>
             )
          })}
        </div>

        {/* STATS BANNER */}
        <div className="grid grid-cols-3 divide-x divide-black/10 dark:divide-white/10 p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-amber-500/5 dark:bg-amber-500/5">
          {stats.map((item, index) => (
            <div key={index} className="text-center px-2 md:px-4">
              <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-2">
                {item.value}
              </h3>
              <p className="text-[10px] md:text-xs text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
