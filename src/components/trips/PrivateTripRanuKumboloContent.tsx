"use client";

import Image from "next/image";
import {
  Car,
  Check,
  CheckCircle,
  CookingPot,
  IdentificationCard,
  MapPin,
  Mountains,
  ShieldCheck,
  Tent,
  UsersThree,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react/dist/ssr";
import TripDetailHeader from "@/components/ui/trip-detail-header";
import { withBasePath } from "@/lib/site-path";
import { useT } from "@/lib/i18n";

const includeGroups = [
  {
    titleKey: "kbIncGrp1Title" as const,
    descKey: "kbIncGrp1Desc" as const,
    icon: Car,
    items: [
      "Transportasi Malang–Ranu Pane PP",
      "Driver, BBM, dan parkir",
      "Surat Izin Masuk Kawasan (SIMAKSI)",
      "Asuransi TNBTS",
    ],
  },
  {
    titleKey: "kbIncGrp2Title" as const,
    descKey: "kbIncGrp2Desc" as const,
    icon: UsersThree,
    items: [
      "Tour Leader",
      "Pendamping pendakian",
      "Porter tim untuk alat dan logistik",
      "Dokumentasi",
    ],
  },
  {
    titleKey: "kbIncGrp3Title" as const,
    descKey: "kbIncGrp3Desc" as const,
    icon: Tent,
    items: [
      "Tenda kapasitas 4 orang, diisi 3 orang",
      "Matras lipat untuk 2–4 orang",
      "Kursi dan meja lipat",
      "Alat masak kelompok",
      "P3K standar",
      "Handwarmer",
    ],
  },
  {
    titleKey: "kbIncGrp4Title" as const,
    descKey: "kbIncGrp4Desc" as const,
    icon: CookingPot,
    items: [
      "Makan sebelum pendakian 1 kali",
      "Makan selama pendakian 3 kali",
      "Makan setelah pendakian 1 kali",
      "Welcome Snack & Drink",
      "Fresh Fruits",
    ],
  },
];

const excludes = [
  "Transportasi menuju meeting point",
  "Surat sehat",
  "Sleeping bag",
  "Obat pribadi",
  "Camilan pribadi",
  "Porter pribadi",
  "Perlengkapan camping pribadi",
  "Hal yang tidak disebutkan dalam include",
];

const facilities = [
  { title: "Full Powerbank", image: withBasePath("/facilities/powerbank.webp") },
  { title: "Free Wi-Fi", image: withBasePath("/facilities/wifi.webp") },
  { title: "Insta360 X4 Air", noteKey: "limited" as const, image: withBasePath("/facilities/insta360-x4.webp") },
  { title: "Insta360 Ace Pro 2", noteKey: "limited" as const, image: withBasePath("/facilities/insta360-ace.webp") },
  { title: "Gimbal", noteKey: "limited" as const, image: withBasePath("/facilities/gimbal.webp") },
];

const packageFeatures = [
  "Menginap 1 malam",
  "Handwarmer",
  "Pijat setelah trip",
  "Sleeping bag",
  "Surat sehat",
  "Camilan pribadi",
  "Porter pribadi",
  "Fotografer pribadi",
  "Gratis trip promo",
];

export default function PrivateTripRanuKumboloContent() {
  const t = useT();
  const packageDefs = [
    { name: "Ekonomis", price: "2.200.000", mealKey: "kbPkgMeal1" as const, highlightKey: "kbPkgHigh1" as const, unavailable: ["Pijat setelah trip", "Sleeping bag", "Surat sehat", "Camilan pribadi", "Porter pribadi", "Fotografer pribadi", "Gratis trip promo"] },
    { name: "Exclusive", price: "2.500.000", mealKey: "kbPkgMeal2" as const, highlightKey: "kbPkgHigh2" as const, unavailable: ["Porter pribadi", "Fotografer pribadi", "Gratis trip promo"], recommended: true },
    { name: "Luxury", price: "2.600.000", mealKey: "kbPkgMeal3" as const, highlightKey: "kbPkgHigh3" as const, unavailable: [] as string[] },
  ];

  const packages = packageDefs.map((pkg) => ({
    ...pkg,
    meal: t(pkg.mealKey),
    highlight: t(pkg.highlightKey),
  }));
  return (
    <main className="min-h-screen bg-[#fbfcf8]">
      {/* Hero */}
      <section className="relative min-h-[620px] overflow-hidden bg-[#153d37] text-white">
        <Image
          src={withBasePath("/trip-cards/ranu-kumbolo.jpg")}
          alt="Danau Ranu Kumbolo"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f2b]/95 via-[#102f2b]/68 to-[#102f2b]/20" />
        <TripDetailHeader />
        <div className="container relative z-10 pb-20 pt-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#d8f05a] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#153d37]">
            <Mountains weight="fill" /> {t("kbHeroTag")}
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-[-.04em] sm:text-7xl">
            Ranu Kumbolo,<br />
            <span className="text-[#d8f05a]">{t("kbHeroTitle2")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{t("kbHeroDesc")}</p>
          <div className="mt-8 flex flex-wrap items-end gap-7">
            <div>
              <small className="text-white/60">{t("kbHeroPriceLabel")}</small>
              <p className="text-3xl font-extrabold text-[#d8f05a]">Rp2.200.000</p>
            </div>
            <a href="#packages" className="btn-primary">
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
              [UsersThree, t("kbQuickPeserta"), t("kbQuickPesertaVal")],
              [Mountains, t("kbQuickDurasi"), t("kbQuickDurasiVal")],
              [MapPin, t("kbQuickRute"), t("kbQuickRuteVal")],
            ] as [React.ComponentType<{ size?: number; weight?: string; className?: string }>, string, string][]).map(
              ([Icon, label, value]) => (
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
              )
            )}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">{t("kbFacEyebrow")}</p>
            <h2 className="mt-3 text-4xl font-extrabold">{t("kbFacTitle")}</h2>
            <p className="mt-4 text-[#6d7d78]">{t("kbFacDesc")}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {facilities.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-[#dfe6df] bg-white"
              >
                <div className="relative h-36 bg-[#f3f1e8]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 200px"
                    className="object-contain p-3"
                  />
                </div>
                <div className="min-h-20 p-4">
                  <b className="text-sm">{item.title}</b>
                  {item.noteKey && (
                    <span className="mt-1 block text-xs font-bold text-[#176b5b]">
                      {t(item.noteKey)}
                    </span>
                  )}
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
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#d8f05a]">
              {t("kbIncEyebrow")}
            </p>
            <h2 className="mt-3 text-4xl font-extrabold">{t("kbIncTitle")}</h2>
            <p className="mt-4 leading-7 text-white/65">{t("kbIncDesc")}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {includeGroups.map((group) => (
              <article
                key={t(group.titleKey)}
                className="rounded-[24px] border border-white/12 bg-white/5 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d8f05a] text-[#153d37]">
                    <group.icon size={25} weight="fill" />
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold">{t(group.titleKey)}</h3>
                    <p className="mt-1 text-sm text-white/50">{t(group.descKey)}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex gap-2.5 text-sm leading-6 text-white/80"
                    >
                      <CheckCircle
                        size={19}
                        weight="fill"
                        className="mt-0.5 shrink-0 text-[#d8f05a]"
                      />
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
                <h2 className="text-2xl font-extrabold">{t("kbExcTitle")}</h2>
                <p className="mt-1 text-sm text-[#6d7d78]">{t("kbExcDesc")}</p>
              </div>
              <span className="rounded-full bg-[#fff1eb] px-3 py-1.5 text-xs font-extrabold text-[#a85438]">
                {t("kbExcPersonal")}
              </span>
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

      {/* Packages */}
      <section id="packages" className="py-24">
        <div className="container">
          <div className="text-center">
            <p className="eyebrow">{t("kbPkgEyebrow")}</p>
            <h2 className="mt-3 text-4xl font-extrabold">{t("kbPkgTitle")}</h2>
            <p className="mt-3 text-[#6d7d78]">{t("kbPkgDesc")}</p>
          </div>
          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative flex flex-col rounded-[28px] border bg-white p-7 ${
                  pkg.recommended
                    ? "border-[#176b5b] shadow-xl shadow-[#153d3718] lg:-translate-y-3"
                    : "border-[#dfe6df]"
                }`}
              >
                {pkg.recommended && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#d8f05a] px-3 py-1 text-xs font-extrabold">
                    {t("kbPkgPopular")}
                  </span>
                )}
                <h3 className="text-2xl font-extrabold">{pkg.name}</h3>
                <p className="mt-1 text-sm text-[#6d7d78]">{t("kbPkgDurasi")}</p>
                <p className="mt-6 text-4xl font-extrabold text-[#176b5b]">
                  Rp{pkg.price}
                  <span className="text-sm font-medium text-[#6d7d78]">
                    {t("perGroup")}
                  </span>
                </p>
                <div className="my-6 h-px bg-[#e7ebe5]" />
                <div className="rounded-xl bg-[#f0f3e9] p-4 text-sm">
                  <b className="block">{pkg.meal}</b>
                  <span className="mt-1 block text-[#60716c]">{pkg.highlight}</span>
                </div>
                <div className="mt-6 flex-1 space-y-3">
                  {packageFeatures.map((feature) => {
                    const unavailable = pkg.unavailable.includes(feature);
                    return (
                      <div
                        key={feature}
                        className={`flex gap-3 text-sm ${unavailable ? "text-gray-400" : "text-[#153d37]"}`}
                      >
                        {unavailable ? (
                          <X size={19} className="shrink-0" />
                        ) : (
                          <Check size={19} weight="bold" className="shrink-0 text-[#176b5b]" />
                        )}
                        <span className={unavailable ? "line-through" : ""}>{feature}</span>
                      </div>
                    );
                  })}
                </div>
                <a
                  href={`https://wa.me/628563532918?text=${encodeURIComponent(
                    `Halo Aligatour, saya tertarik paket ${pkg.name} Private Trip Ranu Kumbolo untuk grup 2–4 orang.`
                  )}`}
                  className={
                    pkg.recommended ? "btn-primary mt-8" : "btn-dark mt-8 justify-center"
                  }
                >
                  <WhatsappLogo size={20} weight="fill" /> {t("reserve")} {pkg.name}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Booking terms */}
      <section className="bg-[#f0f0e5] py-20">
        <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">{t("kbBookEyebrow")}</p>
            <h2 className="mt-3 text-4xl font-extrabold">{t("kbBookTitle")}</h2>
            <p className="mt-4 leading-7 text-[#6d7d78]">{t("kbBookDesc")}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {([
              [IdentificationCard, t("kbBook1t"), t("kbBook1d")],
              [ShieldCheck, t("kbBook2t"), t("kbBook2d")],
              [UsersThree, t("kbBook3t"), t("kbBook3d")],
              [CheckCircle, t("kbBook4t"), t("kbBook4d")],
            ] as [React.ComponentType<{ size?: number; weight?: string; className?: string }>, string, string][]).map(
              ([Icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#dfe6df] bg-white p-5"
                >
                  <Icon size={25} weight="fill" className="text-[#176b5b]" />
                  <b className="mt-3 block">{title}</b>
                  <p className="mt-2 text-sm leading-6 text-[#6d7d78]">{text}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container my-10 rounded-[30px] bg-[#d8f05a] p-9 sm:p-12">
        <div className="flex flex-wrap items-center justify-between gap-7">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <Mountains size={23} weight="fill" /> {t("kbCtaTag")}
            </div>
            <h2 className="mt-2 text-3xl font-extrabold">{t("kbCtaTitle")}</h2>
            <p className="mt-2 text-[#38564f]">{t("kbCtaDesc")}</p>
          </div>
          <a
            href="https://wa.me/628563532918?text=Halo%20Aligatour%2C%20saya%20ingin%20konsultasi%20Private%20Trip%20Ranu%20Kumbolo."
            className="btn-dark"
          >
            <WhatsappLogo size={20} weight="fill" /> {t("consultTrip")}
          </a>
        </div>
      </section>
    </main>
  );
}
