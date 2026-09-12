import { useState } from "react";

export function MuridLeave({ onSubmit, phoneTheme }) {
  const [leaveType, setLeaveType] = useState("Sakit");
  const [leaveDate, setLeaveDate] = useState("18 Mei 2024");
  const [leaveReason, setLeaveReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!leaveReason.trim()) return;
    onSubmit(leaveType, leaveDate, leaveReason);
    setLeaveReason("");
  };

  return (
    <div className="flex flex-col space-y-4 text-left">
      <h3 className={`text-sm font-black uppercase tracking-widest ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
        Pengajuan Cuti & Izin
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Type selector */}
        <div>
          <label className={`text-[7.5px] font-black uppercase tracking-wider block mb-1.5 ${phoneTheme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Kategori</label>
          <div className="grid grid-cols-3 gap-2">
            {["Sakit", "Izin", "Cuti"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setLeaveType(type)}
                className={`py-2 rounded-xl text-[9px] font-black border text-center transition-all ${
                  leaveType === type
                    ? "bg-indigo-500/10 border-indigo-500/40 text-indigo-500"
                    : phoneTheme === 'dark'
                      ? "bg-zinc-950/40 border-white/5 text-zinc-400 hover:bg-zinc-900"
                      : "bg-white border-zinc-200 text-zinc-500 hover:bg-zinc-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Date Input */}
        <div>
          <label className={`text-[7.5px] font-black uppercase tracking-wider block mb-1.5 ${phoneTheme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Tanggal</label>
          <input
            type="text"
            value={leaveDate}
            onChange={(e) => setLeaveDate(e.target.value)}
            className={`w-full p-2.5 rounded-xl text-[9.5px] font-bold border focus:outline-none focus:border-indigo-500 ${
              phoneTheme === 'dark'
                ? 'bg-zinc-950/40 border-white/5 text-white'
                : 'bg-white border-zinc-200 text-zinc-800'
            }`}
          />
        </div>

        {/* Reason area */}
        <div>
          <label className={`text-[7.5px] font-black uppercase tracking-wider block mb-1.5 ${phoneTheme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Keterangan Alasan</label>
          <textarea
            rows="3"
            value={leaveReason}
            onChange={(e) => setLeaveReason(e.target.value)}
            placeholder="Tulis alasan tidak hadir secara terperinci..."
            className={`w-full p-2.5 rounded-xl text-[9.5px] font-bold border focus:outline-none focus:border-indigo-500 ${
              phoneTheme === 'dark'
                ? 'bg-zinc-950/40 border-white/5 text-white placeholder-zinc-650'
                : 'bg-white border-zinc-200 text-zinc-800 placeholder-zinc-400'
            }`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-[9px] font-black uppercase tracking-widest shadow-md transition-transform"
        >
          Kirim Pengajuan
        </button>
      </form>
    </div>
  );
}
