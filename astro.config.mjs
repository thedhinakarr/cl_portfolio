// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://carbonlenz.com',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
