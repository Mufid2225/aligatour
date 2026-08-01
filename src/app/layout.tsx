import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { withBasePath } from "@/lib/site-path";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aligatour — Temukan Cerita di Setiap Perjalanan",
  description: "City Tour Specialist Malang–Batu, shuttle Malang–Ranu Pani, dan trip Ranu Kumbolo, Bromo, serta Tumpak Sewu bersama Aligatour.",
  icons: { icon: withBasePath("/brand/logo-aligatour.webp"), apple: withBasePath("/brand/logo-aligatour.webp") },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${dmSans.variable} ${manrope.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
