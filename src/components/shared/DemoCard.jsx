import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight } from "lucide-react";
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
    <div className="group flex flex-col bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/5">
      <Link
        to={`/portfolio/${demo.id}`}
        className="w-full text-left relative flex flex-col flex-grow"
      >
        {/* PLACEHOLDER MOCKUP AREA */}
        <div className="h-52 md:h-60 overflow-hidden relative p-3.5 bg-zinc-100/50 dark:bg-zinc-950/40 flex items-center justify-center border-b border-zinc-200/60 dark:border-zinc-800/60">
          <CleanPlaceholder
            width={800}
            height={500}
            ratio="16:10"
            label={demo.name}
            sublabel={categoryNames[demo.category] || demo.category}
            badge={categoryNames[demo.category] || demo.category}
            className="h-full w-full"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-8 flex flex-col flex-grow">
          {/* TAGS */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20">
              {categoryNames[demo.category] || demo.category}
            </span>
            {demo.isReal && (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  {t("Real Project", "Real Project")}
                </span>
              </>
            )}
          </div>

          {/* ICON & TITLE */}
          <div className="flex items-center gap-2.5 mb-3">
            {typeof demo.icon === "string" &&
            (demo.icon.includes("/") || demo.icon.includes(".")) ? (
              <img
                src={demo.icon}
                alt={demo.name}
                className="w-7 h-7 object-contain shrink-0"
              />
            ) : (
              <div className="text-base text-amber-600 dark:text-amber-500 bg-amber-500/10 w-7 h-7 flex items-center justify-center rounded-lg overflow-hidden shrink-0">
                {demo.icon}
              </div>
            )}
            <h3 className="text-sm md:text-base font-bold leading-snug text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">
              {demo.name}
            </h3>
          </div>

          {/* LINK */}
          <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
            {t("Lihat Demo", "View Demo")}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
