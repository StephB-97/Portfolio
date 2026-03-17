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
        gold: "#C4965A",
        "gold-dim": "#8A6A3A",
        ink: "#0C0C0A",
        "ink-2": "#0F0F0D",
        "ink-3": "#141410",
        "border-dim": "#1A1A18",
        "border-card": "#222220",
        cream: "#F0EDE6",
        "cream-dim": "#E8E4DC",
        muted: "#787060",
        "muted-dark": "#5A5448",
        "muted-darker": "#4A4840",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sc: ["Cormorant SC", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
