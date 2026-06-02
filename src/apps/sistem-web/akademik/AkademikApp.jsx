import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BookOpen,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

import { DEMO_USERS, SCHOOL_INFO } from "./data/mockData";

// Admin pages
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import AdminGuru from "./admin/AdminGuru";
import AdminSiswa from "./admin/AdminSiswa";
import AdminKelas from "./admin/AdminKelas";
import AdminAbsensi from "./admin/AdminAbsensi";
import AdminSettings from "./admin/AdminSettings";

// Guru pages
import GuruLayout from "./guru/GuruLayout";
import GuruDashboard from "./guru/GuruDashboard";
import GuruAbsensi from "./guru/GuruAbsensi";
import GuruNilai from "./guru/GuruNilai";
import GuruJadwal from "./guru/GuruJadwal";
import GuruRekapAbsensi from "./guru/GuruRekapAbsensi";

// Siswa pages
import SiswaLayout from "./siswa/SiswaLayout";
import SiswaDashboard from "./siswa/SiswaDashboard";
import SiswaAbsensi from "./siswa/SiswaAbsensi";
import SiswaNilai from "./siswa/SiswaNilai";
import SiswaJadwal from "./siswa/SiswaJadwal";
import SiswaProfil from "./siswa/SiswaProfil";

import { useAkademik } from "./context/AkademikContext";
import { Search, UserCheck } from "lucide-react";

