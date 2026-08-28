import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Galabau Eifler – Garten- und Landschaftsbau Saarbrücken",
    short_name: "Galabau Eifler",
    description:
      "Professioneller Garten- und Landschaftsbau in Saarbrücken. Gartengestaltung, Pflasterarbeiten, Baumpflege und mehr.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e8",
    theme_color: "#1b3328",
    icons: [
      {
        src: "/F596091D-F9EA-4E77-8A3E-B0D535C72828.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
