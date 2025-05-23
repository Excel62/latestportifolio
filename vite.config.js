import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // React plugin is required for JSX transformation
    react(),
    tailwindcss(),
  ],
  server: {
    // Listen on all network interfaces
    host: "0.0.0.0",
    allowedHosts: [
      "latestportifolio.onrender.com",
      "www.buildwithexcel.dev",
      "localhost",
      "127.0.0.1",
    ],
    // Use PORT environment variable provided by Render, or default to 5173 for local development
    port: parseInt(process.env.PORT || 5173),
    // Make sure to properly handle process shutdown
    strictPort: true,
  },
});
