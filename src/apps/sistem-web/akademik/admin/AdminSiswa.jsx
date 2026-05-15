import { useState } from "react";
import TopBar from "../components/TopBar";
import DataTable from "../components/DataTable";
import { DEMO_USERS, SISWA_LIST, KELAS_LIST } from "../data/mockData";

export default function AdminSiswa() {
  const [filterKelas, setFilterKelas] = useState("all");

  const filtered = filterKelas === "all"
    ? SISWA_LIST
    : SISWA_LIST.filter((s) => s.kelasId === filterKelas);

  const columns = [
    {
      key: "avatar",
      label: "",
      width: "48px",
      render: (val, row) => (
        <img src={row.avatar} alt={row.nama} className="w-8 h-8 rounded-lg object-cover" />
      ),
    },
    { key: "nis", label: "NIS" },
    { key: "nama", label: "Nama" },
    {
      key: "kelas",
      label: "Kelas",
      render: (val) => (
        <span className="px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-400 text-[10px] font-semibold">{val}</span>
      ),
    },
    {
      key: "gender",
      label: "L/P",
      render: (val) => (
        <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${val === "L" ? "bg-sky-500/10 text-sky-400" : "bg-pink-500/10 text-pink-400"}`}>
          {val}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (val) => (
        <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold">{val}</span>
      ),
    },
    { key: "phone", label: "Telepon" },
  ];

  return (
    <>
      <TopBar title="Data Siswa" subtitle={`${SISWA_LIST.length} siswa terdaftar`} user={DEMO_USERS.admin} />

      <div className="p-6 space-y-4">
        {/* FILTER */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setFilterKelas("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all
              ${filterKelas === "all"
                ? "bg-indigo-500/15 border-indigo-500/30 text-indigo-400"
                : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:bg-white/[0.05]"
              }`}
          >
            Semua Kelas
          </button>
          {KELAS_LIST.map((k) => (
            <button
              key={k.id}
              onClick={() => setFilterKelas(k.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all
                ${filterKelas === k.id
                  ? "bg-indigo-500/15 border-indigo-500/30 text-indigo-400"
                  : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:bg-white/[0.05]"
                }`}
            >
              {k.nama}
            </button>
          ))}
        </div>

        <DataTable
          columns={columns}
          data={filtered}
          searchKeys={["nama", "nis", "kelas"]}
        />
      </div>
    </>
  );
}
