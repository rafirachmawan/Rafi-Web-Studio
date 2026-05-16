import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardCheck,
  Users,
  BarChart3,
  Settings,
  ShieldCheck,
  ChevronLeft,
  GraduationCap,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  FileText,
  Activity,
  UserCircle,
} from "lucide-react";

const MENU_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/examos/dashboard" },
  { icon: FileText, label: "Bank Soal", path: "/examos/questions" },
  { icon: Activity, label: "Monitoring Ujian", path: "/examos/monitoring" },
  { icon: Users, label: "Manajemen User", path: "/examos/users" },
  { icon: GraduationCap, label: "Manajemen Kelas", path: "/examos/classes" },
  { icon: BookOpen, label: "Mata Pelajaran", path: "/examos/subjects" },
  { icon: BarChart3, label: "Laporan & Nilai", path: "/examos/reports" },
  { icon: Settings, label: "Pengaturan", path: "/examos/settings" },
];

function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("exam_user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("exam_user");
    navigate("/examos");
  };

  return (
    <>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ 
          width: collapsed ? 80 : 280,
          x: mobileOpen ? 0 : (window.innerWidth < 1024 ? -280 : 0)
        }}
        className={`fixed left-0 top-0 h-screen bg-[#080b0a] border-r border-white/5 flex flex-col z-[70] transition-all duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="h-20 flex items-center px-6 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0">
              <ClipboardCheck className="text-white" size={20} />
            </div>
            {(!collapsed || mobileOpen) && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-lg font-black tracking-tight text-white"
              >
                EXAM<span className="text-emerald-500">OS</span>
              </motion.span>
            )}
          </div>
          
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="absolute -right-3 top-7 w-6 h-6 rounded-full bg-zinc-800 border border-white/10 hidden lg:flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-10"
          >
            <ChevronLeft size={14} className={collapsed ? "rotate-180" : ""} />
          </button>

          <button onClick={() => setMobileOpen(false)} className="lg:hidden absolute right-4 text-zinc-500">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-3 mt-4 space-y-1 overflow-y-auto no-scrollbar">
          {MENU_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative ${
                  isActive 
                  ? "bg-emerald-500/10 text-emerald-500 shadow-[inset_0_0_20px_rgba(16,185,129,0.05)]" 
                  : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
                }`}
              >
                <item.icon size={20} className={`shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
                {(!collapsed || mobileOpen) && (
                  <span className="text-[14px] font-medium whitespace-nowrap">{item.label}</span>
                )}
                {isActive && (
                  <motion.div 
                    layoutId="active-pill-exam"
                    className="absolute left-0 w-1 h-6 bg-emerald-500 rounded-r-full"
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          {(!collapsed || mobileOpen) && user && (
            <div className="flex items-center gap-3 mb-4 p-2 rounded-xl bg-zinc-900/30">
              <img src={user.avatar} alt="avatar" className="w-9 h-9 rounded-lg border border-white/10" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">{user.name}</p>
                <p className="text-[10px] text-emerald-500 uppercase tracking-wider font-bold">{user.role}</p>
              </div>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-zinc-500 hover:bg-red-500/10 hover:text-red-400 transition-all group"
          >
            <LogOut size={20} className="shrink-0" />
            {(!collapsed || mobileOpen) && <span className="text-sm font-medium">Keluar</span>}
          </button>
        </div>
      </motion.aside>
    </>
  );
}

function Header({ setMobileOpen }) {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("exam_user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const getPageTitle = () => {
    const path = location.pathname.split("/").pop();
    switch (path) {
      case "dashboard": return "Dashboard Utama";
      case "student-dashboard": return "Dashboard Peserta";
      case "questions": return "Manajemen Bank Soal";
      case "monitoring": return "Monitoring Realtime";
      case "users": return "Manajemen Pengguna";
      case "classes": return "Manajemen Kelas";
      case "subjects": return "Mata Pelajaran";
      case "reports": return "Hasil & Laporan";
      case "settings": return "Pengaturan Sistem";
      default: return "ExamOS";
    }
  };

  return (
    <header className="h-20 flex items-center justify-between px-4 md:px-8 border-b border-white/5 bg-[#050807]/80 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400">
          <Menu size={20} />
        </button>
        <div className="flex flex-col">
          <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">{getPageTitle()}</h2>
          <p className="hidden sm:block text-[10px] text-emerald-500/60 uppercase font-black tracking-widest">{user?.school || "ExamOS Digital"}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          SERVER STATUS: ONLINE
        </div>
        
        <div className="flex items-center gap-1 md:gap-3 pr-2 md:pr-4 border-r border-white/10">
          <button className="p-2 rounded-xl text-zinc-400 hover:bg-white/5 hover:text-white transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#050807]" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden xl:block">
            <p className="text-sm font-bold text-white leading-none mb-1">{user?.name || "User"}</p>
            <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">{user?.role || "Role"}</p>
          </div>
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden">
             {user ? <img src={user.avatar} alt="user" /> : <UserCircle className="text-zinc-500" size={24} />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050807] text-white flex overflow-x-hidden">
      <Sidebar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen} 
      />
      
      <main className={`flex-1 transition-all duration-300 ${collapsed ? "lg:ml-[80px]" : "lg:ml-[280px]"} ml-0 w-full`}>
        <Header setMobileOpen={setMobileOpen} />
        <div className="p-4 md:p-8 max-w-[1600px] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
