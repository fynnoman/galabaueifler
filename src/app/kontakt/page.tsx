import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Galabau Eifler in Saarbrücken kontaktieren – per WhatsApp, Telefon oder E-Mail. Kostenlose Erstberatung für Garten- und Landschaftsbau.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt – Galabau Eifler",
    description:
      "Direkter Draht per WhatsApp, Telefon oder E-Mail. Kostenlose Erstberatung in Saarbrücken.",
    url: "https://www.galabau-eifler.de/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
