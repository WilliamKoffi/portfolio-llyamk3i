import { Project, Service, Testimonial, Experience, ProcessStep, Education } from "./types";

export const DEV_INFO = {
  name: "Konan William Koffi",
  title: "Développeur Web, Mobile & Automatisation",
  subtitle: "Expert Full-Stack, Cybersécurité & Automatisation (n8n, CrewAI, Maestro)",
  avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=600&h=800&q=80",
  bioShort: "Passionné par les technologies de l'information, je suis développeur web, mobile et expert en automatisation. Je conçois des architectures performantes, des flux de travail automatisés intelligents (n8n, CrewAI) et des solutions sécurisées.",
  bioLong: "Passionné par les technologies de l'information, je suis un développeur web et mobile chevronné, spécialisé dans l'automatisation de processus complexes et le déploiement d'agents d'intelligence artificielle. Fort de mes expériences en start-up (AFRIKLABTECH) et en freelance, je conçois des architectures backend robustes (Laravel, PHP, Symfony), des interfaces frontend haut de gamme (React, Vue.js) et des solutions d'automatisation de pointe avec n8n, CrewAI et Maestro. Mon engagement technique s'accompagne d'une expertise en cybersécurité pour garantir des produits performants, hautement sécurisés et centrés sur l'utilisateur.",
  status: "Disponible pour de nouveaux défis",
  email: "kkonanwilliam@gmail.com",
  phone: "+225 07 89 79 04 14 / +225 05 75 18 20 03",
  address: "Cocody Riviera Saint-Viateur, Abidjan, Côte d'Ivoire",
  whatsapp: "https://wa.me/2250789790414",
  github: "https://github.com/WilliamKoffi",
  linkedin: "https://linkedin.com/in/William-koffi-9a507154",
  facebook: "https://facebook.com/konanwilliam.koffi.5",
};

export const PROJECTS: Project[] = [
  {
    id: "proj-elite-auto",
    title: "Elite Auto",
    description: "Plateforme haut de gamme de présentation et de réservation de véhicules de prestige. Conçue sous Next.js pour un rendu ultra-rapide côté serveur (SSR), une optimisation SEO maximale et une interface utilisateur moderne et réactive.",
    category: "Application Web / SaaS",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Framer Motion"],
    demoUrl: "https://elite-auto-henna.vercel.app/",
    githubUrl: "https://github.com/WilliamKoffi"
  },
  {
    id: "proj-lawyer",
    title: "Cabinet d'Avocats",
    description: "Plateforme de consultation juridique et de gestion de profils d'avocats. Propulsée par Nuxt.js avec une intégration intelligente de profils dynamiques basée sur les paramètres d'URL (onboarding automatisé et affichage personnalisé).",
    category: "Dashboard / SaaS",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    technologies: ["Nuxt.js", "Vue.js", "TypeScript", "Tailwind CSS", "Pinia", "REST API"],
    demoUrl: "https://lawyer-nine-gamma.vercel.app/?email=jone%40doe.com&name=Jone+Doe&phone=%2B1+%28982%29+466-6289&image=https%3A%2F%2Fwww.bipycy.org.uk&gender=M",
    githubUrl: "https://github.com/WilliamKoffi"
  },
  {
    id: "proj-lingerie",
    title: "Lingerie Puce",
    description: "Boutique e-commerce haut de gamme dédiée à la lingerie fine et au prêt-à-porter intime. Développée sous Nuxt.js pour garantir une navigation immersive, un chargement optimal des visuels et un tunnel d'achat fluide.",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "State Management", "E-Commerce API"],
    demoUrl: "https://lingerie-puce.vercel.app/",
    githubUrl: "https://github.com/WilliamKoffi"
  },
  {
    id: "proj-1",
    title: "Univers des Boutchous",
    description: "Plateforme e-commerce et de services pour la petite enfance. Développement complet du backend robuste sous Laravel et d'un backoffice d'administration dynamique avec Filament PHP. Prise en charge de l'architecture technique, de la modélisation des bases de données SQL, de la sécurisation globale et de l'optimisation des performances.",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    technologies: ["Laravel", "Filament PHP", "MySQL", "Tailwind CSS", "REST API", "PHP"],
    demoUrl: "https://univers-des-boutchous.com",
    githubUrl: "https://github.com/WilliamKoffi"
  }
];