// =============================================
// ROLE PICKER (DEMO LOGIN)
// =============================================
function RolePicker() {
  const navigate = useNavigate();
  const {
    demoUsers,
    guruList,
    siswaList,
    setActiveGuruId,
    setActiveSiswaId,
  } = useAkademik();

  const [selectingRole, setSelectingRole] = useState(null); // null | 'guru' | 'siswa'
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGuru = guruList.filter(
    (g) =>
      (g.nama || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (g.nip || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (g.mapel || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSiswa = siswaList.filter(
    (s) =>
      (s.nama || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.nis || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.kelas || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectGuru = (id) => {
    setActiveGuruId(id);
    navigate("/akademik/guru");
  };

  const handleSelectSiswa = (id) => {
    setActiveSiswaId(id);
    navigate("/akademik/siswa");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden font-sans">
      {/* BG GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent opacity-50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]" />
 
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 min-h-screen flex flex-col items-center justify-center">
        {selectingRole === null ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold mb-6">
                <GraduationCap size={18} />
                Demo Akses Sistem
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                Sistem Management <br />
                <span className="text-indigo-400">Akademik Sekolah</span>
              </h1>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Pilih portal akses untuk mencoba fitur-fitur utama sistem manajemen
                sekolah kami. Setiap role memiliki dashboard dan fungsionalitas
                khusus.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[
                {
                  id: "admin",
                  title: "Super Admin",
                  desc: "Kelola data guru, siswa, kelas, mapel, dan monitoring seluruh sistem.",
                  icon: ShieldCheck,
                  color: "bg-indigo-500",
                  lightColor: "text-indigo-400",
                  bgLight: "bg-indigo-500/10",
                  action: () => navigate("/akademik/admin"),
                },
                {
                  id: "guru",
                  title: "Portal Guru",
                  desc: "Input nilai, absensi siswa, kelola jadwal mengajar, dan materi pembelajaran.",
                  icon: BookOpen,
                  color: "bg-cyan-500",
                  lightColor: "text-cyan-400",
                  bgLight: "bg-cyan-500/10",
                  action: () => {
                    setSelectingRole("guru");
                    setSearchQuery("");
                  },
                },
                {
                  id: "siswa",
                  title: "Portal Siswa",
                  desc: "Lihat jadwal pelajaran, nilai, riwayat absensi, dan profil akademik.",
                  icon: GraduationCap,
                  color: "bg-fuchsia-500",
                  lightColor: "text-fuchsia-400",
                  bgLight: "bg-fuchsia-500/10",
                  action: () => {
                    setSelectingRole("siswa");
                    setSearchQuery("");
                  },
                },
              ].map((role, i) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={role.action}
                  className="group cursor-pointer"
                >
                  <div className="h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800/80 hover:border-white/10 hover:-translate-y-2 relative overflow-hidden">
                    {/* ICON */}
                    <div
                      className={`w-16 h-16 rounded-2xl ${role.bgLight} flex items-center justify-center ${role.lightColor} mb-8 group-hover:scale-110 transition-transform`}
                    >
                      <role.icon size={32} />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{role.title}</h3>
                    <p className="text-zinc-500 leading-relaxed mb-8">{role.desc}</p>

                    <div
                      className={`inline-flex items-center gap-2 ${role.lightColor} font-bold text-sm`}
                    >
                      Pilih Akses
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </div>

                    {/* DECOR */}
                    <div
                      className={`absolute -bottom-8 -right-8 w-32 h-32 ${role.color} opacity-[0.03] rounded-full blur-2xl group-hover:opacity-[0.08] transition-opacity`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-20 flex flex-col items-center gap-4"
            >
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-bold"
              >
                <ArrowLeft size={18} />
                Kembali ke Landing Page
              </button>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl p-8 rounded-3xl bg-zinc-900/80 border border-white/10 backdrop-blur-md relative"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-black text-white">
                  Login Sebagai {selectingRole === "guru" ? "Guru" : "Siswa"}
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Pilih salah satu akun terdaftar dari Super Admin di bawah untuk masuk.
                </p>
              </div>
              <button
                onClick={() => setSelectingRole(null)}
                className="px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.02] text-xs text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              >
                Kembali
              </button>
            </div>

            {/* SEARCH */}
            <div className="relative mb-6">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder={`Cari nama, kelas, atau ${selectingRole === "guru" ? "NIP" : "NIS"}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-zinc-500 outline-none focus:border-indigo-500/40 transition-colors"
              />
            </div>

            {/* LIST */}
            <div className="max-h-[350px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {selectingRole === "guru" ? (
                filteredGuru.length === 0 ? (
                  <p className="text-xs text-zinc-600 text-center py-10">Guru tidak ditemukan.</p>
                ) : (
                  filteredGuru.map((g) => (
                    <div
                      key={g.id}
                      onClick={() => handleSelectGuru(g.id)}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-indigo-500/10 hover:border-indigo-500/20 cursor-pointer transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <img src={g.avatar} alt="" className="w-10 h-10 rounded-xl object-cover ring-2 ring-white/5" />
                        <div>
                          <p className="text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors">
                            {g.nama}
                          </p>
                          <p className="text-[10px] text-zinc-500 mt-0.5">
                            NIP: {g.nip || "—"} • Mapel: {g.mapel || "—"}
                          </p>
                        </div>
                      </div>
                      <UserCheck size={16} className="text-zinc-600 group-hover:text-indigo-400 transition-colors" />
                    </div>
                  ))
                )
              ) : filteredSiswa.length === 0 ? (
                <p className="text-xs text-zinc-600 text-center py-10">Siswa tidak ditemukan.</p>
              ) : (
                filteredSiswa.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => handleSelectSiswa(s.id)}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-fuchsia-500/10 hover:border-fuchsia-500/20 cursor-pointer transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <img src={s.avatar} alt="" className="w-10 h-10 rounded-xl object-cover ring-2 ring-white/5" />
                      <div>
                        <p className="text-xs font-semibold text-white group-hover:text-fuchsia-400 transition-colors">
                          {s.nama}
                        </p>
                        <p className="text-[10px] text-zinc-500 mt-0.5">
                          NIS: {s.nis || "—"} • Kelas: {s.kelas || "—"}
                        </p>
                      </div>
                    </div>
                    <UserCheck size={16} className="text-zinc-600 group-hover:text-fuchsia-400 transition-colors" />
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}


import { AkademikProvider } from "./context/AkademikContext";

// =============================================
// MAIN APP — ROUTES
// =============================================
export default function AkademikApp() {
  return (
    <AkademikProvider>
      <Routes>
        <Route index element={<RolePicker />} />

        {/* ADMIN */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="guru" element={<AdminGuru />} />
          <Route path="siswa" element={<AdminSiswa />} />
          <Route path="kelas" element={<AdminKelas />} />
          <Route path="absensi" element={<AdminAbsensi />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* GURU */}
        <Route path="guru" element={<GuruLayout />}>
          <Route index element={<GuruDashboard />} />
          <Route path="absensi" element={<GuruAbsensi />} />
          <Route path="nilai" element={<GuruNilai />} />
          <Route path="jadwal" element={<GuruJadwal />} />
          <Route path="rekap" element={<GuruRekapAbsensi />} />
        </Route>

        {/* SISWA */}
        <Route path="siswa" element={<SiswaLayout />}>
          <Route index element={<SiswaDashboard />} />
          <Route path="absensi" element={<SiswaAbsensi />} />
          <Route path="nilai" element={<SiswaNilai />} />
          <Route path="jadwal" element={<SiswaJadwal />} />
          <Route path="profil" element={<SiswaProfil />} />
        </Route>
      </Routes>
    </AkademikProvider>
  );
}
