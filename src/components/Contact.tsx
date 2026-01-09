"use client";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-white text-[#009746]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-bold mb-16 text-center">
          KONTAKT
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-3">GALA BAUER GMBH</h3>
              <div className="space-y-1 text-2xl">
                <p>Rastbachweg 13</p>
                <p>66113 Saarbrücken</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-3">TELEFON</h3>
              <a href="tel:+49123456789" className="hover:opacity-80 text-2xl">
                +49 (0) 123 456789
              </a>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-3">E-MAIL</h3>
              <a href="mailto:info@gala-bauer.de" className="hover:opacity-80 text-2xl">
                info@gala-bauer.de
              </a>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-3">ÖFFNUNGSZEITEN</h3>
              <div className="space-y-1 text-2xl">
                <p>Montag - Freitag: 7:00 - 17:00 Uhr</p>
                <p>Samstag: 8:00 - 13:00 Uhr</p>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="tel:+49123456789" 
                className="inline-block bg-[#009746] text-white px-10 py-4 text-xl font-bold rounded-lg hover:bg-[#006835] transition-all hover:scale-105"
              >
                JETZT ANRUFEN
              </a>
            </div>
          </div>
          
          {/* Map */}
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden backdrop-blur-md bg-white/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.0596870861745!2d6.988841376702756!3d49.22977827139789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b6c6f6f6f6f7%3A0x1234567890abcdef!2sRastbachweg%2013%2C%2066113%20Saarbr%C3%BCcken!5e0!3m2!1sde!2sde!4v1704800000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Rastbachweg 13, 66113 Saarbrücken"
              className="rounded-2xl"
            ></iframe>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rastbachweg+13,+66113+Saarbrücken"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-[#AFCA1F] text-[#009746] px-4 py-2 text-sm font-bold hover:bg-[#9db51b] transition-colors rounded-lg"
            >
              IN GOOGLE MAPS ÖFFNEN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
