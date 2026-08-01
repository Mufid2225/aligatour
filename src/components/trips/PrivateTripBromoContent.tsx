"use client";

import Image from "next/image";
import { CalendarCheck, Check, CheckCircle, MapPin, Mountains, UsersThree, WhatsappLogo, X } from "@phosphor-icons/react/dist/ssr";
import TripDetailHeader from "@/components/ui/trip-detail-header";
import { useT } from "@/lib/i18n";

const destinations = [
  { name: "Sunrise Point", image: "/destinations/private-bromo/sunrise-point.webp" },
  { name: "Lembah Widodaren", image: "/destinations/private-bromo/lembah-widodaren.webp" },
  { name: "Pura Luhur Poten", image: "/destinations/private-bromo/pura-luhur-poten.webp" },
  { name: "Kawah Bromo", image: "/destinations/private-bromo/kawah-bromo.webp" },
  { name: "Gunung Batok", image: "/destinations/private-bromo/gunung-batok.webp" },
  { name: "Pasir Berbisik", image: "/destinations/private-bromo/pasir-berbisik.webp" },
  { name: "Savana (Bukit Teletubbies)", image: "/destinations/private-bromo/savana.jpeg" },
];
const includes = ["7 destinasi wisata", "Transportasi pulang-pergi", "Jeep Bromo", "Tiket masuk Bromo", "Driver & BBM", "Biaya parkir", "Dokumentasi—all files"];
const features = ["Dokumentasi", "Welcome Snack & Drink", "Full Powerbank", "Free Wi-Fi", "Insta360 X4 Air / Ace Pro 2", "Gimbal", "Handwarmer", "Guest House", "Professional Massage (2 pax)"];
const facilityCards = [
  { title: "Snack & Drink", images: ["/facilities/snack-drink.webp"] },
  { title: "Full Powerbank", images: ["/facilities/powerbank.webp"] },
  { title: "Free Wi-Fi", images: ["/facilities/wifi.webp"] },
  { title: "Insta360 X4 Air / Insta360 Ace Pro 2", images: ["/facilities/insta360-x4.webp", "/facilities/insta360-ace.webp"] },
  { title: "Gimbal", images: ["/facilities/gimbal.webp"] },
  { title: "Handwarmer", images: ["/facilities/handwarmer.webp"] },
  { title: "All Files & Edited Photos", images: ["/facilities/dokumentasi.webp"] },
  { title: "Cinematic Video", images: ["/facilities/cinematic.webp"] },
];
const packages = [
  {name:"Ekonomis", price:"1.800K", caption:"Esensial untuk menjelajah Bromo", unavailable:["Free Wi-Fi", "Insta360 X4 Air / Ace Pro 2", "Gimbal", "Handwarmer", "Guest House", "Professional Massage (2 pax)"]},
  {name:"Premium", price:"2.300K", caption:"Pengalaman lengkap & nyaman", unavailable:["Guest House", "Professional Massage (2 pax)"], recommended:true},
  {name:"Luxury", price:"3.000K", caption:"Pengalaman Bromo paling lengkap", unavailable:[]},
];

