import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    port: 4175
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname
    }
  }
});
