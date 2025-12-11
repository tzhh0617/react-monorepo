import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", ...fontFamily.sans]
      },
      colors: {
        background: "#020617",
        foreground: "#f1f5f9",
        vendor: "#0f172a"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
