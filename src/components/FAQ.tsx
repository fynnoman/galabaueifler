"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlateLabel, BotanicalSprig } from "./Decor";

const FAQS = [
  {
    q: "Wie läuft ein Projekt ab?",
    a: "Nach einer kostenlosen Erstberatung erstellen wir ein individuelles Angebot. Nach Auftragserteilung planen wir gemeinsam mit Ihnen die Details und setzen das Projekt professionell um.",
  },
  {
    q: "Wie lange dauert die Umsetzung?",
    a: "Die Dauer hängt vom Umfang des Projekts ab. Kleinere Arbeiten können oft innerhalb weniger Tage abgeschlossen werden, größere Projekte benötigen entsprechend mehr Zeit.",
  },
  {
    q: "Übernehmen Sie auch die Pflege nach der Fertigstellung?",
    a: "Ja, wir bieten regelmäßige Gartenpflege an. Von der wöchentlichen Rasenpflege bis zur jährlichen Baumpflege — wir kümmern uns um Ihren Garten.",
  },
  {
    q: "Arbeiten Sie auch an Wochenenden?",
    a: "Samstags sind wir nach Absprache im Einsatz. Sonntags führen wir keine Arbeiten durch.",
  },
  {
    q: "Benötige ich eine Baugenehmigung?",
    a: "Das hängt vom Umfang der Arbeiten ab. Bei größeren Umgestaltungen oder Baumaßnahmen beraten wir Sie gerne zu den rechtlichen Anforderungen.",
  },
  {
    q: "Können Sie auch bestehende Gärten umgestalten?",
    a: "Selbstverständlich! Wir übernehmen sowohl komplette Neuanlagen als auch die Umgestaltung und Modernisierung bestehender Gärten.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 bg-[var(--paper-warm)] overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="absolute inset-0 paper-grain" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <PlateLabel index="VII" title="Disputatio" />
            <h2
              id="faq-heading"
              className="mt-6 display-italic text-[var(--moss)] text-5xl md:text-6xl lg:text-7xl"
            >
              Häufige Fragen,
              <br />
              <span className="display-roman not-italic text-[var(--clay)]">
                ehrliche Antworten.
              </span>
            </h2>
            <p className="mt-6 font-body text-[var(--ink-soft)] text-lg leading-relaxed">
              Was Kundinnen und Kunden vor dem ersten Spatenstich wissen wollen.
              Wenn etwas fehlt — schreiben Sie uns. Wir antworten persönlich,
              meist innerhalb von 48 Stunden.
            </p>

            <div className="mt-10 hidden lg:block relative">
              <div className="absolute -left-6 top-0 w-44 h-44 text-[var(--leaf)]/40 sway">
                <BotanicalSprig />
              </div>
              <div className="mt-48 pl-4 border-l-2 border-[var(--clay)]">
                <p className="font-display italic text-[var(--moss)] text-xl">
                  „Keine Frage ist zu klein, kein Vorhaben zu groß."
                </p>
                <p className="mt-2 label-mono text-[var(--moss)]/60">
                  — Erstberatung, kostenlos
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="border-t border-[var(--moss)]/25">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className="border-b border-[var(--moss)]/25"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full py-6 md:py-7 flex items-start gap-5 md:gap-7 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display italic text-[var(--clay)] text-3xl md:text-4xl leading-none w-12 shrink-0">
                        Q.
                      </span>
                      <span className="flex-1 font-display text-[var(--moss)] text-xl md:text-2xl leading-snug pt-1">
                        {f.q}
                      </span>
                      <span
                        className={`shrink-0 w-8 h-8 border border-[var(--moss)]/40 flex items-center justify-center text-[var(--moss)] transition-transform duration-500 ${
                          isOpen ? "rotate-45 bg-[var(--clay)] text-[var(--paper)] border-[var(--clay)]" : ""
                        }`}
                        aria-hidden
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
                          <path d="M6 1 V 11 M 1 6 H 11" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-7 pl-[68px] md:pl-[76px] pr-8 flex gap-5 items-start">
                            <span className="font-display italic text-[var(--leaf)] text-2xl md:text-3xl leading-none -ml-[60px] md:-ml-[68px] w-12 shrink-0">
                              A.
                            </span>
                            <p className="font-body text-[var(--ink-soft)] text-base md:text-lg leading-relaxed">
                              {f.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ol>

            <div className="mt-10 flex items-center justify-between gap-4 flex-wrap">
              <p className="font-display italic text-[var(--ink-soft)] text-lg">
                Ihre Frage ist nicht dabei?
              </p>
              <a
                href="/#kontakt"
                className="inline-flex items-center gap-2 label-mono text-[var(--clay)] hover:text-[var(--clay-dark)] transition-colors"
              >
                Direkt fragen →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
