import Image from "next/image";

export default function About() {
  return (
    <section id="ueber-uns" className="py-16 md:py-24 bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#009746] mb-4 text-center lg:text-left">
                Galabau vom feinsten
              </h2>
              <h3 className="text-3xl lg:text-5xl font-bold text-[#009746] mb-8 text-center lg:text-left">
                MEHR ZU GALABAU EIFLER
              </h3>
              <div className="space-y-6 text-lg text-[#009746]/80 leading-relaxed">
                <p>
                  Seit über 10 Jahren sind wir Ihr zuverlässiger Partner für 
                  Garten- und Landschaftsbau in der Region.
                </p>
                <p>
                  Mit einem erfahrenen Team und modernster Technik setzen wir 
                  Ihre Wünsche professionell um – von der Planung bis zur 
                  vollständigen Umsetzung.
                </p>
                <p>
                  Qualität, Pünktlichkeit und Kundenzufriedenheit stehen bei 
                  uns an erster Stelle.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card positioned absolutely to reach screen edge */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div 
            className="relative h-[350px] lg:h-[420px] mt-[15px] overflow-hidden" 
            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 45% 100%)' }}
          >
            <Image
              src="/3BAF90DD-E8D5-45E1-B15A-F3CD36A9F32F_1_105_c.jpeg"
              alt="Galabau Eifler Team bei der Gartenarbeit in Saarbrücken"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Mobile version */}
        <div className="lg:hidden mt-8 mx-4">
          <div 
            className="relative h-[250px] mt-[15px] overflow-hidden rounded-xl"
          >
            <Image
              src="/3BAF90DD-E8D5-45E1-B15A-F3CD36A9F32F_1_105_c.jpeg"
              alt="Galabau Eifler Team bei der Gartenarbeit in Saarbrücken"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
