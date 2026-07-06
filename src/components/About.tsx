"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlateLabel, BotanicalSprig, FigArrow } from "./Decor";

export default function About() {
  return (
    <section
      id="ueber-uns"
      className="relative py-24 md:py-32 bg-[var(--moss)] text-[var(--paper)] overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--paper) 1px, transparent 1px), linear-gradient(to bottom, var(--paper) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 paper-grain opacity-30" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="text-[var(--paper)]">
            <div className="inline-flex items-center gap-3">
              <span className="label-mono text-[var(--clay)]/90">03</span>
              <span className="h-px w-12 bg-[var(--paper)]/40" aria-hidden />
              <span className="label-mono">Über uns</span>
            </div>
          </div>
          <span className="label-mono text-[var(--paper)]/60">Team & Werte</span>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Linke Spalte — Lead */}
          <div className="lg:col-span-7">
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="display-italic text-[var(--paper)] text-5xl md:text-7xl lg:text-[110px] leading-[0.88]"
            >
              Aus Saarbrücken,
              <br />
              <span className="display-roman not-italic text-[var(--clay)]">
                in den Boden gewachsen.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 grid md:grid-cols-2 gap-8 font-body text-[var(--paper)]/85 text-lg leading-relaxed"
            >
              <p>
                <span className="float-left mr-3 mt-1 font-display text-[var(--clay)] text-[88px] leading-[0.7] not-italic">
                  S
                </span>
                eit über sechs Jahren legen wir Gärten an, die zu den Menschen
                passen, die darin leben. Jedes Projekt beginnt mit einem
                Spaziergang über das Grundstück, einer Skizze auf Papier und
                einem Gespräch — nie mit einer Schablone.
              </p>
              <p>
                Wir sind ein kleines, festes Team. Keine wechselnden
                Subunternehmer, kein weitergereichter Auftrag. Wer Sie berät,
                steht später auch mit der Schaufel in Ihrem Garten — und weiß
                beim Pflegetermin noch, wo damals welche Pflanze gesetzt wurde.
              </p>
            </motion.div>

            {/* Pull Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-14 relative border-l-2 border-[var(--clay)] pl-8 max-w-2xl"
            >
              <div className="absolute -left-3 -top-4 font-display italic text-[var(--clay)] text-7xl leading-none">
                „
              </div>
              <p className="font-display italic text-[var(--paper)] text-2xl md:text-3xl leading-snug">
                Ein guter Garten wird nicht gebaut. Er wird zuerst verstanden
                und dann angelegt.
              </p>
              <footer className="mt-4 label-mono text-[var(--paper)]/70">
                — unser Grundsatz
              </footer>
            </motion.blockquote>

            {/* Stats / Werkstatt */}
            <motion.dl
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[var(--paper)]/20 pt-8"
            >
              {[
                ["2014", "Gegründet"],
                ["6+", "Festes Team"],
                ["380+", "Projekte"],
                ["48 h", "Erstantwort"],
              ].map(([num, label]) => (
                <div key={label}>
                  <dt className="label-mono text-[var(--paper)]/60">{label}</dt>
                  <dd className="font-display text-[var(--paper)] text-4xl md:text-5xl mt-2">
                    {num}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Rechte Spalte — Bild als Plate */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="flex items-baseline justify-between pb-3 border-b border-[var(--paper)]/30 mb-3">
                <span className="label-mono text-[var(--paper)]/80">Unser Team</span>
                <span className="font-display italic text-[var(--paper)]/90">
                  Das Team bei der Arbeit
                </span>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden border border-[var(--paper)]/30">
                <Image
                  src="/3BAF90DD-E8D5-45E1-B15A-F3CD36A9F32F_1_105_c.jpeg"
                  alt="Galabau Eifler Team bei der Gartenarbeit in Saarbrücken"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(27,51,40,0) 40%, rgba(27,51,40,0.4) 100%)",
                  }}
                />
              </div>

              <div className="flex items-baseline justify-between pt-3 border-t border-[var(--paper)]/30 mt-3">
                <span className="label-mono text-[var(--paper)]/70">Team · 2024</span>
                <span className="label-mono text-[var(--clay)]">Saarbrücken</span>
              </div>

              <FigArrow
                label="festes Team — kein Subunternehmer"
                className="absolute -right-6 top-32 hidden lg:flex text-[var(--paper)]/80"
                rotate={8}
                flip
              />

              <div className="absolute -top-12 -left-12 w-28 text-[var(--leaf-soft)]/70 sway pointer-events-none">
                <BotanicalSprig />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
