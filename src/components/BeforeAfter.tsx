"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface BeforeAfterPair {
  before: string;
  after: string;
}

function BeforeAfterSlider({ before, after }: BeforeAfterPair) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] rounded-2xl overflow-hidden cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After image (full) */}
      <div className="absolute inset-0">
        <Image src={after} alt="Nachher" fill className="object-cover" />
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <Image
          src={before}
          alt="Vorher"
          fill
          className="object-cover"
          style={{ minWidth: containerRef.current?.offsetWidth || "100%" }}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-10"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-[#009746]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-green-800/80 text-white px-3 py-1 rounded-lg text-sm font-bold z-10">
        VORHER
      </div>
      <div className="absolute top-4 right-4 bg-[#009746]/80 text-white px-3 py-1 rounded-lg text-sm font-bold z-10">
        NACHHER
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const pairs: BeforeAfterPair[] = [
    {
      before: "/93487AE7-643B-448C-8A28-677484BBA096_1_201_a.jpeg",
      after: "/3BAF90DD-E8D5-45E1-B15A-F3CD36A9F32F_1_105_c.jpeg",
    },
    {
      before: "/8BEC3D36-3D4C-4253-A19E-9B83C3DDF6C3.jpeg",
      after: "/A3A87027-B286-43A9-8B83-CF8B100B4477_1_105_c.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-bold mb-16 text-[#009746] text-center">
          VORHER & NACHHER
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pairs.map((pair, index) => (
            <BeforeAfterSlider key={index} before={pair.before} after={pair.after} />
          ))}
        </div>
      </div>
    </section>
  );
}
