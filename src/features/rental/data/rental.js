import yamahaVega from "../assets/yamaha_vega.jpg";
import yamahaMio from "../assets/yamaha_mio.jpg";
import yamahaNmax from "../assets/yamaha_nmax.jpg";
import iconYamaha from "../../../assets/Yamaha/iconyamaha.png";
import yamahaCoverImg from "../../../assets/Yamaha/image.png";
import heroYamaha from "../../../assets/Yamaha/heroyamaha.jpg";

export const rental = {
  // Meta Information
  type: "motor_dealer",
  name: "PT Yamaha Indonesia Motor Manufacturing (YIMM)",
  shortName: "Yamaha Motor",
  metaTitle: "Yamaha Motor Indonesia - Informasi Motor Yamaha Terbaru 2026",
  metaDescription:
    "PT Yamaha Indonesia Motor Manufacturing dipercaya masyarakat dalam memilih kendaraan roda dua terbaik, dengan info spesifikasi, fitur & harga motor Yamaha terbaru 2026.",

  tagline: "Portal Informasi Produk, Layanan & Aktivitas Yamaha Indonesia",
  established: "1974",

  // Contact Information
  address:
    "Jl. DR KRT Radjiman Widyodiningrat RT/RW 009-06, Rawa Terate, Cakung, Jakarta Timur 13920, Indonesia",
  phone: "021 2457 5555",
  wa: "6281212345678",
  email: "contact_center@yamaha-motor.co.id",
  mapsEmbed:
    "https://maps.google.com/maps?q=PT+Yamaha+Indonesia+Motor+Manufacturing&t=&z=14&ie=UTF8&iwloc=&output=embed",

  logo: iconYamaha,
  heroImage: heroYamaha,

  // Vision & Mission
  vision:
    "Website resmi PT Yamaha Indonesia Motor Manufacturing (YIMM) yang berfungsi sebagai portal informasi produk, layanan, dan aktivitas Yamaha di Indonesia.",

  mission:
    "Two Yamahas One Passion - Menggabungkan passion terhadap sepeda motor dengan inovasi teknologi berkelanjutan.",

  // Social Media
  socialMedia: {
    instagram: "http://instagram.com/yamahaindonesia/",
    facebook: "http://www.facebook.com/yamaholigan",
    twitter: "http://www.twitter.com/yamahaindonesia",
    youtube: "https://www.youtube.com/@yamahamotorindonesia",
  },

  stats: [
    { label: "Kategori Motor", value: "6 Kategori" },
    { label: "Dealer Resmi", value: "Seluruh Indonesia" },
    { label: "Service Booking", value: "Online 24/7" },
    { label: "Member Community", value: "bLU cRU" },
  ],

  // Quick Access Cards
  quickAccess: [
    {
      title: "Service",
      description: "Layanan servis resmi Yamaha",
      link: "/service/",
      icon: "🔧",
    },
    {
      title: "Parts & Accessories",
      description: "Yamaha Genuine Parts & Yamalube",
      link: "/part-accessories/",
      icon: "⚙️",
    },
    {
      title: "Racing",
      description: "Dunia balap Yamaha Racing",
      link: "/racing/",
      icon: "🏁",
    },
    {
      title: "Members",
      description: "My Yamaha Motor Members",
      link: "/members/",
      icon: "⭐",
    },
  ],

  // Navigation Menu Structure
  navigation: {
    corporate: {
      title: "CORPORATE",
      items: [
        { name: "About Us", link: "/corporate/about/" },
        { name: "Two Yamahas One Passion", link: "/two-yamhas-one-passion/" },
        { name: "Yamaha EV", link: "/EV/" },
        { name: "Yamaha 50th Anniversary", link: "/50th/" },
        { name: "Careers", link: "/corporate/career/" },
        {
          name: "Yamaha Global",
          link: "https://global.yamaha-motor.com/",
          external: true,
        },
        {
          name: "Yamaha Water Purifier",
          link: "/corporate/yamaha-water-purifier/",
        },
      ],
    },
    products: {
      title: "PRODUCTS",
      categories: [
        {
          name: "MAXi",
          link: "/products/category/maxi-yamaha/",
          description: "Skutik besar/premium",
        },
        {
          name: "Classy",
          link: "/products/category/classy/",
          description: "Skutik bergaya klasik (Fazzio, Grand Filano)",
        },
        {
          name: "Matic",
          link: "/products/category/matic/",
          description: "Skutik reguler",
        },
        {
          name: "SPORT",
          link: "/products/category/sport",
          description: "Motor sport",
        },
        {
          name: "OFF-ROAD",
          link: "/products/category/off-road",
          description: "Motor trail/dirt bike",
        },
        {
          name: "MOPED",
          link: "/products/category/moped",
          description: "Motor bebek",
        },
      ],
    },
    dealers: {
      title: "DEALERS",
      items: [{ name: "Find Dealer", link: "/dealers/" }],
    },
    services: {
      title: "SERVICES",
      items: [
        { name: "Service", link: "/service/" },
        { name: "Service Booking", link: "/service/booking" },
        { name: "Yamaha Apps", link: "/yamaha-apps/" },
      ],
    },
    parts: {
      title: "PARTS & ACCESSORIES",
      items: [
        { name: "Yamaha Genuine Parts (YGP)", link: "/part-accessories/ygp/" },
        { name: "Yamalube", link: "/part-accessories/yamalube/" },
        { name: "Helmet", link: "/part-accessories/helmet/" },
        { name: "Apparel", link: "/part-accessories/apparel/" },
        { name: "Accessories", link: "/part-accessories/accessories/" },
      ],
    },
    racing: {
      title: "RACING",
      items: [{ name: "Racing", link: "/racing/" }],
    },
    films: {
      title: "FILMS",
      items: [{ name: "Yamaha Films", link: "/yamaha-films/" }],
    },
    activity: {
      title: "ACTIVITY",
      items: [
        { name: "News", link: "/archives/" },
        { name: "bLU cRU", link: "/bLUcru/" },
        { name: "Event", link: "/archives/" },
        { name: "Yamaha Jingle Competition", link: "/yamaha-jingle/" },
      ],
    },
    help: {
      title: "HELP & SUPPORT",
      items: [
        { name: "Help Center", link: "/help-center/" },
        {
          name: "Owners Manual",
          link: "https://library.ymcapps.net/library/om/app/index.html?baseCode=6548&langId=07",
          external: true,
        },
      ],
    },
    other: {
      title: "OTHERS",
      items: [
        { name: "My Yamaha Motor Members", link: "/members/" },
        { name: "Credit Simulation", link: "/credit-simulation/" },
        { name: "Konsultasi", link: "/consultation/" },
        { name: "Safety Riding Campaign", link: "/safetyridingcampaign/" },
      ],
    },
  },

  // Featured Products/Banners
  featuredProducts: [
    {
      id: 1,
      name: "Fazzio",
      category: "Classy",
      image: yamahaMio,
      badge: "Hybrid Technology",
    },
    {
      id: 2,
      name: "MX King 150",
      category: "Moped",
      image: yamahaVega,
      badge: "Best Seller",
    },
    {
      id: 3,
      name: "Gear Ultima",
      category: "Matic",
      image: yamahaMio,
      badge: "New",
    },
    {
      id: 4,
      name: "Aerox Alpha",
      category: "MAXi",
      image: yamahaNmax,
      badge: "Premium",
    },
    {
      id: 5,
      name: "Grand Filano",
      category: "Classy",
      image: yamahaMio,
      badge: "Classic Design",
    },
    {
      id: 6,
      name: "WR155R",
      category: "Off-Road",
      image: yamahaCoverImg,
      badge: "Adventure Ready",
    },
    {
      id: 7,
      name: "TMAX Tech Max",
      category: "MAXi",
      image: yamahaNmax,
      badge: "Flagship Scooter",
    },
    {
      id: 8,
      name: "Lexi LX 155",
      category: "Matic",
      image: yamahaMio,
      badge: "Smart Choice",
    },
  ],

  // Services
  services: [
    {
      title: "Credit Simulation",
      desc: "Simulasi perhitungan kredit pembelian motor Yamaha impian Anda dengan skema DP dan angsuran yang transparan.",
      link: "/credit-simulation/",
      icon: "💳",
    },
    {
      title: "Service Booking",
      desc: "Layanan booking jadwal servis sepeda motor secara online di dealer resmi Yamaha tanpa antre.",
      link: "/service/booking",
      icon: "🛠️",
    },
    {
      title: "Find Dealer",
      desc: "Pencarian lokasi dealer dan bengkel resmi Yamaha terdekat di seluruh Indonesia.",
      link: "/dealers/",
      icon: "📍",
    },
    {
      title: "My Yamaha Motor Members",
      desc: "Akses area keanggotaan eksklusif untuk informasi servis, riwayat motor, dan poin reward.",
      link: "/members/",
      icon: "⭐",
    },
    {
      title: "Yamaha Genuine Parts & Yamalube",
      desc: "Suku cadang resmi Yamaha Genuine Parts (YGP), pelumas Yamalube, helm, apparel, dan aksesoris.",
      link: "/part-accessories/",
      icon: "⚙️",
    },
    {
      title: "Owners Manual Online",
      desc: "Buku manual digital online untuk panduan perawatan dan pengoperasian motor Yamaha Anda.",
      link: "https://library.ymcapps.net/library/om/app/index.html?baseCode=6548&langId=07",
      icon: "📖",
    },
  ],

  // Inventory by Categories
  inventory: [
    // MAXi Category
    {
      id: 1,
      category: "MAXi",
      name: "Yamaha NMAX Turbo",
      year: "2026",
      price: "Rp 37.750.000",
      dpInfo: "Simulasi Kredit Ready",
      image: yamahaNmax,
      specs: [
        "Skutik Premium MAXi",
        "Y-Shift Electronic CVT",
        "TFT Infotainment Display",
        "Dual Channel ABS",
      ],
      tags: ["Premium", "Turbo"],
    },
    {
      id: 2,
      category: "MAXi",
      name: "Yamaha Aerox Alpha",
      year: "2026",
      price: "Rp 31.550.000",
      dpInfo: "Simulasi Kredit Ready",
      image: yamahaNmax,
      specs: [
        "Skutik Sport MAXi",
        "Underbone Engine",
        "LED Headlight",
        "Sporty Design",
      ],
      tags: ["Sport", "Young"],
    },

    // Classy Category
    {
      id: 3,
      category: "Classy",
      name: "Yamaha Fazzio Hybrid",
      year: "2026",
      price: "Rp 22.700.000",
      dpInfo: "Simulasi Kredit Ready",
      image: yamahaMio,
      specs: [
        "Kategori Classy",
        "Blue Core Hybrid 125cc",
        "Smart Key System",
        "Digital Speedometer",
      ],
      tags: ["Hybrid", "Eco-friendly"],
    },
    {
      id: 4,
      category: "Classy",
      name: "Yamaha Grand Filano Hybrid",
      year: "2026",
      price: "Rp 25.350.000",
      dpInfo: "Simulasi Kredit Ready",
      image: yamahaMio,
      specs: [
        "Skutik Klasik Premium",
        "Hybrid Technology",
        "Retro Design",
        "Comfortable Ride",
      ],
      tags: ["Hybrid", "Classic"],
    },

    // Matic Category
    {
      id: 5,
      category: "Matic",
      name: "Yamaha Gear Ultima 125",
      year: "2026",
      price: "Rp 18.500.000",
      dpInfo: "Simulasi Kredit Ready",
      image: yamahaMio,
      specs: [
        "Skutik Multiguna",
        "Double Hook",
        "Mesin Blue Core Irit",
        "Electric Power Socket",
      ],
      tags: ["Practical", "Family"],
    },
    {
      id: 6,
      category: "Matic",
      name: "Yamaha Lexi LX 155",
      year: "2026",
      price: "Rp 26.900.000",
      dpInfo: "Simulasi Kredit Ready",
      image: yamahaMio,
      specs: [
        "Skutik Smart Choice",
        "VVA Engine 155cc",
        "Linkage Suspension",
        "Smart Features",
      ],
      tags: ["Smart", "Efficient"],
    },

    // Sport Category
    {
      id: 7,
      category: "Sport",
      name: "Yamaha R15 Connected V4",
      year: "2026",
      price: "Rp 39.875.000",
      dpInfo: "Simulasi Kredit Ready",
      image: yamahaCoverImg,
      specs: [
        "Kategori Sport R-Series",
        "Mesin 155cc VVA",
        "Assist & Slipper Clutch",
        "Y-Connect System",
      ],
      tags: ["Racing DNA", "Connected"],
    },
    {
      id: 8,
      category: "Sport",
      name: "Yamaha YZF-R3",
      year: "2026",
      price: "Rp 62.500.000",
      dpInfo: "Simulasi Kredit Ready",
      image: yamahaCoverImg,
      specs: [
        "Sportbike Mid-range",
        "Machine Learning",
        "TFT Display",
        "Track Ready",
      ],
      tags: ["Performance", "Track"],
    },

    // Off-Road Category
    {
      id: 9,
      category: "Off-Road",
      name: "Yamaha WR155R",
      year: "2026",
      price: "Rp 38.600.000",
      dpInfo: "Simulasi Kredit Ready",
      image: yamahaCoverImg,
      specs: [
        "Motor Dual Purpose",
        "Suspensi Long Travel",
        "Liquid Cooled VVA Engine",
        "Frame Kokoh",
      ],
      tags: ["Adventure", "Off-road"],
    },
    {
      id: 10,
      category: "Off-Road",
      name: "Yamaha YZ125X",
      year: "2026",
      price: "Rp 52.800.000",
      dpInfo: "Simulasi Kredit Ready",
      image: yamahaCoverImg,
      specs: [
        "Motocross 2-Tak",
        "125cc 6-Speed",
        "KYB Suspension",
        "Lightweight Frame",
      ],
      tags: ["Racing", "Pro"],
    },

    // Moped Category
    {
      id: 11,
      category: "Moped",
      name: "Yamaha MX King 150",
      year: "2026",
      price: "Rp 26.300.000",
      dpInfo: "Simulasi Kredit Ready",
      image: yamahaVega,
      specs: [
        "Motor Bebek Sport",
        "Mesin 150cc Fuel Injection",
        "Desain Aerodinamis",
        "Digital Speedometer",
      ],
      tags: ["Popular", "Sport"],
    },
    {
      id: 12,
      category: "Moped",
      name: "Yamaha Vega Fu 110",
      year: "2026",
      price: "Rp 17.500.000",
      dpInfo: "Simulasi Kredit Ready",
      image: yamahaVega,
      specs: [
        "Ikonik Bebek Legendaris",
        "Blue Core Engine 110cc",
        "Torque Tinggi",
        "Terbukti Hemat",
      ],
      tags: ["Classic", "Reliable"],
    },
  ],

  // Latest News & Updates
  news: [
    {
      id: 1,
      title: "Clan of Classy Vol. 3 — Yogyakarta",
      date: "14 September 2026",
      category: "Event",
      excerpt:
        "Event komunitas pengguna motor Classy Yamaha digelar di Yogyakarta pada 13–14 September 2026. Mengusung konsep 'Get Lost', peserta menjelajah area sekitar Borobudur hingga berkemah di kawasan Kopeng.",
      image: yamahaCoverImg,
      link: "/archives/news/event/2026/09/clan-of-classy-vol-3-yogyakarta-healing-classy-yamaha/",
      author: "Rifki Maulana - PR Manager YRA",
    },
    {
      id: 2,
      title: "Yamaha Dirt Bike Experience 'Skill Up'",
      date: "13 September 2026",
      category: "Event",
      excerpt:
        "Event di Cibereum National Motocross Circuit mengajak awak media merasakan langsung karakter motor off-road Yamaha WR155 R dan YZ125X, dipandu tim Yamaha Riding Academy.",
      image: yamahaCoverImg,
      link: "/archives/news/event/2026/09/konsisten-jaga-dna-racing-yamaha-dirt-bike-experience-asah-skill-awak-media-bareng-wr155-r-dan-yz125x/",
      author: "Rifki Maulana - PT YIMM",
    },
    {
      id: 3,
      title:
        "Sabian Fathul Ilmi — R3 bLU cRU Asia-Pacific Championship, Motegi",
      date: "5 September 2026",
      category: "Racing",
      excerpt:
        "Rider muda binaan Yamaha Racing Indonesia finis posisi ke-4 di race 2 setelah DNF di race 1. Ia berada di posisi ke-6 klasemen dengan 71 poin, dengan 2 seri tersisa di Buriram, Thailand.",
      image: yamahaCoverImg,
      link: "/archives/news/blu-cru/2026/09/sabian-fathul-ilmi-r3-blu-cru-motegi-2026/",
      author: "Sabian Fathul Ilmi & Wahyu Rusmayadi - Motorsport Manager",
    },
  ],

  gallery: [yamahaCoverImg, yamahaCoverImg, yamahaCoverImg],

  testimonials: [
    {
      text: "Fitur Service Booking di portal Yamaha sangat memudahkan booking servis NMAX saya di dealer resmi tanpa harus mengantre lama.",
      author: "Budi Santoso",
      role: "Pengguna Yamaha NMAX",
      date: "Agustus 2026",
    },
    {
      text: "Simulasi kredit akurat dan informasi lokasi Find Dealer sangat jelas. Sangat membantu saat mau membeli Yamaha Fazzio.",
      author: "Deni Pratama",
      role: "My Yamaha Member",
      date: "Agustus 2026",
    },
    {
      text: "Akses Owners Manual online dan update event bLU cRU balap Yamaha di website resminya sangat lengkap dan intuitif.",
      author: "Siti Aminah",
      role: "Komunitas Yamaha",
      date: "Agustus 2026",
    },
  ],

  // Footer Information
  footer: {
    copyright:
      "© 2026 PT. Yamaha Indonesia Motor Manufacturing, All Rights Reserved",
    company: "PT. Yamaha Indonesia Motor Manufacturing",
    addresses: [
      "Jl. DR KRT Radjiman Widyodiningrat RT/RW 009-06,",
      "Rawa Terate, Cakung,",
      "Jakarta Timur 13920, Indonesia",
    ],
    contacts: {
      phone: "021 2457 5555",
      email: "contact_center@yamaha-motor.co.id",
    },
    links: {
      privacyPolicy: "/privacy-policy/general.html",
      recruitmentPrivacy: "/privacy-policy/recruitment.html",
    },
  },
};
