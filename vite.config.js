import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["@mui/material/Rating"],
  },
  server: {
    historyApiFallback: true,
  },
  base: "/", // Ensures correct base path
  build: {
    outDir: "dist", // Vercel expects the output in "dist"
  },
});

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   server: {
//     port: 3000,
//     historyApiFallback: true, // Important for SPA routing
//   },
//   base: "/", // Ensures correct base path
//   build: {
//     outDir: "dist", // Vercel expects the output in "dist"
//   },
// });
