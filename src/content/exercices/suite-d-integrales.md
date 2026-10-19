---
titre: Une suite d'intégrales
banque: Centrale-Supélec
filiere: PSI
chapitre: Intégration sur un intervalle
duree: 30
exemple: true
---

Pour $n \in \mathbb{N}$, on pose

$$
I_n = \int_0^1 \frac{x^n}{1 + x} \, \mathrm{d}x.
$$

1. Montrer que $(I_n)$ converge et donner sa limite.
2. Calculer $I_n + I_{n+1}$.
3. En déduire un équivalent de $I_n$ quand $n \to +\infty$.

## Indication

Pour la question 3, utilisez que $(I_n)$ est décroissante pour encadrer $2 I_n$.

## Correction

**1.** Pour $x \in [0, 1]$, on a $0 \le \dfrac{x^n}{1+x} \le x^n$, donc

$$
0 \le I_n \le \int_0^1 x^n \, \mathrm{d}x = \frac{1}{n+1}.
$$

Par encadrement, $I_n \to 0$.

**2.** Par linéarité de l'intégrale,

$$
I_n + I_{n+1} = \int_0^1 \frac{x^n (1 + x)}{1 + x} \, \mathrm{d}x = \int_0^1 x^n \, \mathrm{d}x = \frac{1}{n+1}.
$$

**3.** Pour $x \in [0, 1]$, $x^{n+1} \le x^n$, donc $I_{n+1} \le I_n$ : la suite est décroissante. Pour $n \ge 1$ :

$$
2 I_n \le I_{n-1} + I_n = \frac{1}{n}
\qquad \text{et} \qquad
2 I_n \ge I_n + I_{n+1} = \frac{1}{n+1}.
$$

Ainsi $\dfrac{n}{2(n+1)} \le n I_n \le \dfrac{1}{2}$, d'où $n I_n \to \dfrac12$, c'est-à-dire

$$
I_n \sim \frac{1}{2n}.
$$
