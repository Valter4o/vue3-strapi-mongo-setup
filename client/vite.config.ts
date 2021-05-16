import Vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"

const config = {
  plugins: [Vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
      { find: "components", replacement: "/src/components" },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_index.scss";`,
      },
    },
  },
}

export default defineConfig(config)
