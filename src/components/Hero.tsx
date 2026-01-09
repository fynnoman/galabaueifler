import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/C3904134-E4B4-4BBC-B246-AEB4D42FD3D1.png"
          alt="Garten und Landschaftsbau"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
