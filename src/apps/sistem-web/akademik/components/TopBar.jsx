import { Bell, Search, Settings } from "lucide-react";

export default function TopBar({ title, subtitle, action }) {
  const now = new Date();

  return (
    <header className="h-20 border-b border-white/5 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-8">
      <div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-xs text-zinc-500 font-medium mt-0.5">
          {subtitle || now.toLocaleDateString("id-ID", { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      <div className="flex items-center gap-4">
        {action && (
          <div className="flex items-center">
            {action}
          </div>
        )}
        
        <button className="p-2.5 rounded-xl bg-white/5 text-zinc-400 hover:text-white transition-all relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-zinc-900" />
        </button>
        <div className="h-8 w-[1px] bg-white/5 mx-1" />
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-white">System Status</p>
            <p className="text-[10px] text-emerald-500 font-bold flex items-center justify-end gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Online
            </p>
          </div>
          <button className={`p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400`}>
            <Settings size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
