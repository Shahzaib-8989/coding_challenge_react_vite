import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = resolve(__dirname, 'src')
console.log(root)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/*': root,
      '@/assets': resolve(root, 'assets'),
      '@/components': resolve(root, 'components'),
      '@/layout': resolve(root, 'layout'),
      '@/utils': resolve(root, 'utils'),
    },
  },
})
