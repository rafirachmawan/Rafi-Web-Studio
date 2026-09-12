export function AppSettings({ sound, setSound, faceScan, setFaceScan, theme, setTheme }) {
  return (
    <div className="flex flex-col space-y-4 text-left">
      <h3 className={`text-sm font-black uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
        Pengaturan Aplikasi
      </h3>

      <div className={`rounded-xl border divide-y ${theme === 'dark' ? 'bg-zinc-950/40 border-white/5 divide-white/5' : 'bg-white border-zinc-200/80 divide-zinc-100 shadow-sm'}`}>
        
        {/* Toggle 1 */}
        <div className="p-4 flex items-center justify-between">
          <div>
            <h4 className={`text-[10px] font-black ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>Notifikasi Suara</h4>
            <p className="text-[7px] text-zinc-500 font-bold uppercase mt-0.5">Bunyi penanda absensi</p>
          </div>
          <button 
            onClick={() => setSound(!sound)}
            className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-300 ${sound ? 'bg-indigo-500' : 'bg-zinc-700'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${sound ? 'translate-x-4' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Toggle 2 */}
        <div className="p-4 flex items-center justify-between">
          <div>
            <h4 className={`text-[10px] font-black ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>Pemindai Wajib</h4>
            <p className="text-[7px] text-zinc-500 font-bold uppercase mt-0.5 font-sans">Wajib verifikasi biometrik</p>
          </div>
          <button 
            onClick={() => setFaceScan(!faceScan)}
            className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-300 ${faceScan ? 'bg-indigo-500' : 'bg-zinc-700'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${faceScan ? 'translate-x-4' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Toggle 3 */}
        <div className="p-4 flex items-center justify-between">
          <div>
            <h4 className={`text-[10px] font-black ${theme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>Tema Emulator</h4>
            <p className="text-[7px] text-zinc-500 font-bold uppercase mt-0.5">Ubah kontras warna HP</p>
          </div>
          <div className="flex gap-1 bg-zinc-900 p-0.5 rounded-lg border border-white/5">
            <button 
              onClick={() => setTheme("dark")}
              className={`px-2.5 py-1 text-[7.5px] font-black uppercase rounded-md transition-colors ${theme === 'dark' ? 'bg-indigo-500 text-white' : 'text-zinc-500'}`}
            >
              Dark
            </button>
            <button 
              onClick={() => setTheme("light")}
              className={`px-2.5 py-1 text-[7.5px] font-black uppercase rounded-md transition-colors ${theme === 'light' ? 'bg-indigo-500 text-white' : 'text-zinc-500'}`}
            >
              Light
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
