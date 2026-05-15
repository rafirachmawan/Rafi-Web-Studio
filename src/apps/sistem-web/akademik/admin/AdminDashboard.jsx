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
      <TopBar title="Dashboard" subtitle="Selamat datang, Administrator" user={user} />

      <div className="p-6 space-y-6">
        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard icon={GraduationCap} label="Total Siswa" value={SISWA_LIST.length} change="+5" color="violet" />
          <StatCard icon={Users} label="Total Guru" value={GURU_LIST.length} color="emerald" />
          <StatCard icon={School} label="Total Kelas" value={KELAS_LIST.length} color="amber" />
          <StatCard icon={ClipboardCheck} label="Hadir Hari Ini" value={hadirToday || SISWA_LIST.length - 3} color="indigo" />
        </div>

        {/* CHARTS ROW */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {/* BAR CHART */}
          <div className="xl:col-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
            <h3 className="text-sm font-semibold text-white mb-1">Kehadiran Mingguan</h3>
            <p className="text-xs text-zinc-500 mb-4">Jumlah siswa hadir per hari</p>
            <BarChart data={chartData} color="indigo" height={140} />
          </div>

          {/* DONUT CHARTS */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
            <h3 className="text-sm font-semibold text-white mb-1">Status Absensi</h3>
            <p className="text-xs text-zinc-500 mb-5">Rekap minggu ini</p>
            <div className="grid grid-cols-2 gap-4">
              <DonutChart value={hadirCount} total={weekRecords.length} color="emerald" label="Hadir" />
              <DonutChart value={izinCount} total={weekRecords.length} color="amber" label="Izin" />
              <DonutChart value={sakitCount} total={weekRecords.length} color="violet" label="Sakit" />
              <DonutChart value={alphaCount} total={weekRecords.length} color="rose" label="Alpha" />
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
