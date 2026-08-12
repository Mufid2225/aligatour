"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  images: string[];
  alt: string;
  interval?: number;
}

export default function TripImageCarousel({ images, alt, interval = 3500 }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => setActive((prev) => (prev + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="relative h-full w-full">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-700 ease-in-out ${index === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}