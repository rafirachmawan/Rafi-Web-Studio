import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Search, Plus, Filter, Edit2, Trash2, Shield, UserCircle } from "lucide-react";
import { EXAM_USERS } from "../data/mockData";

export default function UserManagement() {
  const [search, setSearch] = useState("");

  const usersList = [
    { ...EXAM_USERS.superadmin, status: "Aktif" },
    { ...EXAM_USERS.guru, status: "Aktif" },
    { ...EXAM_USERS.siswa, status: "Aktif" },
    { id: "G002", name: "Budi Santoso", role: "Guru", school: "SMA Negeri 1 Jakarta", status: "Aktif", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi" },
    { id: "S002", name: "Andi Saputra", role: "Siswa", school: "SMA Negeri 1 Jakarta", status: "Aktif", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andi" },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Manajemen User</h1>
          <p className="text-zinc-500 mt-1">Kelola data administrator, guru, dan siswa terdaftar.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 text-black font-black hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
          <Plus size={20} />
          Tambah User
        </button>
      </div>

      {/* SEARCH & FILTERS */}
      <div className="flex flex-col md:flex-row gap-4 p-4 rounded-[2rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input 
            type="text" 
            placeholder="Cari nama atau ID user..." 
            className="w-full bg-zinc-800/50 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500/50 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
           <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
              <select className="bg-zinc-800/50 border border-white/5 rounded-2xl py-3 pl-12 pr-8 text-xs md:text-sm text-zinc-300 focus:outline-none appearance-none cursor-pointer hover:bg-zinc-800 transition-colors">
                <option>Semua Role</option>
                <option>Super Admin</option>
                <option>Guru</option>
                <option>Siswa</option>
              </select>
           </div>
        </div>
      </div>

      {/* USERS TABLE */}
      <div className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-zinc-800/20">
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">User</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">ID</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">Role</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-zinc-500 uppercase tracking-widest">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {usersList.map((u, i) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={u.id}
                  className="hover:bg-white/5 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center overflow-hidden">
                        {u.avatar ? <img src={u.avatar} alt={u.name} /> : <UserCircle className="text-zinc-500" size={24} />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{u.name}</p>
                        <p className="text-xs text-zinc-500">{u.school}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-zinc-400">{u.id}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                      {u.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-lg bg-teal-500/10 text-teal-400 text-xs font-bold">
                      {u.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 rounded-xl text-zinc-500 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all"><Edit2 size={16} /></button>
                      <button className="p-2 rounded-xl text-zinc-500 hover:bg-red-500/10 hover:text-red-400 transition-all"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
