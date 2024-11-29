import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grey: {
          charcoal: "#454545",
          tundora: "#4A4A4A",
        },
        red: {
          totemPole: "#87190A",
          thunderbird: "#BD2110"
        },
        yellow: {
          goldenrod: "#CC8A02",
          gold: "#CE8B05"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
