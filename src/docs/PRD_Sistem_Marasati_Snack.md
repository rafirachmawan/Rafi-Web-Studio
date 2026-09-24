# PRD — Sistem Terintegrasi Marasati Snack

**Versi:** 1.0 (Draft demo)
**Untuk:** Marasati Snack (8 outlet + rumah produksi pusat)
**Modul:** POS Kasir Outlet, Manajemen Stok & Produksi, Dashboard Owner

## 1. Latar belakang
Marasati Snack saat ini mengelola 8 outlet dengan sistem manual (pencatatan penjualan per outlet, distribusi stok dari rumah produksi, dan pemantauan omzet dilakukan terpisah). Dibutuhkan satu sistem terintegrasi agar data mengalir otomatis dari produksi → outlet → owner, tanpa rekap manual.

## 2. Tujuan
- Mempercepat transaksi kasir dan mengurangi selisih stok
- Memberi owner visibilitas real-time atas omzet, stok, dan kinerja tiap cabang
- Menyediakan dasar data untuk keputusan restock dan ekspansi cabang berikutnya

## 3. Role pengguna
| Role | Deskripsi |
|---|---|
| Admin Rumah Produksi | Input hasil produksi, distribusi stok ke outlet |
| Kasir/Admin Outlet | Input transaksi penjualan harian di outlet |
| Owner | Pantau seluruh cabang dari satu dashboard |

## 4. Ruang lingkup demo (MVP)
**Termasuk:** 3 modul di atas, data dummy, alur produksi→outlet→dashboard, notifikasi stok menipis.
**Belum termasuk (fase berikutnya):** absensi/payroll crew, integrasi pembayaran QRIS otomatis, multi-level reseller, aplikasi mobile native.

## 5. User stories
- Sebagai **admin produksi**, saya ingin mencatat hasil produksi harian dan mengirimkannya ke outlet tertentu, agar stok outlet otomatis ter-update.
- Sebagai **kasir outlet**, saya ingin mencatat transaksi dengan cepat (produk + varian bumbu + qty), agar stok dan omzet otomatis terekam tanpa hitung manual.
- Sebagai **kasir**, saya ingin mendapat peringatan saat stok produk tertentu hampir habis, agar bisa segera lapor ke pusat.
- Sebagai **owner**, saya ingin melihat omzet semua cabang dalam satu layar, agar tidak perlu tanya satu-satu ke tiap outlet.
- Sebagai **owner**, saya ingin tahu outlet mana yang paling laris dan paling sepi, agar bisa evaluasi lokasi/strategi.

## 6. Fitur per modul

### 6.1 Modul Produksi & Stok (Admin Pusat)
- Input hasil produksi harian: nama produk, jumlah, tanggal
- Distribusi stok ke outlet: pilih outlet tujuan + jumlah per produk
- Riwayat distribusi (siapa kirim apa, kapan, ke outlet mana)
- Ringkasan stok pusat yang tersisa (belum didistribusi)

### 6.2 Modul POS/Kasir Outlet
- Daftar produk & varian bumbu (harga otomatis tampil)
- Keranjang transaksi + kalkulasi total otomatis
- Simpan transaksi → otomatis kurangi stok outlet & catat omzet
- Riwayat transaksi harian per outlet
- Alert visual saat stok produk < ambang batas (misal 10 cup)

### 6.3 Modul Dashboard Owner
- Rekap omzet total & per outlet (harian/mingguan/bulanan)
- Grafik perbandingan performa antar 8 outlet
- Peta stok real-time semua outlet + rumah produksi
- Daftar produk terlaris vs kurang laku
- Notifikasi outlet dengan stok kritis

## 7. Struktur data (dummy untuk demo)

**Produk & varian:**
| Produk | Varian Bumbu | Harga |
|---|---|---|
| Basreng | Cikruh | Rp10.000 |
| Basreng | Tabur | mulai Rp1.000 |
| Cimol | Cikruh | Rp8.000 |
| Cimol | Tabur | mulai Rp1.000 |
| Otak-otak | Cikruh | Rp10.000 |
| Otak-otak | Tabur | mulai Rp1.000 |

**Entitas:** Outlet (id, nama, lokasi), Transaksi (outlet_id, produk, varian, qty, total, waktu), Stok Outlet (outlet_id, produk, qty), Distribusi (dari pusat, ke outlet, produk, qty, tanggal), Produksi (produk, qty, tanggal).

**Data dummy:** 8 outlet (Outlet #01–#08), stok awal acak tiap outlet, ± 30 transaksi tersebar di beberapa hari untuk mengisi grafik dashboard.

## 8. Alur sistem
Rumah Produksi → distribusi stok → Outlet (POS, transaksi mengurangi stok) → data real-time → Dashboard Owner. Jika stok outlet menipis, sistem kirim alert kembali ke rumah produksi. *(sudah divisualisasikan di diagram sebelumnya)*

## 9. Kebutuhan non-fungsional
- Tampilan sederhana, cepat dipakai kasir tanpa training lama
- Bisa diakses dari HP/tablet outlet (responsive)
- Data antar modul konsisten (satu sumber kebenaran untuk stok & omzet)

## 10. Batasan demo
- Belum terhubung backend/database sungguhan — data tersimpan sementara untuk simulasi
- Belum ada sistem login/autentikasi berlapis
- Fokus menunjukkan **alur & tampilan**, bukan sistem produksi final

## 11. Langkah setelah demo disetujui
1. Validasi kebutuhan detail dengan owner (jumlah outlet, produk, role tambahan)
2. Bangun backend + database sungguhan
3. Sistem login per role & per outlet
4. Uji coba di 1–2 outlet dulu sebelum rollout ke 8 cabang
