import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Bed, Bus, CheckCircle, ClockCountdown, MapPin, Mountains, UsersThree, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Private Shuttle Malang–Ranu Pane | Aligatour",
  description: "Private shuttle pergi-pulang dari Malang ke Basecamp Ranu Pane. Termasuk kendaraan, driver, BBM, parkir, fasilitas gratis, dan shelter pendakian H-1.",
};

const vehicles = [
  { unit: "Jimny Katana", capacity: "1–2 kursi", price: "Rp8xx.xxx" },
  { unit: "Avanza", capacity: "1–4 kursi", price: "Rp1.xxx.xxx" },
  { unit: "Innova", capacity: "1–6 kursi", price: "Rp1.xxx.xxx" },
  { unit: "Fortuner", capacity: "1–6 kursi", price: "Rp1.xxx.xxx" },
  { unit: "Jeep Hardtop", capacity: "1–7 kursi", price: "Rp1.xxx.xxx" },
  { unit: "HiAce", capacity: "1–10 kursi", price: "Rp2.xxx.xxx" },
];

const facilities = [
  { title: "Snack & Drink", image: "/facilities/snack-drink.webp" },
  { title: "Full Powerbank", image: "/facilities/powerbank.webp" },
  { title: "Free Wi-Fi", image: "/facilities/wifi.webp" },
  { title: "Insta360 X4 Air", note: "Terbatas", image: "/facilities/insta360-x4.webp" },
  { title: "Dokumentasi", image: "/facilities/dokumentasi.webp" },
];

