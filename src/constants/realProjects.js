export const realProjects = [
  {
    id: "spp-shiningsun",
    name: "Aplikasi SPP Shining Sun",
    path: "#",
    desc: "Sistem Administrasi SPP & Keuangan Sekolah Multi-Unit",
    icon: "☀️",
    category: "sistem berbasis web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    client: "Yayasan Shining Sun School",
    isReal: true,
    fullDescription: "Sistem administrasi keuangan terintegrasi yang dirancang khusus untuk mempermudah pencatatan dan monitoring pembayaran SPP di Yayasan Shining Sun School. Dilengkapi dengan dashboard Multi-Unit yang memisahkan otoritas Admin dan Superadmin, sistem ini mengotomatisasi pemantauan status lunas/belum lunas siswa berdasarkan format monthKey, mengurangi risiko pencatatan ganda, serta mempermudah ekspor laporan periodik secara real-time.",
    techStack: ["React JS", "Tailwind CSS", "Firebase Firestore", "Firebase Auth", "Express.js"],
    features: [
      "Dashboard multi-role (Superadmin, Unit Admin, Keuangan)",
      "Pencatatan status lunas & tagihan otomatis (monthKey)",
      "Rekapitulasi history pembayaran siswa real-time",
      "Ekspor laporan keuangan bulanan (Excel/PDF)"
    ]
  },
  {
    id: "absensi-pwa",
    name: "Aplikasi Absensi PWA",
    path: "#",
    desc: "Progressive Web App Kehadiran dengan Geolocation & Offline Sync",
    icon: "📱",
    category: "mobile app",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    client: "Klien Mitra UMKM",
    isReal: true,
    fullDescription: "Aplikasi presensi karyawan modern berbasis Progressive Web App (PWA) agar dapat langsung diinstal di ponsel atau laptop karyawan tanpa melalui app store formal. Dilengkapi dengan pelacakan lokasi (GPS tracking) yang akurat menggunakan Geolocation API guna memvalidasi kehadiran karyawan di zona yang ditentukan (geofencing), serta didukung sinkronisasi offline-first ketika jaringan internet tidak stabil.",
    techStack: ["React JS", "Tailwind CSS", "Service Workers (PWA)", "Geolocation API", "Firestore"],
    features: [
      "Instalasi instan tanpa App Store (Add to Home Screen)",
      "Deteksi & validasi lokasi GPS karyawan real-time",
      "Penyimpanan offline-first dengan sinkronisasi otomatis",
      "Dashboard laporan kehadiran & keterlambatan otomatis"
    ]
  },
  {
    id: "antrian-bri",
    name: "Sistem Antrian BRI Surabaya",
    path: "#",
    desc: "Sistem Antrian Digital Kantor Cabang Terintegrasi WebSockets",
    icon: "🏦",
    category: "sistem berbasis web",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80",
    client: "Bank BRI Kantor Cabang Surabaya",
    isReal: true,
    fullDescription: "Sistem manajemen antrian digital real-time yang dikembangkan untuk mengoptimalkan alur pelayanan nasabah di kantor cabang Bank BRI Surabaya. Menghubungkan printer cetak nomor antrian (kios antrian termal), monitor ruang tunggu utama, dan meja layanan (Teller & CS) secara sinkron menggunakan teknologi WebSockets. Dilengkapi dengan pemanggilan nomor antrian suara otomatis (Text-to-Speech) dalam bahasa Indonesia serta dashboard pelaporan waktu tunggu nasabah.",
    techStack: ["React JS", "Node.js", "Express.js", "WebSockets (Socket.io)", "Text-to-Speech API"],
    features: [
      "Sinkronisasi antrean instan multi-loket via WebSockets",
      "Sistem pemanggilan suara otomatis (TTS) dinamis",
      "Integrasi cetak nomor antrean termal (Kios K-Net)",
      "Dashboard analitik kecepatan pelayanan teller/CS"
    ]
  },
  {
    id: "tamiya-race-tracker",
    name: "Software Balapan Tamiya Jakarta",
    path: "#",
    desc: "Aplikasi Desktop Timing & Turnamen Mini 4WD Terkoneksi Arduino Sensor",
    icon: "🏎️",
    category: "software",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    client: "Komunitas Tamiya Indonesia Jakarta",
    isReal: true,
    fullDescription: "Software sistem pencatatan waktu balapan (timing system) kustom yang dirancang untuk kejuaraan Mini 4WD (Tamiya) di Jakarta. Aplikasi desktop berbasis Electron ini terhubung langsung ke sensor infrared di lintasan balap melalui komunikasi serial mikrokontroler Arduino. Menghasilkan pencatatan waktu putaran (lap time) dengan akurasi hingga milidetik, mengotomatisasi pengacakan bagan tanding (tournament bracket), dan menampilkan leaderboard live layar lebar untuk penonton.",
    techStack: ["Electron.js", "React JS", "Node SerialPort API", "Arduino (C++) Sensor", "SQLite"],
    features: [
      "Koneksi SerialPort real-time ke sensor Arduino",
      "Pencatatan waktu lap presisi tinggi (hingga milidetik)",
      "Bagan turnamen eliminasi & tanding otomatis",
      "Tampilan leaderboard live layar lebar responsif"
    ]
  }
];
