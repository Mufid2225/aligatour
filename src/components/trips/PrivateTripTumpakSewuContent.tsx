"use client";

import Image from "next/image";
import { CalendarCheck, Camera, CheckCircle, MapPin, UsersThree, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import TripDetailHeader from "@/components/ui/trip-detail-header";
import { withBasePath } from "@/lib/site-path";
import { useT } from "@/lib/i18n";

const destinations = [
  { name: "Panorama Tumpak Sewu", image: withBasePath("/destinations/tumpak-sewu/panoramic-tumpak-sewu.webp") },
  { name: "Goa Tetes", image: withBasePath("/destinations/tumpak-sewu/goa-tetes.webp") },
  { name: "Dasar Air Terjun Tumpak Sewu", image: withBasePath("/destinations/tumpak-sewu/dasar-air-terjun-tumpak-sewu.webp") },
  { name: "Telaga Biru", image: withBasePath("/destinations/tumpak-sewu/telaga-biru.webp") },
];
const includes = [
  "Transportasi PP area Malang - Tumpak Sewu",
  "Driver, BBM, & biaya parkir",
  "Tour guide",
  "Tiket masuk Tumpak Sewu",
  "Dokumentasi foto & video (all file)",
];
const facilities = [
  "Snack & drink",
  "Full power bank",
  "Free Wi-Fi",
  "Insta360 X4 Air / Insta360 Ace Pro 2",
  "Photographer",
  "Edited photos",
  "Cinematic video",
];

export default function PrivateTripTumpakSewuContent() {
  const t = useT();
  return (
    <main className="min-h-screen bg-[#fbfcf8]">
      <section className="relative min-h-142.5 overflow-hidden bg-[#153d37] text-white">
        <Image src={withBasePath("/trip-cards/tumpak-sewu.jpg")} alt="Air Terjun Tumpak Sewu" fill priority sizes="100vw" className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-linear-to-r from-[#102f2b]/95 via-[#102f2b]/70 to-[#102f2b]/20" />
        <TripDetailHeader />
        <div className="container relative z-10 pb-20 pt-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#d8f05a] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#153d37]">
            <CalendarCheck weight="fill" /> {t("tsHeroTag")}
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-[-.04em] sm:text-7xl">
            Tumpak Sewu,<br />
            <span className="text-[#d8f05a]">{t("tsHeroTitle2")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{t("tsHeroDesc")}</p>
          <div className="mt-8 flex flex-wrap items-end gap-6">
            <div>
              <small className="text-white/60">{t("startFrom")}</small>
              <p className="text-3xl font-extrabold text-[#d8f05a]">
                Rp400.000 <span className="text-sm text-white/70">{t("perPerson")}</span>
              </p>
              <span className="text-sm text-white/70">{t("tsHeroMin")}</span>
            </div>
            <a href="#booking" className="btn-primary">
              {t("consultTrip")} <WhatsappLogo size={20} weight="fill" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-7">
        <div className="container">
          <div className="grid overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-[#153d3720] sm:grid-cols-3">
            {([
              [MapPin, t("tsQuickMeeting"), t("tsQuickMeetingVal")],
              [CalendarCheck, t("tsQuickDepart"), t("tsQuickDepartVal")],
              [UsersThree, t("tsQuickMin"), t("tsQuickMinVal")],
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

      <section className="py-24">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">{t("tsDestEyebrow")}</p>
              <h2 className="mt-3 text-4xl font-extrabold">{t("tsDestTitle")}</h2>
              <p className="mt-4 leading-7 text-[#6d7d78]">{t("tsDestDesc")}</p>
            </div>
            <div className="rounded-2xl bg-[#eef7f4] px-5 py-4">
              <div className="flex items-center gap-3">
                <MapPin size={27} weight="fill" className="text-[#176b5b]" />
                <div>
                  <b className="block text-sm">Area Kota Malang</b>
                  <span className="text-xs text-[#6d7d78]">{t("tsDestMeeting")}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((item, index) => (
              <article key={item.name} className="group overflow-hidden rounded-[22px] border border-[#dfe6df] bg-white">
                <div className="relative h-52 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#d8f05a] text-sm font-extrabold text-[#153d37]">{index + 1}</span>
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#81908c]">{t("tsDestLabel")}</span>
                    <h3 className="mt-1 text-lg font-extrabold">{item.name}</h3>
                  </div>
                  <MapPin size={25} weight="fill" className="shrink-0 text-[#176b5b]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#153d37] py-20 text-white">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="rounded-[26px] border border-white/12 bg-white/5 p-7">
            <h2 className="text-2xl font-extrabold">{t("tsIncTitle")}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {includes.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle size={21} weight="fill" className="shrink-0 text-[#d8f05a]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[26px] bg-white p-7 text-[#153d37]">
            <h2 className="text-2xl font-extrabold">{t("tsFacEyebrow")}</h2>
            <p className="mt-2 text-sm text-[#6d7d78]">{t("tsFacDesc")}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {facilities.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle size={21} weight="fill" className="shrink-0 text-[#176b5b]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-2xl bg-[#eef7f4] p-4 text-sm text-[#38564f]">
              <b>{t("tsBonusTitle")}</b>
              <span className="mt-1 block">{t("tsBonusDesc")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <p className="eyebrow">{t("tsWhyEyebrow")}</p>
            <h2 className="mt-3 text-4xl font-extrabold">{t("tsWhyTitle")}</h2>
            <p className="mt-5 max-w-xl leading-7 text-[#6d7d78]">{t("tsWhyDesc")}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#eef1e6] p-6">
              <Camera size={27} weight="fill" className="text-[#176b5b]" />
              <b className="mt-4 block">{t("tsWhy1t")}</b>
              <p className="mt-2 text-sm leading-6 text-[#6d7d78]">{t("tsWhy1d")}</p>
            </div>
            <div className="rounded-2xl bg-[#eef1e6] p-6">
              <UsersThree size={27} weight="fill" className="text-[#176b5b]" />
              <b className="mt-4 block">{t("tsWhy2t")}</b>
              <p className="mt-2 text-sm leading-6 text-[#6d7d78]">{t("tsWhy2d")}</p>
            </div>
            <div className="rounded-2xl bg-[#eef1e6] p-6">
              <MapPin size={27} weight="fill" className="text-[#176b5b]" />
              <b className="mt-4 block">{t("tsWhy3t")}</b>
              <p className="mt-2 text-sm leading-6 text-[#6d7d78]">{t("tsWhy3d")}</p>
            </div>
            <div className="rounded-2xl bg-[#eef1e6] p-6">
              <CalendarCheck size={27} weight="fill" className="text-[#176b5b]" />
              <b className="mt-4 block">{t("tsWhy4t")}</b>
              <p className="mt-2 text-sm leading-6 text-[#6d7d78]">{t("tsWhy4d")}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="container mb-10 rounded-[30px] bg-[#d8f05a] p-9 sm:p-12">
        <div className="flex flex-wrap items-center justify-between gap-7">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <Camera size={23} weight="fill" /> {t("tsCtaTag")}
            </div>
            <h2 className="mt-2 text-3xl font-extrabold">{t("tsCtaTitle")}</h2>
            <p className="mt-2 text-[#38564f]">{t("tsCtaDesc")}</p>
          </div>
          <a href="https://wa.me/628563532918?text=Halo%20Aligatour%2C%20saya%20ingin%20konsultasi%20Private%20Trip%20Tumpak%20Sewu%20mulai%20Rp400.000%20untuk%20min.%203%20orang." className="btn-dark">
            <WhatsappLogo size={20} weight="fill" /> {t("consultNow")}
          </a>
        </div>
      </section>
    </main>
  );
}