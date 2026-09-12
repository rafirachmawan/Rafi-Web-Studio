// Import disabled temporarily to fix build issue
// import { formatTime, formatDate } from "../../utils/timeFormat";

const formatTime = (date) => {
  if (!date) return "--:--";
  const d = new Date(date);
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

const formatDate = (date, option = "local") => {
  if (!date) return "--/--/----";
  const d = new Date(date);
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  if (option === "long") {
    return `${day} ${month} ${year}`;
  } else if (option === "short") {
    return `${day}/${d.getMonth() + 1}/${year}`;
  }
  return `${day} ${month} ${year}`;
};

export function MuridHome({ currentTime, onCheckIn, todayLog, phoneTheme }) {
  return (
    <div className="flex flex-col space-y-4 text-left">
      {/* Date & Time Widget */}
      <div className={`p-4 rounded-2xl relative overflow-hidden border ${phoneTheme === 'dark' ? 'bg-[#121214] border-white/5' : 'bg-white border-zinc-200 shadow-sm'}`}>
        <p className="text-[8px] font-black uppercase tracking-widest text-indigo-500">{formatDate(currentTime)}</p>
        <h2 className={`text-2xl font-black mt-1 ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-950'}`}>
          {formatTime(currentTime)} <span className="text-xs font-bold opacity-45">AM</span>
        </h2>
        <p className="text-[7.5px] font-black uppercase tracking-widest text-zinc-500 mt-2">
          SCBD OFFICE • JAKARTA
        </p>
      </div>

      {/* Minimal Fingerprint/Biometric Button */}
      <div className="flex-1 flex flex-col items-center justify-center py-6">
        <button
          onClick={onCheckIn}
          className={`w-28 h-28 rounded-full border flex flex-col items-center justify-center relative z-10 transition-all duration-300 ${
            phoneTheme === 'dark'
              ? 'bg-zinc-950 border-white/5 hover:bg-zinc-900 active:border-indigo-500'
              : 'bg-white border-zinc-200/80 hover:bg-zinc-50 active:border-indigo-500'
          }`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping mb-2" />
          <span className={`text-[8.5px] font-black tracking-[0.15em] uppercase ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-800'}`}>
            {!todayLog ? "ABSEN MASUK" : todayLog.out === "--:--" ? "ABSEN KELUAR" : "SELESAI"}
          </span>
          <span className="text-[6.5px] text-zinc-500 font-bold mt-0.5 uppercase tracking-wider">TAP SENSOR</span>
        </button>
      </div>

      {/* Attendance Stats Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className={`p-3 rounded-xl border text-left ${phoneTheme === 'dark' ? 'bg-zinc-950/60 border-white/5' : 'bg-white border-zinc-200 shadow-sm'}`}>
          <span className="text-[7.5px] font-black uppercase tracking-wider text-emerald-500 block mb-0.5">JAM MASUK</span>
          <p className={`text-xs font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-850'}`}>
            {todayLog ? todayLog.in : "--:--"}
          </p>
        </div>
        
        <div className={`p-3 rounded-xl border text-left ${phoneTheme === 'dark' ? 'bg-zinc-950/60 border-white/5' : 'bg-white border-zinc-200 shadow-sm'}`}>
          <span className="text-[7.5px] font-black uppercase tracking-wider text-rose-500 block mb-0.5">JAM KELUAR</span>
          <p className={`text-xs font-black ${phoneTheme === 'dark' ? 'text-white' : 'text-zinc-850'}`}>
            {todayLog ? todayLog.out : "--:--"}
          </p>
        </div>
      </div>
    </div>
  );
}
