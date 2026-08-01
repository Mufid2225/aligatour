"use client";

import Image from "next/image";
import { Camera, Car, CheckCircle, MapPin, Sparkle, UsersThree, WhatsappLogo, X } from "@phosphor-icons/react/dist/ssr";
import TripDetailHeader from "@/components/ui/trip-detail-header";
import { useT } from "@/lib/i18n";

const vehicles = [
  { unit: "Ignis, Agya/Ayla", min: 1, max: 4, price: "Rp500.000" },
  { unit: "Sigra/Calya", min: 1, max: 6, price: "Rp550.000" },
  { unit: "Avanza, Xenia", min: 1, max: 7, price: "Rp600.000" },
  { unit: "All New Avanza", min: 1, max: 7, price: "Rp650.000" },
  { unit: "Yaris New", min: 1, max: 4, price: "Rp650.000" },
  { unit: "Innova Reborn, Fortuner", min: 1, max: 7, price: "Rp850.000" },
  { unit: "Innova Venturer", min: 1, max: 5, price: "Rp900.000" },
  { unit: "HiAce Commuter", min: 1, max: 15, price: "Rp1.350.000" },
  { unit: "HiAce Premio", min: 1, max: 12, price: "Rp1.450.000" },
  { unit: "HiAce Luxury", min: 1, max: 7, price: "Rp2.500.000" },
  { unit: "Alphard", min: 1, max: 5, price: "DM for Price" },
];

const facilities = [
  { title: "Welcome Snack & Drink", image: "/facilities/snack-drink.webp" },
  { title: "Full Powerbank", image: "/facilities/powerbank.webp" },
  { title: "Free Wi-Fi", image: "/facilities/wifi.webp" },
  { title: "Photographer", note: "+Rp350.000", image: "/facilities/dokumentasi.webp" },
];

