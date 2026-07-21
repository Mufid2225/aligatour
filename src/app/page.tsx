import Image from "next/image";
import { ArrowRight, Bus, CalendarBlank, CheckCircle, Compass, EnvelopeSimple, FacebookLogo, InstagramLogo, MapPin, Mountains, Star, TiktokLogo, UsersThree, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const trips = [
  {title:"Malang–Batu City Tour", place:"Malang & Kota Batu", price:"500.000", unit:"/mobil", days:"Private · 4 kursi", rating:"4.9", image:"/trip-cards/malang-batu-city-tour.webp", tag:"Bebas pilih destinasi", href:"/trips/malang-batu-city-tour"},
  {title:"Private Shuttle Ranu Pane", place:"Malang ↔ Basecamp Ranu Pane", price:"8xx.xxx", unit:"/mobil", days:"PP · 1–10 kursi", rating:"4.9", image:"/trip-cards/private-shuttle-ranu-pane.webp", tag:"Gratis shelter H-1", href:"/trips/private-shuttle-ranu-pane"},
  {title:"Private Trip Ranu Kumbolo", place:"Semeru, Jawa Timur", price:"2.200.000", unit:"/grup", days:"2 Hari 1 Malam · 2–4 orang", rating:"4.9", image:"/trip-cards/ranu-kumbolo.jpg", tag:"3 pilihan paket", href:"/trips/private-trip-ranu-kumbolo"},
  {title:"Open Trip Tumpak Sewu", place:"Meeting point Malang & Batu", price:"350.000", unit:"/orang", days:"1 Hari · Per orang", rating:"4.8", image:"/trip-cards/tumpak-sewu.jpg", tag:"Berangkat setiap hari", href:"/trips/open-trip-tumpak-sewu"},
  {title:"Private Trip Pantai Malang", place:"Pantai Malang Selatan", price:"200.000", unit:"/orang", days:"Maks. 2 pantai", rating:"4.9", image:"/trip-cards/pantai-malang.webp", tag:"Bebas pilih pantai", href:"/trips/private-trip-pantai-malang"},
  {title:"Private Trip Bromo", place:"Meeting point Kota Malang", price:"1.800.000", unit:"/grup", days:"Private · Maks. 5 orang", rating:"4.9", image:"https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=85", tag:"3 pilihan paket", href:"/trips/private-trip-bromo"},
];

export default function Home() {
  return <main>
    <header className="absolute z-20 w-full py-5 text-white">
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5" aria-label="Aligatour - Beranda">
          <Image src="/brand/logo-aligatour.webp" alt="Logo Aligatour" width={58} height={58} priority className="h-[58px] w-[58px] object-contain" />
          <span className="display hidden text-xl font-extrabold tracking-tight sm:block">Aliga<span className="text-[#d8f05a]">tour.</span></span>
        </a>
        <nav className="desktop-nav flex items-center gap-8 text-sm font-semibold"><a href="#trip">Paket Trip</a><a href="#about">Tentang Kami</a><a href="#review">Cerita Traveler</a><a href="#contact">Kontak</a></nav>
        <a href="#trip" className="rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-bold backdrop-blur">Lihat Trip</a>
      </div>
    </header>

    <section className="relative min-h-[760px] overflow-hidden bg-[#123e37] text-white">
      <Image src="https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=2000&q=90" alt="Keindahan alam Indonesia" fill priority className="object-cover opacity-65" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d302b]/95 via-[#0d302b]/60 to-transparent" />
      <div className="container relative z-10 flex min-h-[760px] items-center pt-20">
        <div className="max-w-[720px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide backdrop-blur"><Compass size={17} weight="fill" className="text-[#d8f05a]"/> CITY TOUR SPECIALIST MALANG–BATU</div>
          <h1 className="text-5xl font-extrabold leading-[1.06] tracking-[-.04em] sm:text-7xl">Bukan sekadar pergi.<br/><span className="text-[#d8f05a]">Bawa pulang cerita.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">Perjalanan terkurasi ke tempat-tempat luar biasa, ditemani tim yang paham cara membuat setiap momen terasa istimewa.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4"><a className="btn-primary" href="#trip">Temukan perjalananmu <ArrowRight size={19}/></a><a href="https://www.instagram.com/aligatour.malang" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-3 font-bold"><InstagramLogo size={20} weight="fill"/> @aligatour.malang</a></div>
          <div className="mt-14 flex flex-wrap gap-8 text-sm"><span><b className="display block text-2xl">1.200+</b><span className="text-white/65">Traveler berangkat</span></span><span><b className="display block text-2xl">35+</b><span className="text-white/65">Destinasi pilihan</span></span><span><b className="display block text-2xl">4.9/5</b><span className="text-white/65">Kepuasan traveler</span></span></div>
        </div>
      </div>
    </section>

    <section className="relative z-10 -mt-12"><div className="container grid gap-1 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl shadow-[#173c3520] sm:grid-cols-[1fr_1fr_auto]">
      <div className="flex items-center gap-3 p-4"><MapPin size={23} className="text-[#176b5b]"/><div><small className="text-gray-500">Mau pergi ke mana?</small><b className="block">Semua destinasi</b></div></div>
      <div className="flex items-center gap-3 border-t border-gray-100 p-4 sm:border-l sm:border-t-0"><CalendarBlank size={23} className="text-[#176b5b]"/><div><small className="text-gray-500">Pilih keberangkatan</small><b className="block">Tanggal fleksibel</b></div></div>
      <a href="#trip" className="btn-dark m-1 justify-center px-8">Cari Trip <ArrowRight/></a>
    </div></section>

    <section className="border-b border-[#dfe6df] bg-white py-8"><div className="container">
      <p className="mb-5 text-center text-xs font-extrabold uppercase tracking-[.18em] text-[#6d7d78]">Layanan Aligatour</p>
      <div className="flex flex-wrap justify-center gap-3">{[
        [MapPin, "City Tour Malang–Batu"],
        [Bus, "Shuttle Malang–Ranu Pani"],
        [Mountains, "Ranu Kumbolo"],
        [Mountains, "Bromo"],
        [Mountains, "Tumpak Sewu"],
        [ArrowRight, "Antar Kota"],
      ].map(([Icon, label]) => <span key={label as string} className="flex items-center gap-2 rounded-full bg-[#f0f3e9] px-4 py-2.5 text-sm font-bold text-[#153d37]"><Icon size={18} className="text-[#176b5b]"/>{label as string}</span>)}</div>
    </div></section>

    <section id="trip" className="py-28"><div className="container">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Trip Pilihan Aligatour</p><h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Ke mana cerita<br/>berikutnya dimulai?</h2></div><a href="#" className="font-bold text-[#176b5b]">Lihat semua perjalanan →</a></div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{trips.map((trip,index)=><article key={trip.title} className="trip-card flex h-full flex-col overflow-hidden rounded-[24px] border border-[#dfe6df] bg-white">
        <div className="relative h-64 sm:h-72"><Image src={trip.image} alt={trip.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover"/><span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-extrabold text-[#176b5b]">{trip.tag}</span><span className="absolute bottom-4 left-4 rounded-full bg-[#d8f05a] px-3 py-1.5 text-xs font-extrabold text-[#153d37]">0{index+1}</span><span className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-[#153d37]/90 px-3 py-1.5 text-sm font-bold text-white"><Star weight="fill" className="text-[#d8f05a]"/> {trip.rating}</span></div>
        <div className="flex flex-1 flex-col p-6"><div className="flex items-center gap-1.5 text-sm text-gray-500"><MapPin/>{trip.place}</div><h3 className="mt-2 min-h-16 text-2xl font-extrabold">{trip.title}</h3><div className="mt-4 flex min-h-20 items-center justify-between gap-3 border-t border-gray-100 pt-4"><div><span className="text-xs text-gray-500">Mulai dari</span><p><b className="text-xl text-[#176b5b]">Rp{trip.price}</b><span className="text-xs text-gray-400"> {trip.unit}</span></p></div><span className="max-w-[145px] rounded-xl bg-[#f1f5e8] px-3 py-2 text-center text-xs font-bold leading-5">{trip.days}</span></div>{trip.href && <a href={trip.href} className="mt-auto flex items-center justify-center gap-2 rounded-full bg-[#153d37] px-5 py-3 text-sm font-bold text-white">Lihat detail paket <ArrowRight/></a>}</div>
      </article>)}</div>
    </div></section>

    <section id="about" className="bg-[#f0f0e5] py-24"><div className="container grid items-center gap-14 lg:grid-cols-2">
      <div className="relative min-h-[500px]"><Image src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1000&q=85" alt="Traveler Aligatour" fill className="rounded-[32px] object-cover"/><div className="absolute -bottom-5 right-5 max-w-[230px] rounded-2xl bg-[#d8f05a] p-5 text-[#153d37]"><Mountains size={30} weight="fill"/><b className="mt-2 block text-lg">Perjalanan tanpa ribet</b><span className="text-sm">Kamu menikmati momen, kami urus sisanya.</span></div></div>
      <div><p className="eyebrow">Kenapa Aligatour?</p><h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Teman perjalanan<br/>yang bisa diandalkan.</h2><p className="mt-6 leading-7 text-[#60716c]">Kami percaya perjalanan terbaik lahir dari detail yang dipikirkan dengan baik—rute yang pas, jadwal yang nyaman, dan orang-orang yang peduli.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">{[[CheckCircle,"Trip terkurasi","Destinasi dan itinerary dipilih dengan cermat."],[UsersThree,"Tour leader lokal","Tim ramah yang mengenal setiap sudut tujuan."],[CalendarBlank,"Jadwal fleksibel","Pilihan tanggal beragam sesuai waktumu."],[WhatsappLogo,"Bantuan responsif","Ada yang siap membantu sebelum hingga pulang."]].map(([Icon,title,text])=><div key={title as string} className="flex gap-3"><Icon size={25} weight="fill" className="shrink-0 text-[#176b5b]"/><div><b>{title as string}</b><p className="mt-1 text-sm leading-6 text-[#6d7d78]">{text as string}</p></div></div>)}</div></div>
    </div></section>

    <section id="review" className="py-24"><div className="container text-center"><p className="eyebrow">Cerita Traveler</p><blockquote className="mx-auto mt-7 max-w-4xl text-3xl font-bold leading-snug tracking-tight sm:text-4xl">“Pertama kali ikut open trip sendirian, tapi rasanya seperti pergi bareng teman lama. Semuanya tertata, tour leader-nya seru, dan Ranu Kumbolo benar-benar tak terlupakan.”</blockquote><div className="mt-7"><b>Nadia Putri</b><p className="text-sm text-gray-500">Open Trip Ranu Kumbolo · Mei 2026</p></div></div></section>

    <section id="contact" className="container mb-8 overflow-hidden rounded-[32px] bg-[#153d37] px-7 py-16 text-center text-white sm:px-16"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#d8f05a]">Siap berangkat?</p><h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">Cerita barumu menunggu.</h2><p className="mx-auto mt-4 max-w-xl text-white/70">Konsultasikan city tour, shuttle, trip alam, atau perjalanan antar kota bersama tim Aligatour.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="https://wa.me/628563532918" className="btn-primary"><WhatsappLogo size={21} weight="fill"/> Chat via WhatsApp</a><a href="https://www.instagram.com/aligatour.malang" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-bold"><InstagramLogo size={21} weight="fill"/> @aligatour.malang</a></div></section>
    <footer className="border-t border-[#e4e9e2] py-10"><div className="container"><div className="flex flex-wrap items-center justify-between gap-8"><a href="#" className="flex items-center gap-3"><Image src="/brand/logo-aligatour.webp" alt="Logo Aligatour" width={58} height={58} className="h-[58px] w-[58px] object-contain"/><span><b className="display block text-xl text-[#153d37]">Aligatour</b><small className="text-[#6d7d78]">Tour and Travel</small></span></a><div><b className="text-sm text-[#153d37]">Hubungi & ikuti kami</b><div className="mt-4 flex max-w-2xl flex-wrap gap-x-5 gap-y-3 text-sm"><a href="mailto:aligatourmalang@gmail.com" className="flex items-center gap-1.5 text-[#51635e] hover:text-[#176b5b]"><EnvelopeSimple size={19}/> aligatourmalang@gmail.com</a><a href="https://www.instagram.com/aligatour.malang" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[#51635e] hover:text-[#176b5b]"><InstagramLogo size={19}/> @aligatour.malang</a><a href="https://www.facebook.com/aligatourmalang" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[#51635e] hover:text-[#176b5b]"><FacebookLogo size={19}/> Aligatour Malang</a><a href="https://www.tiktok.com/@aligatourtravel?_r=1&_t=ZS-97yJLIhJJoL" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[#51635e] hover:text-[#176b5b]"><TiktokLogo size={19}/> @aligatourtravel</a></div></div></div><div className="mt-8 border-t border-[#e4e9e2] pt-5 text-center text-xs text-[#81908c] sm:text-left">© 2026 Aligatour · City Tour Specialist Malang–Batu</div></div></footer>
  </main>;
}
