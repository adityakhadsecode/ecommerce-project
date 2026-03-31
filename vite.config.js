import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": { target: "http://localhost:3000" },
      "/images": { target: "http://localhost:3000" },
      "/ratings": { target: "http://localhost:3000" },
      "/icons": { target: "http://localhost:3000" },
      "/logo-white.png": { target: "http://localhost:3000" },
      "/mobile-logo-white.png": { target: "http://localhost:3000" },
    },
  },
});