export const SERVICES: Service[] = [
  {
    id: "srv-1",
    title: "Développement Backend",
    description: "Conception d'architectures serveurs robustes et d'APIs performantes et sécurisées avec PHP, Laravel, Symfony et Filament PHP.",
    iconName: "Cpu"
  },
  {
    id: "srv-2",
    title: "Applications Web",
    description: "Développement d'applications Web interactives, réactives et fluides avec React, Vue.js, Next.js, Nuxt.js et TypeScript.",
    iconName: "Layers"
  },
  {
    id: "srv-3",
    title: "Applications Mobiles",
    description: "Développement d'interfaces mobiles hybrides d'une grande fluidité adaptées aux besoins spécifiques des utilisateurs modernes.",
    iconName: "Smartphone"
  },
  {
    id: "srv-4",
    title: "Audit & Cybersécurité",
    description: "Mise en œuvre de solutions de cybersécurité, audits de sécurité applicative, tests de pénétration et protection des données sensibles.",
    iconName: "Zap"
  },
  {
    id: "srv-5",
    title: "Automatisation & IA",
    description: "Création de workflows automatisés avec n8n, orchestration d'agents d'intelligence artificielle autonomes avec CrewAI, et automatisation de tests mobiles avec Maestro.",
    iconName: "Workflow"
  },
  {
    id: "srv-6",
    title: "DevOps & Conteneurisation",
    description: "Déploiement et gestion d'infrastructures hautement disponibles avec Docker, FrankenPHP, Apache, Linux Bash, Git et tests automatisés.",
    iconName: "Globe"
  }
];

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
    numberStr: "01",
    title: "Cadrage & Architecture",
    description: "Analyse approfondie de vos objectifs techniques et modélisation de l'architecture backend et de la base de données pour un produit hautement évolutif."
  },
  {
    id: 2,
    numberStr: "02",
    title: "Design & Interfaces",
    description: "Conception d'interfaces Pixel Perfect adaptatives et modernes avec Tailwind CSS, optimisées pour offrir la meilleure expérience utilisateur possible."
  },
  {
    id: 3,
    numberStr: "03",
    title: "Développement & Tests",
    description: "Codage propre et rigoureux (Laravel, React/Vue) associé à des tests approfondis (PHPUnit, Pest, Vitest) pour garantir une stabilité à toute épreuve."
  },
  {
    id: 4,
    numberStr: "04",
    title: "Sécurisation & Déploiement",
    description: "Audit de sécurité rigoureux, conteneurisation Docker, configuration serveur (FrankenPHP/Apache) et mise en ligne avec un monitoring continu."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "tst-1",
    name: "Directeur de Projet",
    role: "Client Univers des Boutchous",
    company: "Univers des Boutchous",
    content: "William a réalisé un travail fantastique pour le backend de notre site et notre espace administrateur sous Filament PHP. Sa réactivité, sa maîtrise de Laravel et sa vision pour l'optimisation des performances ont été des facteurs clés dans la réussite de notre lancement.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  },
  {
    id: "tst-2",
    name: "Co-fondateur Associé",
    role: "Partenaire Technologique",
    company: "AFRIKLABTECH",
    content: "William est un développeur exceptionnel et un esprit entrepreneurial remarquable. Sa capacité à allier développement web de pointe et briques de cybersécurité ultra-robustes nous a permis de livrer des applications extrêmement sécurisées à des clients très exigeants.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  },
  {
    id: "tst-3",
    name: "Dr AMANZOU Aubin",
    role: "Enseignant Chercheur / Superviseur",
    company: "Digital Sun / UVCI",
    content: "Konan William a démontré un niveau d'excellence technique exceptionnel durant ses travaux de développement. Sa rigueur intellectuelle, sa maîtrise de PHP et de JavaScript et son professionnalisme en font un atout majeur pour tout projet de développement de grande envergure.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5
  }
];

