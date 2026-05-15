import { Bell, Search } from "lucide-react";

export default function TopBar({ title, subtitle, user }) {
  return (
    <header className="sticky top-0 z-30 h-16 flex items-center justify-between px-6 bg-[#0a0a12]/80 backdrop-blur-2xl border-b border-white/[0.06]">
      {/* LEFT */}
      <div>
        <h2 className="text-base font-bold text-white leading-tight">{title}</h2>
        {subtitle && <p className="text-xs text-zinc-500 font-medium">{subtitle}</p>}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {/* SEARCH */}
        <div className="hidden md:flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-xl px-3 py-2">
          <Search size={14} className="text-zinc-500" />
          <input
            type="text"
            placeholder="Cari..."
            className="bg-transparent text-xs text-zinc-300 placeholder:text-zinc-600 outline-none w-40"
          />
        </div>

        {/* NOTIF */}
        <button className="relative p-2 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition-colors">
          <Bell size={16} className="text-zinc-400" />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0a0a12]" />
        </button>

        {/* AVATAR */}
        <img
          src={user?.avatar}
          alt={user?.nama}
          className="w-8 h-8 rounded-xl object-cover ring-2 ring-white/10"
        />
      </div>
    </header>
  );
}
