import starbucksCoverImg from "../assets/StarbucksCover.jpg";
import hotelCoverImg from "../assets/HotelCover.jpg";
import unitaCoverImg from "../assets/UNITACover.jpg";
import aryaMotorCoverImg from "../assets/AryaMotorCover.jpg";
import nikoNikoCoverImg from "../assets/NikoNikoCover.jpg";
import aioLaundryCoverImg from "../assets/AioLaundryCover.jpg";
import umrohCoverImg from "../assets/UmrohCover.jpg";
import akademikCoverImg from "../assets/AkademikCover.jpg";
import warungOSCoverImg from "../assets/WarungOSCover.jpg";
import examOSCoverImg from "../assets/ExamOSCover.jpg";
import absenOSCoverImg from "../assets/AbsenOSCover.jpg";
import posMobileCoverImg from "../assets/POSMobileCover.jpg";

export const demos = [
  {
    id: "starbucks",
    name: "Starbucks",
    path: "/coffee",
    desc: "Landing Page Informasi & Galeri Coffee Shop",
    icon: "☕",
    category: "landing page",
    image: starbucksCoverImg,
    client: "Starbucks",
    fullDescription: "Pembuatan landing page interaktif untuk menampilkan profil brand, lokasi gerai, dan katalog menu premium Starbucks. Website ini didesain khusus untuk memberikan pengalaman visual yang memanjakan mata, mengundang pelanggan untuk merasakan atmosfer kedai kopi langsung dari layar mereka.",
    techStack: ["React JS", "Tailwind CSS", "Framer Motion", "Vite"],
    features: [
      "Desain responsif dan premium",
      "Katalog menu kopi interaktif",
      "Animasi transisi halaman yang mulus (smooth scroll)",
      "Galeri foto kualitas tinggi"
    ]
  },
  {
    id: "aryamotor",
    name: "UD Arya Motor",
    path: "/rental",
    desc: "Jual Beli Motor Bekas Berkualitas di Tulungagung",
    icon: "🏍️",
    category: "landing page",
    image: aryaMotorCoverImg,
    client: "UD Arya Motor",
    fullDescription: "Sebuah portal digital yang berfokus pada katalog kendaraan bermotor roda dua (motor bekas). Platform ini memudahkan calon pembeli melihat inventaris, membandingkan spesifikasi motor, dan langsung menghubungi pihak showroom via WhatsApp.",
    techStack: ["React JS", "Tailwind CSS", "Lucide Icons"],
    features: [
      "Sistem filter kategori motor otomatis",
      "Detail spesifikasi setiap kendaraan",
      "Integrasi langsung ke WhatsApp Admin",
      "SEO Friendly untuk pasar otomotif lokal"
    ]
  },
  {
    id: "hotel",
    name: "Crown Victoria",
    path: "/hotel",
    desc: "Website Hotel Bintang 4 Tulungagung + Planner Event",
    icon: "🏨",
    category: "landing page",
    image: hotelCoverImg,
    client: "Crown Victoria Hotel",
    fullDescription: "Website ofisial mewah untuk Crown Victoria Hotel, menampilkan tipe-tipe kamar premium, ballroom megah, dan fasilitas standar internasional. Bertujuan meningkatkan booking reservasi secara langsung serta memberikan citra hotel bintang 4 yang eksklusif.",
    techStack: ["React JS", "Tailwind CSS", "Framer Motion", "GDI+ Image Optimization"],
    features: [
      "Showcase Tipe Kamar Interaktif (Suite, Deluxe)",
      "Informasi Fasilitas & Ballroom Lengkap",
      "Galeri Foto Resolusi Tinggi (Lazy Loading)",
      "Sistem Navigasi yang Sangat Mulus"
    ]
  },
  {
    id: "nikoniko",
    name: "Niko-Niko Ramen",
    path: "/resto",
    desc: "Website Ramen Jepang Kediri + Custom Order",
    icon: "🍜",
    category: "landing page",
    image: nikoNikoCoverImg,
    client: "Niko-Niko Ramen",
    fullDescription: "Landing page modern dengan tema Jepang untuk sebuah restoran Ramen di Kediri. Fokus pada penempatan menu yang menggugah selera dan memudahkan proses reservasi atau pemesanan secara online.",
    techStack: ["React JS", "Tailwind CSS", "Vite"],
    features: [
      "Katalog Menu Digital",
      "Integrasi Pemesanan Online",
      "Theme Estetika Khas Jepang",
      "Testimoni Pelanggan"
    ]
  },
  {
    id: "unita",
    name: "Universitas Tulungagung",
    path: "/unita",
    desc: "Landing page kampus UNITA — Akreditasi B, Est. 1984",
    icon: "🎓",
    category: "landing page",
    image: unitaCoverImg,
    client: "Universitas Tulungagung",
    fullDescription: "Profil digital untuk Universitas Tulungagung yang menyajikan informasi akademik, penerimaan mahasiswa baru (PMB), fasilitas kampus, dan direktori dosen. Desain menekankan aspek akademik, formal, dan mudah dinavigasi.",
    techStack: ["React JS", "Tailwind CSS", "Framer Motion"],
    features: [
      "Informasi Fakultas & Program Studi",
      "Alur Pendaftaran Mahasiswa Baru (PMB)",
      "Berita & Pengumuman Kampus",
      "Sistem Navigasi Responsif"
    ]
  },
  {
    id: "aiolaundry",
    name: "Aio Laundry Express",
    path: "/laundry",
    desc: "Aio Laundry Express Antar Jemput Tulungagung",
    icon: "🧺",
    category: "landing page",
    image: aioLaundryCoverImg,
    client: "Aio Laundry",
    fullDescription: "Website pelayanan jasa laundry yang efisien dengan layanan antar-jemput. Platform ini menjelaskan secara detail tentang layanan kiloan, dry clean, dan setrika, lengkap dengan perhitungan harga estimasi.",
    techStack: ["React JS", "Tailwind CSS"],
    features: [
      "Katalog Layanan & Harga",
      "Formulir Permintaan Antar-Jemput",
      "Integrasi WhatsApp Chat",
      "Ulasan Pelanggan Realtime"
    ]
  },
  {
    id: "umroh",
    name: "Jabal Noor.official",
    path: "/umroh",
    desc: "Biro Perjalanan Haji & Umroh Terpercaya di Trenggalek",
    icon: "🕋",
    category: "landing page",
    image: umrohCoverImg,
    client: "Jabal Noor.official",
    fullDescription: "Platform informatif untuk biro perjalanan haji dan umroh, merinci berbagai paket perjalanan, itinerary harian, dokumen persyaratan, dan informasi mutawwif yang berpengalaman.",
    techStack: ["React JS", "Tailwind CSS"],
    features: [
      "Pilihan Paket Umroh & Haji",
      "Detail Itinerary Perjalanan",
      "Informasi Akomodasi (Hotel, Pesawat)",
      "Konsultasi Langsung via WA"
    ]
  },
  {
    id: "akademik",
    name: "Sistem Akademik",
    path: "/akademik",
    desc: "Management sekolah + absensi geolocation",
    icon: "🎓",
    category: "sistem berbasis web",
    image: akademikCoverImg,
    client: "Project Internal",
    fullDescription: "Sebuah sistem manajemen sekolah (SIAKAD) komprehensif yang dirancang untuk mengelola data siswa, nilai, jadwal pelajaran, dan mengotomatisasi absensi guru/siswa menggunakan geolocation (GPS).",
    techStack: ["React JS", "Node.js", "MySQL", "Geolocation API"],
    features: [
      "Dashboard Admin & Guru",
      "Absensi dengan Pelacakan Lokasi (GPS)",
      "Manajemen Nilai & Rapor Elektronik",
      "Multi-Role System (Admin, Guru, Siswa)"
    ]
  },
  {
    id: "warungos",
    name: "WarungOS",
    path: "/warungos",
    desc: "Sistem Kasir & Stok Toko Klontong Modern",
    icon: "🏪",
    category: "sistem berbasis web",
    image: warungOSCoverImg,
    client: "UMKM Lokal",
    fullDescription: "Sistem Point of Sale (POS) modern berbassis web, dirancang khusus untuk toko kelontong atau minimarket. Mendukung pencatatan transaksi kasir harian, manajemen inventaris stok barang otomatis, dan pelaporan keuangan periodik.",
    techStack: ["React JS", "Express.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Sistem Kasir (POS) Responsif Cepat",
      "Manajemen Stok Keluar/Masuk",
      "Scan Barcode Produk",
      "Laporan Penjualan (Harian/Bulanan)"
    ]
  },
  {
    id: "examos",
    name: "ExamOS",
    path: "/examos",
    desc: "Platform Ujian Online & Bank Soal Modern",
    icon: "📝",
    category: "sistem berbasis web",
    image: examOSCoverImg,
    client: "Institusi Pendidikan",
    fullDescription: "Platform berbasis web untuk mengelola dan melaksanakan ujian secara online. ExamOS dilengkapi dengan manajemen bank soal, timer ujian, dan sistem pengawasan otomatis untuk mencegah kecurangan (anti-cheat basic).",
    techStack: ["React JS", "Next.js", "MongoDB"],
    features: [
      "Manajemen Bank Soal Beragam Tipe",
      "Sistem Timer & Auto-Submit Ujian",
      "Penilaian Otomatis Pilihan Ganda",
      "Proteksi Layar (Anti-Copy & Switch Tab)"
    ]
  },
  {
    id: "absenos",
    name: "AbsenOS",
    path: "/absenos",
    desc: "Mobile Attendance with Biometric & Geolocation",
    icon: "📱",
    category: "mobile app",
    image: absenOSCoverImg,
    client: "Corporate/Perusahaan",
    fullDescription: "Aplikasi mobile modern untuk presensi karyawan, mengkombinasikan keamanan pengenalan wajah (biometric facial recognition) dan pelacakan lokasi akurat untuk memastikan kedisiplinan serta validasi kehadiran di area kerja.",
    techStack: ["React Native", "Firebase", "Google Maps API", "Face Recognition SDK"],
    features: [
      "Presensi dengan Pengenalan Wajah",
      "Validasi Lokasi (Geofencing)",
      "Riwayat Kehadiran Karyawan",
      "Pengajuan Cuti & Izin Terintegrasi"
    ]
  },
  {
    id: "posmobile",
    name: "POS Mobile",
    path: "#",
    desc: "Mobile cashier app for UMKM business.",
    icon: "💰",
    category: "mobile app",
    image: posMobileCoverImg,
    client: "UMKM Lokal",
    fullDescription: "Versi mobile dari sistem kasir konvensional, membantu pedagang kecil, food truck, atau event organizer untuk memproses transaksi dengan cepat hanya dengan menggunakan smartphone dan printer thermal bluetooth.",
    techStack: ["Flutter", "Dart", "SQLite", "Bluetooth Serial API"],
    features: [
      "Kasir Offline Mode",
      "Koneksi ke Bluetooth Thermal Printer",
      "Manajemen Katalog Produk & Variasi",
      "Rekapitulasi Omset Cepat"
    ]
  },
];
