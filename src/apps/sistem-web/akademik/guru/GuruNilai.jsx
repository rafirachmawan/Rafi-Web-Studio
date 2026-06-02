import { useState } from "react";
import TopBar from "../components/TopBar";
import { useAkademik } from "../context/AkademikContext";
import { CheckCircle2 } from "lucide-react";

export default function GuruNilai() {
  const {
    kelasList,
    mapelList,
    nilaiList,
    saveNilaiRecord,
    getSiswaByKelas,
    demoUsers,
  } = useAkademik();

  const user = demoUsers.guru;
  const guruMapel = mapelList.filter((m) => m.guruId === user.id);
  const [selectedKelas, setSelectedKelas] = useState(kelasList[0]?.id || "");
  const [selectedMapel, setSelectedMapel] = useState(guruMapel[0]?.id || "");
  const [nilaiState, setNilaiState] = useState({});
  const [saved, setSaved] = useState(false);

  const siswaList = getSiswaByKelas(selectedKelas);

  const getNilai = (siswaId) => {
    if (nilaiState[siswaId]) return nilaiState[siswaId];
    const found = nilaiList.find((n) => n.siswaId === siswaId && n.mapelId === selectedMapel);
    return found || { tugas: 0, uts: 0, uas: 0 };
  };

  const updateNilai = (siswaId, field, value) => {
    const v = Math.min(100, Math.max(0, parseInt(value) || 0));
    setNilaiState((prev) => ({
      ...prev,
      [siswaId]: { ...getNilai(siswaId), [field]: v },
    }));
    setSaved(false);
  };

  const handleSave = () => {
    siswaList.forEach((s) => {
      const grades = getNilai(s.id);
      saveNilaiRecord({
        siswaId: s.id,
        mapelId: selectedMapel,
        tugas: grades.tugas,
        uts: grades.uts,
        uas: grades.uas,
      });
    });
    setSaved(true);
  };

  return (
    <>
      <TopBar title="Input Nilai" subtitle={user.mapel || "Mata Pelajaran"} user={user} />
      <div className="p-6 space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          {kelasList.map((k) => (
            <button
              key={k.id}
              onClick={() => { setSelectedKelas(k.id); setSaved(false); setNilaiState({}); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                selectedKelas === k.id
                  ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                  : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:bg-white/[0.05]"
              }`}
            >
              {k.nama}
            </button>
          ))}
          
          {guruMapel.length > 0 && <div className="w-px h-6 bg-white/10 mx-1" />}
          
          {guruMapel.map((m) => (
            <button
              key={m.id}
              onClick={() => { setSelectedMapel(m.id); setSaved(false); setNilaiState({}); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                selectedMapel === m.id
                  ? "bg-amber-500/15 border-amber-500/30 text-amber-400"
                  : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:bg-white/[0.05]"
              }`}
            >
              {m.nama}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left px-4 py-2 text-zinc-500 font-semibold w-8">#</th>
                <th className="text-left px-4 py-2 text-zinc-500 font-semibold">Siswa</th>
                <th className="text-center px-4 py-2 text-zinc-500 font-semibold w-20">Tugas</th>
                <th className="text-center px-4 py-2 text-zinc-500 font-semibold w-20">UTS</th>
                <th className="text-center px-4 py-2 text-zinc-500 font-semibold w-20">UAS</th>
                <th className="text-center px-4 py-2 text-zinc-500 font-semibold w-20">Rata²</th>
              </tr>
            </thead>
            <tbody>
              {siswaList.map((s, i) => {
                const n = getNilai(s.id);
                const avg = n.tugas && n.uts && n.uas ? Math.round((n.tugas + n.uts + n.uas) / 3) : "—";
                return (
                  <tr key={s.id} className="border-b border-white/[0.03]">
                    <td className="px-4 py-2.5 text-zinc-500">{i + 1}</td>
                    <td className="px-4 py-2.5 text-zinc-300">
                      <div className="flex items-center gap-2">
                        <img src={s.avatar} alt="" className="w-6 h-6 rounded-md object-cover" />
                        {s.nama}
                      </div>
                    </td>
                    {["tugas", "uts", "uas"].map((f) => (
                      <td key={f} className="px-2 py-2.5 text-center">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={n[f] || 0}
                          onChange={(e) => updateNilai(s.id, f, e.target.value)}
                          className="w-14 px-2 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-center text-xs text-white outline-none focus:border-emerald-500/40 transition-colors"
                        />
                      </td>
                    ))}
                    <td className="px-4 py-2.5 text-center">
                      <span
                        className={`text-xs font-bold ${
                          typeof avg === "number" && avg >= 75
                            ? "text-emerald-400"
                            : typeof avg === "number"
                            ? "text-amber-400"
                            : "text-zinc-600"
                        }`}
                      >
                        {avg}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          {saved ? (
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">
              <CheckCircle2 size={16} /> Nilai berhasil disimpan!
            </div>
          ) : (
            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              💾 Simpan Nilai
            </button>
          )}
        </div>
      </div>
    </>
  );
}
