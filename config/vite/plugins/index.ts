import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { configStyleImportPlugin } from './styleImport'
import { autoRegistryComponents } from './component'
import { AutoImportDeps } from './autoImport'
import { viteMockServe } from 'vite-plugin-mock'

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    vueJsx(),
    legacy({
      targets: ['defaults', 'ie >= 6'],
      polyfills: ['es/']
    }),
    autoRegistryComponents(),
    AutoImportDeps(),
    viteMockServe({
      ignore: /^\_/,
      mockPath: 'mock'
    })
  ]

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin(isBuild))

  return vitePlugins
}
