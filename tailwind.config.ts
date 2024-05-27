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
        "brand-color": "#ED2590",
        "dark-10": "#4B4B4B",
        "dark-20": "#B4AEAE",
        "dark-30": "#FDFEFF",
        "dark-40": "#FFFFFF",
        "dark-50": "#D9E6F7",
        "dark-60": "#EFF3F8",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/signup-image.png')",
      },
    },
  },
  plugins: [],
};
export default config;
