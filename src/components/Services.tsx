"use client";

import { motion } from "framer-motion";
import { PlateLabel, BotanicalSprig, VineDivider, FernFrond } from "./Decor";

type Service = {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Gartengestaltung",
    subtitle: "planen & anlegen",
    desc: "Vom ersten Entwurf bis zur Übergabe — wir planen und legen Ihren neuen Garten komplett an.",
    icon: <Tool d="M 6 30 L 30 6 M 8 28 L 22 14 M 24 12 a 4 4 0 1 1 -2 -2 z M 4 32 l 4 -4" />,
  },
  {
    num: "02",
    title: "Pflasterarbeiten",
    subtitle: "Wege · Terrassen · Einfahrten",
    desc: "Terrassen, Wege und Einfahrten — Natur- oder Betonstein, fachgerecht verlegt mit sauberem Unterbau und Gefälle.",
    icon: <Tool d="M 4 20 H 32 M 4 26 H 32 M 4 14 H 32 M 10 14 V 8 H 16 V 14 M 18 20 V 14 H 24 V 20 M 8 26 V 20 H 14 V 26 M 22 26 V 20 H 28 V 26" />,
  },
  {
    num: "03",
    title: "Baumpflege",
    subtitle: "schneiden · fällen · sichern",
    desc: "Kronenpflege, Formschnitt und sichere Fällung — auch bei wenig Platz. Mit Klettertechnik und Hubarbeitsbühne.",
    icon: <Tool d="M 18 32 V 18 M 12 20 a 6 6 0 1 1 12 0 M 14 14 a 5 5 0 1 1 8 0 M 16 9 a 3 3 0 1 1 4 0" />,
  },
  {
    num: "04",
    title: "Rasen & Rollrasen",
    subtitle: "anlegen & pflegen",
    desc: "Anlage, Nachsaat, Vertikutieren, Düngung und regelmäßiger Schnitt. Auf Wunsch Rollrasen in Premiumqualität.",
    icon: <Tool d="M 4 28 H 32 M 6 28 V 22 M 10 28 V 18 M 14 28 V 20 M 18 28 V 16 M 22 28 V 22 M 26 28 V 20 M 30 28 V 24" />,
  },
  {
    num: "05",
    title: "Zaun & Sichtschutz",
    subtitle: "Holz · Metall · Hecke",
    desc: "Holz, Metall, WPC oder lebende Hecke — Lieferung und Montage inklusive Fundament und Toranlagen.",
    icon: <Tool d="M 4 30 H 32 M 8 30 V 10 L 10 8 L 12 10 V 30 M 16 30 V 6 L 18 4 L 20 6 V 30 M 24 30 V 10 L 26 8 L 28 10 V 30 M 8 18 H 28 M 8 22 H 28" />,
  },
  {
    num: "06",
    title: "Gartenpflege",
    subtitle: "regelmäßig oder einmalig",
    desc: "Wöchentlich, vierteljährlich oder einmalig — Schnitt, Düngung, Unkraut und Laub. Als Vertrag oder nach Stunde.",
    icon: <Tool d="M 6 28 a 12 12 0 0 1 24 0 M 18 16 V 28 M 12 12 L 16 18 M 24 12 L 20 18 M 6 28 H 30" />,
  },
  {
    num: "07",
    title: "Rodung & Aushub",
    subtitle: "Baum weg · Fläche frei",
    desc: "Wurzelstockfräsen, Baumentfernung und Vorbereitung des Geländes. Mit eigenem Maschinenpark und Entsorgung.",
    icon: <Tool d="M 6 28 H 30 M 8 28 V 22 H 18 V 28 M 20 26 L 28 14 L 32 16 L 24 28 M 10 22 V 18 H 14 V 22" />,
  },
  {
    num: "08",
    title: "Bewässerung",
    subtitle: "automatisch bewässern",
    desc: "Tröpfchen- und Versenkregner — automatische Bewässerung, Steuerung per App, Sensor und Wetterdaten.",
    icon: <Tool d="M 18 6 C 12 14 8 20 8 24 a 10 10 0 0 0 20 0 c 0 -4 -4 -10 -10 -18 z M 14 22 a 4 4 0 0 0 4 4" />,
  },
];

