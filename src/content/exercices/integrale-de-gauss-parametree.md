---
titre: Une intégrale de Gauss à paramètre
banque: Centrale-Supélec
filiere: PC
chapitre: Intégrales à paramètre
duree: 30
difficulte: 2
exemple: true
---

Pour $x \in \mathbb{R}$, on pose

$$
F(x) = \int_0^{+\infty} e^{-t^2} \cos(x t) \, \mathrm{d}t.
$$

On admet que $\displaystyle\int_0^{+\infty} e^{-t^2} \, \mathrm{d}t = \frac{\sqrt{\pi}}{2}$.

1. Montrer que $F$ est définie et de classe $\mathcal{C}^1$ sur $\mathbb{R}$.
2. Trouver une équation différentielle vérifiée par $F$.
3. En déduire $F(x)$.

## Indication

Après avoir dérivé sous l'intégrale, faites une intégration par parties en dérivant $\sin(xt)$ et en intégrant $t\,e^{-t^2}$.

## Correction

**1.** Posons $f(x, t) = e^{-t^2} \cos(xt)$. Pour tout $x$, $t \mapsto f(x,t)$ est continue et $|f(x,t)| \le e^{-t^2}$, intégrable sur $[0, +\infty[$ : $F$ est bien définie.

$f$ admet une dérivée partielle $\dfrac{\partial f}{\partial x}(x,t) = -t\, e^{-t^2} \sin(xt)$, continue en $(x, t)$, et

$$
\left| \frac{\partial f}{\partial x}(x, t) \right| \le t\, e^{-t^2},
$$

qui est intégrable sur $[0, +\infty[$ et ne dépend pas de $x$. Par le théorème de dérivation sous l'intégrale, $F$ est $\mathcal{C}^1$ et

$$
F'(x) = -\int_0^{+\infty} t\, e^{-t^2} \sin(xt) \, \mathrm{d}t.
$$

**2.** On intègre par parties avec $u(t) = \sin(xt)$ et $v(t) = \tfrac{1}{2} e^{-t^2}$, de sorte que $v'(t) = -t\,e^{-t^2}$. Le crochet $\left[\tfrac12 \sin(xt)\, e^{-t^2}\right]_0^{+\infty}$ est nul, donc

$$
F'(x) = \int_0^{+\infty} \sin(xt)\, v'(t) \, \mathrm{d}t = -\int_0^{+\infty} x \cos(xt) \cdot \tfrac12 e^{-t^2} \, \mathrm{d}t = -\frac{x}{2}\, F(x).
$$

**3.** $F$ est solution de $y' = -\frac{x}{2}\, y$, donc $F(x) = F(0)\, e^{-x^2/4}$. Comme $F(0) = \frac{\sqrt\pi}{2}$ :

$$
F(x) = \frac{\sqrt{\pi}}{2}\, e^{-x^2/4}.
$$
