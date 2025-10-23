import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  base: isPages ? "/io-landing/" : "/",
  plugins: [react()],
  server: { port: 5173 },
  preview: { port: 4173 },
});