export default function Services() {
  return (
    <section
      id="leistungen"
      className="relative py-24 md:py-32 bg-[var(--paper)] overflow-hidden"
      aria-labelledby="leistungen-heading"
    >
      <div className="architect-grid absolute inset-0 opacity-30" aria-hidden />
      <div className="paper-grain absolute inset-0" aria-hidden />

      {/* dekorative Botanik */}
      <div className="absolute -left-12 top-32 w-32 text-[var(--leaf)]/30 hidden md:block sway">
        <BotanicalSprig />
      </div>
      <div className="absolute -right-10 bottom-40 w-40 text-[var(--leaf)]/30 hidden md:block sway">
        <FernFrond />
      </div>

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-24 items-end">
          <div className="lg:col-span-7">
            <PlateLabel index="02" title="Leistungen" />
            <h2
              id="leistungen-heading"
              className="mt-6 display-italic text-[var(--moss)] text-5xl md:text-7xl lg:text-8xl"
            >
              Acht Leistungen,
              <br />
              <span className="display-roman not-italic text-[var(--clay)]">eine Handschrift.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-body text-[var(--ink-soft)] text-lg md:text-xl leading-relaxed">
              Jedes Projekt — vom Reihenhausgarten bis zur Gewerbeanlage —
              läuft bei uns gleich ab: Aufmaß, Skizze, Auswahl der Materialien,
              Ausführung durch unser eigenes Team. Wir verwenden nur Pflanzen
              und Steine, deren Herkunft und Qualität wir kennen.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="font-hand text-[var(--clay)] text-xl rotate-[-2deg]">
                jedes Detail per Hand
              </span>
            </div>
          </div>
        </div>

        {/* Specimen-Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[var(--moss)]/20">
          {SERVICES.map((s, i) => (
            <motion.li
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative border-r border-b border-[var(--moss)]/20"
            >
              <a
                href={`/#kontakt?leistung=${encodeURIComponent(s.title)}`}
                className="block p-6 md:p-8 bg-[var(--paper)] hover:bg-[var(--paper-warm)] transition-colors h-full"
                aria-label={`${s.title} anfragen`}
              >
                {/* Eck-Ticks */}
                <span className="absolute top-2 left-2 w-2 h-2 border-l border-t border-[var(--moss)]/40" />
                <span className="absolute top-2 right-2 w-2 h-2 border-r border-t border-[var(--moss)]/40" />
                <span className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-[var(--moss)]/40" />
                <span className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-[var(--moss)]/40" />

                <div className="flex items-start justify-between">
                  <span className="label-mono text-[var(--clay)]">{`Nr. ${s.num}`}</span>
                  <span className="label-mono text-[var(--moss)]/50">Leistung</span>
                </div>

                <div className="my-6 flex items-end gap-4">
                  <div className="w-12 h-12 text-[var(--moss)] group-hover:text-[var(--clay)] transition-colors">
                    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                      {s.icon}
                    </svg>
                  </div>
                </div>

                <h3 className="font-display text-[var(--moss)] text-2xl md:text-3xl leading-tight">
                  {s.title}
                </h3>
                <div className="font-display italic text-[var(--leaf)] text-sm mt-1">
                  {s.subtitle}
                </div>

                <p className="mt-4 font-body text-[var(--ink-soft)] text-base leading-relaxed">
                  {s.desc}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 label-mono text-[var(--moss)] group-hover:text-[var(--clay)] transition-colors">
                  Anfragen
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.4" className="group-hover:translate-x-1 transition-transform">
                    <path d="M1 5 H 12 M 8 1 L 12 5 L 8 9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>

        <VineDivider className="mt-20 md:mt-28" />

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-display italic text-[var(--moss)] text-2xl md:text-3xl max-w-xl">
            Etwas dabei? Etwas vermisst? — Jedes Projekt beginnt mit einem Gespräch.
          </p>
          <a
            href="/#kontakt"
            className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--moss)] text-[var(--paper)] hover:bg-[var(--clay)] transition-colors"
          >
            <span className="label-mono">Beratung anfragen</span>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.4" className="group-hover:translate-x-1 transition-transform">
              <path d="M1 7 H 16 M 11 2 L 16 7 L 11 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Tool({ d }: { d: string }) {
  return <path d={d} />;
}
