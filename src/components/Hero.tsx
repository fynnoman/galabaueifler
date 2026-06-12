"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  PaperTexture,
  ArchitectGrid,
  BotanicalSprig,
  FernFrond,
  ContourLines,
  BotanicalSeal,
  PlateLabel,
} from "./Decor";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const sealRotate = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const sprigY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative min-h-[100svh] pt-32 md:pt-40 overflow-hidden bg-[var(--paper)]">
      <ArchitectGrid className="opacity-[0.4]" />
      <PaperTexture />

      {/* Konturlinien als Atmosphäre */}
      <ContourLines className="absolute -top-12 -right-32 w-[900px] text-[var(--moss)]/15" />

      {/* Linke Sidebar — Tafel-Marker */}
      <div className="hidden md:flex flex-col items-center gap-4 absolute left-4 lg:left-8 top-40 z-10">
        <span className="label-mono text-[var(--moss)]/70 [writing-mode:vertical-rl]">
          Tafel I · Eröffnung
        </span>
        <span className="h-24 w-px bg-[var(--moss)]/40" />
        <span className="label-mono text-[var(--clay)] [writing-mode:vertical-rl]">
          MMXIV
        </span>
      </div>

      {/* Rechte Sidebar */}
      <div className="hidden md:flex flex-col items-center gap-4 absolute right-4 lg:right-8 top-40 z-10">
        <span className="label-mono text-[var(--moss)]/70 [writing-mode:vertical-rl] rotate-180">
          49°13′47″ N · 6°59′20″ O
        </span>
        <span className="h-24 w-px bg-[var(--moss)]/40" />
        <span className="label-mono text-[var(--clay)] [writing-mode:vertical-rl] rotate-180">
          Saarbrücken
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 md:px-16 lg:px-24">
        {/* Tafel-Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center justify-between flex-wrap gap-4"
        >
          <PlateLabel index="I" title="Der Garten" />
          <div className="flex items-center gap-3">
            <span className="label-mono text-[var(--moss)]/60">№ 01 / VII</span>
          </div>
        </motion.div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Linke Spalte — Titel & Text */}
          <div className="lg:col-span-7 relative">
            {/* mega Display */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="display-italic text-[var(--moss)] text-[18vw] sm:text-[14vw] lg:text-[11.5vw] xl:text-[170px] leading-[0.86]"
              aria-label="Galabau Eifler — Der Garten in Saarbrücken"
            >
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
                className="block"
              >
                Der
              </motion.span>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
                className="block pl-[1.5em] -mt-3 md:-mt-6"
              >
                Garten<span className="text-[var(--clay)]">,</span>
              </motion.span>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.65, 0, 0.35, 1] }}
                className="block -mt-3 md:-mt-6 display-roman not-italic"
              >
                neu gedacht.
              </motion.span>
            </motion.h1>

            {/* untertitel + Latin */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-10 md:mt-12 max-w-xl"
            >
              <p className="font-body text-[var(--ink-soft)] text-xl md:text-2xl leading-relaxed">
                Planung, Anlage und Pflege von Außenräumen rund um Saarbrücken.
                Aus einer Hand — mit der Sorgfalt eines Botanikers und der
                Präzision eines Steinmetz.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="font-display italic text-[var(--leaf)] text-base">
                  Hortus saraviensis
                </span>
                <span className="h-px w-12 bg-[var(--moss)]/40" />
                <span className="label-mono text-[var(--moss)]/60">seit 2014</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="/#kontakt"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--moss)] text-[var(--paper)] hover:bg-[var(--moss-2)] transition-colors"
              >
                <span className="label-mono">Beratung anfragen</span>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.4" className="group-hover:translate-x-1 transition-transform">
                  <path d="M1 7 H 16 M 11 2 L 16 7 L 11 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="/#leistungen"
                className="inline-flex items-center gap-3 px-6 py-3.5 border border-[var(--moss)]/40 text-[var(--moss)] hover:bg-[var(--paper-warm)] transition-colors"
              >
                <span className="label-mono">Leistungen ansehen</span>
              </a>
            </motion.div>

            {/* Mini-Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-14 grid grid-cols-3 max-w-md gap-4 border-t border-[var(--moss)]/15 pt-6"
            >
              <Stat num="6+" label="Jahre Erfahrung" />
              <Stat num="380" label="Projekte" />
              <Stat num="100%" label="Saarbrücken" />
            </motion.div>
          </div>

          {/* Rechte Spalte — Foto-Tafel */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Plate header */}
              <div className="flex items-center justify-between pb-3 border-b border-[var(--moss)]/40 mb-3">
                <span className="label-mono text-[var(--moss)]">Fig. 01</span>
                <span className="font-display italic text-[var(--ink-soft)]">
                  Privatgarten · Saarbrücken-West
                </span>
              </div>

              {/* Photo as plate */}
              <div className="relative aspect-[4/5] overflow-hidden border border-[var(--moss)]/20">
                <motion.div style={{ y: photoY, scale: photoScale }} className="absolute inset-0">
                  <Image
                    src="/A05AD9BA-404A-414C-99BB-17DC84F67782.png"
                    alt="Professionell gestalteter Garten in Saarbrücken — Galabau Eifler"
                    fill
                    priority
                    className="object-cover"
                  />
                </motion.div>
                {/* Sepia/Vintage Overlay */}
                <div
                  className="absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(243,236,218,0.18) 0%, rgba(27,51,40,0.20) 100%)",
                  }}
                />
                {/* Tafel-Ecken */}
                <Corner className="top-2 left-2" />
                <Corner className="top-2 right-2 rotate-90" />
                <Corner className="bottom-2 left-2 -rotate-90" />
                <Corner className="bottom-2 right-2 rotate-180" />
              </div>

              {/* Plate footer */}
              <div className="flex items-baseline justify-between pt-3 border-t border-[var(--moss)]/40 mt-3">
                <span className="label-mono text-[var(--moss)]/70">Foto · Atelier</span>
                <span className="font-display italic text-[var(--clay)]">
                  Rosa · Buxus · Pinus
                </span>
              </div>

              {/* schwebende Botanik */}
              <motion.div
                style={{ y: sprigY }}
                className="absolute -top-16 -right-10 w-32 lg:w-44 text-[var(--leaf)]/80 sway pointer-events-none"
              >
                <BotanicalSprig />
              </motion.div>

              {/* Botanisches Siegel */}
              <motion.div
                style={{ rotate: sealRotate }}
                className="absolute -bottom-16 -left-16 w-32 md:w-44 text-[var(--clay)] hidden md:block"
              >
                <BotanicalSeal />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Untere Tafelleiste */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 border-t border-[var(--moss)]/20"
        >
          {[
            ["Gestaltung", "Concipere"],
            ["Bepflanzung", "Plantare"],
            ["Pflege", "Curare"],
            ["Pflasterbau", "Sternere"],
          ].map(([de, lat], i) => (
            <div
              key={de}
              className={`py-5 px-4 ${i !== 3 ? "md:border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} ${i !== 1 ? "border-r" : ""} border-[var(--moss)]/15`}
            >
              <div className="font-display italic text-[var(--moss)] text-xl md:text-2xl">{de}</div>
              <div className="label-mono text-[var(--leaf-soft)] mt-1">{lat}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bodenfarn rechts unten */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute -bottom-10 -right-10 w-48 md:w-72 text-[var(--leaf)]/40 pointer-events-none sway"
      >
        <FernFrond />
      </motion.div>

      {/* Scroll-Cue */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--moss)]/70 z-10"
      >
        <span className="label-mono">weiter nach unten</span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M7 1 V 19 M 2 14 L 7 19 L 12 14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className="leading-tight">
      <div className="font-display text-[var(--moss)] text-3xl md:text-4xl font-medium">{num}</div>
      <div className="label-mono text-[var(--stone)] mt-1">{label}</div>
    </div>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={`absolute text-[var(--paper)] ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
    >
      <path d="M 0 8 V 0 H 8" strokeLinecap="round" />
    </svg>
  );
}
