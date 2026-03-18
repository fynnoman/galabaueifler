"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Smooth transforms with framer-motion
  const scale = useTransform(scrollY, [0, 500], [1, 2]);
  const y = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <section className="relative h-screen overflow-visible">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/A05AD9BA-404A-414C-99BB-17DC84F67782.png"
          alt="Garten und Landschaftsbau"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* White gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-32 md:h-64 bg-gradient-to-b from-white to-transparent" />
      
      {/* Logo */}
      <motion.div 
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]"
        style={{
          scale,
          y,
        }}
      >
        <Image
          src="/F596091D-F9EA-4E77-8A3E-B0D535C72828.png"
          alt="Logo"
          fill
          className="object-contain"
        />
      </motion.div>
      
      {/* Dark green stripes on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-8 lg:gap-12 items-end">
        <div className="w-[220px] md:w-[450px] lg:w-[700px] h-8 md:h-10 lg:h-12 bg-green-800 flex items-center justify-start pl-8 md:pl-12 lg:pl-16 text-white font-bold text-xs md:text-base lg:text-xl" style={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 10% 100%)' }}>
          Ihr Ansprechpartner
        </div>
        <div className="w-[190px] md:w-[380px] lg:w-[600px] h-8 md:h-10 lg:h-12 bg-green-800 flex items-center justify-start pl-8 md:pl-12 lg:pl-16 text-white font-bold text-xs md:text-base lg:text-xl" style={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 10% 100%)' }}>
          für Garten- & Landschaftsbau
        </div>
        <div className="w-[160px] md:w-[320px] lg:w-[500px] h-8 md:h-10 lg:h-12 bg-green-800 flex items-center justify-start pl-8 md:pl-12 lg:pl-16 text-white font-bold text-xs md:text-base lg:text-xl" style={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 10% 100%)' }}>
          in Saarbrücken
        </div>
      </div>
      
      {/* Subtle green decorative line below hero - outside the image */}
      <div className="absolute -bottom-3 left-0 right-0 h-3 bg-green-800/30" />
    </section>
  );
}
