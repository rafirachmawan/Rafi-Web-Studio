import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { DEMO_USERS } from "../data/mockData";

export default function GuruLayout() {
  return (
    <div className="min-h-screen bg-[#0a0a12] text-white">
      <Sidebar role="guru" user={DEMO_USERS.guru} />
      <div className="lg:ml-[260px] pt-16 lg:pt-0 transition-all duration-300">
        <Outlet />
      </div>
    </div>
  );
}
