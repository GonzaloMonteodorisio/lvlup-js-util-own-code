// Etiqueta XML. Le indica al compilador que incluya archivos adicionales en el proceso de compilación -> archivos adicionales para resolver los tipos de Vitest, en este caso
/// <reference types="vitest" />

import path from 'path';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'my-lib',
      fileName: 'my-lib'
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, '/src')
    }
  },
  test: {
    globals: true,
  },
  plugins: [dts({ outDir: 'dist' })],
});