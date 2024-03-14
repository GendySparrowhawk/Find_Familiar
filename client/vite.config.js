import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '^/graphql|^/profile_images': {
        target: 'http://localhost:3333',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
})