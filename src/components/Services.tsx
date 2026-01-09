export default function Services() {
  const services = [
    {
      title: "GARTENGESTALTUNG",
      description: "Individuelle Planung und Umsetzung Ihrer Gartenträume",
    },
    {
      title: "PFLASTERARBEITEN",
      description: "Hochwertige Pflasterung von Wegen, Einfahrten und Terrassen",
    },
    {
      title: "BAUMPFLEGE",
      description: "Professioneller Baumschnitt und Baumpflege",
    },
    {
      title: "RASENPFLEGE",
      description: "Neuanlage und Pflege von Rasenflächen",
    },
    {
      title: "ZAUNBAU",
      description: "Planung und Montage von Zäunen und Sichtschutz",
    },
    {
      title: "WINTERDIENST",
      description: "Zuverlässiger Räum- und Streudienst in der kalten Jahreszeit",
    },
  ];

  return (
    <section id="leistungen" className="py-24 bg-[#AFCA1F]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-bold text-[#009746] mb-16 text-center">
          UNSERE LEISTUNGEN
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="border-l-4 border-[#009746] pl-6 bg-white/30 backdrop-blur-md p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-[#009746] mb-3">
                {service.title}
              </h3>
              <p className="text-[#009746]/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
