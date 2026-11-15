# OrauX

Planches d'oraux des concours, corrigées. MP · PSI · PC.

## Commandes

| Commande          | Effet                                           |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Installe les dépendances                        |
| `npm run dev`     | Lance le site en local sur `localhost:4321`     |
| `npm run build`   | Construit le site dans `dist/`                  |
| `npm run preview` | Affiche la version construite, avant mise en ligne |

Le site est mis en ligne par Vercel à chaque `git push` sur `main`.

## Ajouter un exercice

1. Copier un fichier de `src/content/exercices/` (par exemple `signe-du-determinant.md`) et le renommer : le nom du fichier devient l'adresse de la page.
2. Remplir les informations du haut, entre les deux `---` : `titre`, `banque` (`Mines-Ponts`, `Centrale-Supélec` ou `X-ENS`), `filiere` (`MP`, `PSI` ou `PC`), `chapitre`, et si besoin `annee`, `duree` (minutes), `difficulte` (1 abordable, 2 classique, 3 costaud), `origine`. Retirer `exemple: true`, réservé aux exemples de la maquette.
3. Écrire l'énoncé, puis une partie `## Indication` et une partie `## Correction`. Les formules s'écrivent en LaTeX : `$x^2$` dans le texte, `$$...$$` sur une ligne à part.
4. Lancer `npm run build` : s'il manque une information ou qu'elle est mal écrite, le message dit laquelle.

Les neuf fichiers marqués `exemple: true` sont des exemples écrits pour voir le rendu : il suffit de les supprimer (ou de les remplacer) quand les vraies planches arrivent.

## Ce que l'élève trouve sur le site

- **Les planches** (`/exercices`) : filtres par concours, filière, difficulté, chapitre et avancement, plus une recherche.
- **Une planche** : chrono de préparation (dans l'onglet aussi), indication sur post-it, correction au rouge, verdict au tampon (réussi, à revoir, raté), bouton d'impression.
- **Oral blanc** (`/oral-blanc`) : une planche tirée au sort, chrono lancé tout seul, correction sous enveloppe jusqu'à la fin.
- **Mon cahier** (`/cahier`) : planches travaillées, verdicts, jours d'entraînement d'affilée. Tout reste dans le navigateur de l'élève.
- **L'accueil** : la planche du jour en entier (la même pour toute une filière, pour comparer ses temps), le compte à rebours avant les oraux, l'objectif de la semaine, la série, la mention, et les planches à réviser.
- **Révisions espacées** : une planche ratée ou à revoir revient 2 jours plus tard, puis 7, puis 21.
- **Défier un ami** : un bouton de partage sur chaque planche (WhatsApp, Messenger…), avec une vignette d'aperçu (`public/og.png`).
- **Sur téléphone** : le site s'installe comme une application et se lit hors ligne.
