---
titre: Deux lois géométriques
banque: X-ENS
filiere: PC
chapitre: Probabilités
duree: 20
exemple: true
---

Soit $p \in \,]0, 1[$ et $X, Y$ deux variables aléatoires indépendantes qui suivent la loi géométrique de paramètre $p$ :

$$
\forall k \ge 1, \quad P(X = k) = P(Y = k) = p\,(1-p)^{k-1}.
$$

1. Calculer $P(X = Y)$.
2. En déduire $P(X < Y)$.

## Indication

Décomposez l'événement $(X = Y)$ selon la valeur commune $k$ de $X$ et $Y$.

## Correction

**1.** L'événement $(X = Y)$ est la réunion disjointe des $(X = k) \cap (Y = k)$ pour $k \ge 1$. Par indépendance, en posant $q = 1 - p$ :

$$
P(X = Y) = \sum_{k=1}^{+\infty} p^2 \, q^{2(k-1)} = \frac{p^2}{1 - q^2} = \frac{p^2}{p\,(2 - p)} = \frac{p}{2 - p}.
$$

**2.** $X$ et $Y$ jouent des rôles symétriques (même loi, indépendantes), donc $P(X < Y) = P(X > Y)$. Comme les trois événements $(X < Y)$, $(X = Y)$ et $(X > Y)$ forment une partition :

$$
P(X < Y) = \frac{1}{2}\left(1 - \frac{p}{2 - p}\right) = \frac{1 - p}{2 - p}.
$$
