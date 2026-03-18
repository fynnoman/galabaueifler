import Image from "next/image";

export default function Gallery() {
  const images = [
    "/A3A87027-B286-43A9-8B83-CF8B100B4477_1_105_c.jpeg",
    "/26C2764C-810A-42F3-8AC0-530A26973299_1_105_c.jpeg",
    "/3BAF90DD-E8D5-45E1-B15A-F3CD36A9F32F_1_105_c.jpeg",
    "/26EAA02B-5C07-4E25-8867-D20BCFF5AD20_1_105_c.jpeg",
    "/F9AB677B-405D-4753-85E1-06C67DFB3A2F_1_105_c.jpeg",
    "/F56A73C4-F91B-4963-A869-9F38B18F443E_1_105_c.jpeg",
  ];

  return (
    <section id="galerie" className="py-16 md:py-24 relative w-full max-w-[1512px] min-h-[600px] lg:min-h-[982px] mx-auto overflow-hidden">
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/C69E0D59-E346-4D8C-B36B-F4922BDFC02E_1_201_a.jpeg"
          alt="Referenzen Background"
          fill
          className="object-cover opacity-[0.82]"
        />
      </div>
      <div className="px-4 md:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#009746] mb-8 md:mb-16 text-center">
          REFERENZEN
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
          {images.map((src, index) => (
            <div key={index} className="group bg-white/30 backdrop-blur-md p-4 md:p-8 rounded-2xl">
              <div className="h-48 md:h-64 overflow-hidden relative rounded-xl">
                <Image
                  src={src}
                  alt={`Referenz ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
