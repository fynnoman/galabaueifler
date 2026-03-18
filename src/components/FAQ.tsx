"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const faqs = [
    {
      question: "Wie läuft ein Projekt ab?",
      answer: "Nach einer kostenlosen Erstberatung erstellen wir ein individuelles Angebot. Nach Auftragserteilung planen wir gemeinsam mit Ihnen die Details und setzen das Projekt professionell um."
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
      question: "Arbeiten Sie auch an Wochenenden?",
      answer: "Samstags sind wir nach Absprache im Einsatz. Sonntags führen wir keine Arbeiten durch."
    },
    {
      question: "Benötige ich eine Baugenehmigung?",
      answer: "Das hängt vom Umfang der Arbeiten ab. Bei größeren Umgestaltungen oder Baumaßnahmen beraten wir Sie gerne zu den rechtlichen Anforderungen."
    },
    {
      question: "Können Sie auch bestehende Gärten umgestalten?",
      answer: "Selbstverständlich! Wir übernehmen sowohl komplette Neuanlagen als auch die Umgestaltung und Modernisierung bestehender Gärten."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#009746]/10" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-0 lg:pr-8">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-16 text-[#009746] text-center px-0 lg:px-8">
          HÄUFIGE FRAGEN
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Questions on the left */}
          <div className="space-y-3 md:space-y-4 pl-0">
            {faqs.map((faq, index) => {
              return (
                <FAQCard
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  isDesktop={isDesktop}
                  scrollYProgress={scrollYProgress}
                  totalFaqs={faqs.length}
                />
              );
            })}
          </div>

          {/* Large image on the right */}
          <motion.div 
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/9C075D66-6539-4AE4-A2E0-B0AF621D8FE6.png"
              alt="Illustration häufig gestellter Fragen zur Gartengestaltung"
              width={600}
              height={600}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FAQCard({ faq, index, isOpen, onToggle, isDesktop, scrollYProgress, totalFaqs }: {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  isDesktop: boolean;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  totalFaqs: number;
}) {
  const start = Math.max(0, index / totalFaqs * 0.4);
  const end = Math.min(1, start + 0.15);
  
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const x = useTransform(scrollYProgress, [start, end], [-60, 0]);

  const content = (
    <>
      <button
        onClick={onToggle}
        className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="text-base md:text-lg font-bold text-[#009746] pr-2">
          {faq.question}
        </span>
        <svg
          className={`w-5 h-5 md:w-6 md:h-6 text-[#009746] transform transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
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
      {isOpen && (
        <div className="px-4 md:px-6 pb-4 text-sm md:text-base text-gray-700">
          {faq.answer}
        </div>
      )}
    </>
  );

  if (isDesktop) {
    return (
      <motion.div
        style={{ opacity, x }}
        className="bg-white border-2 border-[#009746] rounded-2xl overflow-hidden"
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div className="bg-white border-2 border-[#009746] rounded-2xl overflow-hidden">
      {content}
    </div>
  );
}