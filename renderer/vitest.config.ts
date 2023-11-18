import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/unit/**/*.spec.ts'],
    globals: true,
    environment: 'happy-dom',
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
