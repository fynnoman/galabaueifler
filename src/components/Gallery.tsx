export default function Gallery() {
  const images = [
    { title: "Gartengestaltung", placeholder: "Gestalteter Garten" },
    { title: "Pflasterarbeiten", placeholder: "Gepflasterte Einfahrt" },
    { title: "Terrasse", placeholder: "Moderne Terrasse" },
    { title: "Rasenpflege", placeholder: "Perfekter Rasen" },
    { title: "Zaunbau", placeholder: "Moderner Zaun" },
    { title: "Baumpflege", placeholder: "Professioneller Baumschnitt" },
  ];

  return (
    <section id="galerie" className="py-24 bg-[#AFCA1F]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-bold text-[#009746] mb-16">
          REFERENZEN
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group">
              <div className="bg-[#009746] h-64 mb-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
                  [Bild: {image.placeholder}]
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#009746]">
                {image.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
