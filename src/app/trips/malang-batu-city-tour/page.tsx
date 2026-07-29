import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/site-path";
import { ArrowLeft, Camera, Car, CheckCircle, MapPin, Sparkle, UsersThree, WhatsappLogo, X } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Malang–Batu City Tour | Aligatour",
  description: "City Tour Malang–Batu mulai Rp500.000 untuk 4 kursi. Bebas memilih destinasi dengan mobil, driver, dan BBM.",
};

const vehicles = [
  { unit: "Ignis, Agya/Ayla", capacity: "1–4 kursi", price: "Rp500.000" },
  { unit: "Sigra/Calya", capacity: "1–6 kursi", price: "Rp550.000" },
  { unit: "Avanza, Xenia", capacity: "1–7 kursi", price: "Rp600.000" },
  { unit: "All New Avanza", capacity: "1–7 kursi", price: "Rp650.000" },
  { unit: "Yaris New", capacity: "1–4 kursi", price: "Rp650.000" },
  { unit: "Innova Reborn, Fortuner", capacity: "1–7 kursi", price: "Rp850.000" },
  { unit: "Innova Venturer", capacity: "1–5 kursi", price: "Rp900.000" },
  { unit: "HiAce Commuter", capacity: "1–15 kursi", price: "Rp1.350.000" },
  { unit: "HiAce Premio", capacity: "1–12 kursi", price: "Rp1.450.000" },
  { unit: "HiAce Luxury", capacity: "1–7 kursi", price: "Rp2.500.000" },
  { unit: "Alphard", capacity: "1–5 kursi", price: "DM for Price" },
];

const facilities = [
  { title: "Welcome Snack & Drink", image: withBasePath("/facilities/snack-drink.webp") },
  { title: "Full Powerbank", image: withBasePath("/facilities/powerbank.webp") },
  { title: "Free Wi-Fi", image: withBasePath("/facilities/wifi.webp") },
  { title: "Photographer", note: "+Rp350.000", image: withBasePath("/facilities/dokumentasi.webp") },
];

