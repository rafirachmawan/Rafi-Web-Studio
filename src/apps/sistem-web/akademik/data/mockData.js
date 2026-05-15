// =============================================
// MOCK DATA — Sistem Akademik Sekolah
// =============================================

export const SCHOOL_INFO = {
  name: "SMK Nusantara Digital",
  address: "Jl. Pendidikan No. 42, Jakarta Selatan",
  phone: "021-7654321",
  email: "info@smknusantaradigital.sch.id",
  tahunAjaran: "2025/2026",
  semester: "Genap",
  // Koordinat sekolah (untuk geolocation radius check)
  lat: -6.2088,
  lng: 106.8456,
  radiusMeter: 500,
};

// =============================================
// GURU
// =============================================
export const GURU_LIST = [
  {
    id: "G001",
    nip: "198501012010011001",
    nama: "Budi Santoso, S.Pd",
    mapel: "Matematika",
    email: "budi.santoso@smknd.sch.id",
    phone: "081234567001",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    kelasWali: "XI-RPL-1",
    status: "Aktif",
  },
  {
    id: "G002",
    nip: "198703152011012002",
    nama: "Rina Wulandari, S.Kom",
    mapel: "Pemrograman Web",
    email: "rina.w@smknd.sch.id",
    phone: "081234567002",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    kelasWali: "XI-RPL-2",
    status: "Aktif",
  },
  {
    id: "G003",
    nip: "199005202012011003",
    nama: "Andi Prasetyo, M.Pd",
    mapel: "Basis Data",
    email: "andi.p@smknd.sch.id",
    phone: "081234567003",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    kelasWali: null,
    status: "Aktif",
  },
  {
    id: "G004",
    nip: "198812102013012004",
    nama: "Siti Nurhaliza, S.Pd",
    mapel: "Bahasa Inggris",
    email: "siti.n@smknd.sch.id",
    phone: "081234567004",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    kelasWali: "XII-RPL-1",
    status: "Aktif",
  },
  {
    id: "G005",
    nip: "199204252014011005",
    nama: "Dimas Aditya, S.T",
    mapel: "Jaringan Komputer",
    email: "dimas.a@smknd.sch.id",
    phone: "081234567005",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    kelasWali: null,
    status: "Aktif",
  },
];

// =============================================
// KELAS
// =============================================
export const KELAS_LIST = [
  {
    id: "K001",
    nama: "XI-RPL-1",
    jurusan: "Rekayasa Perangkat Lunak",
    waliKelas: "G001",
    jumlahSiswa: 10,
  },
  {
    id: "K002",
    nama: "XI-RPL-2",
    jurusan: "Rekayasa Perangkat Lunak",
    waliKelas: "G002",
    jumlahSiswa: 10,
  },
  {
    id: "K003",
    nama: "XII-RPL-1",
    jurusan: "Rekayasa Perangkat Lunak",
    waliKelas: "G004",
    jumlahSiswa: 10,
  },
];

