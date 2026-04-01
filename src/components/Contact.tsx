"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    nachricht: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/anfragen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", telefon: "", nachricht: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-white text-[#009746]" aria-label="Kontakt">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-16 text-center">
          KONTAKT
        </h2>
        
        <address className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 not-italic">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">GALA BAUER GMBH</h3>
              <div className="space-y-1 text-lg md:text-2xl">
                <p>Rastbachweg 13</p>
                <p>66113 Saarbrücken</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">TELEFON</h3>
              <a href="tel:+4915901776367" className="hover:opacity-80 text-lg md:text-2xl">
                +49 1590 1776367
              </a>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">E-MAIL</h3>
              <a href="mailto:galabau-eifler@gmx.de" className="hover:opacity-80 text-lg md:text-2xl">
                galabau-eifler@gmx.de
              </a>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">ÖFFNUNGSZEITEN</h3>
              <div className="space-y-1 text-lg md:text-2xl">
                <p>Montag - Freitag: 8:00 - 17:00 Uhr</p>
                <p>Samstag: 8:00 - 13:00 Uhr</p>
              </div>
            </div>
            
            <div className="pt-2 md:pt-4">
              <a 
                href="tel:+4915901776367" 
                className="inline-block bg-[#009746] text-white px-8 md:px-10 py-3 md:py-4 text-lg md:text-xl font-bold rounded-lg hover:bg-[#006835] transition-all hover:scale-105"
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
        </address>

        {/* Kontaktformular */}
        <div className="mt-12 md:mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
            SCHREIBEN SIE UNS
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold mb-2 text-[#009746]">
                  Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-2 border-[#009746]/30 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-[#009746] focus:ring-1 focus:ring-[#009746] transition-colors"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold mb-2 text-[#009746]">
                  E-Mail *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-2 border-[#009746]/30 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-[#009746] focus:ring-1 focus:ring-[#009746] transition-colors"
                  placeholder="ihre@email.de"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-telefon" className="block text-sm font-semibold mb-2 text-[#009746]">
                Telefon (optional)
              </label>
              <input
                id="contact-telefon"
                type="tel"
                value={formData.telefon}
                onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                className="w-full border-2 border-[#009746]/30 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-[#009746] focus:ring-1 focus:ring-[#009746] transition-colors"
                placeholder="Ihre Telefonnummer"
              />
            </div>
            <div>
              <label htmlFor="contact-nachricht" className="block text-sm font-semibold mb-2 text-[#009746]">
                Nachricht *
              </label>
              <textarea
                id="contact-nachricht"
                required
                rows={5}
                value={formData.nachricht}
                onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                className="w-full border-2 border-[#009746]/30 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-[#009746] focus:ring-1 focus:ring-[#009746] transition-colors resize-vertical"
                placeholder="Beschreiben Sie Ihr Anliegen..."
              />
            </div>

            {status === "success" && (
              <div className="bg-green-50 border border-green-300 rounded-lg p-4 text-green-800 font-medium">
                ✅ Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-50 border border-red-300 rounded-lg p-4 text-red-800 font-medium">
                ❌ Es gab einen Fehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#009746] text-white px-8 py-4 text-lg font-bold rounded-lg hover:bg-[#006835] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === "sending" ? "WIRD GESENDET..." : "NACHRICHT SENDEN"}
            </button>

            <p className="text-sm text-neutral-500 text-center">
              * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
