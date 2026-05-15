export default function StatCard({ title, value, icon: Icon, trend, color = "indigo" }) {
  const colorMap = {
    indigo: "text-indigo-400 bg-indigo-500/10",
    cyan: "text-cyan-400 bg-cyan-500/10",
    emerald: "text-emerald-400 bg-emerald-500/10",
    rose: "text-rose-400 bg-rose-500/10",
    amber: "text-amber-400 bg-amber-500/10",
  };

  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-all group">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-2xl ${colorMap[color] || colorMap.indigo} group-hover:scale-110 transition-transform`}>
          <Icon size={24} />
        </div>
        {trend && (
          <span className={`text-xs font-bold px-2 py-1 rounded-lg ${trend.isUp ? 'text-emerald-400 bg-emerald-500/10' : 'text-rose-400 bg-rose-500/10'}`}>
            {trend.value}
          </span>
        )}
      </div>
      <p className="text-zinc-500 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-2xl font-black text-white tracking-tight">{value}</h3>
    </div>
  );
}
