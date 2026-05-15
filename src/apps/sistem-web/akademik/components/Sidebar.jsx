import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  School,
  ClipboardCheck,
  Settings,
  BookOpen,
  CalendarDays,
  FileBarChart,
  UserCircle,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";

const MENUS = {
  admin: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/akademik/admin" },
    { label: "Data Guru", icon: Users, path: "/akademik/admin/guru" },
    { label: "Data Siswa", icon: GraduationCap, path: "/akademik/admin/siswa" },
    { label: "Manajemen Kelas", icon: School, path: "/akademik/admin/kelas" },
    { label: "Rekap Absensi", icon: ClipboardCheck, path: "/akademik/admin/absensi" },
    { label: "Pengaturan", icon: Settings, path: "/akademik/admin/settings" },
  ],
  guru: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/akademik/guru" },
    { label: "Absensi Kelas", icon: ClipboardCheck, path: "/akademik/guru/absensi" },
    { label: "Input Nilai", icon: FileBarChart, path: "/akademik/guru/nilai" },
    { label: "Jadwal Mengajar", icon: CalendarDays, path: "/akademik/guru/jadwal" },
    { label: "Rekap Absensi", icon: BookOpen, path: "/akademik/guru/rekap" },
  ],
  siswa: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/akademik/siswa" },
    { label: "Absensi Saya", icon: ClipboardCheck, path: "/akademik/siswa/absensi" },
    { label: "Nilai Saya", icon: FileBarChart, path: "/akademik/siswa/nilai" },
    { label: "Jadwal", icon: CalendarDays, path: "/akademik/siswa/jadwal" },
    { label: "Profil", icon: UserCircle, path: "/akademik/siswa/profil" },
  ],
};

const ROLE_COLORS = {
  admin: { accent: "from-indigo-500 to-blue-600", ring: "ring-indigo-500/30", text: "text-indigo-400", bg: "bg-indigo-500/10", activeBg: "bg-indigo-500/15", border: "border-indigo-500/20", hoverBg: "hover:bg-indigo-500/10" },
  guru: { accent: "from-emerald-500 to-teal-600", ring: "ring-emerald-500/30", text: "text-emerald-400", bg: "bg-emerald-500/10", activeBg: "bg-emerald-500/15", border: "border-emerald-500/20", hoverBg: "hover:bg-emerald-500/10" },
  siswa: { accent: "from-violet-500 to-purple-600", ring: "ring-violet-500/30", text: "text-violet-400", bg: "bg-violet-500/10", activeBg: "bg-violet-500/15", border: "border-violet-500/20", hoverBg: "hover:bg-violet-500/10" },
};

export default function Sidebar({ role, user }) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menus = MENUS[role] || [];
  const colors = ROLE_COLORS[role] || ROLE_COLORS.admin;

  return (
    <aside
      className={`fixed top-0 left-0 h-screen z-40 flex flex-col transition-all duration-300 ease-out
        ${collapsed ? "w-[72px]" : "w-[260px]"}
        bg-[#0c0c14]/95 backdrop-blur-2xl border-r border-white/[0.06]`}
    >
      {/* LOGO */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-white/[0.06] shrink-0">
        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${colors.accent} flex items-center justify-center shrink-0 shadow-lg`}>
          <GraduationCap size={18} className="text-white" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="text-sm font-bold text-white truncate">SMK Nusantara</h1>
            <p className="text-[10px] text-zinc-500 font-medium">Sistem Akademik</p>
          </div>
        )}
      </div>

      {/* MENUS */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {menus.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                ${isActive
                  ? `${colors.activeBg} ${colors.text} shadow-sm`
                  : `text-zinc-400 ${colors.hoverBg} hover:text-zinc-200`
                }
                ${collapsed ? "justify-center" : ""}
              `}
              title={collapsed ? item.label : undefined}
            >
              <Icon size={18} className={isActive ? colors.text : ""} />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* USER */}
      <div className="border-t border-white/[0.06] p-3">
        {!collapsed && (
          <div className="flex items-center gap-3 px-2 py-2 mb-2">
            <img
              src={user?.avatar}
              alt={user?.nama}
              className="w-8 h-8 rounded-lg object-cover ring-2 ring-white/10"
            />
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-white truncate">{user?.nama}</p>
              <p className={`text-[10px] font-medium ${colors.text}`}>{user?.role}</p>
            </div>
          </div>
        )}
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/akademik")}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            title="Keluar"
          >
            <LogOut size={15} />
            {!collapsed && <span>Keluar</span>}
          </button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-xl text-zinc-500 hover:text-white hover:bg-white/5 transition-colors"
          >
            {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
          </button>
        </div>
      </div>
    </aside>
  );
}
