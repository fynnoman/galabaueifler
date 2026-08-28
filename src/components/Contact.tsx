"use client";

import { motion } from "framer-motion";
import { PlateLabel, BotanicalSeal, BotanicalSprig } from "./Decor";

const WHATSAPP_NUMBER = "4915901776367";
const WHATSAPP_MESSAGE =
  "Hallo Galabau Eifler, ich habe eine Anfrage zu Ihren Leistungen.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative py-24 md:py-32 bg-[var(--paper)] overflow-hidden"
      aria-label="Kontakt"
    >
      <div className="absolute inset-0 architect-grid opacity-20" aria-hidden />
      <div className="absolute inset-0 paper-grain" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <PlateLabel index="08" title="Kontakt" />
            <h2 className="mt-6 display-italic text-[var(--moss)] text-5xl md:text-7xl lg:text-8xl">
              Schreiben Sie uns,
              <br />
              <span className="display-roman not-italic text-[var(--clay)]">
                wir antworten persönlich.
              </span>
            </h2>
          </div>
          <span className="label-mono text-[var(--moss)]/70">Anfrage</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Linke Spalte: Kontakt-Daten als Briefkopf */}
          <address className="lg:col-span-5 not-italic">
            <div className="relative bg-[var(--paper-warm)] border border-[var(--moss)]/25 p-8 md:p-10 shadow-[6px_6px_0_0_var(--paper-shadow)]">
              {/* Stempel */}
              <div className="absolute -top-6 -right-6 w-24 h-24 text-[var(--clay)] hidden md:block">
                <BotanicalSeal label="Galabau Eifler · Saarbrücken" />
              </div>

              <div className="label-mono text-[var(--moss)]/60">Kontakt</div>
              <h3 className="mt-2 font-display italic text-[var(--moss)] text-3xl">
                Galabau Eifler
              </h3>

              <div className="mt-8 space-y-6">
                <ContactRow label="Adresse">
                  Rastbachweg 13<br />
                  66113 Saarbrücken
                </ContactRow>

                <ContactRow label="Telefon">
                  <a
                    href="tel:+4915901776367"
                    className="hover:text-[var(--clay)] transition-colors underline decoration-[var(--moss)]/30 underline-offset-4"
                  >
                    +49 1590 1776367
                  </a>
                </ContactRow>

                <ContactRow label="E-Mail">
                  <a
                    href="mailto:galabau-eifler@gmx.de"
                    className="hover:text-[var(--clay)] transition-colors underline decoration-[var(--moss)]/30 underline-offset-4"
                  >
                    galabau-eifler@gmx.de
                  </a>
                </ContactRow>

                <ContactRow label="Öffnungszeiten">
                  Mo – Fr · 08:00 – 17:00 Uhr<br />
                  Samstag · 08:00 – 13:00 Uhr<br />
                  <span className="font-display italic text-[var(--clay)]">
                    Sonntag — geschlossen
                  </span>
                </ContactRow>
              </div>

              <a
                href="tel:+4915901776367"
                className="mt-10 inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--moss)] text-[var(--paper)] hover:bg-[var(--clay)] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M2 3 C 2 8, 8 14, 13 14 L 14 11 L 11 9 L 9 11 C 6 10, 6 10, 5 7 L 7 5 L 5 2 Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="label-mono">Direkt anrufen</span>
              </a>

              <div className="absolute -bottom-8 -left-8 w-24 text-[var(--leaf)]/60 sway hidden md:block">
                <BotanicalSprig />
              </div>
            </div>

            {/* Karte */}
            <div className="mt-8 relative aspect-[4/3] overflow-hidden border border-[var(--moss)]/25">
              <iframe
                src="https://maps.google.com/maps?q=Rastbachweg%2013%2C%2066113%20Saarbr%C3%BCcken&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px', filter: 'sepia(0.25) hue-rotate(40deg) saturate(0.85)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps – Rastbachweg 13, 66113 Saarbrücken"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rastbachweg+13,+66113+Saarbrücken"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 bg-[var(--clay)] text-[var(--paper)] px-3 py-1.5 label-mono hover:bg-[var(--clay-dark)] transition-colors"
              >
                In Maps öffnen
              </a>
            </div>
          </address>

          {/* Rechte Spalte: WhatsApp-Anfrage */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            <div className="bg-[var(--paper)] border border-[var(--moss)]/30 p-8 md:p-12 shadow-[8px_8px_0_0_var(--paper-shadow)]">
              {/* Kopf */}
              <div className="flex items-baseline justify-between pb-4 border-b border-[var(--moss)]/25">
                <span className="label-mono text-[var(--moss)]/70">Direkter Draht</span>
                <span className="font-display italic text-[var(--clay)]">
                  Saarbrücken, den …
                </span>
              </div>

              <h3 className="mt-8 font-display italic text-[var(--moss)] text-3xl md:text-4xl">
                Am schnellsten per WhatsApp.
              </h3>

              <p className="mt-6 font-body text-[var(--moss)] text-lg md:text-xl leading-relaxed max-w-2xl">
                Schreiben Sie uns Ihr Anliegen — Adresse, Wunschtermin,
                ein paar Fotos vom Garten: Wir antworten in der Regel
                innerhalb weniger Stunden persönlich.
              </p>

              <ul className="mt-8 space-y-3 font-body text-[var(--moss)]/85 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block w-1.5 h-1.5 bg-[var(--clay)]" />
                  Kostenlose Erstberatung
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block w-1.5 h-1.5 bg-[var(--clay)]" />
                  Fotos einfach direkt in den Chat
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block w-1.5 h-1.5 bg-[var(--clay)]" />
                  Antwort innerhalb weniger Stunden
                </li>
              </ul>

              <div className="mt-10 flex items-end justify-between gap-6 border-t border-[var(--moss)]/25 pt-6 flex-wrap">
                <div>
                  <div className="font-hand text-[var(--moss)] text-3xl leading-none">
                    Viele Grüße
                  </div>
                  <div className="label-mono text-[var(--moss)]/60 mt-2">
                    Kevin Eifler · Galabau Eifler
                  </div>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Anfrage per WhatsApp senden"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--clay)] text-[var(--paper)] hover:bg-[var(--clay-dark)] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="label-mono">Per WhatsApp anfragen</span>
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.4" className="group-hover:translate-x-1 transition-transform">
                    <path d="M1 7 H 16 M 11 2 L 16 7 L 11 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <div className="mt-6 label-mono text-[var(--moss)]/60">
                Kein WhatsApp? Rufen Sie uns an oder schreiben Sie eine E-Mail — siehe links.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 items-baseline">
      <div className="label-mono text-[var(--moss)]/60">{label}</div>
      <div className="font-display text-[var(--moss)] text-lg md:text-xl leading-snug">
        {children}
      </div>
    </div>
  );
}
