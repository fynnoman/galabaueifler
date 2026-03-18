import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Galabau Eifler GmbH – Informationen zum Datenschutz gemäß DSGVO.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-bold mb-16 text-[#009746] text-center">
            DATENSCHUTZERKLÄRUNG
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            {/* 1. Datenschutz auf einen Blick */}
            <section>
              <h2 className="text-2xl font-bold text-[#009746] mb-4">
                1. Datenschutz auf einen Blick
              </h2>

              <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                werden können.
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Datenerfassung auf dieser Website
              </h3>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen
                Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>
              <p className="mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen
                (z.&nbsp;B. durch Eingabe in ein Kontaktformular oder per E-Mail). Andere Daten
                werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
                unsere IT-Systeme erfasst (z.&nbsp;B. Internetbrowser, Betriebssystem oder
                Uhrzeit des Seitenaufrufs).
              </p>
            </section>

            {/* 2. Allgemeine Hinweise und Pflichtinformationen */}
            <section>
              <h2 className="text-2xl font-bold text-[#009746] mb-4">
                2. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="text-xl font-semibold mb-2">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold">Galabau Eifler GmbH</p>
                <p>Kevin Eifler</p>
                <p>Rastbachweg 13</p>
                <p>66113 Saarbrücken</p>
                <p className="mt-2">
                  Telefon:{" "}
                  <a
                    href="tel:+4915901776367"
                    className="text-[#009746] hover:underline"
                  >
                    +49 1590 1776367
                  </a>
                </p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:info@gala-bauer.de"
                    className="text-[#009746] hover:underline"
                  >
                    info@gala-bauer.de
                  </a>
                </p>
              </div>
              <p className="mb-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein
                oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                personenbezogenen Daten entscheidet.
              </p>

              <h3 className="text-xl font-semibold mb-2">Speicherdauer</h3>
              <p className="mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
                genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck
                für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen
                geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden
                Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
                die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder
                handelsrechtliche Aufbewahrungsfristen).
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Ihre Rechte: Auskunft, Löschung und Berichtigung
              </h3>
              <p className="mb-4">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht
                auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten,
                deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein
                Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren
                Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </h3>
              <p className="mb-4">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
                Beschwerderecht bei einer Aufsichtsbehörde zu. Für das Saarland ist dies das
                Unabhängige Datenschutzzentrum Saarland.
              </p>
            </section>

            {/* 3. Datenerfassung auf dieser Website */}
            <section>
              <h2 className="text-2xl font-bold text-[#009746] mb-4">
                3. Datenerfassung auf dieser Website
              </h2>

              <h3 className="text-xl font-semibold mb-2">
                Hosting und Server-Log-Dateien
              </h3>
              <p className="mb-4">
                Wir hosten unsere Website bei einem externen Dienstleister (Hoster). Der
                Provider der Seiten erhebt und speichert automatisch Informationen in so
                genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
                Dies sind:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mb-4">
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO. Wir haben ein berechtigtes Interesse an der technisch fehlerfreien
                Darstellung und der Optimierung unserer Website.
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Anfragen per E-Mail, Telefon oder Kontaktformular
              </h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, wird Ihre
                Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name,
                Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und
                verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt
                (z.&nbsp;B. Angebot für Gartenarbeiten) oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
                unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Cookies und lokale Speicherung
              </h3>
              <p className="mb-4">
                Unsere Internetseiten verwenden teilweise sogenannte &quot;Cookies&quot; oder
                vergleichbare Technologien (z.&nbsp;B. Local Storage). Soweit technisch
                notwendige Cookies eingesetzt werden, erfolgt dies auf Grundlage von § 25
                Abs. 2 TDDDG (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz) in
                Verbindung mit Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Stand:</strong> März 2026
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
