import type { Metadata } from "next";
import PrivateTripBromoContent from "@/components/trips/PrivateTripBromoContent";

export const metadata: Metadata = {
  title: "Private Trip Bromo | Aligatour",
  description: "Private Trip Bromo dari Malang mulai Rp1.800.000 per grup maksimal 5 orang. Tujuh destinasi, jeep, tiket, transportasi, dan dokumentasi.",
};

export default function PrivateTripBromo() {
  return <PrivateTripBromoContent />;
}
