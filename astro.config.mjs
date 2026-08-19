import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// When you buy a domain, change `site` to it (e.g. 'https://yourname.com').
// Until then, GitHub Pages will serve the build at the project URL and `base`
// keeps assets loading from the right subpath.
export default defineConfig({
  site: 'https://inquireraincityav.github.io',
  base: '/ui-ux',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  build: {
    format: 'directory',
  },
});
