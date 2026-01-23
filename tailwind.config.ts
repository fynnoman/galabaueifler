import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for GALA BAUER
        'brand-yellow': '#AFCA1F',
        'brand-green': '#009746',
      },
      fontFamily: {
        sans: ['WalterTurncoat', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '1536px',
      },
    },
  },
  plugins: [],
};
export default config;
