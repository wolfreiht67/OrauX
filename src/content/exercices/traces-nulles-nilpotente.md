---
titre: Traces nulles et nilpotence
banque: X-ENS
filiere: MP
chapitre: Réduction des endomorphismes
duree: 30
difficulte: 3
exemple: true
---

Soit $A \in \mathcal{M}_n(\mathbb{C})$ telle que

$$
\forall k \in \{1, \dots, n\}, \quad \operatorname{tr}(A^k) = 0.
$$

Montrer que $A$ est nilpotente.

## Indication

Raisonnez par l'absurde : notez $\lambda_1, \dots, \lambda_r$ les valeurs propres **non nulles et distinctes** de $A$, avec leurs multiplicités $m_1, \dots, m_r$, et écrivez les traces des puissances avec elles. Un déterminant de Vandermonde n'est pas loin.

## Correction

$A$ est trigonalisable sur $\mathbb{C}$. Si $\mu_1, \dots, \mu_n$ sont ses valeurs propres comptées avec multiplicité, alors $A^k$ est semblable à une matrice triangulaire de diagonale $\mu_1^k, \dots, \mu_n^k$, donc

$$
\operatorname{tr}(A^k) = \sum_{i=1}^n \mu_i^k.
$$

**Par l'absurde**, supposons que $A$ ait au moins une valeur propre non nulle. Notons $\lambda_1, \dots, \lambda_r$ ($1 \le r \le n$) ses valeurs propres non nulles **distinctes**, de multiplicités $m_1, \dots, m_r \ge 1$. Les valeurs propres nulles ne contribuant pas aux traces, l'hypothèse donne

$$
\forall k \in \{1, \dots, r\}, \quad \sum_{j=1}^r m_j \lambda_j^k = 0.
$$

C'est un système linéaire $MX = 0$ d'inconnue $X = (m_1, \dots, m_r)$, de matrice $M = (\lambda_j^k)_{1 \le k, j \le r}$. En factorisant $\lambda_j$ dans chaque colonne :

$$
\det M = \lambda_1 \cdots \lambda_r \prod_{1 \le i < j \le r} (\lambda_j - \lambda_i) \neq 0,
$$

car les $\lambda_j$ sont non nulles et distinctes (Vandermonde). Donc $X = 0$, ce qui contredit $m_1 \ge 1$.

**Conclusion.** Toutes les valeurs propres de $A$ sont nulles : $\chi_A = X^n$, et d'après le théorème de Cayley-Hamilton, $A^n = 0$.
