import { defineConfig } from "vite";

import { frontendPort } from './common/index'

export default defineConfig({
  base: "./",
  build: {
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: frontendPort
  }
});