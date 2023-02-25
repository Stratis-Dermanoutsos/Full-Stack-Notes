import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import remarkMermaid from 'astro-diagram/remark-mermaid';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [
  // Enable Preact to support Preact JSX components.
  preact(),
  // Enable React for the Algolia search component.
  react(), mdx()],
  markdown: {
    remarkPlugins: [
      remarkMermaid
    ],
  },
  site: `https://astro.build`
});