import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GALA BAUER - Garten & Landschaftsbau",
  description: "Professioneller Garten- und Landschaftsbau seit über 20 Jahren. Gartengestaltung, Pflasterarbeiten, Baumpflege und mehr.",
  keywords: ["Gartenbau", "Landschaftsbau", "Gartengestaltung", "Pflasterarbeiten", "Baumpflege", "Rasenpflege"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
