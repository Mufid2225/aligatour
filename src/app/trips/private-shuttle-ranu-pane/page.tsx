import type { Metadata } from "next";
import PrivateShuttleRanuPaneContent from "@/components/trips/PrivateShuttleRanuPaneContent";

export const metadata: Metadata = {
  title: "Private Shuttle Ranu Pane | Aligatour",
  description: "Private Shuttle Malang → Ranu Pane mulai Rp800.000 untuk PP dengan meeting point Area Kota Malang.",
};

export default function PrivateShuttleRanuPanePage() {
  return <PrivateShuttleRanuPaneContent />;
}