export default function PrivateTripBromoContent() {
  const t = useT();
  return (
    <main className="min-h-screen bg-[#fbfcf8]">
      {/* Hero */}
      <section className="relative min-h-[570px] overflow-hidden bg-[#153d37] text-white">
        <Image src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=2000&q=90" alt="Pemandangan Gunung Bromo" fill priority className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f2b]/95 via-[#102f2b]/70 to-[#102f2b]/20" />
        <TripDetailHeader />
        <div className="container relative z-10 pb-20 pt-20">
          <span className="rounded-full bg-[#d8f05a] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#153d37]">{t("brHeroTag")}</span>
          <h1 className="mt-6 max-w-3xl text-5xl font-extrabold tracking-[-.04em] sm:text-7xl">{t("brHeroTitle")}</h1>
          <p className="mt-6 flex items-center gap-2 text-lg text-white/80"><MapPin weight="fill" /> {t("brHeroDesc")}</p>
          <div className="mt-8 flex flex-wrap items-end gap-6">
            <div>
              <small className="text-white/60">{t("brHeroPriceLabel")}</small>
              <p className="text-3xl font-extrabold text-[#d8f05a]">Rp1.800.000 <span className="text-sm text-white/70">{t("brHeroPriceUnit")}</span></p>
            </div>
            <a href="#packages" className="btn-primary">{t("choosePackage")} <CalendarCheck size={20} /></a>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="relative z-10 -mt-9">
        <div className="container">
          <div className="grid overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-[#153d3720] sm:grid-cols-3">
            {([
              [UsersThree, t("brQuickPeserta"), t("brQuickPesertaVal")],
              [CalendarCheck, t("brQuickDurasi"), t("brQuickDurasiVal")],
              [MapPin, t("brQuickRute"), t("brQuickRuteVal")],
            ] as [React.ComponentType<{ size?: number; weight?: string; className?: string }>, string, string][]).map(([Icon, label, value]) => (
              <div key={label} className="flex items-center gap-4 border-b border-[#e8ece6] p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <Icon size={27} weight="fill" className="shrink-0 text-[#176b5b]" />
                <div>
                  <small className="text-[#81908c]">{label}</small>
                  <b className="block">{value}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations + Includes */}
      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="eyebrow">{t("brDestEyebrow")}</p>
            <h2 className="mt-3 text-4xl font-extrabold">{t("brDestTitle")}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {destinations.map((item, index) => (
                <article key={item.name} className={`group relative overflow-hidden rounded-2xl ${index === 0 ? "sm:col-span-2 shadow-xl shadow-[#153d3718]" : "border border-[#dfe6df] shadow-sm"}`}>
                  <div className={`relative ${index === 0 ? "h-56 sm:h-64" : "h-44"}`}>
                    <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102f2b]/85 via-[#102f2b]/15 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#d8f05a] text-sm font-extrabold text-[#153d37]">{index + 1}</span>
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                      <h3 className="text-lg font-extrabold text-white drop-shadow">{item.name}</h3>
                      <Mountains size={24} weight="fill" className="shrink-0 text-[#d8f05a]" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="sticky top-28 flex flex-col rounded-[28px] bg-[#eef1e6] p-7 lg:h-fit">
            <div className="flex items-center gap-3">
              <Mountains size={30} weight="fill" className="text-[#176b5b]" />
              <h2 className="text-2xl font-extrabold">{t("brIncTitle")}</h2>
            </div>
            <div className="mt-6 space-y-4">
              {includes.map(item => (
                <div key={item} className="flex gap-3">
                  <CheckCircle size={21} weight="fill" className="shrink-0 text-[#176b5b]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white p-4"><UsersThree size={24} weight="fill" className="text-[#176b5b]" /><b className="mt-2 block text-sm">{t("brTile1t")}</b><span className="text-xs text-[#6d7d78]">{t("brTile1d")}</span></div>
              <div className="rounded-2xl bg-white p-4"><CalendarCheck size={24} weight="fill" className="text-[#176b5b]" /><b className="mt-2 block text-sm">{t("brTile2t")}</b><span className="text-xs text-[#6d7d78]">{t("brTile2d")}</span></div>
              <div className="rounded-2xl bg-white p-4"><MapPin size={24} weight="fill" className="text-[#176b5b]" /><b className="mt-2 block text-sm">{t("brTile3t")}</b><span className="text-xs text-[#6d7d78]">{t("brTile3d")}</span></div>
              <div className="rounded-2xl bg-white p-4"><WhatsappLogo size={24} weight="fill" className="text-[#176b5b]" /><b className="mt-2 block text-sm">{t("brTile4t")}</b><span className="text-xs text-[#6d7d78]">{t("brTile4d")}</span></div>
            </div>
            <a href="https://wa.me/628563532918?text=Halo%20Aligatour%2C%20saya%20ingin%20konsultasi%20Private%20Trip%20Bromo." className="btn-primary mt-6 justify-center">
              <WhatsappLogo size={20} weight="fill" /> {t("consultNow")}
            </a>
          </aside>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-[#153d37] py-20 text-white">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#d8f05a]">{t("brFacEyebrow")}</p>
            <h2 className="mt-3 text-4xl font-extrabold">{t("brFacTitle")}</h2>
            <p className="mt-4 text-white/65">{t("brFacDesc")}</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilityCards.map(facility => (
              <article key={facility.title} className="overflow-hidden rounded-xl border border-white/15 bg-white/5">
                <div className={`grid h-36 ${facility.images.length > 1 ? "grid-cols-2 gap-px bg-white/20" : "grid-cols-1"}`}>
                  {facility.images.map((src, index) => (
                    <div key={src} className="relative overflow-hidden bg-[#f3f1e8] p-3">
                      <Image src={src} alt={`${facility.title}${facility.images.length > 1 ? ` ${index + 1}` : ""}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 220px" className="object-contain p-3" />
                    </div>
                  ))}
                </div>
                <div className="flex min-h-16 items-center px-4 py-3">
                  <b className="text-sm leading-5">{facility.title}</b>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24">
        <div className="container">
          <div className="text-center">
            <p className="eyebrow">{t("brPkgEyebrow")}</p>
            <h2 className="mt-3 text-4xl font-extrabold">{t("brPkgTitle")}</h2>
            <p className="mt-3 text-[#6d7d78]">{t("brPkgDesc")}</p>
          </div>
          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {packages.map((pkg, i) => {
              const mealKeys = [t("brPkgMeal1"), t("brPkgMeal2"), t("brPkgMeal3")];
              const highKeys = [t("brPkgHigh1"), t("brPkgHigh2"), t("brPkgHigh3")];
              return (
              <article key={pkg.name} className={`relative flex flex-col rounded-[28px] border bg-white p-7 ${pkg.recommended ? "border-[#176b5b] shadow-xl shadow-[#153d3718] lg:-translate-y-3" : "border-[#dfe6df]"}`}>
                {pkg.recommended && <span className="absolute right-5 top-5 rounded-full bg-[#d8f05a] px-3 py-1 text-xs font-extrabold">{t("brPkgPopular")}</span>}
                <h3 className="text-2xl font-extrabold">{pkg.name}</h3>
                <p className="mt-1 text-sm text-[#6d7d78]">{pkg.caption}</p>
                <p className="mt-6 text-4xl font-extrabold text-[#176b5b]">Rp{pkg.price}<span className="text-sm font-medium text-[#6d7d78]">{t("perGroup")}</span></p>
                <div className="my-6 h-px bg-[#e7ebe5]" />
                <div className="rounded-xl bg-[#f0f3e9] p-4 text-sm">
                  <b className="block">{mealKeys[i]}</b>
                  <span className="mt-1 block text-[#60716c]">{highKeys[i]}</span>
                </div>
                <div className="mt-6 flex-1 space-y-3">
                  {features.map(feature => {
                    const unavailable = pkg.unavailable.includes(feature);
                    return <div key={feature} className={`flex gap-3 text-sm ${unavailable ? "text-gray-400" : "text-[#153d37]"}`}>{unavailable ? <X size={19} className="shrink-0" /> : <Check size={19} weight="bold" className="shrink-0 text-[#176b5b]" />}<span className={unavailable ? "line-through" : ""}>{feature}</span></div>;
                  })}
                </div>
                <a href={`https://wa.me/628563532918?text=${encodeURIComponent(`Halo Aligatour, saya tertarik dengan paket ${pkg.name} Private Trip Bromo.`)}`} className={pkg.recommended ? "btn-primary mt-8" : "btn-dark mt-8 justify-center"}>
                  <WhatsappLogo size={20} weight="fill" /> {t("reserve")} {pkg.name}
                </a>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mb-10 rounded-[30px] bg-[#d8f05a] p-9 sm:p-12">
        <div className="flex flex-wrap items-center justify-between gap-7">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <UsersThree size={24} weight="fill" /> {t("brCtaTag")}
            </div>
            <h2 className="mt-2 text-3xl font-extrabold">{t("brCtaTitle")}</h2>
            <p className="mt-2 text-[#38564f]">{t("brCtaDesc")}</p>
          </div>
          <a href="https://wa.me/628563532918?text=Halo%20Aligatour%2C%20saya%20ingin%20konsultasi%20Private%20Trip%20Bromo." className="btn-dark">
            <WhatsappLogo size={20} weight="fill" /> {t("consultFree")}
          </a>
        </div>
      </section>
    </main>
  );
}
