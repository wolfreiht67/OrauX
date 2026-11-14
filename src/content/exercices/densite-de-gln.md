---
titre: Densité des matrices inversibles
banque: Centrale-Supélec
filiere: MP
chapitre: Topologie des evn
duree: 30
difficulte: 1
exemple: true
---

1. Montrer que $GL_n(\mathbb{R})$ est un ouvert dense de $\mathcal{M}_n(\mathbb{R})$.
2. En déduire que pour toutes $A, B \in \mathcal{M}_n(\mathbb{R})$, les matrices $AB$ et $BA$ ont le même polynôme caractéristique.

## Indication

Pour la densité, regardez $A - \frac{1}{k} I_n$ quand $k \to +\infty$ : combien de valeurs de $k$ peuvent poser problème ?

## Correction

**1.** *Ouvert.* $GL_n(\mathbb{R}) = \det^{-1}(\mathbb{R}^*)$. Le déterminant est polynomial en les coefficients, donc continu, et $\mathbb{R}^*$ est ouvert : $GL_n(\mathbb{R})$ est ouvert.

*Dense.* Soit $A \in \mathcal{M}_n(\mathbb{R})$. La matrice $A - \frac{1}{k} I_n$ n'est pas inversible si et seulement si $\frac{1}{k}$ est valeur propre de $A$. Comme $A$ a au plus $n$ valeurs propres, $A - \frac{1}{k} I_n \in GL_n(\mathbb{R})$ pour tout $k$ assez grand, et

$$
A - \tfrac{1}{k} I_n \xrightarrow[k \to +\infty]{} A.
$$

**2.** *Cas où $A$ est inversible.* $BA = A^{-1}(AB)A$ : les deux matrices sont semblables, donc $\chi_{AB} = \chi_{BA}$.

*Cas général.* Soit $(A_k)$ une suite de matrices inversibles qui tend vers $A$. Pour tout $x \in \mathbb{R}$ et tout $k$,

$$
\det(x I_n - A_k B) = \det(x I_n - B A_k).
$$

Les deux membres sont des fonctions continues de $A_k$ (le produit matriciel et le déterminant sont continus). En faisant $k \to +\infty$, on obtient $\det(x I_n - AB) = \det(x I_n - BA)$ pour tout réel $x$, donc $\chi_{AB} = \chi_{BA}$ (deux polynômes égaux en une infinité de points sont égaux).
