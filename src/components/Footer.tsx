import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#006835] text-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/F596091D-F9EA-4E77-8A3E-B0D535C72828.png"
                alt="GALA BAUER Logo"
                width={30}
                height={30}
                className="object-cover"
              />
              <h3 className="text-xl font-bold">GALA BAUER</h3>
            </div>
            <p className="text-white/80 text-sm">
              Ihr Partner für professionellen Garten- und Landschaftsbau
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-4">LINKS</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#leistungen" className="hover:text-white">Leistungen</a></li>
              <li><a href="#ueber-uns" className="hover:text-white">Über uns</a></li>
              <li><a href="#galerie" className="hover:text-white">Galerie</a></li>
              <li><a href="#kontakt" className="hover:text-white">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-4">RECHTLICHES</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white">Impressum</a></li>
              <li><a href="#" className="hover:text-white">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white">AGB</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} GALA BAUER GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
