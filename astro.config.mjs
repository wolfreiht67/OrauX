// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeParties from './src/plugins/rehype-parties.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://orau-x.vercel.app',
  markdown: {
    // Les fichiers Markdown passent par une chaîne d'outils (« unified »), chacun fait une tâche :
    // remark-math repère le LaTeX ($...$ et $$...$$), rehype-katex le dessine avec KaTeX,
    // rehype-parties range l'indication et la correction dans des blocs à ouvrir.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, rehypeParties],
    }),
  },
});
