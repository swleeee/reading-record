// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import { compression } from 'vite-plugin-compression2';
import { visualizer } from 'rollup-plugin-visualizer';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  plugins: [
    svgr(),
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
        ],
      },
    }),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint ./src --ext .ts,.tsx' },
    }),
    compression({
      include: [/\.(js)$/, /\.(css)$/],
      threshold: 2000,
    }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  server: {
    host: 'localhost',
    port: 3001,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('axios')) {
            return '@network-vendor';
          }
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/')
          ) {
            return '@react-vendor';
          }
          if (
            id.includes('swiper') ||
            id.includes('react-spinners') ||
            id.includes('react-loading-skeleton')
          ) {
            return '@ui-effect-vendor';
          }
          if (id.includes('recoil')) {
            return '@state-management-vendor';
          }
          if (id.includes('@emotion/')) {
            return '@emotion-vendor';
          }
          if (id.includes('@tanstack/react-query')) {
            return '@data-fetching-vendor';
          }
        },
      },
    },
  },
});
