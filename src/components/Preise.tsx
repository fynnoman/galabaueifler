import Image from "next/image";

export default function Preise() {
  const pricePackages = [
    {
      title: "Gartenplanung",
      description: "Professionelle Planung Ihres Traumgartens",
      features: [
        "Persönliche Beratung vor Ort",
        "Maßaufnahme",
        "2D-Planzeichnung",
        "Pflanzenauswahl",
        "Materialvorschläge"
      ],
      price: "ab 500€"
    },
    {
      title: "Neuanlage",
      description: "Komplette Gartengestaltung",
      features: [
        "Komplette Planung inklusive",
        "Erdarbeiten",
        "Wegebau",
        "Pflanzungen",
        "Rasenflächen",
        "Bewässerungssystem"
      ],
      price: "auf Anfrage"
    },
    {
      title: "Gartenpflege",
      description: "Regelmäßige Pflege Ihres Gartens",
      features: [
        "Rasenmähen",
        "Heckenschnitt",
        "Unkrautentfernung",
        "Laub entfernen",
        "Beetpflege"
      ],
      price: "ab 45€/Std"
    }
  ];

  return (
    <section id="preise" className="py-24 bg-white relative w-[1512px] h-[982px] mx-auto overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/93487AE7-643B-448C-8A28-677484BBA096_1_201_a.jpeg"
          alt="Preise Background"
          fill
          className="object-cover opacity-[0.82]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl lg:text-6xl font-bold mb-16 text-[#009746] text-center">
          PREISE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricePackages.map((pkg, index) => (
            <div
              key={index}
              className="border-l-4 border-[#009746] bg-white/30 backdrop-blur-md p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-2 text-[#009746]">
                {pkg.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {pkg.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#AFCA1F] mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-gray-200">
                <p className="text-3xl font-bold text-[#009746]">
                  {pkg.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Alle Preise verstehen sich zzgl. MwSt. Gerne erstellen wir Ihnen ein individuelles Angebot.
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-[#AFCA1F] text-[#009746] px-8 py-4 text-sm font-bold hover:bg-[#9db51b] transition-colors"
          >
            JETZT ANFRAGEN
          </a>
        </div>
      </div>
    </section>
  );
}
