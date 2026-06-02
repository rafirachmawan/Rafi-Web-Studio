import { useState } from "react";
import TopBar from "../components/TopBar";
import DataTable from "../components/DataTable";
import { useAkademik } from "../context/AkademikContext";
import { Plus, Edit2, Trash2, X } from "lucide-react";

export default function AdminGuru() {
  const { guruList, addGuru, updateGuru, deleteGuru, kelasList, demoUsers } = useAkademik();
  const [isOpen, setIsOpen] = useState(false);
  const [editingGuru, setEditingGuru] = useState(null);

  // Form State
  const [nip, setNip] = useState("");
  const [nama, setNama] = useState("");
  const [mapel, setMapel] = useState("");
  const [kelasWali, setKelasWali] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const openAddModal = () => {
    setEditingGuru(null);
    setNip("");
    setNama("");
    setMapel("");
    setKelasWali("");
    setPhone("");
    setEmail("");
    setIsOpen(true);
  };

  const openEditModal = (guru) => {
    setEditingGuru(guru);
    setNip(guru.nip);
    setNama(guru.nama);
    setMapel(guru.mapel);
    setKelasWali(guru.kelasWali || "");
    setPhone(guru.phone);
    setEmail(guru.email || "");
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nip,
      nama,
      mapel,
      kelasWali: kelasWali || null,
      phone,
      email: email || `${nama.split(" ")[0].toLowerCase()}@smknd.sch.id`,
    };

    if (editingGuru) {
      updateGuru(editingGuru.id, data);
    } else {
      addGuru(data);
    }
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus guru ini?")) {
      deleteGuru(id);
    }
  };

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
    {
      key: "actions",
      label: "Aksi",
      render: (val, row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => openEditModal(row)}
            className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition-colors"
            title="Edit Guru"
          >
            <Edit2 size={12} />
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors"
            title="Hapus Guru"
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
        title="Data Guru"
        subtitle={`${guruList.length} guru terdaftar`}
        user={demoUsers.admin}
        action={
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
          >
            <Plus size={14} />
            Tambah Guru
          </button>
        }
      />
      <div className="p-6">
        <DataTable
          columns={columns}
          data={guruList}
          searchKeys={["nama", "nip", "mapel"]}
        />
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">
                {editingGuru ? "Edit Data Guru" : "Tambah Guru Baru"}
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">NIP</label>
                <input
                  type="text"
                  required
                  value={nip}
                  onChange={(e) => setNip(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
                  placeholder="Contoh: 198501012010011001"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
                  placeholder="Nama beserta gelar"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Mata Pelajaran Utama</label>
                <input
                  type="text"
                  required
                  value={mapel}
                  onChange={(e) => setMapel(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
                  placeholder="Contoh: Pemrograman Web"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Wali Kelas (Opsional)</label>
                <select
                  value={kelasWali}
                  onChange={(e) => setKelasWali(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="">Bukan Wali Kelas</option>
                  {kelasList.map((k) => (
                    <option key={k.id} value={k.nama}>
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
                  placeholder="Contoh: 081234567890"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Email (Opsional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
                  placeholder="guru@smknd.sch.id"
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
                  {editingGuru ? "Simpan Perubahan" : "Simpan Data"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
