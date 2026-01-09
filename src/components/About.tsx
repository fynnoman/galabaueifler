export default function About() {
  return (
    <section id="ueber-uns" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#009746] mb-8 text-center lg:text-left">
              ÜBER UNS
            </h2>
            <div className="space-y-6 text-lg text-[#009746]/80 leading-relaxed">
              <p>
                Seit über 20 Jahren sind wir Ihr zuverlässiger Partner für 
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
          
          <div className="bg-[#009746] h-[400px] lg:h-[500px] relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/30">
            {/* Placeholder for image */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
              [Bild: Team bei der Arbeit]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
