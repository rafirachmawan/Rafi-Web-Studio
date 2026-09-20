// src/features/hotel/data/hotelData.js
// Data resmi dan komprehensif Crown Victoria Hotel Tulungagung
// Sumber data: CROWN_VICTORIA_REDESIGN_FOUNDATION.md

export const HOTEL_INFO = {
  name: "Crown Victoria Hotel",
  fullName: "Crown Victoria Hotel Tulungagung",
  stars: 4,
  rating: 7.3,
  reviewCount: "90+ Ulasan Terverifikasi",
  tagline: "Where Victorian Elegance Meets Modern Luxury",
  description:
    "Hotel bintang 4 terkemuka di Tulungagung yang memadukan arsitektur klasik Victorian yang megah dengan kenyamanan modern kelas dunia. Dilengkapi kolam renang indoor dengan water slide, live cooking di Sultan Resto, dan Victoria Grand Ballroom.",
  address: "Jl. Supriadi No. 41, Jepun, Kec. Tulungagung, Kabupaten Tulungagung, Jawa Timur 66218",
  phone: "(0355) 331321",
  phoneFormatted: "+62 355 331 321",
  whatsapp: "085196221716",
  instagram: "@crownvictoriahotel",
  checkIn: "14:00 WIB",
  checkOut: "12:00 WIB",
  mapUrl: "https://maps.google.com/?q=Crown+Victoria+Hotel+Tulungagung",
  highlights: [
    { title: "Hotel Bintang 4", desc: "Satu-satunya hotel bergaya Victorian termegah di Tulungagung" },
    { title: "Lokasi Strategis 8.8/10", desc: "Hanya 5 menit (1.8 km) dari Stasiun Kereta Api Tulungagung" },
    { title: "Indoor Pool & Slide", desc: "Kolam renang tertutup dengan seluncuran air seru ramah keluarga" },
    { title: "Live Cooking Breakfast", desc: "Sarapan prasmanan hangat dengan racikan langsung dari koki" },
  ],
};

export const HOTEL_STATS = [
  { value: "4★", label: "Official Rating", sub: "Hotel Bintang 4 Terkemuka" },
  { value: "8.8", label: "Skor Lokasi", sub: "Terbaik di Pusat Tulungagung" },
  { value: "5 Mnt", label: "Ke Stasiun KA", sub: "Akses Sangat Cepat & Mudah" },
  { value: "50+", label: "Kamar & Suite", sub: "Desain Mewah & Hening" },
];

export const RATING_BREAKDOWN = [
  { category: "Lokasi Strategis", score: 8.8, note: "Dekat stasiun & kuliner" },
  { category: "Kebersihan Kamar", score: 7.9, note: "Sprei & sanitasi terawat" },
  { category: "Kenyamanan Istirahat", score: 7.9, note: "Kasur empuk & ber-AC dingin" },
  { category: "Kesesuaian Harga (Value)", score: 7.8, note: "Standar bintang 4 bersahabat" },
  { category: "Koneksi Wi-Fi", score: 7.5, note: "Internet cepat di seluruh area" },
  { category: "Fasilitas Rekreasi", score: 7.4, note: "Kolam indoor favorit anak" },
];

