import { Image as ImageIcon } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function CleanPlaceholder({
  width = 800,
  height = 500,
  ratio = "16:10",
  label,
  sublabel,
  icon: Icon = ImageIcon,
  className = "",
  badge = "",
}) {
  const { t } = useLanguage();

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/60 border border-dashed border-zinc-300/90 dark:border-zinc-700/80 flex flex-col items-center justify-center p-5 text-center select-none group/ph transition-all duration-300 ${className}`}
    >
      {/* Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Blueprint Corner Accents */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-zinc-400/60 dark:border-zinc-600/60 pointer-events-none" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-zinc-400/60 dark:border-zinc-600/60 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-zinc-400/60 dark:border-zinc-600/60 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-zinc-400/60 dark:border-zinc-600/60 pointer-events-none" />

      {badge && (
        <span className="absolute top-2.5 right-2.5 text-[9px] font-mono tracking-wider text-zinc-400 dark:text-zinc-500 uppercase px-2 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-800/60 border border-zinc-300/40 dark:border-zinc-700/40">
          {badge}
        </span>
      )}

      {/* Content Area */}
      <div className="relative z-10 flex flex-col items-center gap-2 max-w-[280px]">
        <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700/90 shadow-sm flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover/ph:scale-105 group-hover/ph:text-amber-500 transition-all duration-300">
          <Icon size={18} strokeWidth={1.8} />
        </div>

        <div className="space-y-0.5">
          <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200 tracking-tight">
            {label || t("Placeholder Gambar", "Image Placeholder")}
          </p>
          {sublabel && (
            <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-normal">
              {sublabel}
            </p>
          )}
        </div>

        {/* Clean Dimension Tag */}
        <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700/80 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[11px] font-mono font-medium text-zinc-600 dark:text-zinc-300">
            {width} × {height} px <span className="text-zinc-400 font-normal">({ratio})</span>
          </span>
        </div>
      </div>
    </div>
  );
}
