import { Bell, Search } from "lucide-react";

export default function TopBar({ title, subtitle, user }) {
  return (
    <header className="hidden lg:flex sticky top-0 z-30 h-20 items-center justify-between px-8 bg-[#0a0a12]/60 backdrop-blur-xl border-b border-white/[0.06]">
      {/* LEFT */}
      <div>
        <h2 className="text-lg font-black text-white leading-tight tracking-tight">{title}</h2>
        {subtitle && <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5">{subtitle}</p>}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        {/* SEARCH */}
        <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] rounded-2xl px-4 py-2.5 transition-all focus-within:border-cyan-500/40 focus-within:bg-white/[0.05]">
          <Search size={15} className="text-zinc-500" />
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-transparent text-xs text-zinc-300 placeholder:text-zinc-600 outline-none w-48 font-medium"
          />
        </div>

        <div className="flex items-center gap-4">
          {/* NOTIF */}
          <button className="relative p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] transition-all group">
            <Bell size={18} className="text-zinc-400 group-hover:text-white" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-cyan-500 rounded-full border-2 border-[#0a0a12] shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
          </button>

          {/* AVATAR */}
          <div className="flex items-center gap-3 pl-4 border-l border-white/[0.06]">
            <div className="text-right hidden xl:block">
              <p className="text-xs font-bold text-white">{user?.nama}</p>
              <p className="text-[10px] text-zinc-500 font-medium">Online</p>
            </div>
            <img
              src={user?.avatar}
              alt=""
              className="w-10 h-10 rounded-2xl object-cover ring-2 ring-white/10 shadow-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
