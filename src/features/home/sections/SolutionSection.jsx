import { ShieldCheck, TrendingUp, Zap, Globe } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

const benefits = [
  {
    icon: ShieldCheck,
    label: { id: "Meningkatkan kepercayaan", en: "Build trust & credibility" },
  },
  {
    icon: TrendingUp,
    label: { id: "Menarik traffic organik", en: "Attract organic traffic" },
  },
  {
    icon: Zap,
    label: { id: "Menghasilkan leads otomatis", en: "Generate leads automatically" },
  },
  {
    icon: Globe,
    label: { id: "Membuka pasar lebih luas", en: "Expand to wider markets" },
  },
];

export default function SolutionSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-zinc-950 dark:bg-[#050508] overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* LEFT — PLACEHOLDER IMAGE */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-black border border-white/10 shadow-2xl">
              {/* Placeholder visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-center px-8">
                  <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <p className="text-zinc-500 text-[10px] font-medium tracking-wider uppercase">
                    {t("Ilustrasi — segera diganti", "Illustration — coming soon")}
                  </p>
                </div>
              </div>
              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>
          </div>

          {/* RIGHT — HEADING & BENEFITS */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-extrabold text-white leading-[1.15] tracking-tight font-heading">
              {t("Website Bukan Biaya.", "A Website Isn't a Cost.")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                {t("Ini Mesin Pertumbuhan.", "It's a Growth Engine.")}
              </span>
            </h2>

            <p className="mt-6 text-zinc-400 text-sm sm:text-[15px] font-semibold">
              {t("Seharusnya, Website yang tepat bisa:", "The right website should be able to:")}
            </p>

            {/* BENEFITS GRID 2x2 */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                      <Icon size={20} className="text-amber-500" />
                    </div>
                    <span className="text-white text-sm font-semibold leading-snug">
                      {t(item.label)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
