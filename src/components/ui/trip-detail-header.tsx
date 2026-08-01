"use client";

import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import LanguageToggle from "@/components/ui/language-toggle";
import { useT } from "@/lib/i18n";

export default function TripDetailHeader() {
  const t = useT();
  return (
    <div className="container relative z-10 flex items-center justify-between py-7">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-white/80">
        <ArrowLeft /> {t("backHome")}
      </Link>
      <LanguageToggle />
    </div>
  );
}
