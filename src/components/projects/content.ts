export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  technologies: string[];
  demo?: string;
  source?: string;
}

export const PROJECT_CATEGORIES: string[] = [
  "Tous",
  "Application Web / SaaS",
  "Application Mobile (iOS & Android)",
  "E-Commerce",
  "Dashboard / SaaS",
];

export const PROJECTS: Project[] = [
  {
    id: "proj-ka-cosmetics",
    title: "KA Cosmetics",
    description: "Boutique e-commerce de soins pour peaux mélanodermes et métissées, livrée partout en Côte d'Ivoire. Frontend Nuxt.js optimisé SEO avec diagnostic de peau, fiches ingrédients complètes et paiement Mobile Money, adossé à une API Laravel dédiée (api.kacosmetic.ci) pour le catalogue, les commandes et les comptes clients.",
    category: "E-Commerce",
    image: "/projects/ka-cosmetics.jpg",
    technologies: ["Nuxt.js", "Vue.js", "Laravel", "PHP", "REST API", "Mobile Money"],
    demo: "https://kacosmetic.ci/",
    source: "https://github.com/WilliamKoffi"
  },
  {
    id: "proj-elite-auto",
    title: "Elite Auto",
    description: "Plateforme haut de gamme de présentation et de réservation de véhicules de prestige. Conçue sous Next.js pour un rendu ultra-rapide côté serveur (SSR), une optimisation SEO maximale et une interface utilisateur moderne et réactive.",
    category: "Application Web / SaaS",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Framer Motion"],
    demo: "https://elite-auto-henna.vercel.app/",
    source: "https://github.com/WilliamKoffi"
  },
  {
    id: "proj-lawyer",
    title: "Cabinet d'Avocats",
    description: "Plateforme de consultation juridique et de gestion de profils d'avocats. Propulsée par Nuxt.js avec une intégration intelligente de profils dynamiques basée sur les paramètres d'URL (onboarding automatisé et affichage personnalisé).",
    category: "Dashboard / SaaS",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    technologies: ["Nuxt.js", "Vue.js", "TypeScript", "Tailwind CSS", "Pinia", "REST API"],
    demo: "https://lawyer-nine-gamma.vercel.app/?email=jean.dupont%40entreprise.com&name=Jean+Dupont&phone=%2B1+%28982%29+466-6289&image=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1589829545856-d10d557cf95f%3Fauto%3Dformat%26fit%3Dcrop%26w%3D640%26q%3D80&gender=M",
    source: "https://github.com/WilliamKoffi"
  },
  {
    id: "proj-lingerie",
    title: "Lingerie Puce",
    description: "Boutique e-commerce haut de gamme dédiée à la lingerie fine et au prêt-à-porter intime. Développée sous Nuxt.js pour garantir une navigation immersive, un chargement optimal des visuels et un tunnel d'achat fluide.",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "State Management", "E-Commerce API"],
    demo: "https://lingerie-puce.vercel.app/",
    source: "https://github.com/WilliamKoffi"
  },
  {
    id: "proj-1",
    title: "Univers des Boutchous",
    description: "Plateforme e-commerce et de services pour la petite enfance. Développement complet du backend robuste sous Laravel et d'un backoffice d'administration dynamique avec Filament PHP. Prise en charge de l'architecture technique, de la modélisation des bases de données SQL, de la sécurisation globale et de l'optimisation des performances.",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    technologies: ["Laravel", "Filament PHP", "MySQL", "Tailwind CSS", "REST API", "PHP"],
    demo: "https://univers-des-boutchous.com",
    source: "https://github.com/WilliamKoffi"
  },
  {
    id: "proj-codesnippets",
    title: "CodeSnippets",
    description: "Application full-stack de partage de snippets de code. Conçue avec un frontend Angular moderne (Angular Signals, composants autonomes) et un backend Spring Boot 4.1 robuste sous Java 21, connectée à une base de données PostgreSQL et conteneurisée pour le développement local.",
    category: "Application Web / SaaS",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    technologies: ["Java", "Spring Boot", "Angular", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "Maven"],
    source: "https://github.com/WilliamKoffi/CodeSnippets"
  },
  {
    id: "proj-olkhov",
    title: "Cabinet de Maître William Koffi",
    description: "Site vitrine professionnel haut de gamme pour un cabinet d'avocats. Présentation d'expertises juridiques (Droit des affaires OHADA, sécurisation foncière, successions) avec formulaires de contact et une interface moderne et épurée.",
    category: "Application Web / SaaS",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    demo: "https://olkhov.vercel.app/",
    source: "https://github.com/WilliamKoffi/olkhov"
  },
  {
    id: "proj-lehpar",
    title: "L'Essence de Luxe",
    description: "Boutique e-commerce haut de gamme dédiée aux parfums de prestige à Abidjan. Catalogue raffiné et intégration d'un tunnel d'achat et de commande instantanée via l'API WhatsApp.",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "WhatsApp API", "Framer Motion"],
    demo: "https://lehpar.vercel.app/",
    source: "https://github.com/WilliamKoffi/lehpar"
  }
];
