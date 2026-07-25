"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

export interface CardItem {
  imgUrl: string;
  alt: string;
}

interface CardFanCarouselProps {
  cards: CardItem[];
}

const positions = [
  { x: -34, y: 7, rotation: -12, scale: 0.84, zIndex: 1 },
  { x: 0, y: 0, rotation: 0, scale: 1, zIndex: 3 },
  { x: 34, y: 7, rotation: 12, scale: 0.84, zIndex: 1 },
];

export default function CardFanCarousel({ cards }: CardFanCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animatingRef = useRef(false);
  const firstRenderRef = useRef(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cycle = useCallback((step: number) => {
    if (animatingRef.current || cards.length < 2) return;
    animatingRef.current = true;
    setActiveIndex((current) => (current + step + cards.length) % cards.length);
  }, [cards.length]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => cycle(1), 5000);
  }, [cycle]);

  useEffect(() => {
    if (cards.length < 2) return;
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [cards.length, resetTimer]);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll<HTMLElement>("[data-fan-card]");
    if (!elements?.length) return;

    const visible = [
      (activeIndex - 1 + cards.length) % cards.length,
      activeIndex,
      (activeIndex + 1) % cards.length,
    ];
    let completed = 0;

    elements.forEach((element, index) => {
      const slot = visible.indexOf(index);
      if (slot === -1) {
        gsap.to(element, { opacity: 0, scale: 0.65, duration: 0.3, pointerEvents: "none" });
        return;
      }

      const target = positions[slot];
      if (firstRenderRef.current) {
        gsap.set(element, { xPercent: target.x, yPercent: 70, rotation: 0, scale: 0.65, opacity: 0 });
      }
      gsap.to(element, {
        xPercent: target.x,
        yPercent: target.y,
        rotation: target.rotation,
        scale: target.scale,
        opacity: 1,
        zIndex: target.zIndex,
        pointerEvents: slot === 1 ? "auto" : "none",
        duration: firstRenderRef.current ? 0.9 : 0.55,
        delay: firstRenderRef.current ? slot * 0.08 : 0,
        ease: firstRenderRef.current ? "back.out(1.4)" : "power2.out",
        onComplete: () => {
          completed += 1;
          if (completed === Math.min(cards.length, 3)) animatingRef.current = false;
        },
      });
    });

    firstRenderRef.current = false;
  }, [activeIndex, cards.length]);

  if (!cards.length) return null;

  return (
    <div className="flex min-h-[460px] flex-col items-center justify-center overflow-hidden py-8 sm:min-h-[540px]">
      <div ref={containerRef} className="relative h-[380px] w-full max-w-[300px] sm:h-[460px] sm:max-w-[340px]">
        {cards.map((card, index) => (
          <div key={card.imgUrl} data-fan-card className="absolute inset-x-0 top-0 h-[380px] overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-2xl shadow-[#153d3730] sm:h-[460px]">
            <Image src={card.imgUrl} alt={card.alt} fill sizes="(max-width: 640px) 80vw, 340px" className="object-cover" priority={index === 0}/>
          </div>
        ))}
      </div>
      <div className="relative z-10 mt-2 flex items-center gap-4">
        <button type="button" onClick={() => { cycle(-1); resetTimer(); }} aria-label="Foto sebelumnya" className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#153d37]/15 bg-white text-xl font-bold shadow-lg transition hover:-translate-y-0.5 hover:border-[#176b5b]">←</button>
        <div className="flex gap-2" aria-label={`Foto ${activeIndex + 1} dari ${cards.length}`}>
          {cards.map((card, index) => <button key={card.imgUrl} type="button" onClick={() => { if (!animatingRef.current) { setActiveIndex(index); resetTimer(); } }} aria-label={`Tampilkan foto ${index + 1}`} className={`h-2.5 cursor-pointer rounded-full transition-all ${index === activeIndex ? "w-7 bg-[#176b5b]" : "w-2.5 bg-[#153d37]/20"}`}/>) }
        </div>
        <button type="button" onClick={() => { cycle(1); resetTimer(); }} aria-label="Foto berikutnya" className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#153d37]/15 bg-white text-xl font-bold shadow-lg transition hover:-translate-y-0.5 hover:border-[#176b5b]">→</button>
      </div>
    </div>
  );
}
