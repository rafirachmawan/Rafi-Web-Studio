export function BarChart({ data, color = "indigo", height = 120 }) {
  const max = Math.max(...data.map((d) => d.value), 1);

  const colorMap = {
    indigo: "from-indigo-500 to-indigo-400",
    emerald: "from-emerald-500 to-emerald-400",
    violet: "from-violet-500 to-violet-400",
    amber: "from-amber-500 to-amber-400",
  };

  const gradient = colorMap[color] || colorMap.indigo;

  return (
    <div className="flex items-end gap-2" style={{ height }}>
      {data.map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
          <div className="w-full relative rounded-t-lg overflow-hidden bg-white/[0.04]" style={{ height }}>
            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${gradient} rounded-t-lg transition-all duration-700 ease-out`}
              style={{ height: `${(d.value / max) * 100}%` }}
            />
          </div>
          <span className="text-[10px] text-zinc-500 font-medium">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

export function DonutChart({ value, total, color = "indigo", size = 80, label }) {
  const pct = total > 0 ? (value / total) * 100 : 0;
  const circumference = 2 * Math.PI * 34;
  const offset = circumference - (pct / 100) * circumference;

  const colorMap = {
    indigo: "#6366f1",
    emerald: "#10b981",
    violet: "#8b5cf6",
    amber: "#f59e0b",
    rose: "#f43f5e",
  };

  const strokeColor = colorMap[color] || colorMap.indigo;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
        <circle
          cx="40" cy="40" r="34" fill="none"
          stroke={strokeColor}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 40 40)"
          className="transition-all duration-1000 ease-out"
        />
        <text x="40" y="38" textAnchor="middle" className="fill-white text-sm font-bold" style={{ fontSize: "14px" }}>
          {Math.round(pct)}%
        </text>
        <text x="40" y="52" textAnchor="middle" className="fill-zinc-500" style={{ fontSize: "8px" }}>
          {value}/{total}
        </text>
      </svg>
      {label && <span className="text-[10px] text-zinc-500 font-medium">{label}</span>}
    </div>
  );
}
