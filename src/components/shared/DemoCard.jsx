import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import CleanPlaceholder from "../ui/CleanPlaceholder";

export default function DemoCard({ demo }) {
  const { t } = useLanguage();

  const categoryNames = {
    "landing page": t("Website", "Website"),
    "mobile app": t("Aplikasi Mobile", "Mobile App"),
    "sistem berbasis web": t("Sistem Web", "Web System"),
    software: t("Software", "Software"),
  };

  return (
    <div className="group flex flex-col bg-white dark:bg-zinc-900/60 rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-amber-500 focus-within:border-amber-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 h-full">
      <Link
        to={`/portfolio/${demo.id}`}
        aria-label={`${demo.name} — ${categoryNames[demo.category] || demo.category}`}
        className="w-full text-left relative flex flex-col flex-grow focus-visible:outline-none rounded-3xl"
      >
        {/* COVER AREA — pakai image asli bila ada */}
        <div className="h-48 sm:h-52 md:h-56 overflow-hidden relative p-2.5 bg-zinc-50 dark:bg-zinc-950/40 flex items-center justify-center border-b border-zinc-200/70 dark:border-zinc-800/70">
          {demo.image ? (
            <img
              src={demo.image}
              alt={demo.name}
              loading="lazy"
              className="h-full w-full object-cover rounded-2xl border border-zinc-200/80 dark:border-zinc-700/60 group-hover:scale-[1.02] transition-transform duration-500"
            />
          ) : (
            <CleanPlaceholder
              width={800}
              height={500}
              ratio="16:10"
              label={demo.name}
              sublabel={categoryNames[demo.category] || demo.category}
              badge={categoryNames[demo.category] || demo.category}
              className="h-full w-full"
            />
          )}
        </div>

        {/* CONTENT */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
          <div className="space-y-3">
            {/* CATEGORY TAG */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20">
                {categoryNames[demo.category] || demo.category}
              </span>
              {demo.isReal && (
                <>
                  <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                    {t("Real Project", "Real Project")}
                  </span>
                </>
              )}
            </div>

            {/* BRAND LOGO & NAME CARD */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-zinc-50/90 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/70 group-hover:border-amber-500/40 group-hover:bg-amber-500/[0.02] dark:group-hover:bg-amber-500/[0.04] transition-all duration-300 flex items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3 min-w-0">
                {/* Brand Logo */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-700/60 p-2 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300">
                  {typeof demo.icon === "string" &&
                  (demo.icon.includes("/") || demo.icon.includes(".")) ? (
                    <img
                      src={demo.icon}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400">
                      {demo.icon || demo.name?.charAt(0) || "•"}
                    </div>
                  )}
                </div>

                {/* Brand Name + Desc */}
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-[15px] font-bold text-zinc-900 dark:text-white leading-tight truncate group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {demo.name}
                  </h3>
                  {demo.desc && (
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug mt-0.5 line-clamp-1">
                      {t(demo.desc)}
                    </p>
                  )}
                </div>
              </div>

              {/* Arrow Indicator */}
              <div className="w-7 h-7 rounded-lg bg-white dark:bg-zinc-700/80 text-zinc-400 dark:text-zinc-400 group-hover:bg-amber-500 group-hover:text-white dark:group-hover:bg-amber-500 dark:group-hover:text-zinc-950 transition-all duration-200 flex items-center justify-center shrink-0 border border-zinc-200/60 dark:border-zinc-600/50 shadow-2xs">
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </div>
            </div>

            {/* Tech stack */}
            {demo.techStack && demo.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {demo.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-semibold border border-zinc-200/60 dark:border-zinc-700/60"
                  >
                    {tech}
                  </span>
                ))}
                {demo.techStack.length > 3 && (
                  <span className="px-2 py-1 rounded-md text-zinc-500 dark:text-zinc-500 text-[10px] font-bold">
                    +{demo.techStack.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* SIMPLE ACTION LINK */}
          <div className="mt-5 pt-3.5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            <span>{t("Lihat Demo", "View Demo")}</span>
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
