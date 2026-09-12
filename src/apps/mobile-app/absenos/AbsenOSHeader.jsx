export function AbsenOSHeader({ currentUser, onLogout, phoneTheme }) {
  return (
    <div className={`px-5 pt-5 pb-3.5 flex items-center justify-between border-b ${phoneTheme === 'dark' ? 'border-white/5 bg-zinc-950/20' : 'border-zinc-200/60 bg-white/60'} backdrop-blur-md z-40`}>
      <div className="flex items-center gap-2.5">
        <div className={`w-8 h-8 rounded-lg overflow-hidden border ${phoneTheme === 'dark' ? 'border-white/10' : 'border-zinc-200'}`}>
          <img src={currentUser.avatar} alt="avatar" />
        </div>
        <div>
          <h4 className={`text-xs font-black tracking-tight leading-tight ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>{currentUser.name}</h4>
          <p className={`text-[8px] font-bold uppercase tracking-wider ${phoneTheme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>{currentUser.subtitle}</p>
        </div>
      </div>
      <button 
        onClick={onLogout}
        className={`px-2.5 py-1 text-[8px] font-black uppercase tracking-wider rounded-lg border ${phoneTheme === 'dark' ? 'bg-zinc-900/60 border-white/5 text-zinc-400 hover:text-white' : 'bg-zinc-100 border-zinc-200 text-zinc-500 hover:text-zinc-900'} transition-all`}
      >
        Keluar
      </button>
    </div>
  );
}
