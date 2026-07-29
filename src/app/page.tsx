import Image from "next/image";
import CardFanCarousel from "@/components/ui/card-fan-carousel";
import { ArrowRight, Bus, CalendarBlank, CheckCircle, Compass, EnvelopeSimple, FacebookLogo, InstagramLogo, MapPin, Mountains, Star, TiktokLogo, UsersThree, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const testimonials = [
  { name: "Nadia Putri", trip: "Open Trip Ranu Kumbolo", date: "Mei 2026", rating: 5, quote: "Pertama kali ikut open trip sendirian, tapi rasanya seperti pergi bareng teman lama. Semuanya tertata, tour leader-nya seru, dan Ranu Kumbolo benar-benar tak terlupakan." },
  { name: "Rizky Aditya", trip: "Private Trip Bromo", date: "Juni 2026", rating: 5, quote: "Sunrise di Bromo luar biasa! Driver dan guide sangat ramah. Jeep yang disiapkan juga nyaman. Pasti balik lagi next time." },
  { name: "Salsa Amalia", trip: "Malang-Batu City Tour", date: "April 2026", rating: 5, quote: "Bebas pilih destinasi, driver-nya flexibel banget. Recommended banget buat yang mau jalan-jalan santai di Malang." },
  { name: "Fajar Nugroho", trip: "Private Trip Tumpak Sewu", date: "Juni 2026", rating: 5, quote: "Tumpak Sewu dari dekat lebih keren dari foto-foto di IG. Dokumentasi juga sudah termasuk, tinggal nikmatin perjalanan." },
  { name: "Maya Putri", trip: "Private Trip Ranu Kumbolo", date: "Mei 2026", rating: 5, quote: "Paket Luxury-nya worth it! Chef pribadi, semua fasilitas lengkap. Tim-nya profesional dan friendly. Trip terbaik!" },
  { name: "Andi Pratama", trip: "Private Shuttle Ranu Pane", date: "Juni 2026", rating: 5, quote: "Shuttle nyaman, driver tepat waktu. Gratis shelter H-1-nya bantu banget buat yang datang malam sebelumnya." },
];

const aboutGallery = [
  { imgUrl: "/about-gallery/rakum-view-01.webp", alt: "Pemandangan Ranu Kumbolo" },
  { imgUrl: "/about-gallery/rakum-view-02.webp", alt: "Pemandangan Ranu Kumbolo" },
  { imgUrl: "/about-gallery/rakum-view-04.webp", alt: "Pemandangan Ranu Kumbolo" },
  { imgUrl: "/about-gallery/rakum-view-05.webp", alt: "Pemandangan Ranu Kumbolo" },
  { imgUrl: "/about-gallery/rakum-view-06.webp", alt: "Pemandangan Ranu Kumbolo" },
  { imgUrl: "/about-gallery/rakum-view-07.webp", alt: "Pemandangan Ranu Kumbolo" },
  { imgUrl: "/about-gallery/rakum-view-08.webp", alt: "Pemandangan Ranu Kumbolo" },
  { imgUrl: "/about-gallery/rakum-view-09.webp", alt: "Pemandangan Ranu Kumbolo" },
  { imgUrl: "/about-gallery/lumajang-view-01.webp", alt: "Pemandangan Lumajang" },
  { imgUrl: "/about-gallery/lumajang-view-02.webp", alt: "Pemandangan Lumajang" },
  { imgUrl: "/about-gallery/lumajang-view-03.webp", alt: "Pemandangan Lumajang" },
  { imgUrl: "/about-gallery/lumajang-view-04.webp", alt: "Pemandangan Lumajang" },
  { imgUrl: "/about-gallery/lumajang-view-05.webp", alt: "Pemandangan Lumajang" },
  { imgUrl: "/about-gallery/ragu-view-02.webp", alt: "Pemandangan Ranu Regulo" },
  { imgUrl: "/about-gallery/ragu-view-03.webp", alt: "Pemandangan Ranu Regulo" },
  { imgUrl: "/about-gallery/ragu-view-01.webp", alt: "Pemandangan Ranu Regulo" },
  { imgUrl: "/about-gallery/bromo-view-01.webp", alt: "Pemandangan Bromo" },
  { imgUrl: "/about-gallery/bromo-view-02.webp", alt: "Pemandangan Bromo" },
  { imgUrl: "/about-gallery/bromo-view-03.webp", alt: "Pemandangan Bromo" },
  { imgUrl: "/about-gallery/bromo-view-04.webp", alt: "Pemandangan Bromo" },
];

const trips = [
  {title:"Malang-Batu City Tour", place:"Malang & Kota Batu", price:"500.000", unit:"/mobil", days:"Private - 4 kursi", rating:"4.9", image:"/trip-cards/malang-batu-city-tour.webp", tag:"Bebas pilih destinasi", href:"/trips/malang-batu-city-tour"},
  {title:"Private Shuttle Ranu Pane", place:"Malang -> Basecamp Ranu Pane", price:"8xx.xxx", unit:"/mobil", days:"PP - 1-10 kursi", rating:"4.9", image:"/trip-cards/private-shuttle-ranu-pane.webp", tag:"Gratis shelter H-1", href:"/trips/private-shuttle-ranu-pane"},
  {title:"Private Trip Ranu Kumbolo", place:"Semeru, Jawa Timur", price:"2.200.000", unit:"/grup", days:"2 Hari 1 Malam - 2-4 orang", rating:"4.9", image:"/trip-cards/ranu-kumbolo.jpg", tag:"3 pilihan paket", href:"/trips/private-trip-ranu-kumbolo"},
  {title:"Private Trip Tumpak Sewu", place:"Area Kota Malang", price:"400.000", unit:"/orang", days:"Private - min. 3 orang", rating:"4.8", image:"/trip-cards/tumpak-sewu.jpg", tag:"Free panorama kapas biru", href:"/trips/open-trip-tumpak-sewu"},
  {title:"Private Trip Pantai Malang", place:"Pantai Malang Selatan", price:"200.000", unit:"/orang", days:"Maks. 2 pantai", rating:"4.9", image:"/trip-cards/pantai-malang.webp", tag:"Bebas pilih pantai", href:"/trips/private-trip-pantai-malang"},
  {title:"Private Trip Bromo", place:"Meeting point Kota Malang", price:"1.800.000", unit:"/grup", days:"Private - Maks. 5 orang", rating:"4.9", image:"https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=85", tag:"3 pilihan paket", href:"/trips/private-trip-bromo"},
];

export default function Home() {
  return <main>
    <header className="absolute z-20 w-full py-5 text-white">
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5" aria-label="Aligatour - Beranda">
          <Image src="/brand/logo-aligatour.webp" alt="Logo Aligatour" width={58} height={58} priority className="h-14.5 w-14.5 object-contain" />
          <span className="display hidden text-xl font-extrabold tracking-tight sm:block">Aliga<span className="text-[#d8f05a]">tour.</span></span>
        </a>
        <nav className="desktop-nav flex items-center gap-8 text-sm font-semibold"><a href="#trip">Paket Trip</a><a href="#about">Tentang Kami</a><a href="#review">Cerita Traveler</a><a href="#contact">Kontak</a></nav>
        <a href="#trip" className="rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-bold backdrop-blur">Lihat Trip</a>
      </div>
    </header>

    <section className="relative min-h-190 overflow-hidden bg-[#123e37] text-white">
      <Image src="https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=2000&q=90" alt="Keindahan alam Indonesia" fill priority className="object-cover opacity-65" />
      <div className="absolute inset-0 bg-linear-to-r from-[#0d302b]/95 via-[#0d302b]/60 to-transparent" />
      <div className="container relative z-10 flex min-h-190 items-center pt-20">
        <div className="max-w-180">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide backdrop-blur"><Compass size={17} weight="fill" className="text-[#d8f05a]"/> CITY TOUR SPECIALIST MALANG-BATU</div>
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
        [MapPin, "City Tour Malang-Batu"],
        [Bus, "Shuttle Malang-Ranu Pani"],
        [Mountains, "Ranu Kumbolo"],
        [Mountains, "Bromo"],
        [Mountains, "Tumpak Sewu"],
        [ArrowRight, "Antar Kota"],
      ].map(([Icon, label]) => <span key={label as string} className="flex items-center gap-2 rounded-full bg-[#f0f3e9] px-4 py-2.5 text-sm font-bold text-[#153d37]"><Icon size={18} className="text-[#176b5b]"/>{label as string}</span>)}</div>
    </div></section>

    <section id="trip" className="py-28"><div className="container">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Trip Pilihan Aligatour</p><h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Ke mana cerita<br/>berikutnya dimulai?</h2></div><a href="#" className="font-bold text-[#176b5b]">Lihat semua perjalanan -&gt;</a></div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{trips.map((trip,index)=><article key={trip.title} className="trip-card flex h-full flex-col overflow-hidden rounded-3xl border border-[#dfe6df] bg-white">
        <div className="relative h-64 sm:h-72"><Image src={trip.image} alt={trip.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover"/><span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-extrabold text-[#176b5b]">{trip.tag}</span><span className="absolute bottom-4 left-4 rounded-full bg-[#d8f05a] px-3 py-1.5 text-xs font-extrabold text-[#153d37]">0{index+1}</span><span className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-[#153d37]/90 px-3 py-1.5 text-sm font-bold text-white"><Star weight="fill" className="text-[#d8f05a]"/> {trip.rating}</span></div>
        <div className="flex flex-1 flex-col p-6"><div className="flex items-center gap-1.5 text-sm text-gray-500"><MapPin/>{trip.place}</div><h3 className="mt-2 min-h-16 text-2xl font-extrabold">{trip.title}</h3><div className="mt-4 flex min-h-20 items-center justify-between gap-3 border-t border-gray-100 pt-4"><div><span className="text-xs text-gray-500">Mulai dari</span><p><b className="text-xl text-[#176b5b]">Rp{trip.price}</b><span className="text-xs text-gray-400"> {trip.unit}</span></p></div><span className="max-w-36.25 rounded-xl bg-[#f1f5e8] px-3 py-2 text-center text-xs font-bold leading-5">{trip.days}</span></div>{trip.href && <a href={trip.href} className="mt-auto flex items-center justify-center gap-2 rounded-full bg-[#153d37] px-5 py-3 text-sm font-bold text-white">Lihat detail paket <ArrowRight/></a>}</div>
      </article>)}</div>
    </div></section>

    <section id="about" className="bg-[#f0f0e5] py-24"><div className="container grid items-center gap-14 lg:grid-cols-2">
      <div className="relative"><CardFanCarousel cards={aboutGallery} /></div>
      <div><p className="eyebrow">Kenapa Aligatour?</p><h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Teman perjalanan<br/>yang bisa diandalkan.</h2><p className="mt-6 leading-7 text-[#60716c]">Kami percaya perjalanan terbaik lahir dari detail yang dipikirkan dengan baik - rute yang pas, jadwal yang nyaman, dan orang-orang yang peduli.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">{[[CheckCircle,"Trip terkurasi","Destinasi dan itinerary dipilih dengan cermat."],[UsersThree,"Tour leader lokal","Tim ramah yang mengenal setiap sudut tujuan."],[CalendarBlank,"Jadwal fleksibel","Pilihan tanggal beragam sesuai waktumu."],[WhatsappLogo,"Bantuan responsif","Ada yang siap membantu sebelum hingga pulang."]].map(([Icon,title,text])=><div key={title as string} className="flex gap-3"><Icon size={25} weight="fill" className="shrink-0 text-[#176b5b]"/><div><b>{title as string}</b><p className="mt-1 text-sm leading-6 text-[#6d7d78]">{text as string}</p></div></div>)}</div></div>
    </div></section>
    <section id="review" className="py-24"><div className="container">
      <div className="mb-10 text-center"><p className="eyebrow">Cerita Traveler</p><h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Mereka sudah merasakan.</h2></div>
      <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">{testimonials.map((t) => <article key={t.name} className="w-72 shrink-0 snap-start rounded-3xl border border-[#dfe6df] bg-white p-6 sm:w-auto sm:snap-align-none"><div className="flex gap-0.5 text-[#d8f05a]">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={16} weight="fill" />)}</div><blockquote className="mt-4 text-sm leading-6 text-[#404f4b]">&ldquo;{t.quote}&rdquo;</blockquote><div className="mt-5 border-t border-[#e8ece6] pt-4"><b className="block text-[#153d37]">{t.name}</b><span className="text-xs text-[#6d7d78]">{t.trip} · {t.date}</span></div></article>)}</div>
    </div></section>

    <section id="contact" className="container mb-8 overflow-hidden rounded-4xl bg-[#153d37] px-7 py-16 text-center text-white sm:px-16"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#d8f05a]">Siap berangkat?</p><h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">Cerita barumu menunggu.</h2><p className="mx-auto mt-4 max-w-xl text-white/70">Konsultasikan city tour, shuttle, trip alam, atau perjalanan antar kota bersama tim Aligatour.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="https://wa.me/628563532918" className="btn-primary"><WhatsappLogo size={21} weight="fill"/> Chat via WhatsApp</a><a href="https://www.instagram.com/aligatour.malang" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-bold"><InstagramLogo size={21} weight="fill"/> @aligatour.malang</a></div></section>
    <footer className="border-t border-[#e4e9e2] py-10"><div className="container"><div className="flex flex-wrap items-center justify-between gap-8"><a href="#" className="flex items-center gap-3"><Image src="/brand/logo-aligatour.webp" alt="Logo Aligatour" width={58} height={58} className="h-14.5 w-14.5 object-contain"/><span><b className="display block text-xl text-[#153d37]">Aligatour</b><small className="text-[#6d7d78]">Tour and Travel</small></span></a><div><b className="text-sm text-[#153d37]">Hubungi & ikuti kami</b><div className="mt-4 flex max-w-2xl flex-wrap gap-x-5 gap-y-3 text-sm"><a href="mailto:aligatourmalang@gmail.com" className="flex items-center gap-1.5 text-[#51635e] hover:text-[#176b5b]"><EnvelopeSimple size={19}/> aligatourmalang@gmail.com</a><a href="https://www.instagram.com/aligatour.malang" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[#51635e] hover:text-[#176b5b]"><InstagramLogo size={19}/> @aligatour.malang</a><a href="https://www.facebook.com/aligatourmalang" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[#51635e] hover:text-[#176b5b]"><FacebookLogo size={19}/> Aligatour Malang</a><a href="https://www.tiktok.com/@aligatourtravel?_r=1&_t=ZS-97yJLIhJJoL" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[#51635e] hover:text-[#176b5b]"><TiktokLogo size={19}/> @aligatourtravel</a></div></div></div><div className="mt-8 border-t border-[#e4e9e2] pt-5 text-center text-xs text-[#81908c] sm:text-left">(c) 2026 Aligatour - City Tour Specialist Malang-Batu</div></div></footer>
  </main>;
}
