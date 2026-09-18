import starbucksCoverImg from "../assets/StarbucksCover.jpg";
import hotelCoverImg from "../assets/HotelCover.jpg";
import unitaCoverImg from "../assets/universitasTulungagung/heroUnita.jpeg";
import unitaLogo from "../assets/universitasTulungagung/logoUnita.jpg";
import unitaBeforeImg from "../assets/universitasTulungagung/before.png";
import unitaAfterImg from "../assets/universitasTulungagung/after.png";
import yamahaCoverImg from "../assets/Yamaha/image.png";
import yamahaImage1 from "../assets/Yamaha/gambar1.png";
import yamahaLogo from "../assets/Yamaha/yamahalogo.png";
import iconYamaha from "../assets/Yamaha/iconyamaha.png";
import heroYamaha from "../assets/Yamaha/heroyamaha.jpg";
import homeRentalMotor from "../assets/Yamaha/HomeRentalMontor.png";
import nikoNikoCoverImg from "../assets/NikoNikoCover.jpg";
import aioLaundryCoverImg from "../assets/AioLaundryCover.jpg";
import aioLaundryLogo from "../assets/loundry/logoLoundry.png";
import aioLaundryAfterImg from "../assets/loundry/after.png";
import umrohCoverImg from "../assets/UmrohCover.jpg";
import akademikCoverImg from "../assets/AkademikCover.jpg";
import warungOSCoverImg from "../assets/WarungOSCover.jpg";
import examOSCoverImg from "../assets/ExamOSCover.jpg";
import absenOSCoverImg from "../assets/AbsenOSCover.jpg";
import posMobileCoverImg from "../assets/POSMobileCover.jpg";
import starbucksIcon from "../assets/starbuck/starbuck icon.png";
import starbucksBeforeImg from "../assets/starbuck/before.png";
import starbucksAfterImg from "../assets/starbuck/after.png";
import crownAfterImg from "../assets/crown/after.png";
import crownBeforeImg from "../assets/crown/before.png";
import crownLogo from "../assets/crown/logoCrown.png";
import gacoanAfterImg from "../assets/mieGacoan/after.png";
import gacoanBeforeImg from "../assets/mieGacoan/before.png";
import gacoanLogo from "../assets/mieGacoan/logoMieGacoan.png";

