import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // ⚠️ Thêm dòng này

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ⚠️ Thêm phần alias này
    },
  },
  server: {
    port: 3001,
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
      },
    },
  },
});
