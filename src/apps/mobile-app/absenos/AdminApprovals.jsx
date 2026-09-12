export function AdminApprovals({ queue, onApproval, phoneTheme }) {
  const pendings = queue.filter(r => r.status === "Pending");

  return (
    <div className="flex flex-col space-y-4 text-left">
      <h3 className={`text-sm font-black uppercase tracking-widest ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
        Antrean Izin & Cuti
      </h3>

      {pendings.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-[9.5px] text-zinc-500 font-bold uppercase tracking-wider">Antrean Kosong</p>
          <p className="text-[8px] text-zinc-500 mt-1">Semua permohonan telah selesai diproses.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {pendings.map((req) => (
            <div 
              key={req.id}
              className={`p-4 rounded-xl border relative overflow-hidden ${
                phoneTheme === 'dark' ? 'bg-[#121214] border-white/5' : 'bg-white border-zinc-200/80 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-2.5">
                <div>
                  <h4 className={`text-[10px] font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>{req.name}</h4>
                  <p className="text-[7px] text-zinc-500 font-black uppercase tracking-widest mt-0.5">Siswa Kelas XII</p>
                </div>
                <span className="text-[7.5px] bg-indigo-500/10 text-indigo-500 px-2 py-0.5 rounded-full font-black uppercase">
                  {req.type}
                </span>
              </div>

              <div className={`p-3 rounded-xl text-[9px] leading-relaxed mb-3 ${
                phoneTheme === 'dark' ? 'bg-zinc-900/60 text-zinc-400' : 'bg-zinc-50 text-zinc-600'
              }`}>
                <p className={`font-black mb-1 ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>TANGGAL: {req.date}</p>
                <p className="font-semibold italic">"{req.reason}"</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onApproval(req.id, false)}
                  className="py-2 rounded-lg border border-rose-500/20 bg-rose-500/5 hover:bg-rose-500/10 text-rose-500 text-[8px] font-black uppercase tracking-wider active:scale-[0.98]"
                >
                  Tolak
                </button>
                <button
                  onClick={() => onApproval(req.id, true)}
                  className="py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-[8px] font-black uppercase tracking-wider active:scale-[0.98]"
                >
                  Setujui
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
