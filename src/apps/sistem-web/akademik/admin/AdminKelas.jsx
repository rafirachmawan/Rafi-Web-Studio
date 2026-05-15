import TopBar from "../components/TopBar";
import { DEMO_USERS, KELAS_LIST, GURU_LIST, getSiswaByKelas } from "../data/mockData";
import { Users, GraduationCap } from "lucide-react";

export default function AdminKelas() {
  return (
    <>
      <TopBar title="Manajemen Kelas" subtitle={`${KELAS_LIST.length} kelas aktif`} user={DEMO_USERS.admin} />

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {KELAS_LIST.map((kelas) => {
            const wali = GURU_LIST.find((g) => g.id === kelas.waliKelas);
            const siswaCount = getSiswaByKelas(kelas.id).length;
            const lakilaki = getSiswaByKelas(kelas.id).filter((s) => s.gender === "L").length;
            const perempuan = siswaCount - lakilaki;

            return (
              <div
                key={kelas.id}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all group"
              >
                {/* HEADER */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{kelas.nama}</h3>
                    <p className="text-xs text-zinc-500 mt-0.5">{kelas.jurusan}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                    <GraduationCap size={18} className="text-indigo-400" />
                  </div>
                </div>

                {/* WALI KELAS */}
                {wali && (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] mb-4">
                    <img src={wali.avatar} alt={wali.nama} className="w-8 h-8 rounded-lg object-cover" />
                    <div>
                      <p className="text-xs font-semibold text-white">{wali.nama}</p>
                      <p className="text-[10px] text-zinc-500">Wali Kelas</p>
                    </div>
                  </div>
                )}

                {/* STATS */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-2 rounded-xl bg-white/[0.03]">
                    <p className="text-lg font-bold text-white">{siswaCount}</p>
                    <p className="text-[10px] text-zinc-500">Total</p>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-sky-500/5">
                    <p className="text-lg font-bold text-sky-400">{lakilaki}</p>
                    <p className="text-[10px] text-zinc-500">Laki-laki</p>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-pink-500/5">
                    <p className="text-lg font-bold text-pink-400">{perempuan}</p>
                    <p className="text-[10px] text-zinc-500">Perempuan</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
