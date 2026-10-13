# OrauX

Site de planches d'oraux des concours (Mines-Ponts, Centrale-Supélec, X-ENS), corrigées, pour les filières MP, PSI et PC. Le site, le code et les commentaires sont en français.

Feuille de route : https://claude.ai/artifact/H64Pp5hYTfShqiVswEosGG
Maquette de référence (catalogue, filtres, planche) : https://claude.ai/artifact/AS8FCwdUNc9d9QxShX6bHk

## Pile technique

- Astro (site statique), hébergé sur Vercel, déployé automatiquement à chaque `git push` sur `main`.
- KaTeX pour le LaTeX (à partir de la semaine 2).
- Plus tard : Supabase pour les comptes élèves (V2).

## Organisation

- `src/layouts/Base.astro` : gabarit commun (en-tête, pied de page, polices).
- `src/styles/global.css` : couleurs et polices de la marque, mode sombre automatique.
- `src/pages/` : une page par fichier.

## Décisions

- Nom du site : **OrauX** (le X en bleu `--accent`).
- Identité visuelle reprise de la maquette : papier `#f5f6fa`, encre bleue `#2443b8`, une couleur par concours (Mines ocre, Centrale bordeaux, X-ENS vert). Polices Bricolage Grotesque (titres), Source Serif 4 (texte), JetBrains Mono (étiquettes).
- Pas de faux contenu présenté comme réel : tout exemple est marqué « exemple écrit pour la maquette ».

## Avancement

- Semaine 1 (squelette en ligne) : site Astro + page d'accueil. Reste à pousser sur GitHub et relier à Vercel.

## Développement

Lancer le serveur en arrière-plan :

```
astro dev --background
```

Le gérer avec `astro dev stop`, `astro dev status` et `astro dev logs`. Avant de committer, vérifier que `npm run build` passe.

Documentation Astro : https://docs.astro.build (routage : /en/guides/routing/, collections de contenu : /en/guides/content-collections/, styles : /en/guides/styling/).
