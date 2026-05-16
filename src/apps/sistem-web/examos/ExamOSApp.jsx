import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ShieldCheck,
  UserCircle,
  ArrowRight,
  ArrowLeft,
  LayoutDashboard,
  BookOpen,
  ClipboardCheck,
  BarChart3,
  Users,
  Settings,
  Bell,
} from "lucide-react";

import { EXAM_USERS } from "./data/mockData";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import QuestionBank from "./pages/QuestionBank";
import ExamRoom from "./pages/ExamRoom";
import Monitoring from "./pages/Monitoring";

// =============================================
// ROLE PICKER (LOGIN SIMULATION)
// =============================================
function ExamLogin() {
  const navigate = useNavigate();

  const roles = [
    {
      id: "superadmin",
      title: "Super Admin",
      desc: "Kelola data sekolah, user, dan monitoring statistik nasional.",
      icon: ShieldCheck,
      color: "from-emerald-600 to-teal-700",
      lightColor: "text-emerald-400",
      bgLight: "bg-emerald-500/10",
      path: "/examos/dashboard",
      user: EXAM_USERS.superadmin,
    },
    {
      id: "guru",
      title: "Guru / Pengajar",
      desc: "Manajemen bank soal, buat ujian, dan monitoring hasil siswa.",
      icon: UserCircle,
      color: "from-green-500 to-emerald-600",
      lightColor: "text-green-400",
      bgLight: "bg-green-500/10",
      path: "/examos/dashboard",
      user: EXAM_USERS.guru,
    },
    {
      id: "siswa",
      title: "Siswa / Peserta",
      desc: "Kerjakan ujian, lihat riwayat nilai, dan progress belajar.",
      icon: GraduationCap,
      color: "from-teal-500 to-cyan-600",
      lightColor: "text-teal-400",
      bgLight: "bg-teal-500/10",
      path: "/examos/student-dashboard",
      user: EXAM_USERS.siswa,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050807] text-white relative overflow-hidden font-sans selection:bg-emerald-500/30">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
            <ClipboardCheck size={14} />
            ExamOS v2.0 • Digital Assessment
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Platform Ujian <br />
            <span className="text-emerald-500">Online Modern</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Sistem penilaian digital yang aman, cepat, dan transparan untuk institusi pendidikan masa kini.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {roles.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              onClick={() => {
                localStorage.setItem("exam_user", JSON.stringify(role.user));
                navigate(role.path);
              }}
              className="group cursor-pointer"
            >
              <div className="h-full p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl transition-all duration-500 hover:bg-zinc-800/60 hover:border-emerald-500/30 hover:-translate-y-3 relative overflow-hidden group">
                {/* GLOW EFFECT ON HOVER */}
                <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl ${role.bgLight} flex items-center justify-center ${role.lightColor} mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-black/20`}>
                  <role.icon size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{role.title}</h3>
                <p className="text-zinc-500 leading-relaxed mb-10 text-sm">{role.desc}</p>

                <div className={`inline-flex items-center gap-2 ${role.lightColor} font-bold text-xs tracking-widest uppercase`}>
                  Masuk Portal
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-all text-sm font-medium hover:gap-3"
          >
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </button>
        </motion.div>
      </div>
    </div>
  );
}

// =============================================
// MAIN APP COMPONENT
// =============================================
export default function ExamOSApp() {
  return (
    <Routes>
      <Route index element={<ExamLogin />} />
      
      {/* ADMINISTRATIVE ROUTES */}
      <Route element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="student-dashboard" element={<Dashboard role="siswa" />} />
        <Route path="questions" element={<QuestionBank />} />
        <Route path="monitoring" element={<Monitoring />} />
        <Route path="users" element={<div className="p-8"><h1>User Management (Demo)</h1></div>} />
        <Route path="classes" element={<div className="p-8"><h1>Class Management (Demo)</h1></div>} />
        <Route path="subjects" element={<div className="p-8"><h1>Subject Management (Demo)</h1></div>} />
        <Route path="reports" element={<div className="p-8"><h1>Exam Reports (Demo)</h1></div>} />
        <Route path="settings" element={<div className="p-8"><h1>System Settings (Demo)</h1></div>} />
      </Route>

      {/* SPECIAL ROUTE FOR EXAM TAKING (NO SIDEBAR) */}
      <Route path="exam/:examId" element={<ExamRoom />} />
    </Routes>
  );
}
