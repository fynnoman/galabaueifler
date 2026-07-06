"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlateLabel, BotanicalSprig } from "./Decor";

type Item = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  note: string;
};

const SMALL_ITEMS: Item[] = [
  {
    src: "/A3A87027-B286-43A9-8B83-CF8B100B4477_1_105_c.jpeg",
    alt: "Neu angelegte Rasenfläche",
    title: "Rasenanlage",
    subtitle: "neuer Rasen",
    note: "Vollflächiger Aushub, neuer Boden, frischer Rollrasen — dicht und gleichmäßig vom ersten Tag an.",
  },
  {
    src: "/26C2764C-810A-42F3-8AC0-530A26973299_1_105_c.jpeg",
    alt: "Sauber geschnittene Hecke",
    title: "Heckenschnitt",
    subtitle: "sauber in Form",
    note: "Auf Linie geschnitten — gleichmäßige Höhe, saubere Flanken und klare Kanten.",
  },
  {
    src: "/AA2B7DD7-BBA1-48E6-8524-9C080D345CE2_1_105_c.jpeg",
    alt: "Verlegte Platten- und Fliesenarbeiten im Außenbereich",
    title: "Plattenarbeiten",
    subtitle: "verlegt & befestigt",
    note: "Großformatige Platten, exakt im Versatz verlegt — auf Drainage-Unterbau, damit sie jahrzehntelang halten.",
  },
  {
    src: "/26EAA02B-5C07-4E25-8867-D20BCFF5AD20_1_105_c.jpeg",
    alt: "Weitere Heckenpflege mit formgebendem Schnitt",
    title: "Hecke · Form & Pflege",
    subtitle: "regelmäßige Pflege",
    note: "Auch aufwendige Heckenformen halten wir Saison für Saison sauber in Form.",
  },
];

const SHOWCASE = {
  src: "/F9AB677B-405D-4753-85E1-06C67DFB3A2F_1_105_c.jpeg",
  alt: "Komplette Gartenumgestaltung — finaler Zustand",
  title: "Komplettumgestaltung",
  subtitle: "komplett neu angelegt",
  caption: "Vorgarten · von Brachland zu fertigem Garten",
  intro:
    "Wenn ein Garten komplett neu gedacht werden muss, übernehmen wir alles — vom ersten Aufmaß über die Skizze bis zur Übergabe. Sie haben einen einzigen Ansprechpartner und am Ende ein Ergebnis aus einer Hand.",
  facts: [
    { label: "Dauer", value: "4 – 8 Wochen" },
    { label: "Umfang", value: "Aushub bis Bepflanzung" },
    { label: "Team", value: "eigenes Team, kein Sub" },
    { label: "Pflege", value: "auf Wunsch laufend" },
  ],
  quote:
    "Wir haben am ersten Tag eine Skizze gemacht — am letzten stand genau dieser Garten draußen.",
  quoteSource: "— Übergabegespräch, 2024",
};

