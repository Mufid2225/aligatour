"use client";

import { useLanguage } from "@/lib/i18n";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggle } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
      title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
      className={`relative inline-flex h-8 w-14 items-center rounded-full border border-white/40 bg-white/10 backdrop-blur transition-colors ${className}`}
    >
      <span
        className={`absolute flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-extrabold transition-all duration-300 ${
          lang === "id"
            ? "left-1 bg-[#d8f05a] text-[#153d37]"
            : "left-7 bg-white text-[#153d37]"
        }`}
      >
        {lang === "id" ? "ID" : "EN"}
      </span>
      <span className={`absolute text-[10px] font-bold transition-opacity ${lang === "id" ? "left-8 opacity-60" : "left-1.5 opacity-60"} text-white`}>
        {lang === "id" ? "EN" : "ID"}
      </span>
    </button>
  );
}
