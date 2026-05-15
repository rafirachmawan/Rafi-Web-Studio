import TopBar from "../components/TopBar";
import StatCard from "../components/StatCard";
import { BarChart, DonutChart } from "../components/MiniChart";
import {
  Users,
  GraduationCap,
  School,
  ClipboardCheck,
  TrendingUp,
  Clock,
} from "lucide-react";
import {
  DEMO_USERS,
  GURU_LIST,
  SISWA_LIST,
  KELAS_LIST,
  ABSENSI_RECORDS,
} from "../data/mockData";

export default function AdminDashboard() {
  const user = DEMO_USERS.admin;
  const today = new Date().toISOString().split("T")[0];

  // Stats
  const todayAbsensi = ABSENSI_RECORDS.filter((a) => a.tanggal === today);
  const hadirToday = todayAbsensi.filter((a) => a.status === "hadir").length;

  // Chart: absensi per hari (last 5 days)
  const chartData = [];
  const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  for (let i = 5; i >= 1; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    const count = ABSENSI_RECORDS.filter((a) => a.tanggal === dateStr && a.status === "hadir").length;
    chartData.push({ label: days[d.getDay()], value: count });
  }

  // Donut: status absensi hari ini / minggu ini
  const weekRecords = ABSENSI_RECORDS;
  const hadirCount = weekRecords.filter((r) => r.status === "hadir").length;
  const izinCount = weekRecords.filter((r) => r.status === "izin").length;
  const sakitCount = weekRecords.filter((r) => r.status === "sakit").length;
  const alphaCount = weekRecords.filter((r) => r.status === "alpha").length;

  // Recent activity
  const activities = [
    { text: "Siswa baru Ahmad Rizky terdaftar di kelas XI-RPL-1", time: "2 jam lalu", icon: GraduationCap },
    { text: "Guru Rina Wulandari mengupdate nilai kelas XI-RPL-2", time: "3 jam lalu", icon: TrendingUp },
    { text: "Absensi kelas XII-RPL-1 telah selesai dilakukan", time: "5 jam lalu", icon: ClipboardCheck },
    { text: "Jadwal pelajaran semester genap telah dipublish", time: "1 hari lalu", icon: Clock },
  ];

  return (
    <>
      <TopBar title="Dashboard Overview" subtitle="School System Analytics" user={user} />

      <div className="p-4 md:p-8 space-y-8">
        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard icon={GraduationCap} label="Total Students" value={SISWA_LIST.length} change="+12" color="fuchsia" />
          <StatCard icon={Users} label="Total Teachers" value={GURU_LIST.length} color="emerald" />
          <StatCard icon={School} label="Total Classes" value={KELAS_LIST.length} color="amber" />
          <StatCard icon={ClipboardCheck} label="Attendance Today" value={hadirToday || SISWA_LIST.length - 3} color="cyan" />
        </div>

        {/* CHARTS ROW */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* BAR CHART */}
          <div className="xl:col-span-2 rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-md">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest">Weekly Attendance</h3>
                <p className="text-[10px] text-zinc-500 font-bold uppercase mt-1">Average students present per day</p>
              </div>
            </div>
            <BarChart data={chartData} color="cyan" height={160} />
          </div>

          {/* DONUT CHARTS */}
          <div className="rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-md">
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6">Attendance Status</h3>
            <div className="grid grid-cols-2 gap-6">
              <DonutChart value={hadirCount} total={weekRecords.length} color="emerald" label="Present" />
              <DonutChart value={izinCount} total={weekRecords.length} color="amber" label="Permit" />
              <DonutChart value={sakitCount} total={weekRecords.length} color="fuchsia" label="Sick" />
              <DonutChart value={alphaCount} total={weekRecords.length} color="rose" label="Absent" />
            </div>
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
          <h3 className="text-sm font-semibold text-white mb-4">Aktivitas Terbaru</h3>
          <div className="space-y-3">
            {activities.map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <a.icon size={14} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-300 leading-relaxed">{a.text}</p>
                  <p className="text-[10px] text-zinc-600 mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
