// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sharvilpatel.dev',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
