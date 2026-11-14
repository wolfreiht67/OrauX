// Le plan du site pour les moteurs de recherche (Google…), généré à chaque build : /sitemap.xml
import type { APIRoute } from 'astro';
import { banques } from '../data/banques';
import { tousLesExercices } from '../data/exercices';

export const GET: APIRoute = async ({ site }) => {
  const pages = [
    '/', '/exercices', '/oral-blanc', '/proposer',
    ...banques.map((b) => `/concours/${b.slug}`),
    ...(await tousLesExercices()).map((exo) => `/exercices/${exo.id}`),
  ];
  const urls = pages.map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
