import { defineConfig, loadEnv } from 'vite'
import { VITE_DROP_CONSOLE, VITE_PORT } from './config/constant'
import { configManualChunk } from './config/vite/optimizer'
import { createVitePlugins } from './config/vite/plugins'

import { proxy } from './config/vite/proxy'

export default ({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const isBuild = command === 'build'
  const env = process.env.VITE_APP_ENV
    ? process.env.VITE_APP_ENV
    : 'development'

  return defineConfig({
    plugins: createVitePlugins(isBuild),
    resolve: {
      alias: [
        { find: /^~/, replacement: '' },
        { find: '@', replacement: '/src' }
      ]
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    build: {
      target: 'es2015',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE
        }
      },
      rollupOptions: {
        output: {
          manualChunks: configManualChunk
        }
      }
    },
    server: {
      hmr: { overlay: false },
      // 服务配置
      port: VITE_PORT,
      open: false,
      cors: false,
      host: '0.0.0.0',
      proxy: proxy[env]
    }
  })
}
