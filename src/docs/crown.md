# Analisis Fitur Website — crownvictoriahotel.com

---

## 1. Ringkasan Umum

Crown Victoria Hotel adalah situs resmi hotel bintang 4 yang berlokasi sekitar 1 km dari alun-alun kota Tulungagung. Website ini dibangun di atas WordPress dengan tema kustom bernama "crownvictoria".

---

## 2. Struktur Navigasi (Menu Utama)

| Menu              | Sub-menu                                                       |
| ----------------- | -------------------------------------------------------------- |
| Home              | —                                                              |
| Reservation       | — (form booking)                                               |
| Guestroom         | Superior, Deluxe, Suite, Executive Suite, Victoria Grand Suite |
| Meeting & Banquet | Meeting, Banquet                                               |
| Facilities        | Health Club, Swimming Pool                                     |
| Tourist Spots     | —                                                              |
| About Us          | —                                                              |
| Contact Us        | —                                                              |

---

## 3. Fitur-Fitur yang Ditemukan

### 🏨 Informasi & Konten

- **Beranda (Home)** dengan banner/slider gambar (4 banner berputar)
- **Bagian "Welcome"** — teks perkenalan hotel & profil singkat (misi & visi)
- **Bagian "News & Promotion"** — menampilkan promo/berita terbaru dengan tautan ke Gallery dan Promotion
- **Halaman About Us**
- **Halaman Tourist Spots** — info tempat wisata sekitar hotel
- **Halaman Terms & Agreements**

### 🛏️ Kamar (Guestroom)

- Kategori kamar terstruktur: Superior, Deluxe, Suite, Executive Suite, dan Victoria Grand Suite
- Masing-masing punya halaman detail tersendiri

### 📅 Reservasi

- **Form Reservation** di beranda dengan input:
  - Check-In Date
  - Check-Out Date
  - Jumlah Rooms
- Ada halaman khusus `/reservation/` untuk proses booking

### 🏛️ Meeting & Banquet

- Sub-halaman terpisah untuk **Meeting** dan **Banquet** (fasilitas acara/MICE)

### 💪 Fasilitas (Facilities)

- **Health Club**
- **Swimming Pool**

### 📷 Galeri

- Halaman **Gallery** untuk menampilkan foto-foto hotel

### 📞 Kontak & Sosial Media

- Halaman **Contact Us**
- Tautan ke media sosial:
  - Facebook (CrownVictoriaHotel)
  - Twitter (@cvhtulungagung)
  - Instagram (@crownvictoriahotel)

### 🌐 Lain-lain

- Footer dengan copyright dinamis (otomatis update tahun — saat ini menampilkan 2026)
- Indikasi dukungan multi-bahasa (ditemukan penanda `[:en]...[:id]...[:]` pada label menu Gallery/Promotion — kemungkinan menggunakan plugin translasi seperti WPML/qTranslate, namun tampaknya **tidak dirender dengan benar** karena shortcode-nya masih terlihat mentah di teks)

---

## 4. ⚠️ Temuan Masalah Teknis

Saat mencoba mengakses beberapa halaman penting, ditemukan **error PHP fatal** yang sama persis di banyak halaman:

```
Parse error: syntax error, unexpected '(' in
/home/crownvic/public_html/wp/wp-content/plugins/blaze-updater-pad/blaze-updater-pad.php
on line 28
```

Halaman yang terdampak error ini antara lain:

- `/wp/reservation/`
- `/wp/guestrooms/`
- `/wp/facilities/`

**Catatan penting:**

- Nama plugin **"blaze-updater-pad"** tidak umum/tidak dikenal sebagai plugin WordPress resmi — pola penamaan seperti ini sering dipakai oleh plugin **malware/backdoor** yang disusupkan ke situs WordPress yang rentan.
- Error ini juga **membocorkan full server path** (`/home/crownvic/public_html/...`), yang merupakan celah informasi (information disclosure) bagi pihak yang berniat jahat.
- WordPress versi 4.8 (terlihat di meta generator) sudah **sangat usang** dan tidak lagi didukung update keamanan resmi — sangat rentan terhadap eksploitasi.

**Rekomendasi:**

1. Segera periksa dan hapus plugin `blaze-updater-pad` — kemungkinan besar ini adalah malware/plugin tidak sah.
2. Update WordPress core, tema, dan seluruh plugin ke versi terbaru.
3. Nonaktifkan `display_errors` di server produksi agar path server tidak bocor ke publik.
4. Lakukan full security scan & audit pada hosting.

---

## 5. Kesimpulan

Website ini secara struktur memiliki fitur standar situs hotel (reservasi, katalog kamar, fasilitas, meeting & banquet, galeri, info wisata, kontak). Namun dari sisi teknis, situs ini menunjukkan tanda-tanda **serius** berupa kemungkinan infeksi malware/plugin berbahaya dan platform yang sangat outdated, sehingga fungsi-fungsi penting seperti halaman reservasi dan fasilitas saat ini **tidak dapat diakses sama sekali** oleh pengunjung.