export default function CityTourContent() {
  const t = useT();
  return (
    <main className="min-h-screen bg-[#fbfcf8]">
      {/* ── Hero ── */}
      <section className="relative min-h-[590px] overflow-hidden bg-[#153d37] text-white">
        <Image
          src="/trip-cards/malang-batu-city-tour.webp"
          alt="Destinasi Malang Batu City Tour"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f2b]/95 via-[#102f2b]/70 to-[#102f2b]/25" />
        <TripDetailHeader />
        <div className="container relative z-10 pb-20 pt-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#d8f05a] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#153d37]">
            <Sparkle weight="fill" /> {t("ctHeroTag")}
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-[-.04em] sm:text-7xl">
            Malang–Batu<br />City Tour
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            {t("ctHeroDesc")}
          </p>
          <div className="mt-8 flex flex-wrap items-end gap-7">
            <div>
              <small className="text-white/60">{t("ctHeroPriceLabel")}</small>
              <p className="text-3xl font-extrabold text-[#d8f05a]">Rp500.000</p>
            </div>
            <a href="#pricelist" className="btn-primary">
              {t("ctPickCar")} <Car size={20} weight="fill" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Quick Info ── */}
      <section className="relative z-10 -mt-9">
        <div className="container">
          <div className="grid overflow-hidden rounded-2xl bg-white shadow-2xl shadow-[#153d3720] sm:grid-cols-3">
            {([
              [MapPin, t("ctQuickPickup"), t("ctQuickPickupVal")],
              [MapPin, t("ctQuickDrop"), t("ctQuickDropVal")],
              [Car, t("ctQuickDuration"), t("ctQuickDurationVal")],
            ] as [React.ComponentType<{ size?: number; weight?: string; className?: string }>, string, string][]).map(([Icon, label, value]) => (
              <div
                key={label}
                className="flex items-center gap-4 border-b border-[#e8ece6] p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
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

      {/* ── Facilities ── */}
      <section className="py-20">
        <div className="container grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">{t("ctFacEyebrow")}</p>
            <h2 className="mt-3 text-4xl font-extrabold">{t("ctFacTitle")}</h2>
            <p className="mt-5 leading-7 text-[#6d7d78]">{t("ctFacDesc")}</p>
            <div className="mt-7 rounded-2xl bg-[#eef1e6] p-5 text-sm text-[#53645f]">
              <Camera size={23} weight="fill" className="mb-2 text-[#176b5b]" />
              <b className="block text-[#153d37]">{t("ctFacDocNeed")}</b>
              {t("ctFacDocAdd")}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {facilities.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-[#dfe6df] bg-white"
              >
                <div className="relative h-32 bg-[#f3f1e8]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 250px"
                    className="object-contain p-3"
                  />
                </div>
                <div className="min-h-20 p-4">
                  <b className="text-sm">{item.title}</b>
                  {item.note && (
                    <span className="mt-1 block text-xs font-bold text-[#176b5b]">
                      {item.note}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricelist ── */}
      <section id="pricelist" className="bg-[#f0f0e5] py-24">
        <div className="container">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow">{t("ctPriceEyebrow")}</p>
              <h2 className="mt-3 text-4xl font-extrabold">{t("ctPriceTitle")}</h2>
              <p className="mt-3 text-[#6d7d78]">{t("ctPriceDesc")}</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold">
              <UsersThree size={21} className="text-[#176b5b]" /> {t("ctPriceSeatRange")}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#d9dfd6] bg-white">
            {/* Header row */}
            <div className="hidden grid-cols-[1.4fr_.7fr_.7fr_auto] gap-4 bg-[#153d37] px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-white md:grid">
              <span>{t("ctColUnit")}</span>
              <span>{t("ctColCapacity")}</span>
              <span>{t("ctColPrice")}</span>
              <span></span>
            </div>
            {vehicles.map((vehicle, index) => (
              <div
                key={vehicle.unit}
                className={`grid items-center gap-3 px-5 py-5 md:grid-cols-[1.4fr_.7fr_.7fr_auto] md:gap-4 md:px-6 ${index !== vehicles.length - 1 ? "border-b border-[#e6eae4]" : ""}`}
              >
                <div>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#81908c] md:hidden">
                    {t("ctColUnit")}
                  </span>
                  <b className="text-[#153d37]">{vehicle.unit}</b>
                </div>
                <div>
                  <span className="mr-2 text-xs font-bold uppercase tracking-wider text-[#81908c] md:hidden">
                    {t("ctColCapacity")}:
                  </span>
                  <span className="text-sm text-[#5e706a]">{vehicle.min}–{vehicle.max} {t("seats")}</span>
                </div>
                <div>
                  <span className="mr-2 text-xs font-bold uppercase tracking-wider text-[#81908c] md:hidden">
                    {t("ctColPrice")}:
                  </span>
                  <b className="text-[#176b5b]">{vehicle.price}</b>
                </div>
                <a
                  href={`https://wa.me/628563532918?text=${encodeURIComponent(`Halo Aligatour, saya tertarik City Tour Malang–Batu menggunakan ${vehicle.unit} (${vehicle.min}–${vehicle.max} ${t("seats")}).`)}`}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#153d37] px-4 py-2.5 text-xs font-bold text-white md:mt-0"
                >
                  <WhatsappLogo size={17} weight="fill" /> {t("pickUnit")}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-[#73827e]">
            {t("ctPriceNote")}
          </p>
        </div>
      </section>

      {/* ── Include / Exclude ── */}
      <section className="py-20">
        <div className="container grid gap-6 md:grid-cols-2">
          <div className="rounded-[26px] border border-[#dfe6df] bg-white p-7">
            <h2 className="text-2xl font-extrabold">{t("include")}</h2>
            <div className="mt-6 space-y-4">
              {[t("cityInclude1"), t("cityInclude2"), t("cityInclude3")].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={22} weight="fill" className="text-[#176b5b]" />
                  <b>{item}</b>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[26px] border border-[#eadfd8] bg-[#fffaf5] p-7">
            <h2 className="text-2xl font-extrabold">{t("exclude")}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[t("cityExclude1"), t("cityExclude2"), t("cityExclude3"), t("cityExclude4")].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <X size={21} weight="bold" className="text-[#b96a4c]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container mb-10 rounded-[30px] bg-[#d8f05a] p-9 sm:p-12">
        <div className="flex flex-wrap items-center justify-between gap-7">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <MapPin size={23} weight="fill" /> {t("ctCtaTag")}
            </div>
            <h2 className="mt-2 text-3xl font-extrabold">{t("ctCtaTitle")}</h2>
            <p className="mt-2 text-[#38564f]">{t("ctCtaDesc")}</p>
          </div>
          <a
            href="https://wa.me/628563532918?text=Halo%20Aligatour%2C%20saya%20ingin%20konsultasi%20Malang-Batu%20City%20Tour."
            className="btn-dark"
          >
            <WhatsappLogo size={20} weight="fill" /> {t("ctCtaBtn")}
          </a>
        </div>
      </section>
    </main>
  );
}
