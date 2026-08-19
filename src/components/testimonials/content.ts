import defaultAvatar from "@/assets/default-avatar.svg";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "tst-1",
    name: "Directeur de Projet",
    role: "Client Univers des Boutchous",
    company: "Univers des Boutchous",
    content: "William a réalisé un travail fantastique pour le backend de notre site et notre espace administrateur sous Filament PHP. Sa réactivité, sa maîtrise de Laravel et sa vision pour l'optimisation des performances ont été des facteurs clés dans la réussite de notre lancement.",
    avatar: defaultAvatar.src,
    rating: 5
  },
  {
    id: "tst-2",
    name: "Co-fondateur Associé",
    role: "Partenaire Technologique",
    company: "AFRIKLABTECH",
    content: "William est un développeur exceptionnel et un esprit entrepreneurial remarquable. Sa capacité à allier développement web de pointe et briques de cybersécurité ultra-robustes nous a permis de livrer des applications extrêmement sécurisées à des clients très exigeants.",
    avatar: defaultAvatar.src,
    rating: 5
  },
  {
    id: "tst-3",
    name: "Dr AMANZOU Aubin",
    role: "Enseignant Chercheur / Superviseur",
    company: "Digital Sun / UVCI",
    content: "Konan William a démontré un niveau d'excellence technique exceptionnel durant ses travaux de développement. Sa rigueur intellectuelle, sa maîtrise de PHP et de JavaScript et son professionnalisme en font un atout majeur pour tout projet de développement de grande envergure.",
    avatar: defaultAvatar.src,
    rating: 5
  }
];
