import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://solucionescnc.co',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap()
  ],
  build: {
    format: 'file'
  }
});
