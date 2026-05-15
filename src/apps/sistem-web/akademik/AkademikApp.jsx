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

// =============================================
// ROLE PICKER (DEMO LOGIN)
// =============================================
function RolePicker() {
  const navigate = useNavigate();
  const [hoveredRole, setHoveredRole] = useState(null);

  const roles = [
    {
      id: "admin",
      icon: ShieldCheck,
      title: "Super Admin",
      desc: "Kelola seluruh data sekolah, guru, siswa, kelas, dan rekap absensi.",
      color: "from-indigo-500 to-blue-600",
      shadow: "shadow-indigo-500/20",
      ring: "ring-indigo-500/30",
      bg: "bg-indigo-500/10",
      text: "text-indigo-400",
      path: "/akademik/admin",
      user: DEMO_USERS.admin,
    },
    {
      id: "guru",
      icon: BookOpen,
      title: "Guru",
      desc: "Absensi kelas dengan geolocation, input nilai, dan jadwal mengajar.",
      color: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20",
      ring: "ring-emerald-500/30",
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
      path: "/akademik/guru",
      user: DEMO_USERS.guru,
    },
    {
      id: "siswa",
      icon: GraduationCap,
      title: "Siswa",
      desc: "Absen dengan geolocation, lihat nilai, jadwal pelajaran, dan profil.",
      color: "from-violet-500 to-purple-600",
      shadow: "shadow-violet-500/20",
      ring: "ring-violet-500/30",
      bg: "bg-violet-500/10",
      text: "text-violet-400",
      path: "/akademik/siswa",
      user: DEMO_USERS.siswa,
    },
  ];

  return (
    <div className="min-h-screen bg-[#08080f] text-white relative overflow-hidden">
      {/* BG EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-violet-600/8 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-emerald-600/5 rounded-full blur-[120px]" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 min-h-screen flex flex-col justify-center">
        {/* BACK */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-medium transition-colors"
        >
          <ArrowLeft size={16} />
          Kembali
        </motion.button>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-zinc-400 mb-6">
            <Sparkles size={12} className="text-amber-400" />
            DEMO MODE — Pilih role untuk masuk
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            {SCHOOL_INFO.name}
          </h1>

          <p className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
            Sistem Management Akademik & Absensi Geolocation.
            <br />
            Pilih salah satu role untuk melihat demo dashboard.
          </p>
        </motion.div>

        {/* ROLE CARDS */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {roles.map((role, i) => {
            const Icon = role.icon;

            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                onMouseEnter={() => setHoveredRole(role.id)}
                onMouseLeave={() => setHoveredRole(null)}
                onClick={() => navigate(role.path)}
                className={`relative group cursor-pointer rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500
                  hover:border-white/[0.12] hover:bg-white/[0.04] hover:-translate-y-2 hover:${role.shadow}
                  ${hoveredRole === role.id ? `ring-1 ${role.ring}` : ""}
                `}
              >
                {/* GLOW */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${role.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

                {/* ICON */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>

                {/* USER PREVIEW */}
                <div className="flex items-center gap-3 mb-5">
                  <img
                    src={role.user.avatar}
                    alt={role.user.nama}
                    className="w-10 h-10 rounded-xl object-cover ring-2 ring-white/10"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{role.user.nama}</p>
                    <p className={`text-xs font-medium ${role.text}`}>{role.title}</p>
                  </div>
                </div>

                {/* TEXT */}
                <h3 className="text-xl font-bold text-white mb-2">
                  Login sebagai {role.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                  {role.desc}
                </p>

                {/* BUTTON */}
                <div className={`flex items-center gap-2 text-sm font-semibold ${role.text} group-hover:gap-3 transition-all`}>
                  Masuk Dashboard
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 text-xs text-zinc-600"
        >
          Demo ini menggunakan data simulasi. Semua data bersifat fiktif untuk keperluan showcase.
        </motion.p>
      </div>
    </div>
  );
}

// =============================================
// MAIN APP — ROUTES
// =============================================
export default function AkademikApp() {
  return (
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
  );
}
