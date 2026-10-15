import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Julius-portfolio/',
  define: {
    // Shows the Download CV button only when the real PDF has been added.
    __HAS_CV__: JSON.stringify(existsSync('public/cv/Julius-Kasanga-CV.pdf')),
  },
})
