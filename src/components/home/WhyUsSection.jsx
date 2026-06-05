import { Star, XCircle, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

export default function WhyUsSection() {
  const { t } = useLanguage();

  const stats = [
    { value: "50+", label: t("Project Selesai", "Projects Delivered") },
    { value: "99%", label: t("Kepuasan Klien", "Client Satisfaction") },
    { value: "24/7", label: t("Dukungan Teknis", "Technical Support") },
  ];

  const comparisons = [
    {
      type: "biasa",
      title: t("Website Biasa", "Ordinary Website"),
      icon: AlertCircle,
      iconColor: "text-red-500",
      bgClass: "bg-zinc-50 dark:bg-zinc-900/30 border-black/5 dark:border-white/5 opacity-80",
      titleClass: "text-zinc-500 dark:text-zinc-400",
      points: [
        t("Template kaku, pasaran, dan membosankan", "Rigid, generic, and boring templates"),
        t("Kinerja lambat & skor SEO rendah", "Slow performance & low SEO scores"),
        t("Sistem berdiri sendiri (tidak terintegrasi)", "Standalone system (not integrated)"),
        t("Pengelolaan data manual dan rumit", "Manual and complicated data management"),
        t("Tanpa dukungan teknis purna jual", "No after-sales technical support"),
      ]
    },
    {
      type: "gapai",
      title: t("GapaiDigital", "GapaiDigital"),
      icon: ShieldCheck,
      iconColor: "text-amber-500",
      bgClass: "bg-[#0a0a0a] border-amber-500/30 shadow-2xl shadow-amber-500/10 z-10 relative overflow-hidden",
      titleClass: "text-white",
      points: [
        t("Desain UI/UX eksklusif, dinamis & premium", "Exclusive, dynamic & premium UI/UX design"),
        t("Super kilat dengan optimasi performa 99%", "Super fast with 99% performance optimization"),
        t("Ekosistem terintegrasi (Web, App, Dashboard)", "Integrated ecosystem (Web, App, Dashboard)"),
        t("Manajemen terpusat otomatis via cloud", "Automated centralized management via cloud"),
        t("Garansi maintenance & dukungan 24/7", "Maintenance warranty & 24/7 support"),
      ]
    }
  ];

  return (
    <section id="why-us" className="relative py-24 overflow-hidden bg-white dark:bg-[#050508]">
      {/* GLOW DECORATIVE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION - CENTERED */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-6"
          >
            {t("⚡ Mitra Digital Anda", "⚡ Your Digital Partner")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-zinc-900 dark:text-white mb-6"
          >
            {t("Standar Baru", "The New Standard")} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              {t("Ekosistem Digital", "of Digital Ecosystem")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            {t("Kami membantu bisnis lokal dan UMKM naik tingkat melalui digitalisasi yang dirancang secara matang, responsif, dan fokus pada peningkatan penjualan.", "We help local businesses and MSMEs scale up through carefully planned, responsive, and conversion-focused digitalization.")}
          </motion.p>
        </div>

        {/* COMPARISON CARDS */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-5xl mx-auto items-stretch">
          {comparisons.map((item, idx) => {
             const Icon = item.icon;
             const isGapai = item.type === "gapai";
             return (
               <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`p-8 md:p-10 rounded-3xl border transition-all duration-300 ${item.bgClass}`}
               >
                  {isGapai && (
                     <>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />
                        <div className="absolute top-0 right-6 sm:right-10 bg-amber-500 text-black text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-b-xl shadow-lg shadow-amber-500/20">
                           {t("Solusi Kami", "Our Solution")}
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
               </motion.div>
             )
          })}
        </div>

        {/* STATS BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 divide-x divide-black/10 dark:divide-white/10 p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-amber-500/5 dark:bg-amber-500/5"
        >
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
        </motion.div>

      </div>
    </section>
  );
}
