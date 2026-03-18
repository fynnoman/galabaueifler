import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der Galabau Eifler GmbH – Angaben gemäß § 5 DDG.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-bold mb-16 text-[#009746] text-center">
            IMPRESSUM
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#009746] mb-4">
                Angaben gemäß § 5 DDG
              </h2>
              <p>
                Galabau Eifler GmbH
                <br />
                Rastbachweg 13
                <br />
                66113 Saarbrücken
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#009746] mb-4">
                Vertreten durch
              </h2>
              <p>Geschäftsführer: Kevin Eifler</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#009746] mb-4">
                Kontakt
              </h2>
              <p>
                Telefon:{" "}
                <a
                  href="tel:+4915901776367"
                  className="text-[#009746] hover:underline"
                >
                  +49 1590 1776367
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@gala-bauer.de"
                  className="text-[#009746] hover:underline"
                >
                  info@gala-bauer.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#009746] mb-4">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
                <br />
                Kann auf Anfrage bereitgestellt werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#009746] mb-4">
                Zuständige Kammer
              </h2>
              <p>
                Industrie- und Handelskammer des Saarlandes
                <br />
                Franz-Josef-Röder-Straße 9
                <br />
                66119 Saarbrücken
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#009746] mb-4">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