export const ROOMS_DATA = [
  {
    id: "deluxe-double",
    name: "Deluxe Double Room",
    category: "deluxe",
    badge: "Paling Populer",
    tagline: "Pilihan favorit pasangan dan pelancong bisnis",
    size: "34 m²",
    capacity: "2 Dewasa (+ 1 Anak)",
    bed: "1 King / Double Bed",
    price: 580000,
    priceFormatted: "Rp 580.000",
    features: [
      "1 Tempat Tidur King / Double Bed",
      "Kamar mandi en-suite shower air panas",
      "Balkon / Teras Pribadi santai",
      "Meja kerja ergonomis & lemari",
      "Koneksi Wi-Fi kencang gratis",
    ],
    amenities: ["AC Dingin", "TV Kabel Layar Datar", "Electric Kettle", "Perlengkapan Mandi", "Air Mineral Gratis", "Keycard Lock"],
    description:
      "Kamar bergaya klasik dengan ranjang Double/King yang nyaman, dilengkapi kamar mandi shower modern, TV kabel, meja kerja, dan balkon untuk bersantai.",
  },
  {
    id: "deluxe-twin",
    name: "Deluxe Twin Room",
    category: "deluxe",
    badge: "Best Choice",
    tagline: "Sempurna untuk rekan bisnis atau perjalanan sahabat",
    size: "34 m²",
    capacity: "2 Dewasa",
    bed: "2 Single Bed",
    price: 580000,
    priceFormatted: "Rp 580.000",
    features: [
      "2 Tempat Tidur Single Nyaman",
      "Kamar mandi shower modern & bersih",
      "Balkon / Teras santai",
      "Meja kerja & pembuat teh/kopi",
      "Akses Wi-Fi super cepat",
    ],
    amenities: ["AC Dingin", "TV Kabel Layar Datar", "Electric Kettle", "Perlengkapan Mandi", "Air Mineral Gratis", "Keycard Lock"],
    description:
      "Kamar Deluxe dengan dua tempat tidur single terpisah, menawarkan privasi dan kenyamanan maksimal bagi rekan kerja atau sahabat yang bepergian bersama.",
  },
  {
    id: "standard-twin",
    name: "Standard Twin Room",
    category: "standard",
    badge: "Best Value",
    tagline: "Kenyamanan esensial bintang 4 dengan tarif ekonomis",
    size: "28 m²",
    capacity: "2 Dewasa",
    bed: "2 Single Bed",
    price: 475000,
    priceFormatted: "Rp 475.000",
    features: [
      "2 Tempat Tidur Single Nyaman",
      "Kamar mandi shower pribadi",
      "AC individual hemat energi",
      "Wi-Fi gratis berkecepatan tinggi",
      "Meja samping & lemari pakaian",
    ],
    amenities: ["AC Individual", "TV Layar Datar", "Shower Hangat", "Handuk & Sabun", "Air Mineral", "Soket Dekat Ranjang"],
    description:
      "Akomodasi berstandar bintang 4 yang praktis dan efisien untuk perjalanan singkat atau transit di Tulungagung dengan harga sangat bersahabat.",
  },
  {
    id: "grand-deluxe",
    name: "Grand Deluxe Room",
    category: "grand-deluxe",
    badge: "Favorit Keluarga",
    tagline: "Ruang lebih luas dengan fasilitas ekstra mewah",
    size: "42 m²",
    capacity: "2 Dewasa + 1 Anak",
    bed: "1 King Bed / 2 Twin Beds",
    price: 850000,
    priceFormatted: "Rp 850.000",
    features: [
      "Area kamar lebih lega dengan sofa seating",
      "Pilihan 1 King Bed atau 2 Twin Beds",
      "Kulkas mini & fasilitas pembuat kopi",
      "Meja rias & meja kerja luas",
      "Pemandangan kota Tulungagung",
    ],
    amenities: ["AC Individual", "Smart TV Kabel", "Kulkas Mini", "Sofa Santai", "Bathrobe & Sandal", "Toiletries Premium", "Coffee & Tea Set"],
    description:
      "Kamar dengan dimensi lebih luas, menghadirkan sudut sofa bersantai, kulkas mini, dan pemandangan jendela yang memikat untuk momen relaksasi optimal.",
  },
  {
    id: "executive-suite",
    name: "Executive Suite Room",
    category: "suite",
    badge: "Signature Luxury",
    tagline: "Kemewahan puncak khas Victorian dengan ruang tamu terpisah",
    size: "68 m²",
    capacity: "2-3 Dewasa",
    bed: "1 Super King Bed",
    price: 1450000,
    priceFormatted: "Rp 1.450.000",
    features: [
      "Ruang tamu (Living Room) terpisah mewah",
      "Bathtub berendam & separate shower",
      "Meja makan mini & minibar lengkap",
      "Super King Bed dengan sprei katun premium",
      "Layanan prioritas VIP check-in",
    ],
    amenities: ["Bathtub Mewah", "Living Room Terpisah", "Smart TV 50 inci", "Minibar", "Bathrobe & Hairdryer", "VIP Toiletries", "Kopi Kapsul / Kettle"],
    description:
      "Suite termewah Crown Victoria dengan ruang tamu terpisah elegan, bathtub relaksasi, ranjang Super King, dan privasi paripurna bagi tamu istimewa.",
  },
];

