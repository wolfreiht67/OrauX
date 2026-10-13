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

- Nom du site : **OrauX**. Le X est un composant à part (`src/components/MarqueX.astro`), actuellement deux coups de stylo rouge ; il doit pouvoir être remplacé sans toucher au reste.
- Identité visuelle (refonte du 2026-10-14, demandée car la première version « faisait trop IA ») : l'univers de la copie de prépa. Papier à grands carreaux Seyès, stylo bleu `--bic`, correction au rouge `--red`, surligneur `--marker`, post-it pour les indications, chrono de préparation. En mode sombre : tableau noir à la craie. Les copies (`.sheet`) restent claires dans les deux modes.
- Polices : Fraunces (titres), Instrument Sans (texte), Caveat (annotations manuscrites).
- Une couleur par banque : Mines-Ponts orange `--mines`, Centrale-Supélec framboise `--centrale`, X-ENS bleu `--xens`. Les trois banques couvrent MP, PSI et PC.
- Tuiles des banques : filigrane en fond. Champ `logo` (fichier dans `public/logos/`) ; sans logo, une grande lettre en italique.
- Pas de faux contenu présenté comme réel : tout exemple est marqué « exemple écrit pour la maquette ».

## Avancement

- Semaine 1 (squelette en ligne) : terminée le 2026-10-14. Site Astro + page d'accueil, en ligne.
- Prochaine étape, semaine 2 : format d'un exercice (un fichier Markdown par exercice) et KaTeX.

## En ligne

- Site : https://orau-x.vercel.app
- Code : https://github.com/wolfreiht67/oraux (branche `main`, déployée par Vercel)

## Développement

Lancer le serveur en arrière-plan :

```
astro dev --background
```

Le gérer avec `astro dev stop`, `astro dev status` et `astro dev logs`. Avant de committer, vérifier que `npm run build` passe.

Documentation Astro : https://docs.astro.build (routage : /en/guides/routing/, collections de contenu : /en/guides/content-collections/, styles : /en/guides/styling/).