export default function Gallery() {
  return (
    <section
      id="galerie"
      className="relative py-24 md:py-32 bg-[var(--paper)] overflow-hidden"
      aria-labelledby="galerie-heading"
    >
      <div className="absolute inset-0 architect-grid opacity-60" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <PlateLabel index="04" title="Projekte" />
            <h2
              id="galerie-heading"
              className="mt-6 display-italic text-[var(--moss)] text-5xl md:text-7xl lg:text-8xl"
            >
              Ausgewählte Arbeiten,
              <br />
              <span className="display-roman not-italic text-[var(--clay)]">
                aus unseren Projekten.
              </span>
            </h2>
          </div>

          <div className="text-right">
            <div className="label-mono text-[var(--moss)]/70">Referenzen</div>
            <div className="font-display italic text-[var(--ink-soft)] text-lg mt-1">
              Auswahl 2023 – 2024
            </div>
          </div>
        </div>

        {/* 4 kleine Tafeln */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SMALL_ITEMS.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group flex flex-col"
            >
              <div className="flex items-baseline justify-between pb-2 border-b border-[var(--moss)]/30">
                <span className="label-mono text-[var(--clay)]">
                  Nr. {String(i + 1).padStart(2, "0")}
                </span>
                <span className="label-mono text-[var(--moss)]/60">Projekt</span>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--paper-deep)] border-x border-[var(--moss)]/20 group-hover:border-[var(--clay)]/50 transition-colors">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
                />
                <div className="absolute inset-2 border border-[var(--paper)]/30 pointer-events-none mix-blend-overlay" />
              </div>

              <figcaption className="pt-3 border-t border-[var(--moss)]/30 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[var(--moss)] text-xl md:text-2xl">
                    {item.title}
                  </h3>
                  <span className="font-display italic text-[var(--leaf)] text-sm shrink-0">
                    {item.subtitle}
                  </span>
                </div>
                <p className="font-body text-[var(--ink-soft)] text-base mt-2 leading-snug">
                  {item.note}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Komplett-Doppelseite */}
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mt-20 md:mt-28 relative"
        >
          {/* Spread Header */}
          <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-[var(--moss)]/30 flex-wrap">
            <div className="flex items-baseline gap-4">
              <span className="label-mono text-[var(--clay)]">Projekt Nr. 05 · Highlight</span>
              <span className="h-px w-10 bg-[var(--moss)]/40 hidden md:inline-block" />
              <span className="font-display italic text-[var(--ink-soft)] text-base">
                Komplett-Auftrag
              </span>
            </div>
            <span className="label-mono text-[var(--moss)]/60">Referenz</span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Links — Bild */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--paper-deep)] border border-[var(--moss)]/25 group">
                <Image
                  src={SHOWCASE.src}
                  alt={SHOWCASE.alt}
                  fill
                  sizes="(min-width:1024px) 60vw, 100vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-[1400ms] ease-out"
                />
                <div className="absolute inset-3 border border-[var(--paper)]/30 pointer-events-none mix-blend-overlay" />

                {/* Stempel oben links */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-[var(--paper)] border border-[var(--moss)] px-3 py-1.5">
                  <span className="w-1.5 h-1.5 bg-[var(--clay)]" />
                  <span className="label-mono text-[var(--moss)]">Highlight-Projekt</span>
                </div>
              </div>

              <div className="mt-3 flex items-baseline justify-between pt-3 border-t border-[var(--moss)]/25">
                <span className="font-display italic text-[var(--ink-soft)] text-base">
                  {SHOWCASE.caption}
                </span>
                <span className="label-mono text-[var(--moss)]/60">2024</span>
              </div>

              {/* schwebende Botanik */}
              <div className="absolute -bottom-12 -left-12 w-32 text-[var(--leaf)]/40 sway pointer-events-none hidden md:block">
                <BotanicalSprig />
              </div>
            </div>

            {/* Rechts — Editorial-Text */}
            <div className="lg:col-span-5 flex flex-col">
              <span className="label-mono text-[var(--clay)]">Kapitel 05</span>
              <h3 className="mt-3 display-italic text-[var(--moss)] text-4xl md:text-5xl lg:text-6xl leading-[0.9]">
                Komplett&shy;
                <span className="display-roman not-italic text-[var(--clay)]">
                  umgestaltung.
                </span>
              </h3>
              <div className="mt-3 font-display italic text-[var(--leaf)]">
                {SHOWCASE.subtitle}
              </div>

              <p className="mt-6 font-body text-[var(--ink-soft)] text-lg leading-relaxed">
                {SHOWCASE.intro}
              </p>

              {/* Eckdaten */}
              <dl className="mt-8 grid grid-cols-2 gap-y-5 gap-x-6 border-y border-[var(--moss)]/20 py-6">
                {SHOWCASE.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="label-mono text-[var(--moss)]/60">{f.label}</dt>
                    <dd className="font-display text-[var(--moss)] text-xl md:text-2xl mt-1 leading-tight">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Zitat */}
              <blockquote className="mt-8 relative pl-6 border-l-2 border-[var(--clay)]">
                <span className="absolute -top-4 -left-1 font-display italic text-[var(--clay)] text-6xl leading-none select-none">
                  „
                </span>
                <p className="font-display italic text-[var(--moss)] text-xl md:text-2xl leading-snug">
                  {SHOWCASE.quote}
                </p>
                <footer className="mt-3 label-mono text-[var(--moss)]/60">
                  {SHOWCASE.quoteSource}
                </footer>
              </blockquote>

              {/* CTA */}
              <a
                href="/#kontakt"
                className="mt-10 inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--moss)] text-[var(--paper)] hover:bg-[var(--clay)] transition-colors self-start group"
              >
                <span className="label-mono">Eigene Umgestaltung anfragen</span>
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M1 7 H 16 M 11 2 L 16 7 L 11 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Spread Footer */}
          <div className="mt-10 pt-3 border-t border-[var(--moss)]/30 flex items-baseline justify-between flex-wrap gap-4">
            <span className="label-mono text-[var(--moss)]/60">
              Galabau Eifler · Referenzen · Saarbrücken
            </span>
            <span className="font-display italic text-[var(--ink-soft)] text-base">
              — Ende der Projektvorstellung —
            </span>
            <span className="label-mono text-[var(--moss)]/60">Projekt 05</span>
          </div>
        </motion.figure>

        {/* Closing */}
        <div className="mt-20 flex items-end justify-between gap-6 flex-wrap">
          <p className="font-display italic text-[var(--moss)] text-2xl md:text-3xl max-w-xl">
            Weitere Referenzen senden wir gern auf Anfrage zu — auch von
            laufenden Baustellen.
          </p>
          <a
            href="/#kontakt"
            className="inline-flex items-center gap-3 px-6 py-3.5 border border-[var(--moss)]/40 text-[var(--moss)] hover:bg-[var(--moss)] hover:text-[var(--paper)] transition-colors"
          >
            <span className="label-mono">Referenzen anfragen</span>
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path d="M1 7 H 16 M 11 2 L 16 7 L 11 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="absolute -right-12 top-32 w-32 text-[var(--leaf)]/25 sway hidden md:block">
          <BotanicalSprig />
        </div>
      </div>
    </section>
  );
}