// =============================================
// SISWA
// =============================================
const generateSiswa = () => {
  const names = [
    // Kelas XI-RPL-1
    { nama: "Ahmad Rizky Pratama", gender: "L" },
    { nama: "Bella Safitri", gender: "P" },
    { nama: "Candra Wijaya", gender: "L" },
    { nama: "Dewi Anggraini", gender: "P" },
    { nama: "Eko Prasetyo", gender: "L" },
    { nama: "Fitri Handayani", gender: "P" },
    { nama: "Gilang Ramadhan", gender: "L" },
    { nama: "Hana Pertiwi", gender: "P" },
    { nama: "Irfan Hakim", gender: "L" },
    { nama: "Jasmine Putri", gender: "P" },
    // Kelas XI-RPL-2
    { nama: "Kevin Sanjaya", gender: "L" },
    { nama: "Lestari Dewi", gender: "P" },
    { nama: "Muhammad Faisal", gender: "L" },
    { nama: "Nadia Kusuma", gender: "P" },
    { nama: "Oscar Tan", gender: "L" },
    { nama: "Putri Maharani", gender: "P" },
    { nama: "Qory Sandioriva", gender: "P" },
    { nama: "Reza Pahlevi", gender: "L" },
    { nama: "Sinta Dewi", gender: "P" },
    { nama: "Taufik Hidayat", gender: "L" },
    // Kelas XII-RPL-1
    { nama: "Umar Faruq", gender: "L" },
    { nama: "Vina Panduwinata", gender: "P" },
    { nama: "Wahyu Nugroho", gender: "L" },
    { nama: "Xena Avitia", gender: "P" },
    { nama: "Yoga Pratama", gender: "L" },
    { nama: "Zahra Aurelia", gender: "P" },
    { nama: "Arif Budiman", gender: "L" },
    { nama: "Bunga Citra", gender: "P" },
    { nama: "Dani Firmansyah", gender: "L" },
    { nama: "Elsa Maharani", gender: "P" },
  ];

  const kelas = ["K001", "K001", "K001", "K001", "K001", "K001", "K001", "K001", "K001", "K001",
                  "K002", "K002", "K002", "K002", "K002", "K002", "K002", "K002", "K002", "K002",
                  "K003", "K003", "K003", "K003", "K003", "K003", "K003", "K003", "K003", "K003"];

  const kelasNama = ["XI-RPL-1","XI-RPL-1","XI-RPL-1","XI-RPL-1","XI-RPL-1","XI-RPL-1","XI-RPL-1","XI-RPL-1","XI-RPL-1","XI-RPL-1",
                     "XI-RPL-2","XI-RPL-2","XI-RPL-2","XI-RPL-2","XI-RPL-2","XI-RPL-2","XI-RPL-2","XI-RPL-2","XI-RPL-2","XI-RPL-2",
                     "XII-RPL-1","XII-RPL-1","XII-RPL-1","XII-RPL-1","XII-RPL-1","XII-RPL-1","XII-RPL-1","XII-RPL-1","XII-RPL-1","XII-RPL-1"];

  return names.map((n, i) => ({
    id: `S${String(i + 1).padStart(3, "0")}`,
    nis: `2025${String(i + 1).padStart(4, "0")}`,
    nama: n.nama,
    gender: n.gender,
    kelasId: kelas[i],
    kelas: kelasNama[i],
    email: `${n.nama.split(" ")[0].toLowerCase()}@siswa.smknd.sch.id`,
    phone: `08${String(1234567100 + i)}`,
    avatar: n.gender === "L"
      ? `https://randomuser.me/api/portraits/men/${(i * 7 + 10) % 100}.jpg`
      : `https://randomuser.me/api/portraits/women/${(i * 7 + 10) % 100}.jpg`,
    alamat: "Jakarta Selatan",
    status: "Aktif",
  }));
};

export const SISWA_LIST = generateSiswa();

// =============================================
// MAPEL (Mata Pelajaran)
// =============================================
export const MAPEL_LIST = [
  { id: "M001", nama: "Matematika", guruId: "G001" },
  { id: "M002", nama: "Pemrograman Web", guruId: "G002" },
  { id: "M003", nama: "Basis Data", guruId: "G003" },
  { id: "M004", nama: "Bahasa Inggris", guruId: "G004" },
  { id: "M005", nama: "Jaringan Komputer", guruId: "G005" },
];

// =============================================
// JADWAL
// =============================================
export const JADWAL = [
  // Senin
  { hari: "Senin", jam: "07:30 - 09:00", mapelId: "M001", kelasId: "K001", guruId: "G001" },
  { hari: "Senin", jam: "09:15 - 10:45", mapelId: "M002", kelasId: "K001", guruId: "G002" },
  { hari: "Senin", jam: "11:00 - 12:30", mapelId: "M003", kelasId: "K001", guruId: "G003" },
  { hari: "Senin", jam: "07:30 - 09:00", mapelId: "M004", kelasId: "K002", guruId: "G004" },
  { hari: "Senin", jam: "09:15 - 10:45", mapelId: "M005", kelasId: "K002", guruId: "G005" },
  { hari: "Senin", jam: "07:30 - 09:00", mapelId: "M002", kelasId: "K003", guruId: "G002" },
  // Selasa
  { hari: "Selasa", jam: "07:30 - 09:00", mapelId: "M002", kelasId: "K001", guruId: "G002" },
  { hari: "Selasa", jam: "09:15 - 10:45", mapelId: "M004", kelasId: "K001", guruId: "G004" },
  { hari: "Selasa", jam: "07:30 - 09:00", mapelId: "M001", kelasId: "K002", guruId: "G001" },
  { hari: "Selasa", jam: "09:15 - 10:45", mapelId: "M003", kelasId: "K002", guruId: "G003" },
  { hari: "Selasa", jam: "07:30 - 09:00", mapelId: "M005", kelasId: "K003", guruId: "G005" },
  { hari: "Selasa", jam: "09:15 - 10:45", mapelId: "M001", kelasId: "K003", guruId: "G001" },
  // Rabu
  { hari: "Rabu", jam: "07:30 - 09:00", mapelId: "M003", kelasId: "K001", guruId: "G003" },
  { hari: "Rabu", jam: "09:15 - 10:45", mapelId: "M005", kelasId: "K001", guruId: "G005" },
  { hari: "Rabu", jam: "07:30 - 09:00", mapelId: "M002", kelasId: "K002", guruId: "G002" },
  { hari: "Rabu", jam: "09:15 - 10:45", mapelId: "M001", kelasId: "K002", guruId: "G001" },
  { hari: "Rabu", jam: "07:30 - 09:00", mapelId: "M004", kelasId: "K003", guruId: "G004" },
  // Kamis
  { hari: "Kamis", jam: "07:30 - 09:00", mapelId: "M004", kelasId: "K001", guruId: "G004" },
  { hari: "Kamis", jam: "09:15 - 10:45", mapelId: "M001", kelasId: "K001", guruId: "G001" },
  { hari: "Kamis", jam: "07:30 - 09:00", mapelId: "M005", kelasId: "K002", guruId: "G005" },
  { hari: "Kamis", jam: "09:15 - 10:45", mapelId: "M002", kelasId: "K002", guruId: "G002" },
  { hari: "Kamis", jam: "07:30 - 09:00", mapelId: "M003", kelasId: "K003", guruId: "G003" },
  // Jumat
  { hari: "Jumat", jam: "07:30 - 09:00", mapelId: "M005", kelasId: "K001", guruId: "G005" },
  { hari: "Jumat", jam: "07:30 - 09:00", mapelId: "M003", kelasId: "K002", guruId: "G003" },
  { hari: "Jumat", jam: "07:30 - 09:00", mapelId: "M001", kelasId: "K003", guruId: "G001" },
];

