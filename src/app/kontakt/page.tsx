import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
