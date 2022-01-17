import { ProxyOptions } from 'vite';

export const proxy: Record<string, Record<string, ProxyOptions>> = {
  test: {
    '/api-': {
      target: '',
      changeOrigin: true,
    },
  },
  development: {},
  production: {},
};
