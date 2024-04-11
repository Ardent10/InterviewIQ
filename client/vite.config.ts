import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@modules": resolve(__dirname, "./src/modules"),
      "@common": resolve(__dirname, "./src/modules/common"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@store": resolve(__dirname, "./src/store"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
