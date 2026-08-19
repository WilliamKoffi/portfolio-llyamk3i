export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export interface Education {
  id: string;
  period: string;
  degree: string;
  institution: string;
  description?: string;
}

export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    period: "2025",
    role: "Développeur Freelance Full-Stack",
    company: "Univers des Boutchous",
    description: "Développement complet du backend de la plateforme e-commerce sous Laravel et d'un backoffice d'administration avec Filament PHP. Gestion de l'architecture technique globale, modélisation des bases de données SQL, intégration d'APIs sécurisées et optimisation des performances et de la sécurité.",
    tags: ["Laravel", "Filament PHP", "MySQL", "Tailwind CSS", "Architecture technique", "REST API"]
  },
  {
    id: "exp-2",
    period: "2021 - 2024",
    role: "Co-fondateur & Développeur Principal",
    company: "AFRIKLABTECH",
    description: "Co-fondation d'une startup spécialisée dans l'édition de logiciels web/mobiles et la cybersécurité. Conception d'interfaces réactives avec Tailwind CSS, React, Vue.js, Laravel et PHP. Intégration de briques de cybersécurité, réalisation d'audits, de tests de pénétration et conduite de projets en méthodologie agile.",
    tags: ["React", "Vue.js", "Laravel", "Tailwind CSS", "Cybersécurité", "Docker", "Agile", "TypeScript", "Rust"]
  },
  {
    id: "exp-3",
    period: "2019 - 2021",
    role: "Stagiaire Développeur Web",
    company: "DIGITAL SUN",
    description: "Participation au développement de fonctionnalités et à la maintenance corrective/évolutive d'applications complexes en PHP et JavaScript. Collaboration étroite en équipe, exécution de tests de non-régression et rédaction de documentations techniques, sous la direction du Dr AMANZOU Aubin.",
    tags: ["PHP", "JavaScript", "Maintenance", "Tests unitaires", "Documentation technique"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu-1",
    period: "2019",
    degree: "Licence en Développement d'Applications et e-services",
    institution: "Université Virtuelle de Côte d'Ivoire",
    description: "Formation avancée sur la conception logicielle, les architectures Web, la gestion de bases de données et la conduite de projets numériques."
  },
  {
    id: "edu-2",
    period: "2016",
    degree: "BAC: Série D",
    institution: "Lycée Moderne M'bahiakro",
    description: "Diplôme du Baccalauréat, orientation scientifique."
  },
  {
    id: "edu-3",
    period: "2013",
    degree: "BEPC",
    institution: "Lycée Moderne M'bahiakro",
    description: "Brevet d'Études du Premier Cycle."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    number: "01",
    title: "Cadrage & Architecture",
    description: "Analyse approfondie de vos objectifs techniques et modélisation de l'architecture backend et de la base de données pour un produit hautement évolutif."
  },
  {
    id: 2,
    number: "02",
    title: "Design & Interfaces",
    description: "Conception d'interfaces Pixel Perfect adaptatives et modernes avec Tailwind CSS, optimisées pour offrir la meilleure expérience utilisateur possible."
  },
  {
    id: 3,
    number: "03",
    title: "Développement & Tests",
    description: "Codage propre et rigoureux (Laravel, React/Vue) associé à des tests approfondis (PHPUnit, Pest, Vitest) pour garantir une stabilité à toute épreuve."
  },
  {
    id: 4,
    number: "04",
    title: "Sécurisation & Déploiement",
    description: "Audit de sécurité rigoureux, conteneurisation Docker, configuration serveur (FrankenPHP/Apache) et mise en ligne avec un monitoring continu."
  }
];
