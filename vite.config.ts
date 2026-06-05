import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  return {
    /** GitHub Pages 项目站路径；本地开发默认 / */
    base: env.VITE_BASE || '/',
    plugins: [react()],
  }
})
