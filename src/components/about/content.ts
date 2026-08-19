import { Award, Code, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Statistic {
  value: string;
  label: string;
  icon: LucideIcon;
}

export const STATISTICS: Statistic[] = [
  { value: "6+", label: "Années d'Expérience", icon: Award },
  { value: "45+", label: "Projets Livrés", icon: Code },
  { value: "99%", label: "Clients Satisfaits", icon: Sparkles },
];

export const SPECIFICATIONS: string[] = [
  "Architecture Backend (Laravel, PHP, Symfony)",
  "Interfaces réactives (React, Vue, Nuxt, Tailwind)",
  "Développement Mobile hybride",
  "Cybersécurité applicative (Audits & Pénétration)",
  "Conteneurisation & DevOps (Docker, FrankenPHP)",
  "Rigueur de test (PHPUnit, Pest, Vitest)",
  "Automatisation de flux & API (n8n)",
  "Agents IA & Tests mobiles (CrewAI, Maestro)",
];

export const INTERESTS: string[] = ["Jeux Vidéo", "Basketball", "Musique"];

export interface Language {
  name: string;
  level: number;
  note: string;
  primary: boolean;
}

export const LANGUAGES: Language[] = [
  { name: "Français", level: 95, note: "Langue maternelle (95%)", primary: true },
  { name: "Anglais", level: 65, note: "Intermédiaire (65%)", primary: false },
];

export const PULL_QUOTE =
  "Un bon code ne se contente pas de fonctionner. Il doit être élégant, robuste et offrir une expérience utilisateur si fluide qu'elle en devient invisible.";
