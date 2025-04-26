import { defineConfig } from 'vite';
import hotReloadExtension from 'hot-reload-extension-vite';

export default defineConfig({
  plugins: [
    hotReloadExtension({
      log: true,
      backgroundPath: 'src/background'
    }), // Plugin pour HMR
  ]
});

