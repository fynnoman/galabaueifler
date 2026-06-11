import Image from "next/image";
import { BotanicalSeal, VineDivider } from "./Decor";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--moss)] text-[var(--paper)] overflow-hidden" role="contentinfo">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--paper) 1px, transparent 1px), linear-gradient(to bottom, var(--paper) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 paper-grain opacity-30" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 md:px-12 pt-20 md:pt-28 pb-10">
        {/* Mega-Schriftzug */}
        <div className="relative">
          <div className="display-italic text-[var(--paper)] text-[18vw] sm:text-[14vw] lg:text-[180px] leading-[0.86] tracking-tight">
            <span>Galabau</span>
            <br />
            <span className="display-roman not-italic text-[var(--clay)] pl-[1.5em]">Eifler.</span>
          </div>

          <div className="absolute right-0 bottom-2 hidden md:block w-36 h-36 text-[var(--clay)]/90">
            <BotanicalSeal label="Galabau Eifler · Atelier · Saarbrücken" />
          </div>
        </div>

        <p className="mt-12 max-w-2xl font-display italic text-[var(--paper)]/85 text-2xl md:text-3xl leading-snug">
          Garten- und Landschaftsbau aus Saarbrücken — geplant, gebaut und
          gepflegt mit der eigenen Hand.
        </p>

        <VineDivider className="mt-16 [&_div]:!bg-[var(--paper)]/30 text-[var(--paper)]/80" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand-Block */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/F596091D-F9EA-4E77-8A3E-B0D535C72828.png"
                  alt="Galabau Eifler Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-display italic text-[var(--paper)] text-xl">
                  Galabau Eifler GmbH
                </div>
                <div className="label-mono text-[var(--paper)]/60">
                  est. MMXIV · Saarbrücken
                </div>
              </div>
            </div>

            <p className="mt-6 font-body text-[var(--paper)]/75 text-base leading-relaxed max-w-sm">
              Rastbachweg 13 · 66113 Saarbrücken
            </p>
            <a
              href="tel:+4915901776367"
              className="inline-block mt-3 font-display italic text-[var(--paper)] text-xl hover:text-[var(--clay)] transition-colors"
            >
              +49 1590 1776367
            </a>
            <br />
            <a
              href="mailto:galabau-eifler@gmx.de"
              className="inline-block mt-2 font-display italic text-[var(--paper)] text-lg hover:text-[var(--clay)] transition-colors"
            >
              galabau-eifler@gmx.de
            </a>
          </div>

          <nav aria-label="Footer-Links" className="md:col-span-4">
            <div className="label-mono text-[var(--clay)]/90 mb-4">Atelier</div>
            <ul className="space-y-2 font-display italic text-[var(--paper)]/85 text-lg">
              <li><a href="#leistungen" className="hover:text-[var(--clay)] transition-colors">Leistungen</a></li>
              <li><a href="#ueber-uns" className="hover:text-[var(--clay)] transition-colors">Über uns</a></li>
              <li><a href="#galerie" className="hover:text-[var(--clay)] transition-colors">Katalog</a></li>
              <li><a href="#vorher-nachher" className="hover:text-[var(--clay)] transition-colors">Vor & Nach</a></li>
              <li><a href="#qualitaet" className="hover:text-[var(--clay)] transition-colors">Tugenden</a></li>
              <li><a href="#kontakt" className="hover:text-[var(--clay)] transition-colors">Kontakt</a></li>
            </ul>
          </nav>

          <nav aria-label="Rechtliche Links" className="md:col-span-4">
            <div className="label-mono text-[var(--clay)]/90 mb-4">Rechtliches</div>
            <ul className="space-y-2 font-display italic text-[var(--paper)]/85 text-lg">
              <li><a href="/impressum" className="hover:text-[var(--clay)] transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-[var(--clay)] transition-colors">Datenschutz</a></li>
            </ul>

            <div className="mt-8 font-hand text-[var(--paper)]/70 text-xl leading-snug">
              „Ein Garten ist kein Produkt — er ist ein Versprechen, das mit den
              Jahren wächst."
            </div>
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--paper)]/20 flex flex-wrap items-center justify-between gap-4">
          <p className="label-mono text-[var(--paper)]/60">
            © {new Date().getFullYear()} Galabau Eifler GmbH — Alle Rechte vorbehalten
          </p>
          <p className="label-mono text-[var(--paper)]/50">
            designed by{" "}
            <a
              href="https://fylumarketing.de"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--clay)] transition-colors"
            >
              fylu — marketing
            </a>
          </p>
        </div>
      </div>

      {/* Unsichtbarer Link, sehr klein platziert */}
      <a
        href="https://www.taskeyapp.com"
        tabIndex={-1}
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        taskey
      </a>
    </footer>
  );
}