export const FACILITIES_DATA = [
  {
    id: "indoor-pool",
    title: "Indoor Pool & Water Slide",
    category: "recreation",
    tag: "Favorit Anak & Keluarga",
    desc: "Kolam renang indoor tertutup yang nyaman tanpa khawatir kepanasan atau kehujanan, dilengkapi seluncuran air (water slide) seru serta sun loungers untuk bersantai.",
    hours: "06:00 - 18:00 WIB",
    location: "Lantai Dasar (Ground Floor)",
    features: ["Bebas terik matahari & hujan", "Water slide / perosotan air anak", "Area dangkal ramah anak", "Kursi santai poolside"],
  },
  {
    id: "sultan-resto",
    title: "Sultan Café & Resto",
    category: "dining",
    tag: "Live Cooking Station",
    desc: "Restoran utama hotel yang menyajikan hidangan otentik Nusantara, masakan Barat, dan Chinese favorit. Terkenal dengan sesi sarapan berkonsep live cooking nasi goreng dan aneka olahan telur segar.",
    hours: "06:00 - 22:00 WIB",
    location: "Main Lobby Area",
    features: ["Buffet sarapan lengkap", "Live cooking nasi goreng & telur", "Menu a la carte makan siang & malam", "Ruang makan ber-AC elegan"],
  },
  {
    id: "venezia-bar",
    title: "Venezia Resto & Pool Bar",
    category: "dining",
    tag: "Poolside Vibes",
    desc: "Restoran & bar bernuansa santai tepi kolam renang dengan konsep resort tropis. Tempat terbaik menikmati mocktail buah segar, kopi, camilan gurih, pizza, dan pasta.",
    hours: "10:00 - 22:00 WIB",
    location: "Area Tepi Kolam",
    features: ["Minuman mocktail segar & jus tropis", "Camilan pizza & pasta internasional", "Suasana santai tepi kolam", "Spot ngobrol sore santai"],
  },
  {
    id: "fitness-gym",
    title: "Gymnasium & Fitness Center",
    category: "wellness",
    tag: "Kebugaran Lengkap",
    desc: "Pusat kebugaran dengan peralatan kardio modern seperti treadmill, sepeda statis, dan dumbbell angkat beban untuk menjaga rutinitas olahraga Anda saat bepergian.",
    hours: "06:00 - 20:00 WIB",
    location: "Lantai 2",
    features: ["Treadmill modern & elliptical", "Sepeda statis kardio", "Peralatan dumbbell angkat beban", "Handuk & air mineral gratis"],
  },
  {
    id: "spa-wellness",
    title: "Spa, Jacuzzi & Sauna",
    category: "wellness",
    tag: "Relaksasi Paripurna",
    desc: "Perawatan tubuh menyeluruh dengan pijat tradisional khas Nusantara, aromaterapi menenangkan, serta fasilitas Jacuzzi air hangat dan Sauna detoksifikasi.",
    hours: "09:00 - 21:00 WIB",
    location: "Wellness Floor",
    features: ["Pijat tradisional & reflexology", "Jacuzzi relaksasi air hangat", "Ruang sauna kayu alami", "Terapis profesional bersertifikat"],
  },
  {
    id: "grand-ballroom",
    title: "Victoria Grand Ballroom",
    category: "events",
    tag: "Kapasitas Ratusan Tamu",
    desc: "Ballroom termegah di Tulungagung dengan panggung luas, tata pencahayaan elegan, dan sound system canggih untuk resepsi pernikahan, wisuda, gathering akbar, atau seminar.",
    hours: "Sesuai Jadwal Reservasi",
    location: "Convention Hall",
    features: ["Kapasitas hingga ratusan undangan", "Setup Round Table & Theatre", "Panggung megah & audio canggih", "Ruang transit VIP & Make-up room"],
  },
  {
    id: "meeting-rooms",
    title: "Executive Meeting Rooms",
    category: "events",
    tag: "Fasilitas MICE Bisnis",
    desc: "Ruang rapat ber-AC dengan variasi konfigurasi meja (U-Shape, Classroom, Boardroom) yang didukung proyektor LCD, layar besar, memo pad, dan paket coffee break.",
    hours: "08:00 - 21:00 WIB",
    location: "Business Center",
    features: ["Konfigurasi U-Shape / Classroom", "LCD Projector & Wireless Mic", "Paket Coffee Break & Lunch Buffet", "Koneksi internet rapat berkecepatan tinggi"],
  },
  {
    id: "kids-playroom",
    title: "Indoor Kids Playroom & Karaoke",
    category: "recreation",
    tag: "Hiburan Keluarga",
    desc: "Arena bermain anak dalam ruangan yang bersih dan aman, serta ruang karaoke privat untuk bernyanyi ceria bersama seluruh anggota keluarga.",
    hours: "08:00 - 21:00 WIB",
    location: "Family Area",
    features: ["Playground indoor aman berkarpet", "Mainan edukatif anak", "Ruang karaoke privat ber-AC", "Pilihan lagu lengkap"],
  },
];

