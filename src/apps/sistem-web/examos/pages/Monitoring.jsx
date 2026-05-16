import { motion } from "framer-motion";
import { 
  Users, 
  Activity, 
  ShieldAlert, 
  Monitor, 
  UserCheck, 
  AlertCircle,
  MoreVertical,
  XCircle,
  PlayCircle
} from "lucide-react";

export default function Monitoring() {
  const participants = [
    { id: 'P1', name: 'Rafi Rachmawan', status: 'Online', progress: '32/40', active: true, device: 'Chrome / Windows', alert: false },
    { id: 'P2', name: 'Sefia Amalia', status: 'Online', progress: '15/40', active: true, device: 'Safari / iPhone', alert: true, alertMsg: 'Tab Switching Detected' },
    { id: 'P3', name: 'Budi Santoso', status: 'Offline', progress: '10/40', active: false, device: 'Chrome / Android', alert: false },
    { id: 'P4', name: 'Siti Aminah', status: 'Online', progress: '38/40', active: true, device: 'Edge / Windows', alert: false },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* HEADER STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Peserta Online', value: '42', icon: Users, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          { label: 'Proses Pengerjaan', value: '38', icon: Activity, color: 'text-blue-400', bg: 'bg-blue-500/10' },
          { label: 'Terdeteksi Curang', value: '1', icon: ShieldAlert, color: 'text-red-400', bg: 'bg-red-500/10' },
          { label: 'Selesai Ujian', value: '4', icon: UserCheck, color: 'text-teal-400', bg: 'bg-teal-500/10' },
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 flex items-center gap-4">
             <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                <stat.icon size={24} />
             </div>
             <div>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{stat.label}</p>
                <h4 className="text-2xl font-black text-white">{stat.value}</h4>
             </div>
          </div>
        ))}
      </div>

      {/* MONITORING LIST */}
      <div className="p-8 rounded-[3rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
         <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white">Live Monitoring Peserta</h3>
            <div className="flex items-center gap-3">
               <button className="px-4 py-2 rounded-xl bg-red-500/10 text-red-400 text-xs font-bold hover:bg-red-500 transition-all hover:text-white">
                  Stop Semua Ujian
               </button>
               <button className="px-4 py-2 rounded-xl bg-emerald-500 text-black text-xs font-black hover:bg-emerald-400 transition-all">
                  Broadcast Pesan
               </button>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {participants.map((p) => (
              <motion.div 
                layout
                key={p.id} 
                className={`p-6 rounded-[2.5rem] border transition-all duration-300 ${p.alert ? 'bg-red-500/5 border-red-500/20' : 'bg-zinc-800/30 border-white/5 hover:border-emerald-500/20'}`}
              >
                 <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                       <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center font-bold text-zinc-500">
                             {p.name.substring(0, 1)}
                          </div>
                          <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-zinc-900 ${p.active ? 'bg-emerald-500' : 'bg-zinc-600'}`} />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-white">{p.name}</p>
                          <p className="text-[10px] text-zinc-500">{p.device}</p>
                       </div>
                    </div>
                    <button className="p-2 text-zinc-600 hover:text-white"><MoreVertical size={18} /></button>
                 </div>

                 {p.alert && (
                   <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 text-red-400 text-[10px] font-bold uppercase tracking-widest mb-4 animate-pulse">
                      <ShieldAlert size={14} />
                      {p.alertMsg}
                   </div>
                 )}

                 <div className="space-y-3">
                    <div className="flex justify-between text-xs">
                       <span className="text-zinc-500">Progress</span>
                       <span className="text-white font-bold">{p.progress} Soal</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                       <div className={`h-full transition-all ${p.alert ? 'bg-red-500' : 'bg-emerald-500'}`} style={{ width: `${(parseInt(p.progress) / 40) * 100}%` }} />
                    </div>
                 </div>

                 <div className="flex items-center gap-2 mt-6">
                    <button className="flex-1 py-2.5 rounded-xl bg-zinc-900 border border-white/5 text-[10px] font-black text-zinc-500 hover:text-white transition-all">PAKSA SUBMIT</button>
                    <button className="flex-1 py-2.5 rounded-xl bg-zinc-900 border border-white/5 text-[10px] font-black text-red-400 hover:bg-red-500/10 transition-all">DISKUALIFIKASI</button>
                 </div>
              </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
}
