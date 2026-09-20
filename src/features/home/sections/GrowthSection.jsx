import { ShieldCheck, Network, TrendingUp, Globe, Laptop } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import CleanPlaceholder from "../../../components/ui/CleanPlaceholder";

const benefits = [
  {
    icon: ShieldCheck,
    text: {
      id: "Meningkatkan kepercayaan",
      en: "Increase credibility & trust",
    },
  },
  {
    icon: Network,
    text: {
      id: "Menarik traffic organik",
      en: "Attract organic traffic",
    },
  },
  {
    icon: TrendingUp,
    text: {
      id: "Menghasilkan leads otomatis",
      en: "Generate automated leads",
    },
  },
  {
    icon: Globe,
    text: {
      id: "Membuka pasar lebih luas",
      en: "Expand to wider markets",
    },
  },
];

export default function GrowthSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white dark:bg-[#050508] overflow-hidden border-t border-zinc-100 dark:border-zinc-900/60">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* LEFT — VISUAL / ILLUSTRATION PLACEHOLDER */}
          <div className="flex-1 w-full max-w-lg order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg p-3 sm:p-4">
              <CleanPlaceholder
                width={800}
                height={550}
                ratio="16:11"
                label={t("Placeholder Ilustrasi Ekosistem", "Ecosystem Illustration Placeholder")}
                sublabel={t("Grafik arsitektur pertumbuhan & konversi digital", "Digital growth & conversion architecture visual")}
                icon={Laptop}
                badge="Architecture"
                className="aspect-[16/11]"
              />
            </div>
          </div>

          {/* RIGHT — HEADING, SUBTITLE & 2x2 BENEFITS */}
          <div className="flex-1 max-w-xl text-left order-1 lg:order-2">
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-extrabold text-zinc-900 dark:text-white leading-[1.15] tracking-tight font-heading">
              {t("Website Bukan Biaya.", "A Website is Not an Expense.")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                {t("Ini Mesin Pertumbuhan.", "It's a Growth Engine.")}
              </span>
            </h2>

            <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-medium">
              {t("Seharusnya, Website yang tepat bisa:", "The right website should be able to:")}
            </p>

            {/* 2x2 BENEFITS GRID */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5 group">
                  <div className="shrink-0 w-11 h-11 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-105 group-hover:bg-amber-500/20 transition-all duration-300">
                    <item.icon size={20} strokeWidth={2.2} />
                  </div>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-[15px] font-semibold leading-snug">
                    {t(item.text)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />
    </section>
  );
}
