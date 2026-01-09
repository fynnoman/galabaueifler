import Image from "next/image";

export default function Gallery() {
  const images = [
    { title: "Gartengestaltung", placeholder: "Gestalteter Garten" },
    { title: "Pflasterarbeiten", placeholder: "Gepflasterte Einfahrt" },
    { title: "Terrasse & Außenanlagen", placeholder: "Moderne Terrasse" },
    { title: "Gartengestaltung", placeholder: "Gestalteter Garten" },
    { title: "Pflasterarbeiten", placeholder: "Gepflasterte Einfahrt" },
    { title: "Terrasse & Außenanlagen", placeholder: "Moderne Terrasse" },
  ];

  return (
    <section id="galerie" className="py-24 relative w-[1512px] h-[982px] mx-auto overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/C69E0D59-E346-4D8C-B36B-F4922BDFC02E_1_201_a.jpeg"
          alt="Referenzen Background"
          fill
          className="object-cover opacity-[0.82]"
        />
      </div>
      <div className="px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl lg:text-6xl font-bold text-[#009746] mb-16 text-center">
          REFERENZEN
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="group bg-white/30 backdrop-blur-md p-8 rounded-2xl">
              <div className="bg-[#009746] h-64 mb-6 overflow-hidden relative rounded-xl">
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg">
                  [Bild: {image.placeholder}]
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#009746]">
                {image.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
