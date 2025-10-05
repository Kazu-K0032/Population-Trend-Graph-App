import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],

  // ビルド
  build: {
    outDir: 'dist',
  },

  // エイリアス
  resolve: {
    alias: {
      '@': '/src',
    },
  },

  // 開発サーバーの設定
  server: {
    proxy: {
      '/api/estat': {
        target: 'https://api.e-stat.go.jp',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/estat/, '/rest/2.0/app/json'),
        configure: (proxy) => {
          proxy.on('error', (err) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req) => {
            console.log(
              'Received Response from the Target:',
              proxyRes.statusCode,
              req.url
            );
          });
        },
      },
    },
  },
});
