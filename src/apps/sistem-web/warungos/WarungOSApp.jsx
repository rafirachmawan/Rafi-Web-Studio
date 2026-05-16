import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Store,
  ShieldCheck,
  UserCircle,
  ArrowRight,
  ArrowLeft,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  CircleDollarSign,
  Truck,
  MessageSquare,
} from "lucide-react";

import { WARUNG_USERS } from "./data/mockData";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/ProductList";
import POS from "./pages/POS";
import DebtManagement from "./pages/DebtManagement";
import Inventory from "./pages/Inventory";

// =============================================
// ROLE PICKER (LOGIN SIMULATION)
// =============================================
function WarungLogin() {
  const navigate = useNavigate();

  const roles = [
    {
      id: "owner",
      title: "Owner / Pemilik",
      desc: "Akses penuh ke laporan keuangan, multi-cabang, dan pengaturan sistem.",
      icon: ShieldCheck,
      color: "from-amber-500 to-orange-600",
      lightColor: "text-amber-400",
      bgLight: "bg-amber-500/10",
      path: "/warungos/dashboard",
      user: WARUNG_USERS.owner,
    },
    {
      id: "admin",
      title: "Admin Toko",
      desc: "Manajemen produk, stok, supplier, dan monitoring transaksi harian.",
      icon: LayoutDashboard,
      color: "from-blue-500 to-indigo-600",
      lightColor: "text-blue-400",
      bgLight: "bg-blue-500/10",
      path: "/warungos/dashboard",
      user: WARUNG_USERS.admin,
    },
    {
      id: "kasir",
      title: "Kasir",
      desc: "Fokus pada sistem penjualan (POS), input transaksi, dan cetak struk.",
      icon: ShoppingCart,
      color: "from-emerald-500 to-teal-600",
      lightColor: "text-emerald-400",
      bgLight: "bg-emerald-500/10",
      path: "/warungos/pos",
      user: WARUNG_USERS.kasir,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white relative overflow-hidden font-sans selection:bg-amber-500/30">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Store size={14} />
            WarungOS v1.0 • Demo Version
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Sistem Kelola <br />
            <span className="text-amber-500">Toko Klontong Modern</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Aplikasi kasir dan manajemen stok profesional yang dirancang untuk kecepatan UX dan kemudahan operasional toko Anda.
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
                localStorage.setItem("warung_user", JSON.stringify(role.user));
                navigate(role.path);
              }}
              className="group cursor-pointer"
            >
              <div className="h-full p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl transition-all duration-500 hover:bg-zinc-800/60 hover:border-amber-500/30 hover:-translate-y-3 relative overflow-hidden group">
                {/* GLOW EFFECT ON HOVER */}
                <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl ${role.bgLight} flex items-center justify-center ${role.lightColor} mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-black/20`}>
                  <role.icon size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition-colors">{role.title}</h3>
                <p className="text-zinc-500 leading-relaxed mb-10 text-sm">{role.desc}</p>

                <div className={`inline-flex items-center gap-2 ${role.lightColor} font-bold text-xs tracking-widest uppercase`}>
                  Mulai Sekarang
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
export default function WarungOSApp() {
  return (
    <Routes>
      <Route index element={<WarungLogin />} />
      
      {/* PROTECTED ROUTES (SIMULATED) */}
      <Route element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<ProductList />} />
        <Route path="pos" element={<POS />} />
        <Route path="debt" element={<DebtManagement />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="reports" element={<div className="p-8"><h1>Reports Page (Coming Soon)</h1></div>} />
        <Route path="suppliers" element={<div className="p-8"><h1>Suppliers Page (Coming Soon)</h1></div>} />
        <Route path="settings" element={<div className="p-8"><h1>Settings Page (Coming Soon)</h1></div>} />
      </Route>
    </Routes>
  );
}
