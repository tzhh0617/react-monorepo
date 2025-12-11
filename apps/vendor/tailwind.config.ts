import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        vendor: "#0f172a"
      }
    }
  },
  plugins: []
};

export default config;
