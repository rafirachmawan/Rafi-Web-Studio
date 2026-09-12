export function MuridHistory({ logs, leaveRequests, currentUser, phoneTheme }) {
  const myLogs = logs.filter(l => l.name === currentUser.name && l.role === currentUser.role);
  const myLeaves = leaveRequests.filter(l => l.name === currentUser.name);

  return (
    <div className="flex flex-col space-y-4 text-left">
      <h3 className={`text-sm font-black uppercase tracking-widest ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
        Riwayat Kehadiran
      </h3>

      {/* Leave Requests Logs section */}
      {myLeaves.length > 0 && (
        <div className="space-y-2">
          <p className={`text-[7.5px] font-black uppercase tracking-wider ${phoneTheme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'}`}>Pengajuan Cuti / Izin</p>
          
          <div className={`border rounded-xl divide-y ${phoneTheme === 'dark' ? 'border-white/5 divide-white/5 bg-zinc-950/30' : 'border-zinc-200/80 divide-zinc-150 bg-white'}`}>
            {myLeaves.map((leave) => (
              <div key={leave.id} className="p-3 flex items-center justify-between">
                <div>
                  <h4 className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
                    {leave.type} ({leave.date})
                  </h4>
                  <p className={`text-[8px] max-w-[150px] truncate ${phoneTheme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>{leave.reason}</p>
                </div>
                <span className={`text-[7.5px] font-black px-2 py-0.5 rounded-full uppercase tracking-tight ${
                  leave.status === "Disetujui" 
                    ? 'bg-emerald-500/10 text-emerald-500' 
                    : leave.status === "Ditolak"
                      ? 'bg-rose-500/10 text-rose-500'
                      : 'bg-zinc-500/10 text-zinc-500'
                }`}>
                  {leave.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Daily Check-In Logs Section */}
      <div className="space-y-2">
        <p className={`text-[7.5px] font-black uppercase tracking-wider ${phoneTheme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'}`}>Absensi Harian</p>
        
        {myLogs.length === 0 ? (
          <p className="text-[9px] text-zinc-500 italic text-center py-4">Belum ada riwayat absensi.</p>
        ) : (
          <div className={`border rounded-xl divide-y ${phoneTheme === 'dark' ? 'border-white/5 divide-white/5 bg-zinc-950/30' : 'border-zinc-200/80 divide-zinc-150 bg-white'}`}>
            {myLogs.map((h) => (
              <div key={h.id} className="p-3 flex items-center justify-between">
                <div>
                  <p className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-850'}`}>{h.date}</p>
                  <p className={`text-[7.5px] font-black uppercase mt-0.5 ${
                    h.status === 'Hadir' ? 'text-emerald-500' : 'text-amber-500'
                  }`}>{h.status}</p>
                </div>
                <p className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {h.in} - {h.out}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
