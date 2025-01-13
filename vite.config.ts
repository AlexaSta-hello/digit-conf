import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' /* 1. erspart den genauen Pfad anzugeben. 
Greift direkt aus src zu. Siehe defineConfig, siehe tsconfig.app.json */

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { /* zu1. */
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src")} ]
  }, 
})
