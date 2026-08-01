# Aligatour — Tour and Travel

Website katalog perjalanan Aligatour untuk menampilkan layanan wisata di Malang, Batu, dan beberapa destinasi di Jawa Timur. Pengunjung dapat melihat ringkasan paket, harga, fasilitas, serta menghubungi Aligatour melalui WhatsApp.

## Status

Website saat ini mencakup halaman beranda dan enam halaman detail layanan. Informasi paket masih disimpan langsung di source code dan reservasi dilakukan melalui WhatsApp.

Belum tersedia CMS, akun pengguna, pembayaran online, atau informasi jadwal secara real-time.

## Layanan

- Malang–Batu City Tour
- Private Shuttle Malang–Ranu Pane
- Private Trip Ranu Kumbolo
- Private Trip Tumpak Sewu
- Private Trip Ranu Regulo
- Private Trip Bromo

## Halaman

| URL | Deskripsi |
| --- | --- |
| `/` | Beranda, katalog perjalanan, informasi singkat, dan kontak |
| `/trips/malang-batu-city-tour` | Detail dan pilihan kendaraan City Tour Malang–Batu |
| `/trips/private-shuttle-ranu-pane` | Detail shuttle private Malang–Ranu Pane |
| `/trips/private-trip-ranu-kumbolo` | Detail dan pilihan paket Ranu Kumbolo |
| `/trips/private-trip-tumpak-sewu` | Detail Private Trip Tumpak Sewu |
| `/trips/private-trip-ranu-regulo` | Detail Private Trip Ranu Regulo |
| `/trips/private-trip-bromo` | Detail dan pilihan paket Bromo |

## Fitur yang tersedia

- Tampilan responsif untuk desktop dan perangkat mobile
- Katalog layanan dan halaman detail perjalanan
- Informasi harga, destinasi, fasilitas, serta ketentuan paket
- Tautan reservasi WhatsApp dengan pesan awal
- Tautan media sosial dan email Aligatour
- Metadata judul dan deskripsi pada halaman trip
- Optimasi gambar melalui komponen `next/image`
- Bilingual (Indonesia / English) dengan penyimpanan bahasa di session

## Teknologi

- Next.js 16 dengan App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Phosphor Icons
- Netlify

## Menjalankan project

### Prasyarat

- Node.js 22
- npm

### Instalasi

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Perintah

```bash
npm run dev    # menjalankan development server
npm run lint   # menjalankan ESLint
npm run build  # membuat production build
npm run start  # menjalankan production build
```

## Struktur utama

```text
src/app/                    Halaman dan layout App Router
src/app/trips/              Halaman detail layanan
public/brand/               Logo Aligatour
public/trip-cards/          Gambar utama paket perjalanan
public/facilities/          Gambar fasilitas perjalanan
public/destinations/        Galeri destinasi per perjalanan
public/pricelists/          Materi pricelist
public/reference/           Materi referensi paket
netlify.toml                Konfigurasi build Netlify
```

## Deployment

Konfigurasi Netlify tersedia di `netlify.toml` dengan perintah build `npm run build` dan Node.js 22.

## Kontak

- WhatsApp: [+62 856-3532-918](https://wa.me/628563532918)
- Email: [aligatourmalang@gmail.com](mailto:aligatourmalang@gmail.com)
- Instagram: [@aligatour.malang](https://www.instagram.com/aligatour.malang)
- Facebook: [Aligatour Malang](https://www.facebook.com/aligatourmalang)
- TikTok: [@aligatourtravel](https://www.tiktok.com/@aligatourtravel)

---

Aligatour — *Bukan sekadar pergi. Bawa pulang cerita.*
