import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { DEMO_USERS } from "../data/mockData";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#0a0a12] text-white">
      <Sidebar role="admin" user={DEMO_USERS.admin} />
      <div className="ml-[260px] transition-all duration-300">
        <Outlet />
      </div>
    </div>
  );
}
