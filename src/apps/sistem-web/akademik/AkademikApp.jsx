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
  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden font-sans">
      {/* BG GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent opacity-50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 min-h-screen flex flex-col items-center justify-center">
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
              path: "/akademik/admin",
              user: DEMO_USERS.admin,
            },
            {
              id: "guru",
              title: "Portal Guru",
              desc: "Input nilai, absensi siswa, kelola jadwal mengajar, dan materi pembelajaran.",
              icon: BookOpen,
              color: "bg-cyan-500",
              lightColor: "text-cyan-400",
              bgLight: "bg-cyan-500/10",
              path: "/akademik/guru",
              user: DEMO_USERS.guru,
            },
            {
              id: "siswa",
              title: "Portal Siswa",
              desc: "Lihat jadwal pelajaran, nilai, riwayat absensi, dan profil akademik.",
              icon: GraduationCap,
              color: "bg-fuchsia-500",
              lightColor: "text-fuchsia-400",
              bgLight: "bg-fuchsia-500/10",
              path: "/akademik/siswa",
              user: DEMO_USERS.siswa,
            },
          ].map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              onClick={() => navigate(role.path)}
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
                  Masuk Portal
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
