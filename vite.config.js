import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base deve combaciare col nome repo per gh-pages (altrimenti asset 404 / pagina bianca)
export default defineConfig({
  plugins: [react()],
  base: "/lie-fitness/",
});
