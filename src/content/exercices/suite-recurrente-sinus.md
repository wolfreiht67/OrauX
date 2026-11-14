---
titre: La suite des sinus itérés
banque: X-ENS
filiere: PSI
chapitre: Suites numériques
duree: 30
difficulte: 3
exemple: true
---

Soit $u_0 \in \,]0, \pi[$ et $(u_n)$ définie par $u_{n+1} = \sin(u_n)$.

1. Montrer que $(u_n)$ converge et déterminer sa limite.
2. Déterminer un réel $\alpha$ tel que $\dfrac{1}{u_{n+1}^{\,\alpha}} - \dfrac{1}{u_n^{\,\alpha}}$ admette une limite finie non nulle.
3. En déduire un équivalent de $u_n$.

## Indication

Pour la question 2, faites un développement limité de $\dfrac{1}{\sin^2 x}$ en $0$. Pour la question 3, pensez au théorème de Cesàro.

## Correction

**1.** On a $u_1 = \sin u_0 \in \,]0, 1]$, et par récurrence $u_n \in \,]0, 1]$ pour $n \ge 1$ (car $\sin$ envoie $]0, 1]$ dans $]0, 1]$). Comme $\sin x < x$ pour $x > 0$, la suite est strictement décroissante. Décroissante et minorée par $0$, elle converge vers $\ell \in [0, 1]$, et par continuité $\sin \ell = \ell$, donc $\ell = 0$.

**2.** En $0$, $\sin x = x - \dfrac{x^3}{6} + o(x^3)$, donc $\sin^2 x = x^2 - \dfrac{x^4}{3} + o(x^4)$ et

$$
\frac{1}{\sin^2 x} = \frac{1}{x^2} \left(1 - \frac{x^2}{3} + o(x^2)\right)^{-1} = \frac{1}{x^2} + \frac{1}{3} + o(1).
$$

Comme $u_n \to 0$ et $u_n > 0$, avec $\alpha = 2$ :

$$
\frac{1}{u_{n+1}^2} - \frac{1}{u_n^2} \xrightarrow[n \to +\infty]{} \frac{1}{3}.
$$

**3.** D'après le théorème de Cesàro,

$$
\frac{1}{n} \sum_{k=0}^{n-1} \left( \frac{1}{u_{k+1}^2} - \frac{1}{u_k^2} \right) = \frac{1}{n}\left( \frac{1}{u_n^2} - \frac{1}{u_0^2} \right) \longrightarrow \frac{1}{3}.
$$

Donc $\dfrac{1}{u_n^2} \sim \dfrac{n}{3}$, et comme $u_n > 0$ :

$$
u_n \sim \sqrt{\frac{3}{n}}.
$$
