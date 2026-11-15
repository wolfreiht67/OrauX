// « Mon cahier » : le profil et la progression de l'élève, gardés dans son navigateur (localStorage).
// Rien n'est envoyé nulle part : le cahier reste sur l'appareil, et disparaît si l'élève efface ses données.
// Plus tard (V2, comptes élèves), ces fonctions pourront écrire dans Supabase à la place.

export type Verdict = 'reussi' | 'revoir' | 'rate';
export type Filiere = 'MP' | 'PSI' | 'PC';

export const VERDICTS: Record<Verdict, string> = {
  reussi: 'Réussi',
  revoir: 'À revoir',
  rate: 'Raté',
};

interface Entree {
  verdict?: Verdict;
  quand: string; // date du dernier passage, « 2026-11-14 »
  temps?: number; // secondes de préparation utilisées la dernière fois
  revision?: string; // date à laquelle la planche doit revenir (révisions espacées)
  etape?: number; // nombre de révisions réussies d'affilée (0, 1, 2)
}

interface Cahier {
  planches: Record<string, Entree>; // une entrée par exercice travaillé, rangée par son id
  jours: string[]; // les jours où l'élève s'est entraîné, pour la série
  journal: string[]; // « jour|id » : chaque planche travaillée, une fois par jour (pour l'objectif de la semaine)
}

export interface Profil {
  filiere?: Filiere;
  concours: string[]; // noms des banques visées (« Mines-Ponts »…), vide = toutes
  objectif: number; // planches par semaine
  oral?: string; // date du premier oral choisie par l'élève, « 2027-06-22 »
}

const CLE = 'oraux-cahier-v1';
const CLE_PROFIL = 'oraux-profil-v1';

// Les révisions espacées : une planche ratée revient après 2 jours, puis 7, puis 21 si elle est réussie à chaque fois.
export const INTERVALLES = [2, 7, 21];

// La date du jour au format AAAA-MM-JJ, à l'heure locale de l'élève.
export const aujourdhui = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export const dansNJours = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return aujourdhui(d);
};

// « 2026-11-17 » → « mardi 17 novembre »
export const joliJour = (jour: string) =>
  new Date(`${jour}T12:00:00`).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

// 1092 → « 18 min 12 s »
export const joliTemps = (s: number) => (s >= 60 ? `${Math.floor(s / 60)} min${s % 60 ? ` ${s % 60} s` : ''}` : `${s} s`);

// localStorage peut être bloqué (navigation privée) : on protège chaque lecture et écriture.
function lireCle(cle: string) {
  try {
    return JSON.parse(localStorage.getItem(cle) ?? 'null');
  } catch {
    return null;
  }
}
function ecrireCle(cle: string, valeur: unknown) {
  try {
    localStorage.setItem(cle, JSON.stringify(valeur));
  } catch {}
}

export function lire(): Cahier {
  const brut = lireCle(CLE);
  return { planches: brut?.planches ?? {}, jours: brut?.jours ?? [], journal: brut?.journal ?? [] };
}

// Note que l'élève a travaillé aujourd'hui sur cette planche (chrono lancé, correction ouverte…).
export function noterPassage(id: string, temps?: number) {
  const cahier = lire();
  const jour = aujourdhui();
  cahier.planches[id] = { ...cahier.planches[id], quand: jour, ...(temps ? { temps } : {}) };
  if (!cahier.jours.includes(jour)) cahier.jours.push(jour);
  if (!cahier.journal.includes(`${jour}|${id}`)) cahier.journal.push(`${jour}|${id}`);
  ecrireCle(CLE, cahier);
}

// Enregistre le verdict de l'élève sur une planche (ou l'efface si verdict est vide),
// et programme la prochaine révision. Renvoie la date de cette révision, s'il y en a une.
export function donnerVerdict(id: string, verdict?: Verdict, temps?: number): string | undefined {
  noterPassage(id, temps);
  const cahier = lire();
  const e = cahier.planches[id];
  const enRevision = Boolean(e.revision);
  e.verdict = verdict;
  if (verdict === 'revoir' || verdict === 'rate') {
    e.etape = 0;
    e.revision = dansNJours(INTERVALLES[0]);
  } else if (verdict === 'reussi' && enRevision) {
    e.etape = (e.etape ?? 0) + 1;
    e.revision = e.etape < INTERVALLES.length ? dansNJours(INTERVALLES[e.etape]) : undefined;
  } else if (!verdict) {
    e.revision = undefined;
    e.etape = undefined;
  }
  ecrireCle(CLE, cahier);
  return e.revision;
}

export const verdictDe = (id: string) => lire().planches[id]?.verdict;

// Les planches dont la révision tombe aujourd'hui ou est en retard.
export const aReviser = (cahier = lire()) =>
  Object.entries(cahier.planches)
    .filter(([, e]) => e.revision && e.revision <= aujourdhui())
    .map(([id]) => id);

// Le nombre de planches travaillées depuis lundi.
export function cetteSemaine(cahier = lire()) {
  const d = new Date();
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  const lundi = aujourdhui(d);
  return cahier.journal.filter((j) => j.slice(0, 10) >= lundi).length;
}

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

// ---------- Mentions : la progression, au vocabulaire du bac et des jurys ----------
export const MENTIONS = [
  { seuil: 0, nom: 'Copie blanche' },
  { seuil: 1, nom: 'Passable' },
  { seuil: 3, nom: 'Assez bien' },
  { seuil: 6, nom: 'Bien' },
  { seuil: 10, nom: 'Très bien' },
  { seuil: 20, nom: 'Félicitations du jury' },
];

// La mention atteinte (d'après le nombre de planches réussies) et la suivante.
export function mention(reussies: number) {
  let i = 0;
  while (i + 1 < MENTIONS.length && reussies >= MENTIONS[i + 1].seuil) i += 1;
  return { actuelle: MENTIONS[i], suivante: MENTIONS[i + 1] };
}

// ---------- Profil ----------
export function lireProfil(): Profil {
  const brut = lireCle(CLE_PROFIL);
  return { filiere: brut?.filiere, concours: brut?.concours ?? [], objectif: brut?.objectif ?? 3, oral: brut?.oral };
}

export function ecrireProfil(changements: Partial<Profil>) {
  ecrireCle(CLE_PROFIL, { ...lireProfil(), ...changements });
}

// Nombre de jours avant une date « AAAA-MM-JJ ».
export function joursAvant(jour: string) {
  const cible = new Date(`${jour}T00:00:00`);
  const maintenant = new Date(`${aujourdhui()}T00:00:00`);
  return Math.round((cible.getTime() - maintenant.getTime()) / 86400000);
}
