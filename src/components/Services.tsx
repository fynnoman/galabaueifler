"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const [activeCard, setActiveCard] = useState(0);

  const serviceGroups = [
    {
      title: "GARTEN & PFLEGE",
      services: [
        "Gartenpflege",
        "Baumpflege",
        "Baumfällungen",
        "Rasenpflege",
      ],
      description: "Professionelle Pflege und Wartung für Ihren Garten"
    },
    {
      title: "GESTALTUNG & BAU",
      services: [
        "Garten Neugestaltung",
        "Bepflanzung",
        "Zaunbau",
        "Pflasterarbeiten",
      ],
      description: "Kreative Gestaltung und hochwertige Bauarbeiten"
    },
    {
      title: "SPEZIALARBEITEN",
      services: [
        "Rodungsarbeiten",
        "Rollrasen",
        "Terrassen & Wege",
        "Einfahrten",
      ],
      description: "Spezialisierte Dienstleistungen für Ihr Projekt"
    },
  ];

  return (
    <section id="leistungen" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2 
          className="text-4xl lg:text-6xl font-bold text-[#009746] mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          UNSERE LEISTUNGEN
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Text */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl lg:text-3xl text-[#009746] leading-relaxed">
              Unsere Arbeiten im Garten- und Landschaftsbau entstehen mit Sorgfalt, Erfahrung und echter Hingabe. Von der Planung bis zur Umsetzung achten wir auf jedes Detail, arbeiten präzise und zuverlässig und schaffen Außenanlagen, an denen unsere Kunden langfristig Freude finden.
            </p>
            
            {/* Navigation dots */}
            <div className="flex gap-4 pt-8">
              {serviceGroups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    activeCard === index 
                      ? 'bg-[#009746] w-12' 
                      : 'bg-[#009746]/30 hover:bg-[#009746]/50'
                  }`}
                  aria-label={`Karte ${index + 1} anzeigen`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right side - Stacked Cards */}
          <motion.div 
            className="relative h-[500px]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {serviceGroups.map((group, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  activeCard === index
                    ? 'opacity-100 translate-y-0 z-10'
                    : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                <div className="bg-green-800 p-10 rounded-2xl text-white h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-bold mb-4 border-b-4 border-white pb-4">
                      {group.title}
                    </h3>
                    <p className="text-white/90 mb-8 text-xl">
                      {group.description}
                    </p>
                    <ul className="space-y-4">
                      {group.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-xl">
                          <span className="mr-4 text-3xl">•</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Navigation arrows */}
                  <div className="flex justify-between items-center mt-8 pt-8 border-t border-white/30">
                    <button
                      onClick={() => setActiveCard((prev) => (prev - 1 + serviceGroups.length) % serviceGroups.length)}
                      className="text-white hover:text-white/70 transition-colors text-2xl"
                      aria-label="Vorherige Karte"
                    >
                      ← Zurück
                    </button>
                    <span className="text-white/70">
                      {index + 1} / {serviceGroups.length}
                    </span>
                    <button
                      onClick={() => setActiveCard((prev) => (prev + 1) % serviceGroups.length)}
                      className="text-white hover:text-white/70 transition-colors text-2xl"
                      aria-label="Nächste Karte"
                    >
                      Weiter →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
