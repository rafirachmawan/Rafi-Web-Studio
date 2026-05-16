import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  CircleDollarSign,
  Truck,
  MessageSquare,
  ChevronLeft,
  Store,
  LogOut,
  Bell,
  Search,
  X,
} from "lucide-react";

const MENU_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/warungos/dashboard" },
  { icon: ShoppingCart, label: "Kasir (POS)", path: "/warungos/pos" },
  { icon: Package, label: "Produk", path: "/warungos/products" },
  { icon: CircleDollarSign, label: "Hutang", path: "/warungos/debt" },
  { icon: Truck, label: "Stok & Inventory", path: "/warungos/inventory" },
  { icon: BarChart3, label: "Laporan", path: "/warungos/reports" },
  { icon: Truck, label: "Supplier", path: "/warungos/suppliers" },
  { icon: Settings, label: "Pengaturan", path: "/warungos/settings" },
];

export default function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("warung_user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("warung_user");
    navigate("/warungos");
  };

  return (
    <>
      {/* MOBILE OVERLAY */}
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
        className={`fixed left-0 top-0 h-screen bg-[#0d0d0e] border-r border-white/5 flex flex-col z-[70] transition-all duration-300 ease-in-out lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* LOGO */}
        <div className="h-20 flex items-center px-6 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
              <Store className="text-white" size={20} />
            </div>
            {(!collapsed || mobileOpen) && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-lg font-black tracking-tight text-white"
              >
                WARUNG<span className="text-amber-500">OS</span>
              </motion.span>
            )}
          </div>
          
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="absolute -right-3 top-7 w-6 h-6 rounded-full bg-zinc-800 border border-white/10 hidden lg:flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-10"
          >
            <ChevronLeft size={14} className={collapsed ? "rotate-180" : ""} />
          </button>

          {/* MOBILE CLOSE */}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden absolute right-4 text-zinc-500"
          >
            <X size={24} />
          </button>
        </div>

      {/* SEARCH BAR (Simulated) */}
      {!collapsed && (
        <div className="px-4 mb-6">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-amber-500 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Cari fitur..." 
              className="w-full bg-zinc-900/50 border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
            />
          </div>
        </div>
      )}

      {/* NAVIGATION */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto no-scrollbar">
        {MENU_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative ${
                isActive 
                ? "bg-amber-500/10 text-amber-500 shadow-[inset_0_0_20px_rgba(245,158,11,0.05)]" 
                : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
              }`}
            >
              <item.icon size={20} className={`shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
              {!collapsed && (
                <span className="text-[14px] font-medium whitespace-nowrap">{item.label}</span>
              )}
              {isActive && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute left-0 w-1 h-6 bg-amber-500 rounded-r-full"
                />
              )}
              {collapsed && (
                <div className="absolute left-full ml-4 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                  {item.label}
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* USER & LOGOUT */}
      <div className="p-4 border-t border-white/5">
        {!collapsed && user && (
          <div className="flex items-center gap-3 mb-4 p-2 rounded-xl bg-zinc-900/30">
            <img src={user.avatar} alt="avatar" className="w-9 h-9 rounded-lg border border-white/10" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">{user.name}</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{user.role} • {user.branch}</p>
            </div>
          </div>
        )}
        
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-zinc-500 hover:bg-red-500/10 hover:text-red-400 transition-all group"
        >
          <LogOut size={20} className="shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Keluar</span>}
        </button>
      </div>
    </motion.aside>
    </>
  );
}
