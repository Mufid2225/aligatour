import type { Metadata } from "next";
import PrivateTripRanuReguloContent from "@/components/trips/PrivateTripRanuReguloContent";

export const metadata: Metadata = {
  title: "Private Trip Ranu Regulo | Aligatour",
  description: "Private Trip Ranu Regulo mulai Rp400.000 per orang dengan fasilitas lengkap dari transportasi hingga dokumentasi.",
};

export default function PrivateTripRanuReguloPage() {
  return <PrivateTripRanuReguloContent />;
}
