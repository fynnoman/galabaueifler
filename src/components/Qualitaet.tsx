import Image from "next/image";

export default function Qualitaet() {
  const qualities = [
    {
      number: "01",
      title: "Fachkompetenz",
      description:
        "Ausgebildete Fachkräfte mit jahrelanger Erfahrung im Garten- und Landschaftsbau. Jedes Projekt wird mit höchster Sorgfalt und Präzision umgesetzt.",
    },
    {
      number: "02",
      title: "Individuelle Beratung",
      description:
        "Persönliche Beratung vor Ort und maßgeschneiderte Lösungen für Ihren Garten. Wir hören zu und planen gemeinsam mit Ihnen.",
    },
    {
      number: "03",
      title: "Hochwertige Materialien",
      description:
        "Wir verwenden ausschließlich geprüfte, langlebige Materialien von regionalen Lieferanten – für Ergebnisse, die Bestand haben.",
    },
    {
      number: "04",
      title: "Termintreue",
      description:
        "Zuverlässige Planung und pünktliche Umsetzung. Wir halten, was wir versprechen – termingerecht und im vereinbarten Rahmen.",
    },
    {
      number: "05",
      title: "Sauberkeit & Ordnung",
      description:
        "Nach Abschluss der Arbeiten hinterlassen wir Ihr Grundstück sauber und aufgeräumt. Respekt vor Ihrem Eigentum ist selbstverständlich.",
    },
    {
      number: "06",
      title: "Faire Preise",
      description:
        "Transparente Kostenaufstellung ohne versteckte Zusatzkosten. Sie erhalten ein faires Angebot, das Qualität und Preis in Einklang bringt.",
    },
  ];

  return (
    <section
      id="qualitaet"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="qualitaet-heading"
    >
      <div className="mx-auto max-w-[1536px] px-6 lg:px-8">
        <h2
          id="qualitaet-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#009746] text-center"
        >
          UNSER QUALITÄTSVERSPRECHEN
        </h2>
        <p className="text-center text-neutral-500 mb-16 md:mb-20 text-base md:text-lg max-w-2xl mx-auto">
          Was uns auszeichnet – und warum unsere Kunden uns vertrauen
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {qualities.map((item, index) => (
            <div key={index} className="group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-5xl md:text-6xl font-bold text-neutral-200 group-hover:text-[#AFCA1F] transition-colors duration-300">
                  {item.number}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
                  {item.title}
                </h3>
              </div>
              <div className="w-12 h-1 bg-[#009746] mb-4" />
              <p className="text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <a
            href="/#kontakt"
            className="inline-block bg-[#009746] text-white px-10 py-4 text-sm font-bold hover:bg-[#007a38] transition-colors"
          >
            JETZT BERATEN LASSEN
          </a>
        </div>
      </div>
    </section>
  );
}
