export default function StatCard({ icon: Icon, label, value, change, color = "indigo" }) {
  const colorMap = {
    indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20" },
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
    violet: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20" },
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
    rose: { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20" },
    sky: { bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/20" },
  };

  const c = colorMap[color] || colorMap.indigo;

  return (
    <div className={`relative overflow-hidden rounded-2xl border ${c.border} bg-white/[0.02] p-5 transition-all duration-300 hover:bg-white/[0.04] group`}>
      {/* BG GLOW */}
      <div className={`absolute -top-6 -right-6 w-24 h-24 ${c.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs text-zinc-500 font-medium mb-1">{label}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
          {change && (
            <p className={`text-xs font-medium mt-1.5 ${change.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}>
              {change} dari bulan lalu
            </p>
          )}
        </div>
        <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
          <Icon size={18} className={c.text} />
        </div>
      </div>
    </div>
  );
}
