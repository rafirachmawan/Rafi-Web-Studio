import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Search, Plus, MoreHorizontal, GraduationCap, Clock, MonitorPlay } from "lucide-react";

export default function Classes() {
  const [search, setSearch] = useState("");

  const classesList = [
    { id: "CLS10A", name: "Kelas 10 MIPA 1", students: 32, teacher: "Budi Santoso", status: "Aktif", exams: 4, schedule: "07:00 - 15:00" },
    { id: "CLS10B", name: "Kelas 10 MIPA 2", students: 30, teacher: "Siti Aminah", status: "Aktif", exams: 2, schedule: "07:00 - 15:00" },
    { id: "CLS11A", name: "Kelas 11 IPS 1", students: 34, teacher: "Ahmad Jalaludin", status: "Ujian", exams: 5, schedule: "07:00 - 14:30" },
    { id: "CLS12A", name: "Kelas 12 Bahasa", students: 28, teacher: "Dewi Lestari", status: "Aktif", exams: 8, schedule: "07:00 - 15:30" },
    { id: "CLS12B", name: "Kelas 12 MIPA 1", students: 35, teacher: "Budi Santoso", status: "Ujian", exams: 7, schedule: "07:00 - 15:30" },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Manajemen Kelas</h1>
          <p className="text-zinc-500 mt-1">Kelola data kelas, rombel, dan wali kelas peserta ujian.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 text-black font-black hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
          <Plus size={20} />
          Tambah Kelas
        </button>
      </div>

      {/* SEARCH */}
      <div className="flex flex-col md:flex-row gap-4 p-4 rounded-[2rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input 
            type="text" 
            placeholder="Cari nama kelas atau wali kelas..." 
            className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500/50 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* CLASSES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classesList.map((cls, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={cls.id}
            className="p-6 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-emerald-500/20 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-bl-full group-hover:scale-110 transition-transform" />
            
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{cls.name}</h3>
                  <p className="text-xs text-zinc-500">{cls.id}</p>
                </div>
              </div>
              <button className="p-2 rounded-xl text-zinc-500 hover:bg-zinc-800 hover:text-white transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>

            <div className="space-y-4 relative z-10 mt-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Siswa</span>
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <Users size={14} className="text-emerald-500" />
                  {cls.students} Orang
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Wali Kelas</span>
                <span className="text-sm font-medium text-zinc-300">{cls.teacher}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Jadwal</span>
                <span className="text-sm font-medium text-zinc-300 flex items-center gap-1.5">
                  <Clock size={14} className="text-emerald-500" />
                  {cls.schedule}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
              <span className={`px-2.5 py-1 rounded-lg text-xs font-bold tracking-widest uppercase flex items-center gap-1.5 ${
                cls.status === "Aktif" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
              }`}>
                {cls.status === "Ujian" && <MonitorPlay size={12} />}
                {cls.status}
              </span>
              <span className="text-xs font-bold text-zinc-500">{cls.exams} Ujian Selesai</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
