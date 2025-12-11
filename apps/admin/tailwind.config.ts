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
        sans: ["Inter", ...fontFamily.sans]
      },
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(222.2 47.4% 11.2%)",
        primary: {
          DEFAULT: "hsl(221.2 83.2% 53.3%)",
          foreground: "hsl(210 40% 98%)"
        },
        secondary: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(222.2 47.4% 11.2%)"
        },
        accent: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(222.2 47.4% 11.2%)"
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222.2 47.4% 11.2%)"
        }
      },
      borderRadius: {
        xl: "1rem"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
