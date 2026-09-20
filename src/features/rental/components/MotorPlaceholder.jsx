import { Bike } from "lucide-react";

/**
 * A clean motorcycle placeholder component for the Yamaha catalog.
 * Replaces actual product images with a styled placeholder
 * showing the motor name and category.
 */
export function MotorPlaceholder({ name, category, className = "" }) {
  // Category-based color themes
  const colorMap = {
    MAXi: { bg: "from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30", border: "border-blue-200/60 dark:border-blue-800/50", text: "text-blue-600 dark:text-blue-400", icon: "text-blue-500 dark:text-blue-400" },
    Classy: { bg: "from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30", border: "border-amber-200/60 dark:border-amber-800/50", text: "text-amber-600 dark:text-amber-400", icon: "text-amber-500 dark:text-amber-400" },
    Matic: { bg: "from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/30", border: "border-green-200/60 dark:border-green-800/50", text: "text-green-600 dark:text-green-400", icon: "text-green-500 dark:text-green-400" },
    Sport: { bg: "from-red-50 to-rose-50 dark:from-red-950/40 dark:to-rose-950/30", border: "border-red-200/60 dark:border-red-800/50", text: "text-red-600 dark:text-red-400", icon: "text-red-500 dark:text-red-400" },
    "Off-Road": { bg: "from-orange-50 to-yellow-50 dark:from-orange-950/40 dark:to-yellow-950/30", border: "border-orange-200/60 dark:border-orange-800/50", text: "text-orange-600 dark:text-orange-400", icon: "text-orange-500 dark:text-orange-400" },
    Moped: { bg: "from-purple-50 to-violet-50 dark:from-purple-950/40 dark:to-violet-950/30", border: "border-purple-200/60 dark:border-purple-800/50", text: "text-purple-600 dark:text-purple-400", icon: "text-purple-500 dark:text-purple-400" },
  };

  const colors = colorMap[category] || colorMap["MAXi"];

  return (
    <div
      className={`relative w-full h-40 sm:h-44 flex flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-br ${colors.bg} border border-dashed ${colors.border} select-none overflow-hidden group/motor ${className}`}
    >
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Corner Accents */}
      <div className={`absolute top-2 left-2 w-1.5 h-1.5 border-t border-l ${colors.border} pointer-events-none`} />
      <div className={`absolute top-2 right-2 w-1.5 h-1.5 border-t border-r ${colors.border} pointer-events-none`} />
      <div className={`absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l ${colors.border} pointer-events-none`} />
      <div className={`absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r ${colors.border} pointer-events-none`} />

      {/* Motorcycle Silhouette SVG */}
      <div className={`relative z-10 ${colors.icon} opacity-30 group-hover/motor:opacity-50 group-hover/motor:scale-110 transition-all duration-500`}>
        <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Simplified motorcycle silhouette */}
          <ellipse cx="16" cy="38" rx="10" ry="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="64" cy="38" rx="10" ry="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="16" cy="38" r="3" fill="currentColor" opacity="0.4" />
          <circle cx="64" cy="38" r="3" fill="currentColor" opacity="0.4" />
          {/* Frame */}
          <path d="M26 38 L35 18 L55 14 L64 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Seat */}
          <path d="M32 20 L48 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          {/* Handlebar */}
          <path d="M55 14 L58 8 L62 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Engine */}
          <rect x="30" y="26" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.15" />
          {/* Exhaust */}
          <path d="M26 38 L20 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          {/* Fender front */}
          <path d="M60 28 Q68 30 68 38" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Name Label */}
      <div className="relative z-10 text-center px-3">
        <p className={`text-[10px] font-bold uppercase tracking-widest ${colors.text} opacity-60`}>
          {name || "Motor Yamaha"}
        </p>
        <p className="text-[9px] text-zinc-400 dark:text-zinc-500 font-mono mt-0.5">
          Placeholder • Foto segera hadir
        </p>
      </div>
    </div>
  );
}
