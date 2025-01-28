import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],

  // ビルド
  build: {
    outDir: "dist",
  },

  // エイリアス
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
