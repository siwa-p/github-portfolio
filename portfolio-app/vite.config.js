import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Use root path (/) for local development and preview
  // Use /github-portfolio/ for GitHub Pages deployment
  const base = process.env.GITHUB_ACTIONS ? '/github-portfolio/' : '/'

  return {
    plugins: [react()],
    base: base,
    build: {
      outDir: 'dist',
    }
  }
})
