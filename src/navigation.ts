export interface NavLink {
  id: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "projets", label: "Projets" },
  { id: "services", label: "Services" },
  { id: "processus", label: "Processus" },
  { id: "temoignages", label: "Témoignages" },
];