export const NEARBY_LANDMARKS = [
  {
    name: "Stasiun Kereta Api Tulungagung",
    distance: "5 Menit (1.8 km)",
    category: "Transportasi",
    desc: "Akses super dekat dan cepat bagi tamu yang bepergian menggunakan moda transportasi kereta api.",
    icon: "Train",
  },
  {
    name: "Alun-Alun Kota Tulungagung",
    distance: "6 Menit (2.2 km)",
    category: "Pusat Kota",
    desc: "Jantung kota Tulungagung dengan taman hijau asri, masjid agung, dan beragam street food malam hari.",
    icon: "MapPin",
  },
  {
    name: "Pusat Oleh-Oleh Kerupuk Rambak & Kopi Ijo",
    distance: "5 Menit (1.5 km)",
    category: "Kuliner Khas",
    desc: "Sentra jajanan tradisional khas Tulungagung untuk buah tangan sanak keluarga.",
    icon: "ShoppingBag",
  },
  {
    name: "Bendungan / Waduk Wonorejo",
    distance: "20 Menit (14 km)",
    category: "Wisata Alam",
    desc: "Salah satu waduk terbesar di Asia Tenggara dengan panorama danau tenang dan perbukitan pinus sejuk.",
    icon: "Compass",
  },
  {
    name: "Candi Penataran",
    distance: "35 Menit (24 km)",
    category: "Wisata Budaya",
    desc: "Kompleks candi Hindu terbesar di Jawa Timur dengan relief sejarah yang memesona.",
    icon: "Landmark",
  },
  {
    name: "Pantai Gemah & Pantai Popoh",
    distance: "45 Menit (32 km)",
    category: "Wisata Pantai",
    desc: "Pesisir selatan Tulungagung dengan hamparan laut biru, deretan pohon cemara, dan wahana banana boat.",
    icon: "Waves",
  },
];

export const GUEST_REVIEWS = [
  {
    id: 1,
    name: "Bambang Sudarsono",
    role: "Tamu Bisnis • Surabaya",
    rating: 9.0,
    title: "Lokasi Dekat Stasiun, Sarapannya Juara!",
    comment:
      "Sangat puas menginap di Crown Victoria. Lokasinya hanya 5 menit dari stasiun Tulungagung jadi tidak buru-buru saat pulang naik KA. Yang paling berkesan sarapannya di Sultan Resto, nasi gorengnya dimasak langsung hangat (live cooking), bumbunya meresap mantap.",
    verified: true,
  },
  {
    id: 2,
    name: "Dr. Retno Wulandari",
    role: "Keluarga dengan Anak • Malang",
    rating: 9.2,
    title: "Anak-Anak Sangat Senang Kolam Indoor & Water Slide",
    comment:
      "Kelebihan utama hotel ini kolam renangnya indoor! Tidak perlu takut anak gosong kepanasan atau masuk angin kalau hujan. Ada seluncuran airnya juga. Kamar mandi bersih, ranjang empuk, stafnya sangat ramah menyapa. Pasti kembali lagi.",
    verified: true,
  },
  {
    id: 3,
    name: "Hendra Wijaya",
    role: "Pelancong Liburan • Jakarta",
    rating: 8.8,
    title: "Arsitektur Klasik Megah dengan Nuansa Bintang 4 Nyata",
    comment:
      "Desain fasad dan lobinya bernuansa Victorian Eropa yang elegan. Parkir valet gratis sangat membantu saat hotel ramai. Suasana kamar hening untuk istirahat, AC dingin, dan air panasnya kencang. Hotel terbaik di Tulungagung.",
    verified: true,
  },
];

export const HOTEL_FAQS = [
  {
    q: "Berapa jam check-in dan check-out di Crown Victoria Hotel?",
    a: "Waktu check-in standar dimulai pukul 14:00 WIB dan waktu check-out maksimal pukul 12:00 WIB. Permintaan early check-in atau late check-out dapat dikoordinasikan dengan resepsionis sesuai ketersediaan kamar.",
  },
  {
    q: "Apakah kolam renang hotel outdoor atau indoor?",
    a: "Crown Victoria Hotel memiliki kolam renang INDOOR (tertutup beratap) yang aman dari sengatan terik matahari maupun hujan, serta dilengkapi water slide (seluncuran air) seru untuk anak-anak dan keluarga.",
  },
  {
    q: "Bagaimana kebijakan menginap untuk anak-anak?",
    a: "Anak usia 0 - 5 tahun dapat menginap secara gratis jika menggunakan tempat tidur yang sudah tersedia di kamar. Ranjang tambahan (extra bed) dapat dipesan dengan biaya tambahan.",
  },
  {
    q: "Apakah tersedia tempat parkir dan mesin ATM di hotel?",
    a: "Ya, kami menyediakan area parkir pribadi yang luas dan aman secara gratis untuk tamu, lengkap dengan layanan Parkir Valet. Mesin ATM juga tersedia langsung di area hotel untuk kemudahan transaksi Anda.",
  },
  {
    q: "Berapa jarak hotel dari Stasiun Kereta Api Tulungagung?",
    a: "Hotel kami berlokasi sangat strategis di Jl. Supriadi No. 41 Tulungagung, hanya berjarak sekitar 1.8 km atau sekitar 5 menit berkendara dari Stasiun Kereta Api Tulungagung.",
  },
  {
    q: "Apakah diperbolehkan membawa hewan peliharaan?",
    a: "Demi kenyamanan dan ketenangan seluruh tamu, hewan peliharaan tidak diperkenankan memasuki area hotel (No Pets Allowed).",
  },
];
