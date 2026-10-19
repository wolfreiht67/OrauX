# OrauX

Site de planches d'oraux des concours (Mines-Ponts, Centrale-Supélec, X-ENS), corrigées, pour les filières MP, PSI et PC. Le site, le code et les commentaires sont en français.

Feuille de route : https://claude.ai/artifact/H64Pp5hYTfShqiVswEosGG
Maquette de référence (catalogue, filtres, planche) : https://claude.ai/artifact/AS8FCwdUNc9d9QxShX6bHk

## Mode de travail : mode prof

Adam débute en développement web et veut apprendre en construisant le site. On code ensemble :

- Avancer étape par étape, une modification à la fois.
- Avant chaque modification, expliquer en 2 phrases ce qui va être fait et pourquoi, puis attendre son OK.
- Lui laisser coder certaines parties (contenu, CSS, petits composants) : donner l'objectif, un indice et le résultat attendu, puis relire son code avec lui.
- Expliquer chaque notion nouvelle quand elle apparaît, en partant de zéro et sans jargon non expliqué. Tout en français.

## Pile technique

- Astro (site statique), hébergé sur Vercel, déployé automatiquement à chaque `git push` sur `main`.
- KaTeX pour le LaTeX (à partir de la semaine 2).
- Plus tard : Supabase pour les comptes élèves (V2).

## Organisation

- `src/layouts/Base.astro` : gabarit commun (en-tête, pied de page, polices).
- `src/styles/global.css` : couleurs et polices de la marque, mode sombre automatique.
- `src/data/banques.ts` : les trois banques (nom, couleur, adresse, logos), partagées par toutes les pages.
- `src/components/CarteExercice.astro` : la carte d'un exercice dans une liste.
- `src/pages/` : une page par fichier. `concours/[banque].astro` montre les exercices d'un concours rangés par filière (les tuiles de l'accueil y mènent), `exercices/index.astro` liste tous les exercices par concours, `exercices/[id].astro` affiche une planche, `proposer.astro` est le formulaire des élèves.
- `src/content/exercices/` : un fichier Markdown par exercice (énoncé, puis `## Indication`, puis `## Correction`). Les champs du haut sont décrits et vérifiés dans `src/content.config.ts`.
- `src/plugins/rehype-parties.mjs` : range l'indication et la correction dans des blocs fermés par défaut.

## Décisions

- Nom du site : **OrauX**. Le X est un composant à part (`src/components/MarqueX.astro`), actuellement deux coups de stylo rouge ; il doit pouvoir être remplacé sans toucher au reste.
- Identité visuelle (refonte du 2026-10-14, demandée car la première version « faisait trop IA ») : l'univers de la copie de prépa. Papier à grands carreaux Seyès, stylo bleu `--bic`, correction au rouge `--red`, surligneur `--marker`, post-it pour les indications, chrono de préparation. En mode sombre : tableau noir à la craie. Les copies (`.sheet`) restent claires dans les deux modes.
- Polices : Fraunces (titres), Instrument Sans (texte), Caveat (annotations manuscrites).
- Une couleur par banque : Mines-Ponts orange `--mines`, Centrale-Supélec framboise `--centrale`, X-ENS bleu `--xens`. Les trois banques couvrent MP, PSI et PC.
- Tuiles des banques : les vrais logos des écoles en filigrane, teintés à la couleur de la banque par un masque CSS (`public/logos/`, téléchargés depuis Wikimedia Commons le 2026-10-14 : Mines Paris, Ponts, CentraleSupélec, Polytechnique « l'X », ENS-PSL). Placement réglé à l'œil dans le champ `pos` de chaque logo. Les logos sont des marques des écoles : garder la mention de non-affiliation en pied de page.
- Pas de faux contenu présenté comme réel : tout exemple est marqué « exemple écrit pour la maquette » (champ `exemple: true`).
- Les vraies planches viennent d'Adam (champ `origine`) ; les élèves peuvent en proposer via `/proposer` (champ `auteur` quand on les publie). Pour l'instant le formulaire ouvre un e-mail prérempli ; l'adresse de réception (`ADRESSE` dans `proposer.astro`) reste à choisir, le bouton est désactivé tant qu'elle est vide.
- Markdown : Astro 7 utilise Sätteri par défaut ; on passe par `unified()` de `@astrojs/markdown-remark` pour brancher remark-math et rehype-katex. Garder `katex` à la même version que celle de rehype-katex (sinon des symboles comme ≠ s'affichent mal).

## Avancement

- Semaine 1 (squelette en ligne) : terminée le 2026-10-14. Site Astro + page d'accueil, en ligne.
- Semaine 2 (format d'un exercice + KaTeX) : faite le 2026-10-19. Trois exemples, pages exercice et liste, chrono avec bouton, page « Proposer un exercice ».
- Prochaine étape, semaine 3 : catalogue et filtres (banque, filière, chapitre).

## En ligne

- Site : https://orau-x.vercel.app
- Code : https://github.com/wolfreiht67/OrauX (branche `main`, déployée par Vercel)

## Développement

Lancer le serveur en arrière-plan :

```
astro dev --background
```

Le gérer avec `astro dev stop`, `astro dev status` et `astro dev logs`. Avant de committer, vérifier que `npm run build` passe.

Documentation Astro : https://docs.astro.build (routage : /en/guides/routing/, collections de contenu : /en/guides/content-collections/, styles : /en/guides/styling/).
