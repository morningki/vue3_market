import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // 自动导入Element Plus组件，不用手动import
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    //实际路径转换
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