export const demos = [
  {
    id: "starbucks",
    name: "Starbucks",
    path: "/coffee",
    desc: {
      id: "Template Landing Page Coffee Shop Premium",
      en: "Premium Coffee Shop Landing Page Template",
    },
    icon: starbucksIcon,
    category: "landing page",
    image: starbucksAfterImg,
    client: "Starbucks",
    fullDescription: {
      id: "Template landing page interaktif untuk coffee shop dengan tampilan premium dan modern. Website ini menampilkan profil brand, atmosfer kedai kopi, katalog menu yang menarik, serta fitur-fitur unggulan seperti desain responsif dan navigasi yang halus. Cocok untuk bisnis coffee shop yang ingin memiliki kehadiran digital yang profesional.",
      en: "Interactive landing page template for coffee shop with premium and modern appearance. This website displays brand profile, coffee shop atmosphere, attractive menu catalog, and flagship features such as responsive design and smooth navigation. Suitable for coffee shop businesses that want a professional digital presence.",
    },
    techStack: ["React JS", "Tailwind CSS", "Framer Motion", "Vite"],
    features: [
      {
        id: "Desain responsif dan premium",
        en: "Responsive and premium design",
      },
      {
        id: "Katalog menu kopi interaktif",
        en: "Interactive coffee menu catalog",
      },
      {
        id: "Animasi transisi halaman yang mulus (smooth scroll)",
        en: "Smooth scroll page transition animations",
      },
      { id: "Galeri foto kualitas tinggi", en: "High-quality photo gallery" },
    ],
  },
  {
    id: "yamaha",
    name: "Yamaha Motor Indonesia",
    path: "/rental",
    desc: {
      id: "Portal Informasi Produk, Layanan & Aktivitas Resmi Yamaha Indonesia",
      en: "Official Product Information, Service & Activity Portal of Yamaha Indonesia",
    },
    icon: iconYamaha,
    category: "landing page",
    image: yamahaImage1,
    gallery: [yamahaImage1],
    client: "PT Yamaha Indonesia Motor Manufacturing (YIMM)",
    fullDescription: {
      id: "Website resmi PT Yamaha Indonesia Motor Manufacturing (YIMM) yang berfungsi sebagai portal informasi produk, layanan, dan aktivitas Yamaha di Indonesia. Platform ini menyajikan katalog motor lengkap (MAXi, Classy, Matic, Sport, Off-Road, Moped), simulasi kredit pembelian, booking servis berkala, pencarian dealer resmi, hingga portal berita racing dan keanggotaan My Yamaha Motor.",
      en: "Official website of PT Yamaha Indonesia Motor Manufacturing (YIMM) serving as a comprehensive information portal for Yamaha products, services, and activities in Indonesia. Features complete motorcycle catalogs (MAXi, Classy, Matic, Sport, Off-Road, Moped), credit simulation, periodic service booking, official dealer locator, racing news portal, and My Yamaha Motor membership.",
    },
    techStack: [
      "React JS",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Lucide Icons",
    ],
    features: [
      {
        id: "Credit Simulation (Simulasi Kredit Pembelian Motor)",
        en: "Credit Simulation for Motorcycle Purchases",
      },
      {
        id: "Service Booking & Find Dealer Resmi Terdekat",
        en: "Service Booking & Nearest Official Dealer Locator",
      },
      {
        id: "Katalog Motor 6 Kategori (MAXi, Classy, Matic, Sport, Off-Road, Moped)",
        en: "6 Category Motorcycle Catalog (MAXi, Classy, Matic, Sport, Off-Road, Moped)",
      },
      {
        id: "My Yamaha Motor Members & Owners Manual Digital Online",
        en: "My Yamaha Motor Members & Online Digital Owners Manual",
      },
      {
        id: "WhatsApp Help ('Dapatkan Bantuan') & Portal Berita bLU cRU / Racing",
        en: "WhatsApp Help & bLU cRU / Racing News Portal",
      },
      {
        id: "Yamaha Genuine Parts (YGP) & Yamalube Apparel Showcase",
        en: "Yamaha Genuine Parts (YGP) & Yamalube Apparel Showcase",
      },
    ],
  },
  {
    id: "hotel",
    name: "Crown Victoria",
    path: "/hotel",
    desc: {
      id: "Website Hotel Bintang 4 Tulungagung + Planner Event",
      en: "4-Star Hotel Website in Tulungagung + Event Planner",
    },
    icon: crownLogo,
    category: "landing page",
    image: crownAfterImg,
    client: "Crown Victoria Hotel",
    fullDescription: {
      id: "Template landing page profesional untuk hotel bintang 4 dengan tampilan mewah dan modern, menampilkan tipe-tipe kamar premium, ballroom megah, dan fasilitas standar internasional. Dapat disesuaikan untuk berbagai kebutuhan bisnis perhotelan.",
      en: "Professional landing page template for 4-star hotel with luxurious modern appearance, displaying premium room types, magnificent ballroom, and international standard facilities. Can be customized for various hotel business needs.",
    },
    techStack: [
      "React JS",
      "Tailwind CSS",
      "Framer Motion",
      "GDI+ Image Optimization",
    ],
    features: [
      {
        id: "Showcase Tipe Kamar Interaktif (Suite, Deluxe)",
        en: "Interactive Room Type Showcase (Suite, Deluxe)",
      },
      {
        id: "Informasi Fasilitas & Ballroom Lengkap",
        en: "Complete Facilities & Ballroom Information",
      },
      {
        id: "Galeri Foto Resolusi Tinggi (Lazy Loading)",
        en: "High Resolution Photo Gallery (Lazy Loading)",
      },
      {
        id: "Sistem Navigasi yang Sangat Mulus",
        en: "Very Smooth Navigation System",
      },
    ],
  },
  {
    id: "nikoniko",
    name: "Mie Gacoan Tulungagung",
    path: "/resto",
    desc: {
      id: "Website Mie Gacoan Tulungagung — Pedasnya Nendang, Harga Ramah",
      en: "Mie Gacoan Tulungagung Website — Kickin' Spicy, Friendly Prices",
    },
    icon: gacoanLogo,
    category: "landing page",
    image: gacoanAfterImg,
    client: "Mie Gacoan Tulungagung",
    fullDescription: {
      id: "Template landing page profesional untuk restoran makanan dengan tampilan modern dan interaktif, menampilkan katalog menu mie pedas, dimsum, dan minuman segar. Dilengkapi fitur custom level kepedasan, kalkulator pemesanan, dan lokasi cabang.",
      en: "Professional landing page template for food restaurant with modern interactive appearance, featuring spicy noodle catalog, dimsum, and fresh beverages. Equipped with spiciness level customizer, order calculator, and branch locator features.",
    },
    techStack: [
      "React JS",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Lucide Icons",
    ],
    features: [
      {
        id: "Katalog Menu Mie Pedas & Dimsum Interaktif",
        en: "Interactive Spicy Noodle & Dimsum Catalog",
      },
      {
        id: "Customizer Level Kepedasan (Level 0 - 8)",
        en: "Spiciness Level Customizer (Level 0 - 8)",
      },
      {
        id: "Fitur Kalkulator Pemesanan & WA Checkout",
        en: "Order Calculator & WA Checkout Feature",
      },
      {
        id: "Informasi Cabang Tulungagung & Jam Buka",
        en: "Tulungagung Branch Info & Opening Hours",
      },
    ],
  },
  {
    id: "unita",
    name: "Universitas Tulungagung",
    path: "/unita",
    desc: {
      id: "Landing Page Resmi UNITA — Akreditasi B BAN-PT, Est. 1984",
      en: "Official UNITA Campus Landing Page — B Accreditation, Est. 1984",
    },
    icon: unitaLogo,
    category: "landing page",
    image: unitaAfterImg,
    beforeImage: unitaBeforeImg,
    client: "Universitas Tulungagung",
    fullDescription: {
      id: "Portal digital resmi Universitas Tulungagung (UNITA), perguruan tinggi swasta terakreditasi B BAN-PT di Jawa Timur (Est. 18 Mei 1984). Menyajikan struktur navigasi terintegrasi untuk 5 Fakultas & 8 Prodi, E-Services Kampus (SIAKAD, Edlink E-Learning, E-Library, SISTER, PDDIKTI, KarirLink), serta Pendaftaran Mahasiswa Baru (PMB).",
      en: "Official digital portal of Universitas Tulungagung (UNITA), B BAN-PT accredited private university in East Java (Est. May 18, 1984). Featuring integrated navigation for 5 Faculties & 8 Study Programs, Campus E-Services (SIAKAD, Edlink E-Learning, E-Library, SISTER, PDDIKTI, KarirLink), and New Student Admissions (PMB).",
    },
    techStack: [
      "React JS",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Lucide Icons",
    ],
    features: [
      {
        id: "5 Fakultas & 8 Program Studi Terakreditasi BAN-PT",
        en: "5 Faculties & 8 Study Programs Accredited by BAN-PT",
      },
      {
        id: "Integrasi E-Services (SIAKAD, Edlink, SISTER, PDDIKTI, SINTA)",
        en: "E-Services Integration (SIAKAD, Edlink, SISTER, PDDIKTI, SINTA)",
      },
      {
        id: "Portal PMB Online (Penerimaan Mahasiswa Baru)",
        en: "Online New Student Admission Portal (PMB)",
      },
      {
        id: "E-Library, Repository, Jurnal & KarirLink Alumni",
        en: "E-Library, Repository, Journals & Alumni CareerLink Portal",
      },
    ],
  },
  {
    id: "aiolaundry",
    name: "Aio Laundry Express",
    path: "/laundry",
    desc: {
      id: "Aio Laundry Express Antar Jemput Tulungagung",
      en: "Aio Laundry Express Pickup & Delivery Tulungagung",
    },
    icon: aioLaundryLogo,
    category: "landing page",
    image: aioLaundryAfterImg,
    beforeImage: aioLaundryCoverImg,
    client: "Aio Laundry",
    fullDescription: {
      id: "Website pelayanan jasa laundry yang efisien dengan layanan antar-jemput. Platform ini menjelaskan secara detail tentang layanan kiloan, dry clean, dan setrika, lengkap dengan perhitungan harga estimasi.",
      en: "Efficient laundry service website featuring pickup & delivery options. This platform explains services like bulk, dry clean, and ironing in detail, complete with estimated price calculators.",
    },
    techStack: ["React JS", "Tailwind CSS"],
    features: [
      { id: "Katalog Layanan & Harga", en: "Service & Pricing Catalog" },
      {
        id: "Formulir Permintaan Antar-Jemput",
        en: "Pickup & Delivery Request Form",
      },
      { id: "Integrasi WhatsApp Chat", en: "WhatsApp Chat Integration" },
      { id: "Ulasan Pelanggan Realtime", en: "Real-time Customer Reviews" },
    ],
  },
  {
    id: "umroh",
    name: "Jabal Noor.official",
    path: "/umroh",
    desc: {
      id: "Biro Perjalanan Haji & Umroh Terpercaya di Trenggalek",
      en: "Trusted Hajj & Umrah Travel Agency in Trenggalek",
    },
    icon: "🕋",
    category: "landing page",
    image: umrohCoverImg,
    client: "Jabal Noor.official",
    fullDescription: {
      id: "Platform informatif untuk biro perjalanan haji dan umroh, merinci berbagai paket perjalanan, itinerary harian, dokumen persyaratan, dan informasi mutawwif yang berpengalaman.",
      en: "Informational platform for Hajj & Umrah travel agency, detailing various travel packages, daily itineraries, document requirements, and experienced guide information.",
    },
    techStack: ["React JS", "Tailwind CSS"],
    features: [
      { id: "Pilihan Paket Umroh & Haji", en: "Umrah & Hajj Package Choices" },
      { id: "Detail Itinerary Perjalanan", en: "Detailed Travel Itinerary" },
      {
        id: "Informasi Akomodasi (Hotel, Pesawat)",
        en: "Accommodation Info (Hotel, Flight)",
      },
      {
        id: "Konsultasi Langsung via WA",
        en: "Direct Consultation via WhatsApp",
      },
    ],
  },
  {
    id: "akademik",
    name: "Sistem Akademik",
    path: "/akademik",
    desc: {
      id: "Management sekolah + absensi geolocation",
      en: "School Management + Geolocation Attendance",
    },
    icon: "🎓",
    category: "sistem berbasis web",
    image: akademikCoverImg,
    client: "Project Internal",
    fullDescription: {
      id: "Sebuah sistem manajemen sekolah (SIAKAD) komprehensif yang dirancang untuk mengelola data siswa, nilai, jadwal pelajaran, dan mengotomatisasi absensi guru/siswa menggunakan geolocation (GPS).",
      en: "A comprehensive school management system (SIAKAD) designed to manage student data, grades, class schedules, and automate teacher/student attendance using geolocation (GPS).",
    },
    techStack: ["React JS", "Node.js", "MySQL", "Geolocation API"],
    features: [
      { id: "Dashboard Admin & Guru", en: "Admin & Teacher Dashboard" },
      {
        id: "Absensi dengan Pelacakan Lokasi (GPS)",
        en: "Attendance with Location Tracking (GPS)",
      },
      {
        id: "Manajemen Nilai & Rapor Elektronik",
        en: "Grades & Electronic Report Card Management",
      },
      {
        id: "Multi-Role System (Admin, Guru, Siswa)",
        en: "Multi-Role System (Admin, Teacher, Student)",
      },
    ],
  },
  {
    id: "warungos",
    name: "WarungOS",
    path: "/warungos",
    desc: {
      id: "Sistem Kasir & Stok Toko Klontong Modern",
      en: "Modern Grocery Shop Cashier & Stock System",
    },
    icon: "🏪",
    category: "sistem berbasis web",
    image: warungOSCoverImg,
    client: "UMKM Lokal",
    fullDescription: {
      id: "Sistem Point of Sale (POS) modern berbasis web, dirancang khusus untuk toko kelontong atau minimarket. Mendukung pencatatan transaksi kasir harian, manajemen inventaris stok barang otomatis, dan pelaporan keuangan periodik.",
      en: "A modern web-based Point of Sale (POS) system, specifically designed for grocery stores or minimarkets. Supports recording daily cashier transactions, automatic inventory stock management, and periodic financial reporting.",
    },
    techStack: ["React JS", "Express.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      {
        id: "Sistem Kasir (POS) Responsif Cepat",
        en: "Fast Responsive Cashier System (POS)",
      },
      { id: "Manajemen Stok Keluar/Masuk", en: "Stock In/Out Management" },
      { id: "Scan Barcode Produk", en: "Product Barcode Scanning" },
      {
        id: "Laporan Penjualan (Harian/Bulanan)",
        en: "Sales Reports (Daily/Monthly)",
      },
    ],
  },
  {
    id: "examos",
    name: "ExamOS",
    path: "/examos",
    desc: {
      id: "Platform Ujian Online & Bank Soal Modern",
      en: "Online Examination & Modern Question Bank Platform",
    },
    icon: "📝",
    category: "sistem berbasis web",
    image: examOSCoverImg,
    client: "Institusi Pendidikan",
    fullDescription: {
      id: "Platform berbasis web untuk mengelola dan melaksanakan ujian secara online. ExamOS dilengkapi dengan manajemen bank soal, timer ujian, dan sistem pengawasan otomatis untuk mencegah kecurangan (anti-cheat basic).",
      en: "Web-based platform to manage and conduct examinations online. ExamOS comes equipped with question bank management, exam timers, and automatic proctoring systems to prevent cheating (basic anti-cheat).",
    },
    techStack: ["React JS", "Next.js", "MongoDB"],
    features: [
      {
        id: "Manajemen Bank Soal Beragam Tipe",
        en: "Various Types of Question Bank Management",
      },
      {
        id: "Sistem Timer & Auto-Submit Ujian",
        en: "Exam Timer & Auto-Submit System",
      },
      {
        id: "Penilaian Otomatis Pilihan Ganda",
        en: "Automatic Multiple Choice Grading",
      },
      {
        id: "Proteksi Layar (Anti-Copy & Switch Tab)",
        en: "Screen Protection (Anti-Copy & Switch Tab)",
      },
    ],
  },
  {
    id: "absenos",
    name: "AbsenOS",
    path: "/absenos",
    desc: {
      id: "Absensi Mobile dengan Biometrik & Geolocation",
      en: "Mobile Attendance with Biometric & Geolocation",
    },
    icon: "📱",
    category: "mobile app",
    image: absenOSCoverImg,
    client: "Corporate/Perusahaan",
    fullDescription: {
      id: "Aplikasi mobile modern untuk presensi karyawan, mengkombinasikan keamanan pengenalan wajah (biometric facial recognition) dan pelacakan lokasi akurat untuk memastikan kedisiplinan serta validasi kehadiran di area kerja.",
      en: "Modern mobile application for employee attendance, combining biometric facial recognition and accurate location tracking to ensure discipline and attendance validation in the work area.",
    },
    techStack: [
      "React Native",
      "Firebase",
      "Google Maps API",
      "Face Recognition SDK",
    ],
    features: [
      {
        id: "Presensi dengan Pengenalan Wajah",
        en: "Facial Recognition Attendance",
      },
      {
        id: "Validasi Lokasi (Geofencing)",
        en: "Location Validation (Geofencing)",
      },
      { id: "Riwayat Kehadiran Karyawan", en: "Employee Attendance History" },
      {
        id: "Pengajuan Cuti & Izin Terintegrasi",
        en: "Integrated Leave & Permission Application",
      },
    ],
  },
  {
    id: "posmobile",
    name: "POS Mobile",
    path: "#",
    desc: {
      id: "Aplikasi kasir mobile untuk bisnis UMKM",
      en: "Mobile cashier app for UMKM businesses",
    },
    icon: "💰",
    category: "mobile app",
    image: posMobileCoverImg,
    client: "UMKM Lokal",
    fullDescription: {
      id: "Versi mobile dari sistem kasir konvensional, membantu pedagang kecil, food truck, atau event organizer untuk memproses transaksi dengan cepat hanya dengan menggunakan smartphone dan printer thermal bluetooth.",
      en: "A mobile version of the conventional cashier system, helping small merchants, food trucks, or event organizers to process transactions quickly using just a smartphone and bluetooth thermal printer.",
    },
    techStack: ["Flutter", "Dart", "SQLite", "Bluetooth Serial API"],
    features: [
      { id: "Kasir Offline Mode", en: "Offline Cashier Mode" },
      {
        id: "Koneksi ke Bluetooth Thermal Printer",
        en: "Connection to Bluetooth Thermal Printer",
      },
      {
        id: "Manajemen Katalog Produk & Variasi",
        en: "Product Catalog & Variation Management",
      },
      { id: "Rekapitulasi Omset Cepat", en: "Fast Turnover Recapitulation" },
    ],
  },
];
