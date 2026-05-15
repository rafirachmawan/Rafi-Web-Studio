import TopBar from "../components/TopBar";
import DataTable from "../components/DataTable";
import { DEMO_USERS, GURU_LIST } from "../data/mockData";

export default function AdminGuru() {
  const columns = [
    {
      key: "avatar",
      label: "",
      width: "48px",
      render: (val, row) => (
        <img src={row.avatar} alt={row.nama} className="w-8 h-8 rounded-lg object-cover" />
      ),
    },
    { key: "nip", label: "NIP" },
    { key: "nama", label: "Nama" },
    { key: "mapel", label: "Mata Pelajaran" },
    {
      key: "kelasWali",
      label: "Wali Kelas",
      render: (val) => val ? (
        <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 text-[10px] font-semibold">{val}</span>
      ) : (
        <span className="text-zinc-600">—</span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (val) => (
        <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${val === "Aktif" ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
          {val}
        </span>
      ),
    },
    { key: "phone", label: "Telepon" },
  ];

  return (
    <>
      <TopBar title="Data Guru" subtitle={`${GURU_LIST.length} guru terdaftar`} user={DEMO_USERS.admin} />
      <div className="p-6">
        <DataTable
          columns={columns}
          data={GURU_LIST}
          searchKeys={["nama", "nip", "mapel"]}
        />
      </div>
    </>
  );
}
