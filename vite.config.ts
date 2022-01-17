import { defineConfig, loadEnv } from 'vite';
import { VITE_DROP_CONSOLE, VITE_PORT } from './config/constant';
import { configManualChunk } from './config/vite/optimizer';
import { createVitePlugins } from './config/vite/plugins';

import { proxy } from './config/vite/proxy';

export default ({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const isBuild = command === 'build';
  return defineConfig({
    plugins: createVitePlugins(isBuild),
    resolve: {
      alias: [
        { find: /^~/, replacement: '' },
        { find: '@', replacement: '/src' },
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    build: {
      target: 'es2015',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: configManualChunk,
        },
      },
    },
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: VITE_PORT, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      host: '0.0.0.0', // IP配置，支持从IP启动
      proxy: proxy[process.env.VITE_APP_ENV ?? 'development'],
    },
  });
};
