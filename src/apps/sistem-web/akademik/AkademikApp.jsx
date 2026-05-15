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
      desc: "Manage school infrastructure, teachers, and total academic overview.",
      color: "from-cyan-500 to-blue-600",
      shadow: "shadow-cyan-500/20",
      ring: "ring-cyan-500/30",
      bg: "bg-cyan-500/10",
      text: "text-cyan-400",
      path: "/akademik/admin",
      user: DEMO_USERS.admin,
    },
    {
      id: "guru",
      icon: BookOpen,
      title: "Teacher Portal",
      desc: "Attendance verify with geolocation, grades management, and schedule.",
      color: "from-emerald-400 to-teal-600",
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
      title: "Student Hub",
      desc: "Daily attendance check-in, grade history, and personal schedule.",
      color: "from-fuchsia-500 to-purple-600",
      shadow: "shadow-fuchsia-500/20",
      ring: "ring-fuchsia-500/30",
      bg: "bg-fuchsia-500/10",
      text: "text-fuchsia-400",
      path: "/akademik/siswa",
      user: DEMO_USERS.siswa,
    },
  ];

  return (
    <div className="min-h-screen bg-[#08080f] text-white relative overflow-hidden">
      {/* BG EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-fuchsia-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-emerald-600/5 rounded-full blur-[120px]" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">
        {/* BACK */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="absolute top-8 left-6 md:left-12 flex items-center gap-2 text-zinc-500 hover:text-white text-[11px] font-black uppercase tracking-widest transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back Home
        </motion.button>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-8 shadow-xl">
            <Sparkles size={12} className="text-amber-400" />
            Interactive Demo Mode
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            ACADEMIC <span className="text-cyan-500">OS</span>
          </h1>

          <p className="text-sm md:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed font-medium">
            A high-performance management system for modern educational institutions. 
            <br className="hidden md:block" />
            Select a role below to explore the specialized dashboard environments.
          </p>
        </motion.div>

        {/* ROLE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
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
