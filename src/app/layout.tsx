import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Galabau Eifler – Professioneller Garten- & Landschaftsbau in Saarbrücken",
    template: "%s | Galabau Eifler",
  },
  description:
    "Galabau Eifler – Ihr professioneller Partner für Garten- und Landschaftsbau in Saarbrücken. Gartengestaltung, Pflasterarbeiten, Baumpflege & mehr. Jetzt beraten lassen!",
  keywords: [
    "Garten- und Landschaftsbau Saarbrücken",
    "Galabau Saarbrücken",
    "Gartengestaltung",
    "Pflasterarbeiten",
    "Baumpflege",
    "Rasenpflege",
    "Gartenpflege",
    "Zaunbau",
    "Rollrasen",
  ],
  authors: [{ name: "Galabau Eifler GmbH" }],
  verification: {
    google: "googleb3500a0ecacad6bc",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://www.galabaueifler.de"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.galabaueifler.de",
    siteName: "Galabau Eifler",
    title: "Galabau Eifler – Professioneller Garten- & Landschaftsbau Saarbrücken",
    description:
      "Professioneller Garten- und Landschaftsbau in Saarbrücken. Planung, Gestaltung & Pflege aus einer Hand. Jetzt anfragen!",
    images: [
      {
        url: "/A05AD9BA-404A-414C-99BB-17DC84F67782.png",
        width: 1200,
        height: 630,
        alt: "Galabau Eifler – Garten- und Landschaftsbau in Saarbrücken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galabau Eifler – Professioneller Garten- & Landschaftsbau Saarbrücken",
    description:
      "Professioneller Garten- und Landschaftsbau in Saarbrücken. Jetzt beraten lassen!",
    images: ["/A05AD9BA-404A-414C-99BB-17DC84F67782.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-[#009746] focus:font-bold focus:rounded"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
