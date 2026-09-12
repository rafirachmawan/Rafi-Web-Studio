import { LogOut } from "lucide-react";

export function AbsenOSLoginScreen({ onLogin, phoneTheme, setPhoneTheme }) {
  return (
    <div className="h-full flex flex-col justify-between p-6">
      {/* Top Header */}
      <div className="flex justify-between items-center">
        <h3 className={`text-[10px] font-black tracking-[0.2em] uppercase ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-950'}`}>
          ABSEN<span className="text-indigo-500">.OS</span>
        </h3>
        <button 
          onClick={() => setPhoneTheme(phoneTheme === 'dark' ? 'light' : 'dark')}
          className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider border ${phoneTheme === 'dark' ? 'bg-white/5 border-white/10 text-zinc-400' : 'bg-zinc-100 border-zinc-200 text-zinc-700'}`}
        >
          {phoneTheme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>

      {/* Lockscreen minimalist status ring */}
      <div className="flex flex-col items-center justify-center my-6">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 border ${phoneTheme === 'dark' ? 'bg-zinc-950 border-white/5 text-zinc-600 shadow-inner' : 'bg-white border-zinc-200/80 text-zinc-400 shadow-sm'}`}>
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
        </div>
        <p className={`text-xs font-bold uppercase tracking-widest ${phoneTheme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>Silakan Masuk</p>
      </div>

      {/* Role Selection Cards */}
      <div className="space-y-3">
        {[
          { role: "murid", label: "Murid / Siswa", color: "indigo" },
          { role: "guru", label: "Guru / Wali Kelas", color: "emerald" },
          { role: "admin", label: "Super Admin", color: "amber" },
        ].map((option) => (
          <button
            key={option.role}
            onClick={() => onLogin(option.role)}
            className={`w-full p-4 rounded-xl border transition-all hover:scale-105 ${
              phoneTheme === 'dark' 
                ? 'bg-zinc-900/60 border-white/10 hover:border-white/20' 
                : 'bg-white border-zinc-200 hover:border-zinc-300'
            }`}
          >
            <p className={`text-xs font-bold uppercase tracking-tight ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>{option.label}</p>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center">
        <button className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-wider border ${phoneTheme === 'dark' ? 'bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10' : 'bg-zinc-100 border-zinc-200 text-zinc-500 hover:bg-zinc-200'} transition-all`}>
          <LogOut size={10} />
          Keluar Aplikasi
        </button>
      </div>
    </div>
  );
}
