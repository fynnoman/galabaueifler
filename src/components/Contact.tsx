"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PlateLabel, BotanicalSeal, BotanicalSprig } from "./Decor";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    nachricht: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/anfragen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", telefon: "", nachricht: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
            <PlateLabel index="VIII" title="Korrespondenz" />
            <h2 className="mt-6 display-italic text-[var(--moss)] text-5xl md:text-7xl lg:text-8xl">
              Schreiben Sie uns,
              <br />
              <span className="display-roman not-italic text-[var(--clay)]">
                wir antworten persönlich.
              </span>
            </h2>
          </div>
          <span className="label-mono text-[var(--moss)]/70">№ 06 / VII</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Linke Spalte: Kontakt-Daten als Briefkopf */}
          <address className="lg:col-span-5 not-italic">
            <div className="relative bg-[var(--paper-warm)] border border-[var(--moss)]/25 p-8 md:p-10 shadow-[6px_6px_0_0_var(--paper-shadow)]">
              {/* Stempel */}
              <div className="absolute -top-6 -right-6 w-24 h-24 text-[var(--clay)] hidden md:block">
                <BotanicalSeal label="Atelier · Galabau Eifler" />
              </div>

              <div className="label-mono text-[var(--moss)]/60">Absender</div>
              <h3 className="mt-2 font-display italic text-[var(--moss)] text-3xl">
                Galabau Eifler
              </h3>

              <div className="mt-8 space-y-6">
                <ContactRow label="Werkstatt">
                  Rastbachweg 13<br />
                  66113 Saarbrücken
                </ContactRow>

                <ContactRow label="Fernsprecher">
                  <a
                    href="tel:+4915901776367"
                    className="hover:text-[var(--clay)] transition-colors underline decoration-[var(--moss)]/30 underline-offset-4"
                  >
                    +49 1590 1776367
                  </a>
                </ContactRow>

                <ContactRow label="Schreiben">
                  <a
                    href="mailto:galabau-eifler@gmx.de"
                    className="hover:text-[var(--clay)] transition-colors underline decoration-[var(--moss)]/30 underline-offset-4"
                  >
                    galabau-eifler@gmx.de
                  </a>
                </ContactRow>

                <ContactRow label="Sprechzeiten">
                  Mo – Fr · 08:00 – 17:00 Uhr<br />
                  Samstag · 08:00 – 13:00 Uhr<br />
                  <span className="font-display italic text-[var(--clay)]">
                    Sonntag — Ruhetag
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.0596870861745!2d6.988841376702756!3d49.22977827139789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b6c6f6f6f6f7%3A0x1234567890abcdef!2sRastbachweg%2013%2C%2066113%20Saarbr%C3%BCcken!5e0!3m2!1sde!2sde!4v1704800000000!5m2!1sde!2sde"
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

          {/* Rechte Spalte: Brief-Formular */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 relative"
          >
            <div className="bg-[var(--paper)] border border-[var(--moss)]/30 p-8 md:p-12 shadow-[8px_8px_0_0_var(--paper-shadow)]">
              {/* Briefkopf */}
              <div className="flex items-baseline justify-between pb-4 border-b border-[var(--moss)]/25">
                <span className="label-mono text-[var(--moss)]/70">Brief № — Anfrage</span>
                <span className="font-display italic text-[var(--clay)]">
                  Saarbrücken, den …
                </span>
              </div>

              <h3 className="mt-8 font-display italic text-[var(--moss)] text-3xl md:text-4xl">
                Sehr geehrte Galabau Eifler,
              </h3>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field
                  id="contact-name"
                  label="Mein Name ist"
                  required
                  value={formData.name}
                  onChange={(v) => setFormData({ ...formData, name: v })}
                  placeholder="Vor- und Nachname"
                />
                <Field
                  id="contact-email"
                  label="Erreichbar unter"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(v) => setFormData({ ...formData, email: v })}
                  placeholder="ihre@email.de"
                />
              </div>

              <div className="mt-6">
                <Field
                  id="contact-telefon"
                  label="oder telefonisch (optional)"
                  type="tel"
                  value={formData.telefon}
                  onChange={(v) => setFormData({ ...formData, telefon: v })}
                  placeholder="Ihre Telefonnummer"
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="contact-nachricht"
                  className="label-mono text-[var(--moss)]/70 block mb-2"
                >
                  Ich schreibe Ihnen wegen *
                </label>
                <textarea
                  id="contact-nachricht"
                  required
                  rows={6}
                  value={formData.nachricht}
                  onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-[var(--moss)]/30 px-0 py-3 font-display italic text-[var(--moss)] text-xl md:text-2xl placeholder:text-[var(--moss)]/30 focus:outline-none focus:border-[var(--clay)] resize-none transition-colors"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(27,51,40,0.12) 35px, rgba(27,51,40,0.12) 36px)",
                    backgroundPositionY: "10px",
                    lineHeight: "36px",
                  }}
                  placeholder="… mein Garten, Pflasterarbeiten, eine Beratung …"
                />
              </div>

              {status === "success" && (
                <div className="mt-6 border border-[var(--leaf)] bg-[var(--paper-warm)] p-4 font-display italic text-[var(--moss)]">
                  Vielen Dank — Ihre Nachricht ist auf dem Werkstatttisch gelandet.
                  Wir melden uns binnen 48 Stunden persönlich.
                </div>
              )}
              {status === "error" && (
                <div className="mt-6 border border-[var(--clay)] bg-[var(--paper-warm)] p-4 font-display italic text-[var(--clay-dark)]">
                  Etwas ist schiefgelaufen. Bitte versuchen Sie es noch einmal
                  oder rufen Sie uns direkt an.
                </div>
              )}

              <div className="mt-10 flex items-end justify-between gap-6 border-t border-[var(--moss)]/25 pt-6 flex-wrap">
                <div>
                  <div className="font-hand text-[var(--moss)] text-3xl leading-none">
                    Mit freundlichem Gruß
                  </div>
                  <div className="label-mono text-[var(--moss)]/60 mt-2">
                    * Pflichtfelder · Daten werden vertraulich behandelt
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--clay)] text-[var(--paper)] hover:bg-[var(--clay-dark)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="label-mono">
                    {status === "sending" ? "wird gesendet …" : "Brief abschicken"}
                  </span>
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.4" className="group-hover:translate-x-1 transition-transform">
                    <path d="M1 7 H 16 M 11 2 L 16 7 L 11 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.form>
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

function Field({
  id,
  label,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="label-mono text-[var(--moss)]/70 block mb-2">
        {label}
        {required && " *"}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-[var(--moss)]/30 px-0 py-3 font-display italic text-[var(--moss)] text-xl placeholder:text-[var(--moss)]/30 focus:outline-none focus:border-[var(--clay)] transition-colors"
      />
    </div>
  );
}
