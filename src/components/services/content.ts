export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "srv-1",
    title: "Développement Backend",
    description: "Conception d'architectures serveurs robustes et d'APIs performantes et sécurisées avec PHP, Laravel, Symfony et Filament PHP.",
    icon: "Cpu"
  },
  {
    id: "srv-2",
    title: "Applications Web",
    description: "Développement d'applications Web interactives, réactives et fluides avec React, Vue.js, Next.js, Nuxt.js et TypeScript.",
    icon: "Layers"
  },
  {
    id: "srv-3",
    title: "Applications Mobiles",
    description: "Développement d'interfaces mobiles hybrides d'une grande fluidité adaptées aux besoins spécifiques des utilisateurs modernes.",
    icon: "Smartphone"
  },
  {
    id: "srv-4",
    title: "Audit & Cybersécurité",
    description: "Mise en œuvre de solutions de cybersécurité, audits de sécurité applicative, tests de pénétration et protection des données sensibles.",
    icon: "Zap"
  },
  {
    id: "srv-5",
    title: "Automatisation & IA",
    description: "Création de workflows automatisés avec n8n, orchestration d'agents d'intelligence artificielle autonomes avec CrewAI, et automatisation de tests mobiles avec Maestro.",
    icon: "Workflow"
  },
  {
    id: "srv-6",
    title: "DevOps & Conteneurisation",
    description: "Déploiement et gestion d'infrastructures hautement disponibles avec Docker, FrankenPHP, Apache, Linux Bash, Git et tests automatisés.",
    icon: "Globe"
  }
];
