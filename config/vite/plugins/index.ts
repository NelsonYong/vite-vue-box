import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { configStyleImportPlugin } from './styleImport';
import { autoRegistryComponents } from './component';
import { AutoImportDeps } from './autoImport';
import { configCompressPlugin } from './compress';

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    legacy({
      targets: ['defaults', 'ie >= 6'],
      polyfills: ['es/'],
    }),
    // 自动按需引入组件
    autoRegistryComponents(),
    // 自动按需引入依赖
    AutoImportDeps(),
  ];

  // rollup-plugin-gzip
  isBuild && vitePlugins.push(configCompressPlugin());

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin(isBuild));

  return vitePlugins;
}
