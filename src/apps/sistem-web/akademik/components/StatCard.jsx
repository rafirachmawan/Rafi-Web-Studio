export default function StatCard({ icon: Icon, label, value, change, color = "cyan" }) {
  const colorMap = {
    cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" },
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
    fuchsia: { bg: "bg-fuchsia-500/10", text: "text-fuchsia-400", border: "border-fuchsia-500/20" },
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
    rose: { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20" },
    sky: { bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/20" },
  };

  const c = colorMap[color] || colorMap.cyan;

  return (
    <div className={`relative overflow-hidden rounded-[24px] border ${c.border} bg-white/[0.02] p-6 transition-all duration-500 hover:bg-white/[0.04] group hover:-translate-y-1`}>
      {/* BG GLOW */}
      <div className={`absolute -top-12 -right-12 w-32 h-32 ${c.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-[11px] text-zinc-500 font-black uppercase tracking-wider mb-2">{label}</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-black text-white tracking-tight">{value}</p>
            {change && (
              <p className={`text-[10px] font-black tracking-tighter ${change.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}>
                {change}
              </p>
            )}
          </div>
        </div>
        <div className={`w-14 h-14 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
          <Icon size={24} className={c.text} />
        </div>
      </div>
    </div>
  );
}
