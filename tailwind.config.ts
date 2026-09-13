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
        warmBg: "#F5F1E8",
        warmBgAlt: "#F1EDE3",
        textMain: "#171717",
        textMuted: "#55504A",
        burntOrange: "#B85C3A",
        burntOrangeDark: "#8F4029",
        warmBorder: "#C9C2B7",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-display)", "Oswald", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        signature: ["var(--font-signature)", "cursive"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
