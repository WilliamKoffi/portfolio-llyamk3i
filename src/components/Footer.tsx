import { Github, Linkedin, Facebook, ArrowUp, Briefcase } from "lucide-react";
import { DEV_INFO } from "../data";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { id: "accueil", label: "Accueil" },
    { id: "a-propos", label: "À propos" },
    { id: "projets", label: "Projets" },
    { id: "services", label: "Services" },
    { id: "processus", label: "Notre Process" },
    { id: "temoignages", label: "Témoignages" },
  ];

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 relative overflow-hidden">
      {/* Visual glowing accent inside dark background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Logo & Small Bio */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <button
              onClick={() => handleScrollTo("accueil")}
              className="font-serif italic text-3xl font-semibold tracking-tight text-white cursor-pointer group text-left w-fit"
            >
              William<span className="text-brand-accent-light not-italic">.</span>
            </button>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              Développeur Web & Mobile d'exception spécialisé dans la conception d'interfaces modernes, d'applications fluides et de solutions numériques innovantes.
            </p>
            {/* Social Icons list */}
            <div className="flex items-center gap-3" id="footer-socials-list">
              <a
                href={DEV_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-brand-accent hover:text-white rounded-full transition-all cursor-pointer"
                aria-label="Linkedin Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={DEV_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-brand-accent hover:text-white rounded-full transition-all cursor-pointer"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href={DEV_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-brand-accent hover:text-white rounded-full transition-all cursor-pointer"
                aria-label="Facebook Profile"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-accent-light">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3" id="footer-nav-list">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details shortcuts Column */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-accent-light">
              Contactez-moi
            </h3>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-white/60">
              <span className="font-medium text-white">{DEV_INFO.email}</span>
              <span>{DEV_INFO.phone}</span>
              <span>Abidjan, Côte d'Ivoire / Télétravail</span>
            </div>
            
            <button
              onClick={() => handleScrollTo("contact")}
              className="mt-2 w-fit inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent-light hover:text-white transition-colors cursor-pointer"
              id="footer-action-contact"
            >
              Lancer un projet
              <ArrowUp size={14} className="rotate-45" />
            </button>
          </div>

        </div>

        {/* Lower copyright bar & Scroll to Top */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[10px] font-mono text-white/40 text-center sm:text-left">
            <span>&copy; {currentYear} {DEV_INFO.name}. Tous droits réservés.</span>
            <span className="hidden sm:inline">|</span>
            <span>Réalisé avec excellence technique et design suisse</span>
          </div>

          {/* Back to top scroll button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-3 bg-white/5 hover:bg-brand-accent rounded-full border border-white/10 transition-colors cursor-pointer group"
            title="Retour en haut"
            id="footer-back-to-top-btn"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
