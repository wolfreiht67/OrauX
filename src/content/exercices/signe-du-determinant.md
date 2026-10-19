---
titre: Signe du déterminant
banque: Mines-Ponts
filiere: MP
chapitre: Réduction des endomorphismes
duree: 30
exemple: true
---

Soit $A \in \mathcal{M}_n(\mathbb{R})$ telle que $A^3 = A + I_n$.

Montrer que $\det A > 0$.

## Indication

Regardez les racines du polynôme $X^3 - X - 1$ : combien sont réelles, et quel est leur signe ?

## Correction

Le polynôme $P = X^3 - X - 1$ annule $A$.

**Racines de $P$.** On a $P'(x) = 3x^2 - 1$, donc $P$ admet un maximum local en $-\tfrac{1}{\sqrt 3}$, qui vaut

$$
P\left(-\tfrac{1}{\sqrt 3}\right) = \frac{2}{3\sqrt 3} - 1 < 0.
$$

Ainsi $P$ n'a qu'une seule racine réelle $\alpha$, et comme $P(1) = -1 < 0 < P(2) = 5$, on a $\alpha \in \,]1, 2[$. Les deux autres racines sont complexes conjuguées : $\beta$ et $\bar\beta$, avec $\beta \notin \mathbb{R}$.

**Réduction de $A$.** $P$ est scindé à racines simples sur $\mathbb{C}$ et annule $A$, donc $A$ est diagonalisable dans $\mathcal{M}_n(\mathbb{C})$, et ses valeurs propres sont parmi $\alpha, \beta, \bar\beta$. Comme $A$ est réelle, son polynôme caractéristique est à coefficients réels : $\beta$ et $\bar\beta$ ont la même multiplicité $q$. Notons $p$ celle de $\alpha$.

**Conclusion.**

$$
\det A = \alpha^p \, \beta^q \, \bar\beta^{\,q} = \alpha^p \, |\beta|^{2q} > 0,
$$

car $\alpha > 0$ et $\beta \neq 0$.