export default function PrivateShuttleRanuPanePage() {
  return <main className="min-h-screen bg-[#fbfcf8]">
    <section className="relative min-h-[610px] overflow-hidden bg-[#153d37] text-white">
      <Image src="https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?auto=format&fit=crop&w=2000&q=90" alt="Perjalanan menuju Basecamp Ranu Pane" fill priority sizes="100vw" className="object-cover opacity-55"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#102f2b]/95 via-[#102f2b]/70 to-[#102f2b]/20"/>
      <div className="container relative z-10 py-7"><Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-white/80"><ArrowLeft/> Kembali ke beranda</Link></div>
      <div className="container relative z-10 pb-20 pt-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#d8f05a] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#153d37]"><Bus weight="fill"/> Pergi–Pulang · Private Shuttle</span>
        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-[-.04em] sm:text-7xl">Malang <span className="text-[#d8f05a]">↔</span><br/>Basecamp Ranu Pane</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Solusi nyaman dan fleksibel untuk kamu yang menuju Ranu Pane, Ranu Regulo, atau memulai petualangan ke Ranu Kumbolo.</p>
        <div className="mt-8 flex flex-wrap items-end gap-7"><div><small className="text-white/60">Pilihan unit untuk</small><p className="text-3xl font-extrabold text-[#d8f05a]">1–10 kursi</p></div><a href="#pricelist" className="btn-primary">Pilih kendaraan <Bus size={20} weight="fill"/></a></div>
      </div>
    </section>

    <section className="relative z-10 -mt-9"><div className="container"><div className="grid overflow-hidden rounded-2xl bg-white shadow-2xl shadow-[#153d3720] sm:grid-cols-3">{[[MapPin,"Penjemputan","Area Kota Malang"],[Mountains,"Tujuan","Basecamp Ranu Pane"],[ClockCountdown,"Perjalanan","Pergi–Pulang"]].map(([Icon,label,value])=><div key={label as string} className="flex items-center gap-4 border-b border-[#e8ece6] p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"><Icon size={27} weight="fill" className="shrink-0 text-[#176b5b]"/><div><small className="text-[#81908c]">{label as string}</small><b className="block">{value as string}</b></div></div>)}</div></div></section>

    <section className="py-24"><div className="container grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Free Facilities</p><h2 className="mt-3 text-4xl font-extrabold">Lebih nyaman menuju pintu petualangan.</h2><p className="mt-5 leading-7 text-[#6d7d78]">Bonus fasilitas tersedia untuk menemani perjalanan rombonganmu. Kamera Insta360 tersedia dalam jumlah terbatas.</p></div><div className="grid grid-cols-2 gap-4 sm:grid-cols-3">{facilities.map(item=><article key={item.title} className="overflow-hidden rounded-xl border border-[#dfe6df] bg-white"><div className="relative h-32 bg-[#f3f1e8]"><Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 50vw, 210px" className="object-contain p-3"/></div><div className="min-h-20 p-4"><b className="text-sm">{item.title}</b>{item.note&&<span className="mt-1 block text-xs font-bold text-[#176b5b]">{item.note}</span>}</div></article>)}</div></div></section>

    <section className="bg-[#153d37] py-20 text-white"><div className="container grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]"><div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#d8f05a]">Datang H-1?</p><h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">Gratis menginap di<br/>Shelter Pendakian.</h2><p className="mt-5 max-w-xl leading-7 text-white/65">Tidak perlu bingung mencari tempat bermalam saat tiba sehari sebelum keberangkatan. Istirahat dulu di Kota Malang, lalu lanjutkan perjalanan ke Ranu Pane bersama kami.</p><p className="mt-5 text-xs font-bold uppercase tracking-wider text-white/45">*Syarat dan ketentuan berlaku</p></div><div className="rounded-[28px] border border-white/15 bg-white/5 p-8"><Bed size={48} weight="fill" className="text-[#d8f05a]"/><h3 className="mt-5 text-2xl font-extrabold">Shelter Pendakian Malang</h3><div className="mt-6 space-y-4">{["Gratis untuk pelanggan shuttle", "Cocok untuk kedatangan H-1", "Berada di area Kota Malang", "Konfirmasi ketersediaan saat reservasi"].map(item=><div key={item} className="flex gap-3"><CheckCircle size={21} weight="fill" className="shrink-0 text-[#d8f05a]"/><span className="text-white/80">{item}</span></div>)}</div></div></div></section>

    <section id="pricelist" className="bg-[#f0f0e5] py-24"><div className="container"><div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Pilihan Private Shuttle</p><h2 className="mt-3 text-4xl font-extrabold">Unit sesuai rombonganmu</h2><p className="mt-3 text-[#6d7d78]">Harga perjalanan pergi–pulang Malang–Basecamp Ranu Pane.</p></div><div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold"><UsersThree size={21} className="text-[#176b5b]"/> Maksimal 10 kursi</div></div>
      <div className="overflow-hidden rounded-2xl border border-[#d9dfd6] bg-white"><div className="hidden grid-cols-[1.4fr_.7fr_.7fr_auto] gap-4 bg-[#153d37] px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-white md:grid"><span>Unit</span><span>Kapasitas</span><span>Harga PP</span><span></span></div>{vehicles.map((vehicle,index)=><div key={vehicle.unit} className={`grid items-center gap-3 px-5 py-5 md:grid-cols-[1.4fr_.7fr_.7fr_auto] md:gap-4 md:px-6 ${index!==vehicles.length-1?"border-b border-[#e6eae4]":""}`}><div><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#81908c] md:hidden">Unit</span><b>{vehicle.unit}</b></div><div><span className="mr-2 text-xs font-bold uppercase tracking-wider text-[#81908c] md:hidden">Kapasitas:</span><span className="text-sm text-[#5e706a]">{vehicle.capacity}</span></div><div><span className="mr-2 text-xs font-bold uppercase tracking-wider text-[#81908c] md:hidden">Harga:</span><b className="text-[#176b5b]">{vehicle.price}</b></div><a href={`https://wa.me/628563532918?text=${encodeURIComponent(`Halo Aligatour, saya tertarik Private Shuttle Malang–Ranu Pane PP menggunakan ${vehicle.unit} (${vehicle.capacity}).`)}`} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#153d37] px-4 py-2.5 text-xs font-bold text-white md:mt-0"><WhatsappLogo size={17} weight="fill"/> Pilih unit</a></div>)}</div>
      <p className="mt-4 text-xs leading-5 text-[#73827e]">*Nominal lengkap dan ketersediaan unit dikonfirmasi melalui WhatsApp sesuai tanggal perjalanan.</p></div></section>

    <section className="py-20"><div className="container grid gap-6 md:grid-cols-[.8fr_1.2fr]"><div className="rounded-[26px] bg-[#eef1e6] p-7"><h2 className="text-2xl font-extrabold">Sudah termasuk</h2><div className="mt-6 space-y-4">{["Transportasi pergi–pulang", "Driver", "BBM", "Biaya parkir"].map(item=><div key={item} className="flex items-center gap-3"><CheckCircle size={22} weight="fill" className="text-[#176b5b]"/><b>{item}</b></div>)}</div></div><div className="rounded-[26px] bg-[#d8f05a] p-8 sm:p-10"><div className="flex items-center gap-2 font-bold"><Mountains size={23} weight="fill"/> Ranu Pane, Ranu Regulo, Ranu Kumbolo</div><h2 className="mt-3 text-3xl font-extrabold">Tentukan tanggal petualanganmu.</h2><p className="mt-3 max-w-xl text-[#38564f]">Cocok untuk perjalanan bersama teman, keluarga, atau tim kantor. Konsultasikan jumlah rombongan dan waktu penjemputanmu.</p><a href="https://wa.me/628563532918?text=Halo%20Aligatour%2C%20saya%20ingin%20konsultasi%20Private%20Shuttle%20Malang-Ranu%20Pane." className="btn-dark mt-7"><WhatsappLogo size={20} weight="fill"/> Book your trip</a></div></div></section>
  </main>;
}
