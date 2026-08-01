import type { Metadata } from "next";
import CityTourContent from "@/components/trips/CityTourContent";

export const metadata: Metadata = {
  title: "Malang–Batu City Tour | Aligatour",
  description: "City Tour Malang–Batu mulai Rp500.000 untuk 4 kursi. Bebas memilih destinasi dengan mobil, driver, dan BBM.",
};

export default function CityTourPage() {
  return <CityTourContent />;
}
