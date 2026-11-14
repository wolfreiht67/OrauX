// « Mon cahier » : la progression de l'élève, gardée dans son navigateur (localStorage).
// Rien n'est envoyé nulle part : le cahier reste sur l'appareil, et disparaît si l'élève efface ses données.
// Plus tard (V2, comptes élèves), ces fonctions pourront écrire dans Supabase à la place.

export type Verdict = 'reussi' | 'revoir' | 'rate';

export const VERDICTS: Record<Verdict, string> = {
  reussi: 'Réussi',
  revoir: 'À revoir',
  rate: 'Raté',
};

interface Entree {
  verdict?: Verdict;
  quand: string; // date du dernier passage, « 2026-11-14 »
}

interface Cahier {
  planches: Record<string, Entree>; // une entrée par exercice travaillé, rangée par son id
  jours: string[]; // les jours où l'élève s'est entraîné, pour la série
}

const CLE = 'oraux-cahier-v1';

// La date du jour au format AAAA-MM-JJ, à l'heure locale de l'élève.
export const aujourdhui = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

// localStorage peut être bloqué (navigation privée) : on protège chaque lecture et écriture.
export function lire(): Cahier {
  try {
    const brut = JSON.parse(localStorage.getItem(CLE) ?? 'null');
    if (brut && typeof brut === 'object') return { planches: brut.planches ?? {}, jours: brut.jours ?? [] };
  } catch {}
  return { planches: {}, jours: [] };
}

function ecrire(cahier: Cahier) {
  try {
    localStorage.setItem(CLE, JSON.stringify(cahier));
  } catch {}
}

// Note que l'élève a travaillé aujourd'hui sur cette planche (chrono lancé, correction ouverte…).
export function noterPassage(id: string) {
  const cahier = lire();
  const jour = aujourdhui();
  cahier.planches[id] = { ...cahier.planches[id], quand: jour };
  if (!cahier.jours.includes(jour)) cahier.jours.push(jour);
  ecrire(cahier);
}

// Enregistre le verdict de l'élève sur une planche (ou l'efface si verdict est vide).
export function donnerVerdict(id: string, verdict?: Verdict) {
  noterPassage(id);
  const cahier = lire();
  cahier.planches[id].verdict = verdict;
  ecrire(cahier);
}

export const verdictDe = (id: string) => lire().planches[id]?.verdict;

export function effacer() {
  try {
    localStorage.removeItem(CLE);
  } catch {}
}

// Nombre de jours d'entraînement d'affilée, en comptant aujourd'hui ou hier.
export function serie(jours: string[]): number {
  const faits = new Set(jours);
  const d = new Date();
  if (!faits.has(aujourdhui(d))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (faits.has(aujourdhui(d))) {
    n += 1;
    d.setDate(d.getDate() - 1);
  }
  return n;
}
