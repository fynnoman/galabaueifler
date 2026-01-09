import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/A05AD9BA-404A-414C-99BB-17DC84F67782.png"
          alt="Garten und Landschaftsbau"
          fill
          className="object-cover"
          priority
        />
        {/* White to Transparent Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-32 lg:px-8 lg:pt-48 lg:pb-48 flex items-center">
        <div>
          <Image
            src="/F596091D-F9EA-4E77-8A3E-B0D535C72828.png"
            alt="GALA BAUER Logo"
            width={600}
            height={600}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
