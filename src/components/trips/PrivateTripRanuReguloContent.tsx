"use client";

import Image from "next/image";
import { CheckCircle, CookingPot, MapPin, Mountains, UsersThree, WhatsappLogo, X } from "@phosphor-icons/react/dist/ssr";
import TripDetailHeader from "@/components/ui/trip-detail-header";
import { withBasePath } from "@/lib/site-path";
import { useT } from "@/lib/i18n";

const prices: [number, string][] = [[4, "400.000"], [5, "380.000"], [6, "360.000"], [7, "340.000"], [8, "320.000"]];

const facilities = [
  { title: "Full Powerbank", image: withBasePath("/facilities/powerbank.webp") },
  { title: "Free Wi-Fi", image: withBasePath("/facilities/wifi.webp") },
  { title: "Insta360 X4 Air", note: "Limited", image: withBasePath("/facilities/insta360-x4.webp") },
  { title: "Gimbal", note: "Limited", image: withBasePath("/facilities/gimbal.webp") },
];

const includeGroups = [
  { title: "Transportasi & Perizinan", icon: MapPin, items: ["Transportasi Malang–Ranu Regulo PP", "Driver & BBM", "Tiket/SIMAKSI"] },
  { title: "Tim Perjalanan", icon: UsersThree, items: ["Tour Leader", "Dokumentasi Team"] },
  { title: "Perlengkapan Camping", icon: Mountains, items: ["Tenda (3–4 pax)", "Meja & Kursi Lipat", "Alat Masak & Makan", "Hand Warmer"] },
  { title: "Konsumsi & Perlengkapan", icon: CookingPot, items: ["Welcome Snack & Drink", "Makan 2×", "Buah Segar", "P3K", "Free Tripod & Gimbal"] },
];

const excludes = ["Transportasi dari kota asal ke meeting point", "Sleeping bag", "Keperluan pribadi", "Hal yang tidak disebutkan dalam include"];

