"use client";

import Image from "next/image";

interface Props {
  images: string[];
  alt: string;
}

export default function TripImageCarousel({ images, alt }: Props) {
  // Tampilkan gambar pertama saja (static, tanpa animasi)
  const src = images?.[0] || "/trip-cards/placeholder.webp";

  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        priority
      />
    </div>
  );
}