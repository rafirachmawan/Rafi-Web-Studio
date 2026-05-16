import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  ClipboardCheck, 
  TrendingUp, 
  Activity, 
  Clock, 
  ArrowUpRight,
  School,
  FileText,
  PlayCircle
} from "lucide-react";
import { SCHOOL_STATS, EXAMS, RESULTS } from "../data/mockData";
import { useNavigate } from "react-router-dom";

const StatsCard = ({ title, value, icon: Icon, color, desc }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-6 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl relative overflow-hidden group"
  >
    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color} opacity-[0.05] rounded-bl-full group-hover:opacity-[0.1] transition-opacity`} />
    <div className="flex items-center gap-4 mb-4">
      <div className={`p-3 rounded-2xl bg-white/5 ${color.split(' ')[1].replace('to-', 'text-')}`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{title}</p>
        <h3 className="text-3xl font-black text-white tracking-tight">{value}</h3>
      </div>
    </div>
    <p className="text-[10px] text-zinc-600 font-medium uppercase tracking-widest">{desc}</p>
  </motion.div>
);

export default function Dashboard({ role: propRole }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("exam_user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const role = propRole || user?.role?.toLowerCase() || "superadmin";

  const renderSuperAdmin = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Sekolah" value={SCHOOL_STATS.totalSchools} icon={School} color="from-emerald-500 to-teal-600" desc="Sekolah Terdaftar" />
        <StatsCard title="Total User" value={SCHOOL_STATS.totalUsers.toLocaleString()} icon={Users} color="from-blue-500 to-indigo-600" desc="Siswa & Guru" />
        <StatsCard title="Total Ujian" value={SCHOOL_STATS.totalExams} icon={ClipboardCheck} color="from-purple-500 to-pink-600" desc="Telah Dilaksanakan" />
        <StatsCard title="Ujian Aktif" value="12" icon={Activity} color="from-amber-500 to-orange-600" desc="Sedang Berlangsung" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 rounded-[3rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
           <h3 className="text-xl font-bold text-white mb-6">Aktivitas Terbaru</h3>
           <div className="space-y-6">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                     <Activity size={18} />
                  </div>
                  <div className="flex-1">
                     <p className="text-sm font-bold text-white">Sekolah #{i + 100} baru saja mendaftar</p>
                     <p className="text-[10px] text-zinc-500 uppercase font-medium">10 Menit Yang Lalu</p>
                  </div>
               </div>
             ))}
           </div>
        </div>
        <div className="p-8 rounded-[3rem] bg-gradient-to-br from-emerald-600 to-teal-800 relative overflow-hidden group">
           <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
           <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                 <h3 className="text-2xl font-black text-white leading-tight">Server Nasional <br />Status Aman</h3>
                 <p className="text-emerald-100/60 text-sm mt-4">Load server 15%. Semua layanan berjalan normal tanpa kendala teknis.</p>
              </div>
              <button className="w-fit mt-8 px-6 py-3 rounded-2xl bg-black text-emerald-400 font-black text-sm hover:scale-105 transition-transform">
                 Cek Infrastruktur
              </button>
           </div>
        </div>
      </div>
    </div>
  );

  const renderSiswa = () => (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h1 className="text-3xl font-black text-white tracking-tight">Halo, {user?.name}! 👋</h1>
           <p className="text-zinc-500 mt-1">Siap untuk mengerjakan ujian hari ini?</p>
        </div>
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
           <p className="text-xs font-bold uppercase tracking-widest">Progress Belajar</p>
           <h4 className="text-2xl font-black">85% <span className="text-xs text-emerald-500/60 font-medium tracking-normal">Target Bulanan</span></h4>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           <h3 className="text-xl font-bold text-white">Ujian Tersedia</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {EXAMS.map((exam) => (
               <div key={exam.id} className="p-6 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl group hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center justify-between mb-4">
                     <div className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                        {exam.subject}
                     </div>
                     <Clock size={16} className="text-zinc-500" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{exam.title}</h4>
                  <p className="text-xs text-zinc-500 mb-6">{exam.duration} Menit • {exam.questions} Soal</p>
                  <button 
                    onClick={() => navigate(`/examos/exam/${exam.id}`)}
                    className="w-full py-4 rounded-2xl bg-emerald-500 text-black font-black text-sm hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-emerald-500/20"
                  >
                     <PlayCircle size={18} />
                     KERJAKAN SEKARANG
                  </button>
               </div>
             ))}
           </div>
        </div>

        <div className="space-y-6">
           <h3 className="text-xl font-bold text-white">Hasil Terbaru</h3>
           <div className="p-6 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 space-y-6">
              {RESULTS.map((res) => (
                <div key={res.id} className="flex items-center justify-between gap-4">
                   <div className="flex-1">
                      <p className="text-sm font-bold text-white truncate">{res.exam}</p>
                      <p className="text-[10px] text-zinc-500">{res.date}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-lg font-black text-emerald-400">{res.score}</p>
                      <p className="text-[9px] font-black uppercase text-zinc-600 tracking-tighter">LULUS</p>
                   </div>
                </div>
              ))}
              <button className="w-full py-3 rounded-xl bg-white/5 text-xs font-bold text-zinc-500 hover:text-white transition-all">
                 Lihat Semua Nilai
              </button>
           </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pb-20">
      {role === "siswa" ? renderSiswa() : renderSuperAdmin()}
    </div>
  );
}
