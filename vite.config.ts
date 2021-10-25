import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ELECTRON=="true" ? './' : ".",
  plugins: [vue()],
  define: {
    "process.env": process.env
  },
  server: {
    proxy: {
      "/api": {
        target: "https://autumnfish.cn",
        changeOrigin: true,
        rewrite: (path) => path.replace("/api", ""),
      }
    }
  }
})