// =============================================
// NILAI
// =============================================
const generateNilai = () => {
  const result = [];
  SISWA_LIST.forEach((siswa) => {
    MAPEL_LIST.forEach((mapel) => {
      result.push({
        siswaId: siswa.id,
        mapelId: mapel.id,
        tugas: Math.floor(Math.random() * 25) + 75,
        uts: Math.floor(Math.random() * 30) + 65,
        uas: Math.floor(Math.random() * 30) + 65,
      });
    });
  });
  return result;
};

export const NILAI_LIST = generateNilai();

// =============================================
// ABSENSI RECORDS (pre-generated for past 7 days)
// =============================================
const generateAbsensiRecords = () => {
  const records = [];
  const statuses = ["hadir", "hadir", "hadir", "hadir", "hadir", "hadir", "hadir", "izin", "sakit", "alpha"];

  for (let d = 7; d >= 1; d--) {
    const date = new Date();
    date.setDate(date.getDate() - d);
    if (date.getDay() === 0 || date.getDay() === 6) continue; // skip weekend

    SISWA_LIST.forEach((siswa) => {
      records.push({
        siswaId: siswa.id,
        tanggal: date.toISOString().split("T")[0],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        waktu: `07:${String(Math.floor(Math.random() * 30) + 15).padStart(2, "0")}`,
        lat: -6.2088 + (Math.random() - 0.5) * 0.005,
        lng: 106.8456 + (Math.random() - 0.5) * 0.005,
      });
    });
  }
  return records;
};

export const ABSENSI_RECORDS = generateAbsensiRecords();

// =============================================
// HELPERS
// =============================================
export const getGuruById = (id) => GURU_LIST.find((g) => g.id === id);
export const getSiswaById = (id) => SISWA_LIST.find((s) => s.id === id);
export const getKelasById = (id) => KELAS_LIST.find((k) => k.id === id);
export const getMapelById = (id) => MAPEL_LIST.find((m) => m.id === id);
export const getSiswaByKelas = (kelasId) => SISWA_LIST.filter((s) => s.kelasId === kelasId);
export const getJadwalByKelas = (kelasId) => JADWAL.filter((j) => j.kelasId === kelasId);
export const getJadwalByGuru = (guruId) => JADWAL.filter((j) => j.guruId === guruId);
export const getNilaiSiswa = (siswaId) => NILAI_LIST.filter((n) => n.siswaId === siswaId);
export const getAbsensiSiswa = (siswaId) => ABSENSI_RECORDS.filter((a) => a.siswaId === siswaId);

// Demo user accounts for role picker
export const DEMO_USERS = {
  admin: {
    nama: "Administrator",
    role: "Super Admin",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "admin@smknd.sch.id",
  },
  guru: {
    ...GURU_LIST[0],
    role: "Guru",
  },
  siswa: {
    ...SISWA_LIST[0],
    role: "Siswa",
  },
};
