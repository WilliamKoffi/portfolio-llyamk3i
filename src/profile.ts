import avatarPhoto from "./assets/photo.jpg";

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  avatar: string;
  bioShort: string;
  bioLong: string;
  status: string;
  email: string;
  phone: string;
  address: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  facebook: string;
  tiktok: string;
}

export const DEV_INFO: Profile = {
  name: "Konan William Koffi",
  title: "Développeur Web, Mobile & Automatisation",
  subtitle: "Expert Full-Stack, Cybersécurité & Automatisation (n8n, CrewAI, Maestro)",
  avatar: avatarPhoto.src,
  bioShort: "Passionné par les technologies de l'information, je suis développeur web, mobile et expert en automatisation. Je conçois des architectures performantes, des flux de travail automatisés intelligents (n8n, CrewAI) et des solutions sécurisées.",
  bioLong: "Passionné par les technologies de l'information, je suis un développeur web et mobile chevronné, spécialisé dans l'automatisation de processus complexes et le déploiement d'agents d'intelligence artificielle. Fort de mes expériences en start-up (AFRIKLABTECH) et en freelance, je conçois des architectures backend robustes (Laravel, PHP, Symfony), des interfaces frontend haut de gamme (React, Vue.js) et des solutions d'automatisation de pointe avec n8n, CrewAI et Maestro. Mon engagement technique s'accompagne d'une expertise en cybersécurité pour garantir des produits performants, hautement sécurisés et centrés sur l'utilisateur.",
  status: "Disponible pour de nouveaux défis",
  email: "llyam.k3i@gmail.com",
  phone: "+225 05 05 73 62 71",
  address: "Cocody Riviera Saint-Viateur, Abidjan, Côte d'Ivoire",
  whatsapp: "https://wa.me/2250789790414",
  github: "https://github.com/WilliamKoffi",
  linkedin: "https://linkedin.com/in/William-koffi-9a507154",
  facebook: "https://facebook.com/konanwilliam.koffi.5",
  tiktok: "https://www.tiktok.com/@llyam_k3i",
};