export default function CityTourPage() {
  return <main className="min-h-screen bg-[#fbfcf8]">
    <section className="relative min-h-[590px] overflow-hidden bg-[#153d37] text-white">
      <Image src={withBasePath("/trip-cards/malang-batu-city-tour.webp")} alt="Destinasi Malang Batu City Tour" fill priority className="object-cover opacity-60"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#102f2b]/95 via-[#102f2b]/70 to-[#102f2b]/25"/>
      <div className="container relative z-10 py-7"><Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-white/80"><ArrowLeft/> Kembali ke beranda</Link></div>
      <div className="container relative z-10 pb-20 pt-20"><span className="inline-flex items-center gap-2 rounded-full bg-[#d8f05a] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#153d37]"><Sparkle weight="fill"/> Free to choose the destinations</span><h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-[-.04em] sm:text-7xl">Malang–Batu<br/>City Tour</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">Have a great city tour experience with Aligatour! Kamu bebas menentukan destinasi sesuai gaya perjalananmu.</p><div className="mt-8 flex flex-wrap items-end gap-7"><div><small className="text-white/60">Mulai dari · untuk 4 kursi</small><p className="text-3xl font-extrabold text-[#d8f05a]">Rp500.000</p></div><a href="#pricelist" className="btn-primary">Lihat pilihan mobil <Car size={20} weight="fill"/></a></div></div>
    </section>

    <section className="py-20"><div className="container grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Fasilitas City Tour</p><h2 className="mt-3 text-4xl font-extrabold">Nyaman dari berangkat sampai pulang.</h2><p className="mt-5 leading-7 text-[#6d7d78]">Fasilitas perjalanan disiapkan agar kamu bisa menikmati Malang dan Batu tanpa ribet.</p><div className="mt-7 rounded-2xl bg-[#eef1e6] p-5 text-sm text-[#53645f]"><Camera size={23} weight="fill" className="mb-2 text-[#176b5b]"/><b className="block text-[#153d37]">Butuh dokumentasi?</b>Tambahkan fotografer dengan biaya Rp350.000.</div></div><div className="grid grid-cols-2 gap-4">{facilities.map(item=><article key={item.title} className="overflow-hidden rounded-xl border border-[#dfe6df] bg-white"><div className="relative h-32 bg-[#f3f1e8]"><Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 50vw, 250px" className="object-contain p-3"/></div><div className="min-h-20 p-4"><b className="text-sm">{item.title}</b>{item.note&&<span className="mt-1 block text-xs font-bold text-[#176b5b]">{item.note}</span>}</div></article>)}</div></div></section>

    <section id="pricelist" className="bg-[#f0f0e5] py-24"><div className="container"><div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Pricelist Rent Car</p><h2 className="mt-3 text-4xl font-extrabold">Pilih kendaraanmu</h2><p className="mt-3 text-[#6d7d78]">Harga City Tour Malang–Batu per unit kendaraan.</p></div><div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold"><UsersThree size={21} className="text-[#176b5b]"/> Pilihan 4–15 kursi</div></div>
      <div className="overflow-hidden rounded-2xl border border-[#d9dfd6] bg-white"><div className="hidden grid-cols-[1.4fr_.7fr_.7fr_auto] gap-4 bg-[#153d37] px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-white md:grid"><span>Unit</span><span>Kapasitas</span><span>Harga</span><span></span></div>{vehicles.map((vehicle,index)=><div key={vehicle.unit} className={`grid items-center gap-3 px-5 py-5 md:grid-cols-[1.4fr_.7fr_.7fr_auto] md:gap-4 md:px-6 ${index!==vehicles.length-1?"border-b border-[#e6eae4]":""}`}><div><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#81908c] md:hidden">Unit</span><b className="text-[#153d37]">{vehicle.unit}</b></div><div><span className="mr-2 text-xs font-bold uppercase tracking-wider text-[#81908c] md:hidden">Kapasitas:</span><span className="text-sm text-[#5e706a]">{vehicle.capacity}</span></div><div><span className="mr-2 text-xs font-bold uppercase tracking-wider text-[#81908c] md:hidden">Harga:</span><b className="text-[#176b5b]">{vehicle.price}</b></div><a href={`https://wa.me/628563532918?text=${encodeURIComponent(`Halo Aligatour, saya tertarik City Tour Malang–Batu menggunakan ${vehicle.unit} (${vehicle.capacity}).`)}`} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#153d37] px-4 py-2.5 text-xs font-bold text-white md:mt-0"><WhatsappLogo size={17} weight="fill"/> Pilih unit</a></div>)}</div>
      <p className="mt-4 text-xs leading-5 text-[#73827e]">*Harga dapat berubah mengikuti tanggal perjalanan dan ketersediaan unit. Hubungi Aligatour untuk konfirmasi akhir.</p></div></section>

    <section className="py-20"><div className="container grid gap-6 md:grid-cols-2"><div className="rounded-[26px] border border-[#dfe6df] bg-white p-7"><h2 className="text-2xl font-extrabold">Sudah termasuk</h2><div className="mt-6 space-y-4">{["Mobil sesuai pilihan", "Driver", "BBM"].map(item=><div key={item} className="flex items-center gap-3"><CheckCircle size={22} weight="fill" className="text-[#176b5b]"/><b>{item}</b></div>)}</div></div><div className="rounded-[26px] border border-[#eadfd8] bg-[#fffaf5] p-7"><h2 className="text-2xl font-extrabold">Belum termasuk</h2><div className="mt-6 grid gap-4 sm:grid-cols-2">{["Tiket wisata", "Biaya parkir", "Biaya tol", "Konsumsi driver"].map(item=><div key={item} className="flex items-center gap-3"><X size={21} weight="bold" className="text-[#b96a4c]"/><span>{item}</span></div>)}</div></div></div></section>

    <section className="container mb-10 rounded-[30px] bg-[#d8f05a] p-9 sm:p-12"><div className="flex flex-wrap items-center justify-between gap-7"><div><div className="flex items-center gap-2 font-bold"><MapPin size={23} weight="fill"/> Destinasi bebas dipilih</div><h2 className="mt-2 text-3xl font-extrabold">Mau ke mana saja di Malang–Batu?</h2><p className="mt-2 text-[#38564f]">Ceritakan tujuan dan jumlah rombonganmu. Kami bantu siapkan unit yang pas.</p></div><a href="https://wa.me/628563532918?text=Halo%20Aligatour%2C%20saya%20ingin%20konsultasi%20Malang-Batu%20City%20Tour." className="btn-dark"><WhatsappLogo size={20} weight="fill"/> Konsultasi itinerary</a></div></section>
  </main>;
}
