export function AdminOverview({ logs, leaveRequests, classStudents, phoneTheme }) {
  const pendingRequests = leaveRequests.filter(r => r.status === "Pending");
  const presentSiswaCount = classStudents.filter(s => s.status === "Hadir").length;
  const attendanceRate = Math.round((presentSiswaCount / classStudents.length) * 100);

  return (
    <div className="flex flex-col space-y-4 text-left">
      <h3 className={`text-sm font-black uppercase tracking-widest ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
        Dashboard Admin
      </h3>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-3">
        <div className={`p-4 rounded-xl border text-left ${phoneTheme === 'dark' ? 'bg-[#121214] border-white/5' : 'bg-white border-zinc-200/80 shadow-sm'}`}>
          <span className="text-[7.5px] font-black uppercase tracking-wider text-emerald-500 block mb-0.5">HADIR SISWA</span>
          <h2 className={`text-xl font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-950'}`}>
            {attendanceRate}%
          </h2>
          <p className="text-[7px] text-zinc-500 font-bold uppercase mt-1">{presentSiswaCount}/{classStudents.length} HADIR</p>
        </div>

        <div className={`p-4 rounded-xl border text-left ${phoneTheme === 'dark' ? 'bg-[#121214] border-white/5' : 'bg-white border-zinc-200/80 shadow-sm'}`}>
          <span className="text-[7.5px] font-black uppercase tracking-wider text-amber-500 block mb-0.5">IZIN & CUTI</span>
          <h2 className={`text-xl font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-950'}`}>
            {pendingRequests.length}
          </h2>
          <p className="text-[7px] text-zinc-500 font-bold uppercase mt-1">BELUM DISETUJUI</p>
        </div>
      </div>

      {/* System Status logs */}
      <div className="space-y-2">
        <p className={`text-[7.5px] font-black uppercase tracking-wider ${phoneTheme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'}`}>Kehadiran Staf Pengajar</p>
        
        <div className={`border rounded-xl divide-y ${phoneTheme === 'dark' ? 'border-white/5 divide-white/5 bg-zinc-950/30' : 'border-zinc-200/80 divide-zinc-150 bg-white'}`}>
          <div className="p-3 flex items-center justify-between">
            <span className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-805'}`}>Bu Retno (Matematika)</span>
            <span className="text-[7.5px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-black uppercase">06:55</span>
          </div>
          <div className="p-3 flex items-center justify-between">
            <span className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-805'}`}>Pak Roni (Sejarah)</span>
            <span className="text-[7.5px] bg-rose-500/10 text-rose-500 px-2 py-0.5 rounded-full font-black uppercase">ALPA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
