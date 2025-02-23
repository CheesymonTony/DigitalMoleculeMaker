import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',   // explicitly set output directory
    assetsDir: 'assets', // explicitly set assets folder
  },
})


