---
titre: Somme d'une série entière
banque: Mines-Ponts
filiere: PSI
chapitre: Séries entières
duree: 20
difficulte: 1
exemple: true
---

On considère la série entière $\displaystyle\sum_{n \ge 0} n^2 x^n$.

1. Déterminer son rayon de convergence $R$.
2. Calculer sa somme $S(x)$ pour $x \in \,]-R, R[$.

## Indication

Partez de $\dfrac{1}{1-x} = \displaystyle\sum_{n \ge 0} x^n$ et appliquez deux fois l'opération $f \mapsto x f'$.

## Correction

**1.** Pour $x \neq 0$, $\left|\dfrac{(n+1)^2 x^{n+1}}{n^2 x^n}\right| \longrightarrow |x|$. D'après la règle de d'Alembert, la série converge pour $|x| < 1$ et diverge grossièrement pour $|x| > 1$ : $R = 1$.

**2.** Sur $]-1, 1[$, une série entière se dérive terme à terme. En partant de

$$
\sum_{n \ge 0} x^n = \frac{1}{1-x},
$$

on dérive puis on multiplie par $x$ :

$$
\sum_{n \ge 0} n x^n = x \cdot \frac{1}{(1-x)^2} = \frac{x}{(1-x)^2}.
$$

On recommence : $\left(\dfrac{x}{(1-x)^2}\right)' = \dfrac{(1-x) + 2x}{(1-x)^3} = \dfrac{1+x}{(1-x)^3}$, donc

$$
S(x) = \sum_{n \ge 0} n^2 x^n = \frac{x(1+x)}{(1-x)^3}.
$$

*Vérification :* le coefficient de $x$ dans le développement de $\frac{x(1+x)}{(1-x)^3} = x(1+x)(1 + 3x + \dots)$ vaut $1 = 1^2$, et celui de $x^2$ vaut $3 + 1 = 4 = 2^2$.
