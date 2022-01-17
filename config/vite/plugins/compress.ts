import type { Plugin } from 'vite';
import compressPlugin from 'vite-plugin-compression';
import { COMPRESSION } from '../../constant';

// gz代码压缩
export const configCompressPlugin = (): Plugin | Plugin[] => {
  if (COMPRESSION) {
    return compressPlugin({
      ext: '.gz',
      deleteOriginFile: false,
    }) as Plugin;
  }
  return [];
};
