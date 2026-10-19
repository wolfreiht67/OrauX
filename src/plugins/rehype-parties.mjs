// Découpe un exercice en trois parties, d'après ses titres « ## Indication » et « ## Correction ».
// Tout ce qui suit l'un de ces titres est rangé dans un bloc <details>, fermé par défaut :
// l'élève clique pour l'ouvrir. Ce qui précède le premier titre est l'énoncé.

const PARTIES = { indication: 'Indication', correction: 'Correction' };

// Le texte d'un titre, sans accents ni majuscules : « Indication » → « indication ».
function texte(noeud) {
  if (noeud.type === 'text') return noeud.value;
  return (noeud.children ?? []).map(texte).join('');
}
const cle = (noeud) => texte(noeud).trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export default function rehypeParties() {
  return (arbre) => {
    const enfants = [];
    let bloc = null;
    for (const noeud of arbre.children) {
      const nom = noeud.tagName === 'h2' ? cle(noeud) : null;
      if (nom in PARTIES) {
        bloc = {
          type: 'element',
          tagName: 'details',
          properties: { className: ['partie', nom] },
          children: [{ type: 'element', tagName: 'summary', properties: {}, children: [{ type: 'text', value: PARTIES[nom] }] }],
        };
        enfants.push(bloc);
      } else if (bloc) {
        bloc.children.push(noeud);
      } else {
        enfants.push(noeud);
      }
    }
    arbre.children = enfants;
  };
}
