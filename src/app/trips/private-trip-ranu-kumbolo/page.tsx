import type { Metadata } from "next";
import PrivateTripRanuKumboloContent from "@/components/trips/PrivateTripRanuKumboloContent";

export const metadata: Metadata = {
  title: "Private Trip Ranu Kumbolo | Aligatour",
  description: "Private Trip Ranu Kumbolo 2 hari 1 malam mulai Rp2.200.000 per grup untuk 2–4 orang, lengkap dengan transportasi, SIMAKSI, konsumsi, dan perlengkapan pendakian.",
};

export default function PrivateTripRanuKumboloPage() {
  return <PrivateTripRanuKumboloContent />;
}
