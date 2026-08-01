import type { Metadata } from "next";
import PrivateTripTumpakSewuContent from "@/components/trips/PrivateTripTumpakSewuContent";

export const metadata: Metadata = { title: "Private Trip Tumpak Sewu | Aligatour", description: "Private Trip Tumpak Sewu mulai Rp400.000 per orang dengan meeting point Area Kota Malang, destinasi Tumpak Sewu, Goa Tetes, Telaga Biru, dan fasilitas dokumentasi lengkap." };

export default function OpenTripTumpakSewuPage() {
  return <PrivateTripTumpakSewuContent />;
}
