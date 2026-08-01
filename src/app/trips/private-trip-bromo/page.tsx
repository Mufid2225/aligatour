import type { Metadata } from "next";
import PrivateTripBromoContent from "@/components/trips/PrivateTripBromoContent";

export const metadata: Metadata = {
  title: "Private Trip Bromo | Aligatour",
  description: "Private Trip Bromo 3 paket (Ekonomis/Premium/Luxury) mulai Rp1.800.000 per grup, maksimal 5 orang.",
};

export default function PrivateTripBromoPage() {
  return <PrivateTripBromoContent />;
}