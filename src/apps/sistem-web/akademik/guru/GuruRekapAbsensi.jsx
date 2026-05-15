import { useState } from "react";
import TopBar from "../components/TopBar";
import { DonutChart } from "../components/MiniChart";
import { DEMO_USERS, KELAS_LIST, SISWA_LIST, ABSENSI_RECORDS, getSiswaByKelas } from "../data/mockData";

export default function GuruRekapAbsensi() {
  const user = DEMO_USERS.guru;
  const [selectedKelas, setSelectedKelas] = useState(KELAS_LIST[0]?.id);
  const siswaKelas = getSiswaByKelas(selectedKelas);
  const siswaIds = siswaKelas.map((s) => s.id);
  const records = ABSENSI_RECORDS.filter((a) => siswaIds.includes(a.siswaId));

  const hadir = records.filter((r) => r.status === "hadir").length;
  const izin = records.filter((r) => r.status === "izin").length;
  const sakit = records.filter((r) => r.status === "sakit").length;
  const alpha = records.filter((r) => r.status === "alpha").length;
  const total = records.length;

  const sc = { hadir: "bg-emerald-500/10 text-emerald-400", izin: "bg-amber-500/10 text-amber-400", sakit: "bg-violet-500/10 text-violet-400", alpha: "bg-rose-500/10 text-rose-400" };

  // Per siswa summary
  const perSiswa = siswaKelas.map((s) => {
    const sr = records.filter((r) => r.siswaId === s.id);
    return {
      ...s,
      hadir: sr.filter((r) => r.status === "hadir").length,
      izin: sr.filter((r) => r.status === "izin").length,
      sakit: sr.filter((r) => r.status === "sakit").length,
      alpha: sr.filter((r) => r.status === "alpha").length,
      total: sr.length,
    };
  });

  return (
    <>
      <TopBar title="Rekap Absensi" subtitle="Kelas yang Anda ajar" user={user} />
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          {KELAS_LIST.map((k) => (
            <button key={k.id} onClick={() => setSelectedKelas(k.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${selectedKelas === k.id ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400" : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:bg-white/[0.05]"}`}>
              {k.nama}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          <DonutChart value={hadir} total={total} color="emerald" label="Hadir" size={70} />
          <DonutChart value={izin} total={total} color="amber" label="Izin" size={70} />
          <DonutChart value={sakit} total={total} color="violet" label="Sakit" size={70} />
          <DonutChart value={alpha} total={total} color="rose" label="Alpha" size={70} />
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-white/[0.06]">
              <th className="text-left px-4 py-2 text-zinc-500 font-semibold">#</th>
              <th className="text-left px-4 py-2 text-zinc-500 font-semibold">Siswa</th>
              <th className="text-center px-4 py-2 text-zinc-500 font-semibold">Hadir</th>
              <th className="text-center px-4 py-2 text-zinc-500 font-semibold">Izin</th>
              <th className="text-center px-4 py-2 text-zinc-500 font-semibold">Sakit</th>
              <th className="text-center px-4 py-2 text-zinc-500 font-semibold">Alpha</th>
              <th className="text-center px-4 py-2 text-zinc-500 font-semibold">%</th>
            </tr></thead>
            <tbody>{perSiswa.map((s, i) => (
              <tr key={s.id} className="border-b border-white/[0.03] hover:bg-white/[0.03]">
                <td className="px-4 py-2 text-zinc-500">{i + 1}</td>
                <td className="px-4 py-2 text-zinc-300"><div className="flex items-center gap-2"><img src={s.avatar} alt="" className="w-6 h-6 rounded-md object-cover" />{s.nama}</div></td>
                <td className="px-4 py-2 text-center text-emerald-400 font-semibold">{s.hadir}</td>
                <td className="px-4 py-2 text-center text-amber-400 font-semibold">{s.izin}</td>
                <td className="px-4 py-2 text-center text-violet-400 font-semibold">{s.sakit}</td>
                <td className="px-4 py-2 text-center text-rose-400 font-semibold">{s.alpha}</td>
                <td className="px-4 py-2 text-center text-white font-bold">{s.total ? Math.round((s.hadir / s.total) * 100) : 0}%</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
