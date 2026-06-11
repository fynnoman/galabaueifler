"use client";

import { motion } from "framer-motion";
import { PlateLabel, BotanicalSeal, FernFrond } from "./Decor";

const TUGENDEN = [
  {
    num: "I",
    title: "Fachkompetenz",
    latin: "Peritia",
    text:
      "Ausgebildete Fachkräfte mit jahrelanger Erfahrung im Garten- und Landschaftsbau. Jedes Projekt wird mit höchster Sorgfalt und Präzision umgesetzt.",
  },
  {
    num: "II",
    title: "Individuelle Beratung",
    latin: "Colloquium",
    text:
      "Persönliche Beratung vor Ort und maßgeschneiderte Lösungen für Ihren Garten. Wir hören zu und planen gemeinsam mit Ihnen.",
  },
  {
    num: "III",
    title: "Hochwertige Materialien",
    latin: "Materia bona",
    text:
      "Wir verwenden ausschließlich geprüfte, langlebige Materialien von regionalen Lieferanten — für Ergebnisse, die Bestand haben.",
  },
  {
    num: "IV",
    title: "Termintreue",
    latin: "Fides temporis",
    text:
      "Zuverlässige Planung und pünktliche Umsetzung. Wir halten, was wir versprechen — termingerecht und im vereinbarten Rahmen.",
  },
  {
    num: "V",
    title: "Sauberkeit & Ordnung",
    latin: "Munditia",
    text:
      "Nach Abschluss der Arbeiten hinterlassen wir Ihr Grundstück sauber und aufgeräumt. Respekt vor Ihrem Eigentum ist selbstverständlich.",
  },
  {
    num: "VI",
    title: "Faire Preise",
    latin: "Aequitas",
    text:
      "Transparente Kostenaufstellung ohne versteckte Zusatzkosten. Sie erhalten ein faires Angebot, das Qualität und Preis in Einklang bringt.",
  },
];

export default function Qualitaet() {
  return (
    <section
      id="qualitaet"
      className="relative py-24 md:py-32 bg-[var(--paper)] overflow-hidden"
      aria-labelledby="qualitaet-heading"
    >
      <div className="absolute inset-0 architect-grid opacity-25" aria-hidden />
      <div className="absolute inset-0 paper-grain" aria-hidden />

      <div className="absolute -bottom-12 -left-12 w-44 text-[var(--leaf)]/30 sway hidden md:block">
        <FernFrond />
      </div>

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <PlateLabel index="VI" title="Tugenden" />
            <h2
              id="qualitaet-heading"
              className="mt-6 display-italic text-[var(--moss)] text-5xl md:text-7xl lg:text-8xl"
            >
              Sechs Versprechen.
              <br />
              <span className="display-roman not-italic text-[var(--clay)]">
                Mit der Hand unterschrieben.
              </span>
            </h2>
            <p className="mt-6 font-body text-[var(--ink-soft)] text-lg md:text-xl leading-relaxed max-w-2xl">
              Eine Werkstatt lebt von ihrem Wort. Diese sechs Tugenden sind keine
              Werbeversprechen — sie sind die innere Verfassung unseres Teams,
              an die wir uns binden.
            </p>
          </div>

          <div className="relative w-32 h-32 md:w-40 md:h-40 text-[var(--clay)]">
            <BotanicalSeal label="Sechs Tugenden · Galabau Eifler · MMXXIV" />
          </div>
        </div>

        <ol className="mt-16 grid grid-cols-1 md:grid-cols-2 border-t border-l border-[var(--moss)]/20">
          {TUGENDEN.map((t, i) => (
            <motion.li
              key={t.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group relative border-r border-b border-[var(--moss)]/20 p-8 md:p-10 hover:bg-[var(--paper-warm)] transition-colors"
            >
              <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-8 items-start">
                <div className="flex flex-col items-center pt-1">
                  <div className="font-display text-[var(--clay)] text-5xl md:text-6xl leading-none">
                    {t.num}
                  </div>
                  <div className="mt-3 h-12 w-px bg-[var(--moss)]/30" />
                </div>

                <div>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-display text-[var(--moss)] text-2xl md:text-3xl">
                      {t.title}
                    </h3>
                    <span className="font-display italic text-[var(--leaf)] text-base">
                      {t.latin}
                    </span>
                  </div>
                  <div className="mt-3 fine-rule w-16" aria-hidden />
                  <p className="mt-4 font-body text-[var(--ink-soft)] text-base md:text-lg leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </div>

              <span className="absolute top-3 right-3 label-mono text-[var(--moss)]/40">
                Art. {t.num}
              </span>
            </motion.li>
          ))}
        </ol>

        <div className="mt-16 md:mt-20 text-center">
          <p className="font-display italic text-[var(--moss)] text-xl md:text-2xl mb-6">
            — unterzeichnet vom gesamten Team —
          </p>
          <a
            href="/#kontakt"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--clay)] text-[var(--paper)] hover:bg-[var(--clay-dark)] transition-colors"
          >
            <span className="label-mono">Jetzt Beratung anfragen</span>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M1 7 H 16 M 11 2 L 16 7 L 11 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
