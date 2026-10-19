// Les collections de contenu : Astro lit les fichiers Markdown et vérifie leurs informations.
// Doc : https://docs.astro.build/en/guides/content-collections/
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un exercice = un fichier .md dans src/content/exercices/.
// Le nom du fichier donne l'adresse de la page : determinant-signe.md → /exercices/determinant-signe
const exercices = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/exercices' }),
  // Les informations en haut de chaque fichier (entre les deux ---). Si l'une manque ou est mal écrite,
  // `npm run build` s'arrête et dit laquelle.
  schema: z.object({
    titre: z.string(),
    banque: z.enum(['Mines-Ponts', 'Centrale-Supélec', 'X-ENS']),
    filiere: z.enum(['MP', 'PSI', 'PC']),
    matiere: z.string().default('Maths'),
    chapitre: z.string(),
    annee: z.number().int().optional(),
    duree: z.number().int().positive().default(30), // préparation, en minutes
    origine: z.string().optional(), // d'où vient la planche, par exemple « Oral passé en 2025 »
    auteur: z.string().optional(), // qui l'a proposée, si ce n'est pas vous (un élève, par exemple)
    exemple: z.boolean().default(false), // true = écrit pour la maquette, pas une vraie planche
  }),
});

export const collections = { exercices };
