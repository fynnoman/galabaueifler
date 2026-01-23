"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Smooth transforms with framer-motion
  const scale = useTransform(scrollY, [0, 500], [1, 2]);
  const y = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/A05AD9BA-404A-414C-99BB-17DC84F67782.png"
          alt="Garten und Landschaftsbau"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* White gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white to-transparent" />
      
      {/* Logo */}
      <motion.div 
        className="absolute left-8 top-1/2 -translate-y-1/2 w-[600px] h-[600px]"
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
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-12 items-end">
        <div className="w-[700px] h-12 bg-green-800 flex items-center justify-start pl-16 text-white font-bold text-xl" style={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 10% 100%)' }}>
          Ihr Ansprechpartner
        </div>
        <div className="w-[600px] h-12 bg-green-800 flex items-center justify-start pl-16 text-white font-bold text-xl" style={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 10% 100%)' }}>
          für Garten- & Landschaftsbau
        </div>
        <div className="w-[500px] h-12 bg-green-800 flex items-center justify-start pl-16 text-white font-bold text-xl" style={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 10% 100%)' }}>
          in Saarbrücken
        </div>
      </div>
    </section>
  );
}
