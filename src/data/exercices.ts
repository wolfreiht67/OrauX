// Les exercices, triés une fois pour toutes : par banque (dans l'ordre de banques.ts), puis par titre.
// Toutes les pages passent par ici, pour que l'ordre soit le même partout (et « suivant / précédent » cohérent).
import { getCollection, type CollectionEntry } from 'astro:content';
import { banques } from './banques';

export type Exercice = CollectionEntry<'exercices'>;

const rang = (nom: string) => banques.findIndex((b) => b.nom === nom);

export async function tousLesExercices(): Promise<Exercice[]> {
  return (await getCollection('exercices')).sort(
    (a, b) => rang(a.data.banque) - rang(b.data.banque) || a.data.titre.localeCompare(b.data.titre, 'fr'),
  );
}

// Les noms des niveaux de difficulté, de 1 à 3.
export const DIFFICULTES = ['', 'Abordable', 'Classique', 'Costaud'] as const;

// Ce que les scripts du navigateur ont besoin de savoir d'un exercice (tirage au sort, cahier, planche du jour).
export const resume = (exo: Exercice) => ({
  id: exo.id,
  titre: exo.data.titre,
  banque: exo.data.banque,
  cle: banques[rang(exo.data.banque)].cle,
  filiere: exo.data.filiere,
  chapitre: exo.data.chapitre,
  duree: exo.data.duree,
  difficulte: exo.data.difficulte,
});
export type Resume = ReturnType<typeof resume>;