export default function PrivateTripRanuReguloContent() {
  const t = useT();
  return (
    <main className="min-h-screen bg-[#fbfcf8]">
      {/* Hero */}
      <section className="relative min-h-[620px] overflow-hidden bg-[#153d37] text-white">
        <Image src={withBasePath("/trip-cards/ranu-regulo1.webp")} alt="Danau Ranu Regulo" fill priority sizes="100vw" className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f2b]/95 via-[#102f2b]/68 to-[#102f2b]/20" />
        <TripDetailHeader />
        <div className="container relative z-10 pb-20 pt-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#d8f05a] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#153d37]">
            <Mountains weight="fill" /> {t("rrHeroTag")}
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-[-.04em] sm:text-7xl">
            Ranu Regulo,<br />
            <span className="text-[#d8f05a]">{t("rrHeroTitle2")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{t("rrHeroDesc")}</p>
          <div className="mt-8 flex flex-wrap items-end gap-7">
            <div>
              <small className="text-white/60">{t("rrHeroPriceLabel")}</small>
              <p className="text-3xl font-extrabold text-[#d8f05a]">Rp400.000</p>
            </div>
            <a href="#pricelist" className="btn-primary">
              {t("choosePackage")} <UsersThree size={20} weight="fill" />
            </a>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="relative z-10 -mt-9">
        <div className="container">
          <div className="grid overflow-hidden rounded-2xl bg-white shadow-2xl shadow-[#153d3720] sm:grid-cols-3">
            {([
              [MapPin, t("rrQuickMeeting"), t("rrQuickMeetingVal")],
              [Mountains, t("rrQuickDurasi"), t("rrQuickDurasiVal")],
              [UsersThree, t("rrQuickPeserta"), t("rrQuickPesertaVal")],
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

      {/* Facilities */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">{t("rrFacEyebrow")}</p>
            <h2 className="mt-3 text-4xl font-extrabold">{t("rrFacTitle")}</h2>
            <p className="mt-4 text-[#6d7d78]">{t("rrFacDesc")}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-xl border border-[#dfe6df] bg-white">
                <div className="relative h-36 bg-[#f3f1e8]">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 50vw, 200px" className="object-contain p-3" />
                </div>
                <div className="min-h-20 p-4">
                  <b className="text-sm">{item.title}</b>
                  {item.note && <span className="mt-1 block text-xs font-bold text-[#176b5b]">{item.note}</span>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Includes & Excludes */}
      <section className="bg-[#153d37] py-24 text-white">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#d8f05a]">{t("rrIncEyebrow")}</p>
            <h2 className="mt-3 text-4xl font-extrabold">{t("rrIncTitle")}</h2>
            <p className="mt-4 leading-7 text-white/65">{t("rrIncDesc")}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {includeGroups.map((group) => (
              <article key={group.title} className="rounded-[24px] border border-white/12 bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d8f05a] text-[#153d37]">
                    <group.icon size={25} weight="fill" />
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold">{group.title}</h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex gap-2.5 text-sm leading-6 text-white/80">
                      <CheckCircle size={19} weight="fill" className="mt-0.5 shrink-0 text-[#d8f05a]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-[24px] bg-white p-6 text-[#153d37] sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl font-extrabold">{t("exclude")}</h2>
                <p className="mt-1 text-sm text-[#6d7d78]">{t("kbExcDesc")}</p>
              </div>
              <span className="rounded-full bg-[#fff1eb] px-3 py-1.5 text-xs font-extrabold text-[#a85438]">{t("kbExcPersonal")}</span>
            </div>
            <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              {excludes.map((item) => (
                <div key={item} className="flex gap-2.5 text-sm">
                  <X size={19} weight="bold" className="shrink-0 text-[#b96a4c]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricelist" className="bg-[#f0f0e5] py-24">
        <div className="container">
          <div className="text-center">
            <p className="eyebrow">{t("rrPriceEyebrow")}</p>
            <h2 className="mt-3 text-4xl font-extrabold">{t("rrPriceTitle")}</h2>
            <p className="mt-3 text-[#6d7d78]">{t("rrPriceDesc")}</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {prices.map(([people, price]) => (
              <a
                key={people}
                href={`https://wa.me/628563532918?text=${encodeURIComponent(`Halo Aligatour, saya tertarik Private Trip Ranu Regulo untuk ${people} orang.`)}`}
                aria-label={`Reservasi Private Trip Ranu Regulo untuk ${people} orang seharga Rp${price} per orang`}
                className="group overflow-hidden rounded-2xl border-2 border-[#d7ded4] bg-white transition active:scale-[.98] hover:-translate-y-1 hover:border-[#176b5b]"
              >
                <div className="p-6 pb-4 sm:p-7 sm:pb-5">
                  <div className="flex items-center gap-2.5 text-base font-bold text-[#51635e]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef1e6]">
                      <UsersThree size={20} weight="fill" />
                    </span>
                    {people} {t("people")}
                  </div>
                  <b className="mt-4 block text-2xl text-[#176b5b] sm:text-3xl">Rp{price}</b>
                  <span className="mt-1 block text-sm text-[#81908c]">{t("rrPricePerOrang")}</span>
                </div>
                <div className="flex items-center justify-between bg-[#153d37] px-5 py-4 text-sm font-extrabold text-white sm:px-6">
                  <span className="flex items-center gap-1.5">
                    <WhatsappLogo size={19} weight="fill" /> {t("choosePackage")}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-[#73827e]">{t("rrPriceNote")}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="container my-10 rounded-[30px] bg-[#d8f05a] p-9 sm:p-12">
        <div className="flex flex-wrap items-center justify-between gap-7">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <Mountains size={23} weight="fill" /> {t("rrCtaTag")}
            </div>
            <h2 className="mt-2 text-3xl font-extrabold">{t("rrCtaTitle")}</h2>
            <p className="mt-2 text-[#38564f]">{t("rrCtaDesc")}</p>
          </div>
          <a href="https://wa.me/628563532918?text=Halo%20Aligatour%2C%20saya%20ingin%20konsultasi%20Private%20Trip%20Ranu%20Regulo." className="btn-dark">
            <WhatsappLogo size={20} weight="fill" /> {t("consultTrip")}
          </a>
        </div>
      </section>
    </main>
  );
}
