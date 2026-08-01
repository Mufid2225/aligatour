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

function getResponsive(innerWidth: number) {
  if (innerWidth < 420) return { cardW: 160, cardH: 220, gapG: 2, btnS: 32, offsetX: -48, offsetY: 5, rot: 10, scale: 0.82 };
  if (innerWidth < 640) return { cardW: 200, cardH: 260, gapG: 3, btnS: 36, offsetX: -40, offsetY: 5, rot: 12, scale: 0.84 };
  if (innerWidth < 1024) return { cardW: 260, cardH: 340, gapG: 3, btnS: 40, offsetX: -36, offsetY: 6, rot: 12, scale: 0.84 };
  return { cardW: 300, cardH: 380, gapG: 4, btnS: 44, offsetX: -34, offsetY: 7, rot: 12, scale: 0.84 };
}

export default function CardFanCarousel({ cards }: CardFanCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animatingRef = useRef(false);
  const firstRenderRef = useRef(true);
  const timerRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cycle = useCallback((step: number) => {
    if (animatingRef.current || cards.length < 2) return;
    animatingRef.current = true;
    setActiveIndex((current) => (current + step + cards.length) % cards.length);
  }, [cards.length]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) cancelAnimationFrame(timerRef.current);
    timerRef.current = requestAnimationFrame(() => cycle(1));
  }, [cycle]);

  useEffect(() => {
    if (cards.length < 2) return;
    resetTimer();
    return () => { if (timerRef.current) cancelAnimationFrame(timerRef.current); };
  }, [cards.length, resetTimer]);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll<HTMLElement>("[data-fan-card]");
    if (!elements?.length) return;

    const r = getResponsive(window.innerWidth);
    const positions = [
      { x: r.offsetX, y: r.offsetY, rot: -r.rot, scale: r.scale, zIndex: 1 },
      { x: 0, y: 0, rot: 0, scale: 1, zIndex: 3 },
      { x: -r.offsetX, y: r.offsetY, rot: r.rot, scale: r.scale, zIndex: 1 },
    ];

    const visible = [
      (activeIndex - 1 + cards.length) % cards.length,
      activeIndex,
      (activeIndex + 1) % cards.length,
    ];
    let completed = 0;

    elements.forEach((element, index) => {
      const slot = visible.indexOf(index);
      if (slot === -1) {
        gsap.to(element, { opacity: 0, scale: 0.65, duration: 0.3, pointerEvents: "none", overwrite: true });
        return;
      }

      const target = positions[slot];
      if (firstRenderRef.current) {
        gsap.set(element, { xPercent: 0, yPercent: 80, rotation: 0, scale: 0.5, opacity: 0 });
      }
      gsap.to(element, {
        xPercent: target.x,
        yPercent: target.y,
        rotation: target.rot,
        scale: target.scale,
        opacity: 1,
        zIndex: target.zIndex,
        pointerEvents: slot === 1 ? "auto" : "none",
        duration: firstRenderRef.current ? 0.9 : 0.55,
        delay: firstRenderRef.current ? slot * 0.08 : 0,
        ease: firstRenderRef.current ? "back.out(1.4)" : "power2.out",
        overwrite: true,
        onComplete: () => {
          completed += 1;
          if (completed === Math.min(cards.length, 3)) animatingRef.current = false;
        },
      });
    });

    firstRenderRef.current = false;
  }, [activeIndex, cards.length]);

  if (!cards.length) return null;

  const r = typeof window !== "undefined" ? getResponsive(window.innerWidth) : getResponsive(1200);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden py-4 sm:py-6" style={{ minHeight: `${r.cardH + 120}px` }}>
      <div ref={containerRef} className="relative" style={{ height: `${r.cardH}px`, width: `${r.cardW + 40}px`, maxWidth: `${r.cardW + 40}px` }}>
        {cards.map((card, index) => (
          <div key={card.imgUrl} data-fan-card className="absolute inset-x-0 top-0 overflow-hidden rounded-[16px] border-2 border-white bg-white shadow-lg shadow-[#153d3720] sm:rounded-[20px] sm:border-4" style={{ height: `${r.cardH}px` }}>
            <Image src={card.imgUrl} alt={card.alt} fill sizes={`${r.cardW}px`} className="object-cover" priority={index === 0}/>
          </div>
        ))}
      </div>
      <div className="relative z-10 mt-3 flex items-center gap-3 sm:mt-4" style={{ gap: `${r.gapG}px` }}>
        <button type="button" onClick={() => { cycle(-1); resetTimer(); }} aria-label="Foto sebelumnya" className="flex cursor-pointer items-center justify-center rounded-full border border-[#153d37]/15 bg-white font-bold shadow transition hover:-translate-y-0.5 hover:border-[#176b5b]" style={{ width: `${r.btnS}px`, height: `${r.btnS}px`, fontSize: `${r.btnS * 0.5}px` }}>←</button>
        <div className="flex gap-1.5 sm:gap-2" aria-label={`Foto ${activeIndex + 1} dari ${cards.length}`}>
          {cards.map((card, index) => <button key={card.imgUrl} type="button" onClick={() => { if (!animatingRef.current) { setActiveIndex(index); resetTimer(); } }} aria-label={`Tampilkan foto ${index + 1}`} className={`h-1.5 cursor-pointer rounded-full transition-all sm:h-2 ${index === activeIndex ? "w-4 bg-[#176b5b] sm:w-5" : "w-1.5 bg-[#153d37]/20 sm:w-2"}`}/>) }
        </div>
        <button type="button" onClick={() => { cycle(1); resetTimer(); }} aria-label="Foto berikutnya" className="flex cursor-pointer items-center justify-center rounded-full border border-[#153d37]/15 bg-white font-bold shadow transition hover:-translate-y-0.5 hover:border-[#176b5b]" style={{ width: `${r.btnS}px`, height: `${r.btnS}px`, fontSize: `${r.btnS * 0.5}px` }}>→</button>
      </div>
    </div>
  );
}