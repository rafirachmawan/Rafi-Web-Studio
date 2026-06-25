import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function DemoCard({ demo }) {
  const { t } = useLanguage();

  const categoryNames = {
    "landing page": t("Website", "Website"),
    "mobile app": t("Aplikasi Mobile", "Mobile App"),
    "sistem berbasis web": t("Sistem Web", "Web System"),
    "software": t("Software", "Software")
  };

  return (
    <div className="group flex flex-col bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/5">
      <Link
        to={`/portfolio/${demo.id}`}
        className="block w-full text-left relative flex flex-col flex-grow"
      >
        {/* IMAGE */}
        <div className="h-52 md:h-64 overflow-hidden relative bg-zinc-200 dark:bg-black/50">
          <img
            src={demo.image}
            alt={demo.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <div className="flex items-center gap-3 mb-3">
            <div className="text-xl text-amber-600 dark:text-amber-500 bg-amber-500/10 w-8 h-8 flex items-center justify-center rounded-lg">
              {demo.icon}
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">
              {demo.name}
            </h3>
          </div>

          {/* DESC */}
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-grow">
            {t(demo.desc)}
          </p>
          
          {/* LINK */}
          <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
             {t("Lihat Demo", "View Demo")}
             <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </div>
  );
}
