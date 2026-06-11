import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import Qualitaet from "@/components/Qualitaet";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.galabaueifler.de/#business",
    name: "Galabau Eifler GmbH",
    description:
      "Professioneller Garten- und Landschaftsbau in Saarbrücken. Gartengestaltung, Pflasterarbeiten, Baumpflege und mehr.",
    url: "https://www.galabaueifler.de",
    telephone: "+4915901776367",
    email: "galabau-eifler@gmx.de",
    image: "https://www.galabaueifler.de/A05AD9BA-404A-414C-99BB-17DC84F67782.png",
    logo: "https://www.galabaueifler.de/F596091D-F9EA-4E77-8A3E-B0D535C72828.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rastbachweg 13",
      addressLocality: "Saarbrücken",
      postalCode: "66113",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.2298,
      longitude: 6.9888,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    priceRange: "€€",
    areaServed: {
      "@type": "City",
      name: "Saarbrücken",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wie läuft ein Projekt ab?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nach einer kostenlosen Erstberatung erstellen wir ein individuelles Angebot. Nach Auftragserteilung planen wir gemeinsam mit Ihnen die Details und setzen das Projekt professionell um.",
        },
      },
      {
        "@type": "Question",
        name: "Wie lange dauert die Umsetzung?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Dauer hängt vom Umfang des Projekts ab. Kleinere Arbeiten können oft innerhalb weniger Tage abgeschlossen werden, größere Projekte benötigen entsprechend mehr Zeit.",
        },
      },
      {
        "@type": "Question",
        name: "Übernehmen Sie auch die Pflege nach der Fertigstellung?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wir bieten regelmäßige Gartenpflege an. Von der wöchentlichen Rasenpflege bis zur jährlichen Baumpflege - wir kümmern uns um Ihren Garten.",
        },
      },
      {
        "@type": "Question",
        name: "Arbeiten Sie auch an Wochenenden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Samstags sind wir nach Absprache im Einsatz. Sonntags führen wir keine Arbeiten durch.",
        },
      },
      {
        "@type": "Question",
        name: "Benötige ich eine Baugenehmigung?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das hängt vom Umfang der Arbeiten ab. Bei größeren Umgestaltungen oder Baumaßnahmen beraten wir Sie gerne zu den rechtlichen Anforderungen.",
        },
      },
      {
        "@type": "Question",
        name: "Können Sie auch bestehende Gärten umgestalten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Selbstverständlich! Wir übernehmen sowohl komplette Neuanlagen als auch die Umgestaltung und Modernisierung bestehender Gärten.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: "https://www.galabaueifler.de",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema />
      <BreadcrumbSchema />
      <div className="min-h-screen bg-[var(--paper)]">
        <Header />
        <main id="main-content">
          <h1 className="sr-only">
            Galabau Eifler – Professioneller Garten- und Landschaftsbau in Saarbrücken
          </h1>
          <Hero />
          <Services />
          <About />
          <Gallery />
          <BeforeAfter />
          <Qualitaet />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
