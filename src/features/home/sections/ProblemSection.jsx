import { X, AlertCircle } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import CleanPlaceholder from "../../../components/ui/CleanPlaceholder";

const problems = [
  {
    id: "Website lambat dan tidak responsif.",
    en: "Website is slow and unresponsive.",
  },
  {
    id: "Tidak muncul di Google.",
    en: "Doesn't appear on Google.",
  },
  {
    id: "Tidak mencerminkan kredibilitas brand.",
    en: "Doesn't reflect brand credibility.",
  },
];

export default function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white dark:bg-[#050508] overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* LEFT — HEADING & SUBTEXT */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-extrabold text-zinc-900 dark:text-white leading-[1.15] tracking-tight font-heading">
              {t("Website Anda Online.", "Your Website is Online.")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                {t("Tapi Sudah Menghasilkan?", "But Is It Generating Results?")}
              </span>
            </h2>

            <div className="mt-7 sm:mt-8 space-y-1">
              <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base font-normal leading-relaxed">
                {t("Banyak bisnis punya website.", "Many businesses have a website.")}
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base font-normal leading-relaxed">
                {t("Tapi sedikit yang benar-benar menghasilkan leads.", "But few actually generate leads.")}
              </p>
            </div>
          </div>

          {/* RIGHT — IMAGE + PROBLEM LIST CARD */}
          <div className="flex-1 w-full max-w-md">
            <div className="rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg">
              {/* Clean Placeholder Image */}
              <div className="p-3 bg-zinc-100/40 dark:bg-zinc-950/40 border-b border-zinc-200/80 dark:border-zinc-800/80">
                <CleanPlaceholder
                  width={800}
                  height={500}
                  ratio="16:10"
                  label={t("Placeholder Ilustrasi Masalah", "Problem Illustration Placeholder")}
                  sublabel={t("Grafik / visual website belum optimal", "Visual of unoptimized website")}
                  icon={AlertCircle}
                  badge="Visual"
                  className="aspect-[16/10]"
                />
              </div>

              {/* Problem List */}
              <div className="px-6 py-5 space-y-3">
                {problems.map((problem, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center">
                      <X size={12} className="text-red-500" strokeWidth={3} />
                    </span>
                    <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">
                      {t(problem)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
