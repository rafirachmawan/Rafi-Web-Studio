import TopBar from "../components/TopBar";
import { BarChart } from "../components/MiniChart";
import { DEMO_USERS, MAPEL_LIST, getNilaiSiswa } from "../data/mockData";

export default function SiswaNilai() {
  const user = DEMO_USERS.siswa;
  const nilai = getNilaiSiswa(user.id);

  const rows = nilai.map((n) => {
    const mapel = MAPEL_LIST.find((m) => m.id === n.mapelId);
    const avg = Math.round((n.tugas + n.uts + n.uas) / 3);
    return { ...n, mapelNama: mapel?.nama || "—", avg };
  });

  const chartData = rows.map((r) => ({ label: r.mapelNama.substring(0, 5), value: r.avg }));

  return (
    <>
      <TopBar title="Nilai Saya" subtitle={`${user.kelas} — Semester Genap`} user={user} />
      <div className="p-6 space-y-4">
        {/* CHART */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
          <h3 className="text-sm font-semibold text-white mb-1">Grafik Nilai</h3>
          <p className="text-xs text-zinc-500 mb-4">Rata-rata per mata pelajaran</p>
          <BarChart data={chartData} color="violet" height={120} />
        </div>

        {/* TABLE */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-white/[0.06]">
              <th className="text-left px-4 py-2 text-zinc-500 font-semibold">Mata Pelajaran</th>
              <th className="text-center px-4 py-2 text-zinc-500 font-semibold">Tugas</th>
              <th className="text-center px-4 py-2 text-zinc-500 font-semibold">UTS</th>
              <th className="text-center px-4 py-2 text-zinc-500 font-semibold">UAS</th>
              <th className="text-center px-4 py-2 text-zinc-500 font-semibold">Rata²</th>
            </tr></thead>
            <tbody>{rows.map((r, i) => (
              <tr key={i} className="border-b border-white/[0.03] hover:bg-white/[0.03]">
                <td className="px-4 py-2.5 text-zinc-300 font-medium">{r.mapelNama}</td>
                <td className="px-4 py-2.5 text-center text-zinc-400">{r.tugas}</td>
                <td className="px-4 py-2.5 text-center text-zinc-400">{r.uts}</td>
                <td className="px-4 py-2.5 text-center text-zinc-400">{r.uas}</td>
                <td className="px-4 py-2.5 text-center">
                  <span className={`font-bold ${r.avg >= 75 ? "text-emerald-400" : "text-amber-400"}`}>{r.avg}</span>
                </td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
