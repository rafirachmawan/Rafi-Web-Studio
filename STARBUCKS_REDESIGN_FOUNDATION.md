# ☕ Starbucks Indonesia — Data Lengkap & Dokumen Fondasi Redesign

Dokumen ini berisi ekstraksi komprehensif seluruh data, struktur informasi, identitas brand, katalog menu, dan arsitektur konten dari website resmi **Starbucks Indonesia** ([starbucks.co.id](https://www.starbucks.co.id/)) sebagai fondasi dan panduan redesign website modern.

---

## 1. Identitas Brand & Perusahaan (Brand Identity)

| Properti | Detail |
| :--- | :--- |
| **Nama Brand** | Starbucks Coffee Indonesia |
| **Entitas Pengelola** | PT Sari Coffee Indonesia (Bagian dari MAP - Mitra Adiperkasa) |
| **Slogan Global** | *"To inspire and nurture the human spirit – one person, one cup and one neighborhood at a time."* |
| **Value Proposition** | Kopi arabika kualitas terbaik dengan biji kopi etis, minuman racikan tangan (handcrafted), makanan berkualitas, dan konsep *Third Place* (tempat ketiga antara rumah dan kantor). |
| **Sertifikasi Resmi** | • **Halal Indonesia (BPJPH / MUI)**<br>• **ISO Certification** |
| **Media Sosial Resmi** | • Instagram: `@starbucksindonesia`<br>• Facebook: `StarbucksIndonesia`<br>• Twitter/X: `@SbuxIndonesia` |
| **Aplikasi Mobile** | Starbucks Indonesia App (Google Play Store & Apple App Store) |

---

## 2. Palet Warna & Desain Token (Design System)

Untuk redesign yang autentik dan premium, gunakan kode warna resmi Starbucks berikut:

```css
:root {
  /* Core Brand Greens */
  --sbux-green-deep: #006241;       /* Warna hijau khas logo & brand utama */
  --sbux-green-accent: #00754A;     /* Warna hijau tombol & highlight interaktif */
  --sbux-green-dark: #1E3932;       /* Warna hijau hutan gelap (hero / dark sections) */
  --sbux-green-light: #D4E9E2;      /* Tint hijau lembut untuk card & background badge */
  --sbux-cream: #F1F8F5;            /* Off-white hangat untuk background utama */
  
  /* Reserve & Premium Gold */
  --sbux-reserve-gold: #CBA258;     /* Warna emas Starbucks Reserve / Dewata */
  --sbux-reserve-black: #121212;    /* Dark background eksklusif Reserve */
  
  /* Neutrals */
  --sbux-black: #000000;
  --sbux-charcoal: #212121;
  --sbux-gray-soft: #707070;
  --sbux-gray-border: #E6E6E6;
  --sbux-white: #FFFFFF;
}
```

### Tipografi Rekomendasi:
* **Primary (Sans-Serif):** *Plus Jakarta Sans*, *Inter*, atau *Outfit* (pengganti *SoDo Sans*).
* **Serif Elegance (Headings / Quotes):** *Playfair Display* atau *Lora* (pengganti *Lander Serif*).
* **Mono (Nutrisi / Takaran / Code):** *JetBrains Mono* atau *Fira Code*.

---

## 3. Peta Navigasi & Struktur Menu Utama (Sitemap & Navigation)

Website Starbucks Indonesia memiliki 7 pilar navigasi utama dengan sub-kategori:

### ☕ A. COFFEE (Kopi)
1. **Our Coffees (Katalog Kopi Biji & Instan):**
   * **Whole Bean Coffee:** Biji kopi utuh sangrai (Blonde, Medium, Dark Roast).
   * **VIA® Ready Brew:** Kopi bubuk mikro instan siap seduh tanpa ampas.
   * **View All Coffees:** Koleksi lengkap seluruh single origin & blend.
2. **Find Your Perfect Coffee:** Fitur interaktif *Coffee Finder* untuk mencocokkan profil rasa (notes, roast level, keasaman, metode seduh).
3. **Starbucks Reserve® Coffee:**
   * Reserve Coffee (koleksi langka mikro-lot single origin dari seluruh dunia).
   * Reserve Stores (daftar gerai premium Reserve di Indonesia).
4. **Espresso:**
   * The Ingredients (standar biji espresso, susu, syrup).
   * The Best Equipment (mesin Mastrena high-end).
   * Who Makes It (peran para Barista bersertifikasi Coffee Master).
5. **How to Brew Great Coffee (Panduan Metode Seduh):**
   * Coffee Press (French Press)
   * Pour-Over (V60 / Kalita)
   * Iced Pour-Over
   * Coffee Brewer (Drip Machine)
6. **Ethical Sourcing:**
   * Coffee Sourcing & C.A.F.E. Practices
   * Coffee Quality Standards
   * Farmer Support Center (FSC di Berastagi, Sumatra Utara)
7. **Learn More:**
   * Starbucks Roast Spectrum (Blonde, Medium, Dark)
   * Coffee by Form (Whole Bean, Ground, Capsule)
   * The Flavors in Your Cup (Aroma, Acidity, Body, Flavor Notes)
   * Coffee FAQ

---

### 🥤 B. MENU (Katalog Produk & Minuman)
1. **Beverages (Minuman):**
   * **Espresso Beverages:** Caffè Americano, Caffè Latte, Cappuccino, Caramel Macchiato, Caffè Mocha, White Chocolate Mocha, Flat White.
   * **Brewed Coffee:** Fresh Filter Coffee, Cold Brew, Vanilla Sweet Cream Cold Brew, Nitro Cold Brew.
   * **Blended Beverages (Frappuccino®):** Coffee Frappuccino, Caramel Frappuccino, Java Chip Frappuccino, Green Tea Crème Frappuccino, Vanilla Crème.
   * **Others & Tea (Teavana™):** Iced Shaken Hibiscus Tea with Pomegranate Pearls, Signature Hot Chocolate, Matcha Latte, Chai Tea Latte.
2. **Food (Makanan):**
   * **Core Menu:**
     * Bakery & Pastries: Croissant, Cinnamon Roll, Scone.
     * Sandwiches & Panini: Smoked Beef & Cheese Croissant, Tuna Toastie, Chicken Salad Sandwich.
     * Savory: Beef Quiche, Lasagna, Macaroni Pie.
     * Sweets & Cakes: Classic Cheesecake, Chocolate Lava Cake, Espresso Brownie.
   * **Reserve Food:** Makanan artisan eksklusif gerai Reserve.
3. **Merchandise (Aksesoris & Merchandise Resmi):**
   * Seasonal Collections (Spring, Summer, Autumn, Holiday / Christmas).
   * City & Indonesia Heritage Series (Mug & Tumbler motif Batik, Jakarta, Bali, Yogyakarta, Surabaya).
   * Drinkware: Stainless Steel Tumbler, Cold Cup Tumbler, Ceramic Mugs.
   * Brewing Machines & Accessories (French Press, Pour-Over Dripper, Reusable Straw).
   * Bulk Order / Corporate Gifts.
4. **Event Service:**
   * Coffee Catering & Mobile Cart untuk event kantor, pernikahan, dan festival.

---

### 🏡 C. COFFEEHOUSE (Pengalaman Kedai)
1. **Store Design:** Filosofi arsitektur gerai (*Third Place*) dan *Green Store* ramah lingkungan.
2. **Online Community:** Cerita interaksi pelanggan dan Barista.
3. **Store Events:** Workshop seduh, Coffee Tasting, dan gathering komunitas.
4. **Mobile Sampling:** Aktivasi gerai berjalan di event publik.

---

### 🌿 D. RESPONSIBILITY (Tanggung Jawab Sosial & Lingkungan)
1. **Community:**
   * Community Involvement & Partner (karyawan) volunteering.
   * Program Ayo Inklusif & Pemberdayaan Pemuda.
2. **Ethical Sourcing:**
   * Farmer Support Center (Sumatra) memberikan bibit gratis dan edukasi bagi petani kopi lokal Indonesia.
   * 99% kopi Starbucks diperoleh secara etis (C.A.F.E. Practices).
   * Tea & Cocoa Ethical Sourcing.
3. **Environment (Sustainability):**
   * Bring Your Own Tumbler (Diskon Rp 5.000 atau promo Tumbler Day tanggal 22 setiap bulan).
   * Pengurangan plastik sekali pakai & sedotan kertas ramah lingkungan.
   * Efisiensi energi, air, dan bangunan bersertifikasi LEED.

---

### 💳 E. STARBUCKS REWARDS (Loyalty Program)
1. **Mekanisme Program:**
   * Belanja kelipatan Rp 10.000 = Dapatkan 1 Star (Bintang).
   * Tiering Level:
     * **Welcome Level:** Pendaftaran awal via aplikasi / kartu fisik.
     * **Green Level (0 - 299 Stars):** Akses promo eksklusif, free upgrade susu oat/almond tertentu.
     * **Gold Level (300+ Stars):** Free reward minuman/makanan setiap kelipatan 100 Stars, Double Stars Day, Reward Ulang Tahun gratis.
2. **Starbucks Card:**
   * Kartu fisik koleksi bertema (Batik edition, Dewata edition, Holiday edition).
   * Fitur Top-Up instan via GoPay, OVO, Virtual Account, Kartu Kredit di aplikasi.
   * Fitur pelaporan kartu hilang & proteksi saldo.

---

### 🌺 F. STARBUCKS DEWATA (Bali Coffee Sanctuary)
* **Lokasi:** Sunset Road, Kuta, Bali.
* **Keunikan:** Gerai Starbucks Reserve terbesar di Asia Tenggara dengan kebun kopi arabika mini sendiri, nursery tour, media interaktif pengolahan biji kopi, workshop roasting, dan menu cocktail/mocktail kopi artisan yang tidak ada di gerai biasa.

---

### 🏢 G. ABOUT US (Tentang Kami)
1. **Our Heritage:** Sejarah Starbucks hadir pertama kali di Indonesia (Plaza Indonesia, 17 Mei 2002).
2. **Company Information:** Profil PT Sari Coffee Indonesia di bawah naungan MAP Group.
3. **Career Center:** Rekrutmen Barista, Store Manager, dan karir di Head Office.
4. **Pressroom:** Siaran pers peluncuran produk baru, aksi sosial, dan pencapaian bisnis.

---

## 4. Kelemahan Website Saat Ini (Audit & Redesign Opportunities)

Berdasarkan analisis struktur live `starbucks.co.id`:

| Aspek | Masalah di Website Saat Ini | Peluang Redesign Modern |
| :--- | :--- | :--- |
| **Desain Hero Banner** | Berupa gambar poster statis memanjang tanpa interaktivitas dan tipografi yang kaku. | Hero Section dinamis dengan video looping atmosfer cafe, CTA floating, dan tipografi bold. |
| **Katalog Menu** | Terlalu banyak sub-halaman yang harus di-klik satu per satu, gambar kecil dan lambat dimuat. | Filter tabs interaktif kategori (*Coffee, Cold Brew, Frappuccino, Food, Merch*) dengan modal resep, customize takaran gula/susu, dan nutrition facts. |
| **Rewards Section** | Teks sangat panjang dan mekanismenya membingungkan pengunjung baru. | Kalkulator Interaktif Rewards: slider pembelanjaan ➔ langsung menunjukkan berapa Stars dan reward gratis yang didapat. |
| **Starbucks Dewata** | Hanya link biasa di menu navbar, padahal merupakan gerai paling prestisius. | Showcase section interaktif dengan visual 3D/parallax tour, kebun kopi Bali, dan menu eksklusif. |
| **Store Locator** | Lambat dan tampilan peta kaku. | Modern Store Finder dengan filter cepat: *Drive-Thru, 24 Jam, Reserve, Pet Friendly*, deteksi GPS otomatis. |
| **Mobile Experience** | Mega menu collapsible yang panjang dan kurang nyaman di swipe. | Bottom navigation bar yang sleek (Menu, Rewards, Store, Order). |

---

## 5. Rencana Arsitektur Halaman Redesign (Homepage Blueprint)

Untuk membangun redesign website yang memukau (*WOW factor*), berikut struktur section ideal:

1. **Sticky Glassmorphism Navbar:**
   * Logo Siren Starbucks (Clean Vector)
   * Nav links: *Menu, Coffee Story, Rewards, Dewata Sanctuary, Store Locator*
   * Actions: *Language Switcher (ID/EN)*, *Download App CTA*, *Sign In*.

2. **Hero Section (Sensory Coffee Experience):**
   * Headline bold bernuansa kopi segar.
   * Interactive cup preview (pengunjung bisa toggle Hot/Iced atau varian sirup).
   * Quick CTA: *"Eksplorasi Menu"* & *"Daftar Starbucks Rewards"*.

3. **Featured Seasonal Highlights:**
   * Carousel produk musiman terbaru (Autumn Pumpkin Spice, Sakura, atau Holiday Toffee Nut).
   * Badge *"Limited Time Only"*.

4. **Interactive Menu Grid (Live Tasting Catalog):**
   * Filter cepat: *Espresso, Cold Brew, Frappuccino, Teavana, Fresh Food, Merchandise*.
   * Kartu produk dengan badge kalori, aroma notes, dan tombol *"Lihat Detail / Custom"*.

5. **Starbucks Rewards Interactive Calculator:**
   * Kartu fisik digital animasi tilt 3D (Green vs Gold Card).
   * Slider pembelanjaan untuk simulasi perolehan Stars & free items.

6. **Starbucks Dewata Sanctuary Immersive Banner:**
   * Tampilan visual eksotis Sunset Road Bali dengan aksen kayu dan tanaman kopi.
   * Tombol *"Virtual Experience"*.

7. **Ethical Sourcing & Farmer Support (Story of Sumatra):**
   * Peta asal biji kopi Indonesia (Sumatra, Aceh Gayo, Toraja, Bali Kintamani).
   * Fakta komitmen 99% ethically sourced & ramah lingkungan.

8. **Store Locator & Drive-Thru Quick Finder:**
   * Input pencarian lokasi + tag filter instan (*Drive Thru, 24 Hours, Reserve*).

9. **Footer Komprehensif & Sertifikasi:**
   * Logo Halal MUI/BPJPH & ISO.
   * Links Kebijakan Privasi, Syarat Ketentuan, Karir, dan Hak Cipta © 2026 Starbucks Indonesia.
