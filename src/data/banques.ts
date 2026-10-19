// Les trois banques de concours, partagées par l'accueil, les pages concours et les exercices.
// slug : la fin de l'adresse de la page du concours (/concours/mines-ponts).
// Logos des écoles (public/logos/, source Wikimedia Commons), en filigrane teinté à la couleur de la banque.
// ratio : largeur / hauteur du fichier. pos : placement dans la tuile, réglé à l'œil.
export const banques = [
  { nom: 'Mines-Ponts', cle: 'mines', slug: 'mines-ponts', filieres: ['MP', 'PSI', 'PC'], logos: [
    { src: '/logos/mines-paris.png', ratio: 1960 / 591, pos: 'right: -54%; bottom: -6%; width: 84%; --r: -7deg' },
    { src: '/logos/ponts.svg', ratio: 115 / 150, pos: 'right: 3%; top: -6%; height: 64%; --r: 8deg' },
  ] },
  { nom: 'Centrale-Supélec', cle: 'centrale', slug: 'centrale-supelec', filieres: ['MP', 'PSI', 'PC'], logos: [
    { src: '/logos/centralesupelec.svg', ratio: 98 / 50, pos: 'right: -20%; bottom: -12%; width: 100%; --r: -8deg' },
  ] },
  { nom: 'X-ENS', cle: 'xens', slug: 'x-ens', filieres: ['MP', 'PSI', 'PC'], logos: [
    { src: '/logos/polytechnique.png', ratio: 1340 / 2328, pos: 'right: -4%; top: -14%; height: 128%; --r: 6deg' },
    { src: '/logos/ens-psl.png', ratio: 960 / 405, pos: 'left: 16%; top: 42%; width: 42%; --r: -6deg' },
  ] },
] as const;

// Retrouver une banque à partir du nom écrit dans un exercice (« Mines-Ponts »).
export const banqueDe = (nom: string) => banques.find((b) => b.nom === nom)!;
