"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

interface BeforeAfterPair {
  before: string;
  after: string;
  label: string;
}

function BeforeAfterSlider({ before, after, label }: BeforeAfterPair) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleMouseDown = useCallback(() => setIsDragging(true), []);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      handleMove(e.clientX);
    },
    [handleMove]
  );

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={containerRef}
        className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden cursor-col-resize select-none"
        role="slider"
        aria-label={`Vorher-Nachher Vergleich: ${label}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPos)}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onClick={handleClick}
      >
        {/* After image (full background) */}
        <div className="absolute inset-0">
          <Image
            src={after}
            alt={`${label} – Nachher`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative w-full h-full" style={{ minWidth: containerRef.current?.offsetWidth || "100%" }}>
            <Image
              src={before}
              alt={`${label} – Vorher`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Slider line + handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center pointer-events-none">
            <svg
              className="w-6 h-6 text-[#009746]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 9l-3 3 3 3M16 9l3 3-3 3"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-green-800/80 text-white px-3 py-1 rounded-lg text-xs md:text-sm font-bold z-10 pointer-events-none">
          VORHER
        </div>
        <div className="absolute top-3 right-3 bg-[#009746]/80 text-white px-3 py-1 rounded-lg text-xs md:text-sm font-bold z-10 pointer-events-none">
          NACHHER
        </div>
      </div>

      <p className="text-center text-sm md:text-base text-neutral-600 font-medium">
        {label}
      </p>
    </div>
  );
}

export default function BeforeAfter() {
  const pairs: BeforeAfterPair[] = [
    {
      before: "/vorher.jpeg",
      after: "/nachher1.jpeg",
      label: "Gartenumgestaltung",
    },
    {
      before: "/vorher2.jpeg",
      after: "/nachher2.jpeg",
      label: "Pflasterarbeiten",
    },
    {
      before: "/vorher3.jpeg",
      after: "/nachher3.jpeg",
      label: "Baumpflege",
    },
  ];

  return (
    <section id="vorher-nachher" className="py-20 md:py-28 bg-neutral-50" aria-labelledby="before-after-heading">
      <div className="mx-auto max-w-[1536px] px-6 lg:px-8">
        <h2
          id="before-after-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#009746] text-center"
        >
          VORHER & NACHHER
        </h2>
        <p className="text-center text-neutral-500 mb-12 md:mb-16 text-base md:text-lg">
          Ziehen Sie den Regler, um den Unterschied zu sehen
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pairs.map((pair, index) => (
            <BeforeAfterSlider
              key={index}
              before={pair.before}
              after={pair.after}
              label={pair.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
