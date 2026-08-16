import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    // Honour a PORT supplied by the environment. Without this Vite
    // ignores it, falls back to 5173, and silently picks 5174+ when
    // that is taken — so tooling that expects the assigned port ends
    // up pointing at a dead address.
    port: Number(process.env.PORT) || 5173,
  },
})
