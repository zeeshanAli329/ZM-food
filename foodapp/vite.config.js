import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)', 
        secondary: 'var(--secondary-color)', 
        background: 'var(--background)',   
        text: 'var(--text-color)',          
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
