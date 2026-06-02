import { useState } from "react";
import TopBar from "../components/TopBar";
import DataTable from "../components/DataTable";
import { useAkademik } from "../context/AkademikContext";
import { Plus, Edit2, Trash2, X } from "lucide-react";

export default function AdminSiswa() {
  const { siswaList, addSiswa, updateSiswa, deleteSiswa, kelasList, demoUsers } = useAkademik();
  const [filterKelas, setFilterKelas] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [editingSiswa, setEditingSiswa] = useState(null);

  // Form State
  const [nama, setNama] = useState("");
  const [gender, setGender] = useState("L");
  const [kelasId, setKelasId] = useState("");
  const [phone, setPhone] = useState("");
  const [alamat, setAlamat] = useState("Jakarta Selatan");

  const openAddModal = () => {
    setEditingSiswa(null);
    setNama("");
    setGender("L");
    setKelasId(kelasList[0]?.id || "");
    setPhone("");
    setAlamat("Jakarta Selatan");
    setIsOpen(true);
  };

  const openEditModal = (siswa) => {
    setEditingSiswa(siswa);
    setNama(siswa.nama);
    setGender(siswa.gender);
    setKelasId(siswa.kelasId);
    setPhone(siswa.phone);
    setAlamat(siswa.alamat || "Jakarta Selatan");
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nama,
      gender,
      kelasId,
      phone,
      alamat,
      email: `${nama.split(" ")[0].toLowerCase()}@siswa.smknd.sch.id`,
    };

    if (editingSiswa) {
      updateSiswa(editingSiswa.id, data);
    } else {
      addSiswa(data);
    }
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus siswa ini?")) {
      deleteSiswa(id);
    }
  };

  const filtered = filterKelas === "all"
    ? siswaList
    : siswaList.filter((s) => s.kelasId === filterKelas);

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
    { key: "nama", label: "Nama Siswa" },
    {
      key: "kelas",
      label: "Kelas",
      render: (val) => (
        <span className="px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-400 text-[10px] font-semibold">{val || "Belum ada kelas"}</span>
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
    {
      key: "actions",
      label: "Aksi",
      render: (val, row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => openEditModal(row)}
            className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition-colors"
            title="Edit Siswa"
          >
            <Edit2 size={12} />
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors"
            title="Hapus Siswa"
          >
            <Trash2 size={12} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <TopBar
        title="Data Siswa"
        subtitle={`${siswaList.length} siswa terdaftar`}
        user={demoUsers.admin}
        action={
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
          >
            <Plus size={14} />
            Tambah Siswa
          </button>
        }
      />

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
          {kelasList.map((k) => (
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

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">
                {editingSiswa ? "Edit Data Siswa" : "Tambah Siswa Baru"}
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
                  placeholder="Nama Lengkap Siswa"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Jenis Kelamin</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-zinc-300 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="L"
                      checked={gender === "L"}
                      onChange={() => setGender("L")}
                      className="accent-indigo-500"
                    />
                    Laki-laki
                  </label>
                  <label className="flex items-center gap-2 text-zinc-300 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="P"
                      checked={gender === "P"}
                      onChange={() => setGender("P")}
                      className="accent-indigo-500"
                    />
                    Perempuan
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Kelas</label>
                <select
                  value={kelasId}
                  onChange={(e) => setKelasId(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                  required
                >
                  <option value="" disabled>Pilih Kelas</option>
                  {kelasList.map((k) => (
                    <option key={k.id} value={k.id}>
                      {k.nama}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">No. Telepon</label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
                  placeholder="Contoh: 0812XXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Alamat</label>
                <textarea
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 h-20 resize-none"
                  placeholder="Alamat Lengkap"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
                >
                  {editingSiswa ? "Simpan Perubahan" : "Simpan Data"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
