export function GuruClassMonitor({ classStudents, phoneTheme }) {
  return (
    <div className="flex flex-col space-y-4 text-left">
      <div className="flex items-center justify-between">
        <h3 className={`text-sm font-black uppercase tracking-widest ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
          Monitoring Kelas
        </h3>
        <span className="text-[7.5px] bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 px-2 py-0.5 rounded-full font-black uppercase">XII IPA 1</span>
      </div>

      <div className={`border rounded-xl divide-y ${phoneTheme === 'dark' ? 'border-white/5 divide-white/5 bg-zinc-950/30' : 'border-zinc-200/80 divide-zinc-150 bg-white'}`}>
        {classStudents.map((student) => (
          <div key={student.id} className="p-3 flex items-center justify-between">
            <div>
              <h4 className={`text-[9.5px] font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-850'}`}>{student.name}</h4>
              <p className={`text-[7.5px] font-bold text-zinc-500 mt-0.5`}>MASUK: {student.time}</p>
            </div>
            
            <span className={`text-[7.5px] font-black px-2 py-0.5 rounded-full uppercase tracking-tight ${
              student.status === "Hadir" 
                ? 'bg-emerald-500/10 text-emerald-500' 
                : student.status === "Sakit" || student.status === "Izin"
                  ? 'bg-amber-500/10 text-amber-500'
                  : 'bg-rose-500/10 text-rose-500'
            }`}>
              {student.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
