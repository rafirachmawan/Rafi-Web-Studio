export function GuruHistory({ logs, currentUser, phoneTheme }) {
  const myLogs = logs.filter(l => l.name === currentUser.name && l.role === currentUser.role);

  return (
    <div className="flex flex-col space-y-4 text-left">
      <h3 className={`text-sm font-black uppercase tracking-widest ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
        Riwayat Kehadiran
      </h3>

      {myLogs.length === 0 ? (
        <p className="text-[9px] text-zinc-500 italic text-center py-4">Belum ada riwayat absensi.</p>
      ) : (
        <div className={`border rounded-xl divide-y ${phoneTheme === 'dark' ? 'border-white/5 divide-white/5 bg-zinc-950/30' : 'border-zinc-200/80 divide-zinc-150 bg-white'}`}>
          {myLogs.map((h) => (
            <div key={h.id} className="p-3 flex items-center justify-between">
              <div>
                <p className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-850'}`}>{h.date}</p>
                <p className="text-[7.5px] font-black uppercase mt-0.5 text-emerald-500">{h.status}</p>
              </div>
              <p className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {h.in} - {h.out}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
