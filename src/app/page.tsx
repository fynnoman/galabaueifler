import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Preise from "@/components/Preise";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://gala-bauer.de/#business",
    name: "Galabau Eifler GmbH",
    description:
      "Professioneller Garten- und Landschaftsbau in Saarbrücken. Gartengestaltung, Pflasterarbeiten, Baumpflege und mehr.",
    url: "https://gala-bauer.de",
    telephone: "+4915901776367",
    email: "info@gala-bauer.de",
    image: "https://gala-bauer.de/A05AD9BA-404A-414C-99BB-17DC84F67782.png",
    logo: "https://gala-bauer.de/F596091D-F9EA-4E77-8A3E-B0D535C72828.png",
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
        opens: "07:00",
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
        name: "Bieten Sie auch Winterdienst an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wir bieten einen zuverlässigen Winterdienst für Privat- und Geschäftskunden an. Kontaktieren Sie uns für weitere Informationen.",
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
        name: "Erstellen Sie 3D-Visualisierungen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, für größere Projekte erstellen wir gerne 3D-Visualisierungen, damit Sie sich vorab ein genaues Bild vom fertigen Garten machen können.",
        },
      },
      {
        "@type": "Question",
        name: "Arbeiten Sie auch an Wochenenden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nach Absprache führen wir auch Arbeiten an Wochenenden durch. Dies ist besonders bei dringenden Projekten oder wenn Sie unter der Woche nicht verfügbar sind möglich.",
        },
      },
      {
        "@type": "Question",
        name: "Benötige ich eine Baugenehmigung?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das hängt vom Umfang der Arbeiten ab. Bei größeren Umgestaltungen oder Baumaßnahmen beraten wir Sie gerne zu den rechtlichen Anforderungen und unterstützen bei Behördengängen.",
        },
      },
      {
        "@type": "Question",
        name: "Bieten Sie eine Garantie auf Ihre Arbeiten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wir bieten eine Gewährleistung nach gesetzlichen Vorgaben. Zusätzlich stehen wir auch nach Projektabschluss für Fragen und Nachbesserungen zur Verfügung.",
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
        item: "https://gala-bauer.de",
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
      <div className="min-h-screen bg-white">
        <Header />
        <main id="main-content">
          <h1 className="sr-only">
            Galabau Eifler – Garten- und Landschaftsbau in Saarbrücken
          </h1>
          <Hero />
          <Services />
          <About />
          <Gallery />
          <Preise />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
