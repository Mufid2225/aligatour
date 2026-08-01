import type { Metadata } from "next";
import PrivateShuttleRanuPaneContent from "@/components/trips/PrivateShuttleRanuPaneContent";

export const metadata: Metadata = {
  title: "Private Shuttle Malang–Ranu Pane | Aligatour",
  description: "Private shuttle pergi-pulang dari Malang ke Basecamp Ranu Pane. Termasuk kendaraan, driver, BBM, parkir, fasilitas gratis, dan shelter pendakian H-1.",
};

export default function PrivateShuttleRanuPanePage() {
  return <PrivateShuttleRanuPaneContent />;
}
