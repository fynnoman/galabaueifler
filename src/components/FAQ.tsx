"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Wie läuft ein Projekt ab?",
      answer: "Nach einer kostenlosen Erstberatung erstellen wir ein individuelles Angebot. Nach Auftragserteilung planen wir gemeinsam mit Ihnen die Details und setzen das Projekt professionell um."
    },
    {
      question: "Bieten Sie auch Winterdienst an?",
      answer: "Ja, wir bieten einen zuverlässigen Winterdienst für Privat- und Geschäftskunden an. Kontaktieren Sie uns für weitere Informationen."
    },
    {
      question: "Wie lange dauert die Umsetzung?",
      answer: "Die Dauer hängt vom Umfang des Projekts ab. Kleinere Arbeiten können oft innerhalb weniger Tage abgeschlossen werden, größere Projekte benötigen entsprechend mehr Zeit."
    },
    {
      question: "Übernehmen Sie auch die Pflege nach der Fertigstellung?",
      answer: "Ja, wir bieten regelmäßige Gartenpflege an. Von der wöchentlichen Rasenpflege bis zur jährlichen Baumpflege - wir kümmern uns um Ihren Garten."
    },
    {
      question: "Erstellen Sie 3D-Visualisierungen?",
      answer: "Ja, für größere Projekte erstellen wir gerne 3D-Visualisierungen, damit Sie sich vorab ein genaues Bild vom fertigen Garten machen können."
    },
    {
      question: "Arbeiten Sie auch an Wochenenden?",
      answer: "Nach Absprache führen wir auch Arbeiten an Wochenenden durch. Dies ist besonders bei dringenden Projekten oder wenn Sie unter der Woche nicht verfügbar sind möglich."
    },
    {
      question: "Benötige ich eine Baugenehmigung?",
      answer: "Das hängt vom Umfang der Arbeiten ab. Bei größeren Umgestaltungen oder Baumaßnahmen beraten wir Sie gerne zu den rechtlichen Anforderungen und unterstützen bei Behördengängen."
    },
    {
      question: "Bieten Sie eine Garantie auf Ihre Arbeiten?",
      answer: "Ja, wir bieten eine Gewährleistung nach gesetzlichen Vorgaben. Zusätzlich stehen wir auch nach Projektabschluss für Fragen und Nachbesserungen zur Verfügung."
    },
    {
      question: "Können Sie auch bestehende Gärten umgestalten?",
      answer: "Selbstverständlich! Wir übernehmen sowohl komplette Neuanlagen als auch die Umgestaltung und Modernisierung bestehender Gärten."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#009746]/10">
      <div className="mx-auto max-w-7xl pr-6 lg:pr-8">
        <h2 className="text-4xl lg:text-6xl font-bold mb-16 text-[#009746] text-center px-6 lg:px-8">
          HÄUFIGE FRAGEN
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Questions on the left */}
          <div className="space-y-4 pl-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#009746] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-[#009746]">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#009746] transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Large image on the right */}
          <div className="hidden lg:flex items-center justify-center">
            <Image
              src="/9C075D66-6539-4AE4-A2E0-B0AF621D8FE6.png"
              alt="FAQ"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
