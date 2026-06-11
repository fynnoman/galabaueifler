"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { PlateLabel, FigArrow, VineDivider } from "./Decor";

interface BeforeAfterPair {
  before: string;
  after: string;
  label: string;
  latin: string;
  note: string;
}

function BeforeAfterSlider({ before, after, label, latin, note, index }: BeforeAfterPair & { index: number }) {
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

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      {/* Plate Header */}
      <div className="flex items-baseline justify-between pb-2 border-b border-[var(--moss)]/30">
        <span className="label-mono text-[var(--clay)]">
          Tafel · {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-display italic text-[var(--leaf)] text-sm">{latin}</span>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-[320px] md:h-[440px] overflow-hidden cursor-col-resize select-none border-x border-[var(--moss)]/30 bg-[var(--paper-deep)]"
        role="slider"
        aria-label={`Vorher-Nachher Vergleich: ${label}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPos)}
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* After (Hintergrund) */}
        <div className="absolute inset-0">
          <Image
            src={after}
            alt={`${label} – Nachher`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
          <div
            className="relative w-full h-full"
            style={{ minWidth: containerRef.current?.offsetWidth || "100%" }}
          >
            <Image
              src={before}
              alt={`${label} – Vorher`}
              fill
              className="object-cover grayscale-[30%]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-[var(--moss)]/10 mix-blend-multiply" />
          </div>
        </div>

        {/* Slider Linie */}
        <div
          className="absolute top-0 bottom-0 w-px z-10 pointer-events-none"
          style={{
            left: `${sliderPos}%`,
            transform: "translateX(-50%)",
            background: "var(--paper)",
            boxShadow: "0 0 0 1px rgba(27,51,40,0.3)",
          }}
        >
          {/* Tropfen-Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--paper)] border border-[var(--moss)] rounded-full flex items-center justify-center pointer-events-none shadow-[0_8px_24px_-8px_rgba(27,51,40,0.4)]">
            <svg
              className="w-5 h-5 text-[var(--moss)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.6}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6 L 4 12 L 9 18 M 15 6 L 20 12 L 15 18" />
            </svg>
          </div>
        </div>

        {/* Etiketten in Sepia-Box */}
        <div className="absolute top-3 left-3 bg-[var(--paper)] border border-[var(--moss)]/60 px-3 py-1 label-mono text-[var(--moss)] z-10 pointer-events-none">
          ante
        </div>
        <div className="absolute top-3 right-3 bg-[var(--clay)] text-[var(--paper)] px-3 py-1 label-mono z-10 pointer-events-none">
          post
        </div>
      </div>

      {/* Plate Footer */}
      <figcaption className="pt-3 border-t border-[var(--moss)]/30">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-[var(--moss)] text-xl">{label}</h3>
          <span className="label-mono text-[var(--moss)]/60">
            {Math.round(sliderPos)} %
          </span>
        </div>
        <p className="font-body text-[var(--ink-soft)] text-base mt-1 leading-snug">{note}</p>
      </figcaption>
    </motion.figure>
  );
}

export default function BeforeAfter() {
  const pairs: BeforeAfterPair[] = [
    {
      before: "/8A65735B-79DC-4CD0-8881-013B561327A5_1_105_c.jpeg",
      after: "/nachher1.jpeg",
      label: "Gartenumgestaltung",
      latin: "Hortus renovatus",
      note: "Aus Brachland mit alten Wurzelstücken wird ein gegliederter Wohngarten.",
    },
    {
      before: "/8B362254-C4D7-4F7E-BC60-907C4E302F64_1_105_c.jpeg",
      after: "/nachher2.jpeg",
      label: "Pflasterarbeiten",
      latin: "Pavimentum novum",
      note: "Unebene Wege werden zu sauber verlegten Natursteinflächen.",
    },
    {
      before: "/vorher3.jpeg",
      after: "/nachher3.jpeg",
      label: "Baumpflege",
      latin: "Arbor curata",
      note: "Verwilderte Krone behutsam zurückgeschnitten — Lichteinfall verdreifacht.",
    },
  ];

  return (
    <section
      id="vorher-nachher"
      className="relative py-24 md:py-32 bg-[var(--paper-warm)] overflow-hidden"
      aria-labelledby="before-after-heading"
    >
      <div className="absolute inset-0 paper-grain" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <PlateLabel index="V" title="Vor & Nach" />
            <h2
              id="before-after-heading"
              className="mt-6 display-italic text-[var(--moss)] text-5xl md:text-7xl lg:text-8xl"
            >
              ante &{" "}
              <span className="display-roman not-italic text-[var(--clay)]">post</span>
            </h2>
            <p className="mt-4 font-display italic text-[var(--ink-soft)] text-xl max-w-xl">
              Drei Werkstätten, drei Verwandlungen. Den Regler ziehen — und den
              Unterschied lesen.
            </p>
          </div>
          <span className="label-mono text-[var(--moss)]/70">№ 05 / VII</span>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pairs.map((pair, index) => (
            <BeforeAfterSlider key={index} {...pair} index={index} />
          ))}
        </div>

        <VineDivider className="mt-20" />
      </div>
    </section>
  );
}
