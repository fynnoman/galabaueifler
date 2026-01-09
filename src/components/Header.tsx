"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 hidden">
      <nav className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image
                src="/F596091D-F9EA-4E77-8A3E-B0D535C72828.png"
                alt="GALA BAUER Logo"
                width={80}
                height={80}
                className="object-cover"
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:gap-8">
            <a href="/#leistungen" className="text-sm font-medium text-[#009746] hover:text-[#007a38]">
              LEISTUNGEN
            </a>
            <a href="/#ueber-uns" className="text-sm font-medium text-[#009746] hover:text-[#007a38]">
              ÜBER UNS
            </a>
            <a href="/#galerie" className="text-sm font-medium text-[#009746] hover:text-[#007a38]">
              GALERIE
            </a>
            <a href="/kontakt" className="text-sm font-medium text-[#009746] hover:text-[#007a38]">
              KONTAKT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            <a
              href="/#leistungen"
              className="block text-sm font-medium text-[#009746] hover:text-[#007a38]"
              onClick={() => setMobileMenuOpen(false)}
            >
              LEISTUNGEN
            </a>
            <a
              href="/#ueber-uns"
              className="block text-sm font-medium text-[#009746] hover:text-[#007a38]"
              onClick={() => setMobileMenuOpen(false)}
            >
              ÜBER UNS
            </a>
            <a
              href="/#galerie"
              className="block text-sm font-medium text-[#009746] hover:text-[#007a38]"
              onClick={() => setMobileMenuOpen(false)}
            >
              GALERIE
            </a>
            <a
              href="/kontakt"
              className="block text-sm font-medium text-[#009746] hover:text-[#007a38]"
              onClick={() => setMobileMenuOpen(false)}
            >
              KONTAKT
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
