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
2. Remplir les informations du haut, entre les deux `---` : `titre`, `banque` (`Mines-Ponts`, `Centrale-Supélec` ou `X-ENS`), `filiere` (`MP`, `PSI` ou `PC`), `chapitre`, et si besoin `annee`, `duree` (minutes), `origine`. Retirer `exemple: true`, réservé aux exemples de la maquette.
3. Écrire l'énoncé, puis une partie `## Indication` et une partie `## Correction`. Les formules s'écrivent en LaTeX : `$x^2$` dans le texte, `$$...$$` sur une ligne à part.
4. Lancer `npm run build` : s'il manque une information ou qu'elle est mal écrite, le message dit laquelle.
