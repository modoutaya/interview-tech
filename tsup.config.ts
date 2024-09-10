import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  target: 'es2022',
  format: 'esm',
  onSuccess: 'node ./dist/index.js',
  platform: 'node'

});

