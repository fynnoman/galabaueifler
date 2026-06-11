"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { href: "/#leistungen", label: "Leistungen", num: "I" },
  { href: "/#ueber-uns",  label: "Über uns",   num: "II" },
  { href: "/#galerie",    label: "Katalog",    num: "III" },
  { href: "/#vorher-nachher", label: "Vor & Nach", num: "IV" },
  { href: "/#qualitaet",  label: "Tugenden",   num: "V" },
  { href: "/#faq",        label: "Fragen",     num: "VI" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* dünner Mono-Strip ganz oben */}
      <div
        className={`transition-all duration-500 border-b border-[var(--moss)]/15 ${
          scrolled ? "bg-[var(--paper)]/85 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1480px] px-4 md:px-8 py-2 flex items-center justify-between">
          <span className="label-mono text-[var(--moss)]/70">
            Saarbrücken · 66113 · Mo–Fr 08:00 – 17:00
          </span>
          <a
            href="tel:+4915901776367"
            className="label-mono text-[var(--clay)] hover:text-[var(--clay-dark)] transition-colors hidden md:inline"
          >
            +49 1590 1776367
          </a>
        </div>
      </div>

      {/* Haupt-Nav */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[var(--paper)]/95 backdrop-blur-md border-b border-[var(--moss)]/15"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Hauptnavigation"
          className="mx-auto max-w-[1480px] px-4 md:px-8 py-3 md:py-4 flex items-center justify-between"
        >
          {/* Brandmark */}
          <a href="/" className="flex items-center gap-3 group" aria-label="Galabau Eifler – Startseite">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/F596091D-F9EA-4E77-8A3E-B0D535C72828.png"
                alt="Galabau Eifler Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="leading-none">
              <div className="font-display text-[var(--moss)] text-lg md:text-xl italic font-medium tracking-tight">
                Galabau Eifler
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative inline-flex items-center gap-2 text-[var(--moss)] hover:text-[var(--clay)] transition-colors"
                >
                  <span className="label-mono text-[var(--clay)]/80 group-hover:text-[var(--clay)]">
                    {item.num}
                  </span>
                  <span className="font-display italic text-base">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-1 left-6 right-0 h-px bg-[var(--clay)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="/#kontakt"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[var(--clay)] text-[var(--paper)] hover:bg-[var(--clay-dark)] transition-colors label-mono"
            >
              Anfrage
              <span aria-hidden>→</span>
            </a>

            {/* Mobile-Toggle */}
            <button
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-[var(--moss)]/30 text-[var(--moss)]"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
                {open ? (
                  <path d="M 4 4 L 16 16 M 16 4 L 4 16" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M2 5 H 18" />
                    <path d="M2 10 H 18" />
                    <path d="M2 15 H 18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile-Menü */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden bg-[var(--paper)] border-b border-[var(--moss)]/20 shadow-[0_30px_60px_-30px_rgba(27,51,40,0.3)]"
          >
            <ul className="mx-auto max-w-[1480px] px-6 py-6 grid gap-1">
              {NAV.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-3 border-b border-[var(--moss)]/10"
                  >
                    <span className="label-mono text-[var(--clay)] w-8">{item.num}</span>
                    <span className="font-display italic text-2xl text-[var(--moss)]">
                      {item.label}
                    </span>
                    <span className="ml-auto label-mono text-[var(--moss)]/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
                </li>
              ))}
              <a
                href="tel:+4915901776367"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[var(--clay)] text-[var(--paper)] label-mono"
              >
                Direkt anrufen — +49 1590 1776367
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
