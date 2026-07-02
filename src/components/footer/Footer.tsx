import { ArrowUp, Facebook, Github, Linkedin, Music2 } from "lucide-react";
import { DEV_INFO } from "../../data";
import { Scroll } from "./scroll";

const links = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "projets", label: "Projets" },
  { id: "services", label: "Services" },
  { id: "processus", label: "Processus" },
  { id: "temoignages", label: "Témoignages" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-5 flex flex-col gap-6">
            <button
              type="button"
              aria-label="Retour à l&apos;accueil"
              onClick={() => Scroll.to("accueil")}
              className="font-serif italic text-3xl font-semibold tracking-tight text-white cursor-pointer group text-left w-fit"
            >
              William<span className="text-brand-accent-light not-italic">.</span>
            </button>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              Développeur Web & Mobile d&apos;exception spécialisé dans la conception d&apos;interfaces modernes, d&apos;applications fluides et de solutions numériques innovantes.
            </p>
            <div className="flex items-center gap-3">
              <a
                aria-label="Profil LinkedIn"
                href={DEV_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-brand-accent hover:text-white rounded-full transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                aria-label="Profil GitHub"
                href={DEV_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-brand-accent hover:text-white rounded-full transition-all"
              >
                <Github size={16} />
              </a>
              <a
                aria-label="Profil Facebook"
                href={DEV_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-brand-accent hover:text-white rounded-full transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                aria-label="Profil TikTok"
                href={DEV_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-brand-accent hover:text-white rounded-full transition-all"
              >
                <Music2 size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-5">
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-accent-light">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => Scroll.to(link.id)}
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col gap-5">
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-accent-light">
              Contactez-moi
            </h3>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-white/60">
              <span className="font-medium text-white">{DEV_INFO.email}</span>
              <span>{DEV_INFO.phone}</span>
              <span>Abidjan, Côte d&apos;Ivoire / Télétravail</span>
            </div>

            <button
              type="button"
              onClick={() => Scroll.to("contact")}
              className="mt-2 w-fit inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent-light hover:text-white transition-colors cursor-pointer"
            >
              Lancer un projet
              <ArrowUp size={14} className="rotate-45" />
            </button>
          </div>
        </div>

        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[10px] font-mono text-white/40 text-center sm:text-left">
            <span>&copy; {year} {DEV_INFO.name}. Tous droits réservés.</span>
            <span className="hidden sm:inline">|</span>
            <span>Réalisé avec soin, performance et précision</span>
          </div>

          <button
            type="button"
            aria-label="Retour en haut de page"
            onClick={() => Scroll.to("top")}
            className="p-3 bg-white/5 hover:bg-brand-accent rounded-full border border-white/10 transition-colors cursor-pointer group"
            title="Retour en haut"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
