---
titre: Recollement de solutions
banque: Mines-Ponts
filiere: PC
chapitre: Équations différentielles
duree: 30
difficulte: 2
exemple: true
---

On considère l'équation différentielle

$$
(E) \qquad x\,y' - 2y = x^3.
$$

1. Résoudre $(E)$ sur $]0, +\infty[$, puis sur $]-\infty, 0[$.
2. Déterminer les solutions de $(E)$ définies et dérivables sur $\mathbb{R}$ tout entier.

## Indication

Pour la question 2, une solution sur $\mathbb{R}$ est une solution sur chacun des deux intervalles : écrivez-la avec deux constantes, puis étudiez continuité et dérivabilité en $0$.

## Correction

**1.** Sur $I = \,]0, +\infty[$ (ou $]-\infty, 0[$), $x$ ne s'annule pas et $(E)$ s'écrit $y' - \dfrac{2}{x}\,y = x^2$.

*Équation homogène.* Une primitive de $\dfrac{2}{x}$ sur $I$ est $2 \ln |x|$, donc les solutions homogènes sont $x \mapsto \lambda\, e^{2\ln|x|} = \lambda x^2$.

*Solution particulière.* On cherche $y = a x^3$ : $x \cdot 3a x^2 - 2a x^3 = a x^3$, donc $a = 1$ convient.

Les solutions sur $]0, +\infty[$ sont donc les $x \mapsto x^3 + \lambda x^2$ ($\lambda \in \mathbb{R}$), et de même sur $]-\infty, 0[$ les $x \mapsto x^3 + \mu x^2$ ($\mu \in \mathbb{R}$).

**2.** *Analyse.* Si $y$ est solution sur $\mathbb{R}$, il existe $\lambda, \mu$ tels que

$$
y(x) = \begin{cases} x^3 + \lambda x^2 & \text{si } x > 0, \\ x^3 + \mu x^2 & \text{si } x < 0. \end{cases}
$$

Par continuité en $0$, $y(0) = \lim_{x \to 0} y(x) = 0$.

*Synthèse.* Réciproquement, pour tous $\lambda, \mu$, la fonction ci-dessus prolongée par $y(0) = 0$ est dérivable en $0$ : son taux d'accroissement $\dfrac{y(x)}{x}$ vaut $x^2 + \lambda x$ ou $x^2 + \mu x$, qui tend vers $0$. Donc $y'(0) = 0$, et l'équation en $x = 0$ s'écrit $0 \cdot 0 - 2 \cdot 0 = 0$ : elle est vérifiée.

Les solutions sur $\mathbb{R}$ forment donc un ensemble de dimension $2$ (paramètres $\lambda$ et $\mu$ indépendants), alors que sur chaque intervalle il n'y en a qu'une famille à un paramètre. C'est le point à remarquer devant l'examinateur : le théorème de Cauchy-Lipschitz ne s'applique pas en $0$, où le coefficient de $y'$ s'annule.
