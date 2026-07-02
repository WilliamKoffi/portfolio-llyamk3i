import { motion } from "motion/react";
import { ArrowDown, Briefcase, Download, Mail } from "lucide-react";
import resume from "../../../assets/william-koffi-cv.pdf";
import { DEV_INFO } from "../../data";
import { Scroll } from "./scroll";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen pt-24 pb-16 overflow-hidden flex flex-col justify-between"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[90%] max-w-[800px] aspect-square pointer-events-none z-0 overflow-hidden">
        <div className="w-full h-full rounded-full glow-yellow opacity-85 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:pt-8">
          <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col gap-6 lg:items-start lg:text-left text-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/75 backdrop-blur-md px-4 py-2 rounded-full border border-brand-dark/5 shadow-sm mx-auto lg:mx-0"
              id="hero-availability-badge"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent" />
              </span>
              <span className="text-xs font-semibold tracking-wider text-brand-dark/80">
                {DEV_INFO.status}
              </span>
            </motion.div>

            <div className="hidden lg:block mt-12">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-brand-dark/40 block mb-3">
                Défiler vers le bas
              </span>
              <motion.button
                type="button"
                onClick={() => Scroll.to("a-propos")}
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="p-3 bg-white hover:bg-brand-dark hover:text-white rounded-full border border-brand-dark/5 shadow-sm transition-colors cursor-pointer"
                aria-label="Défiler vers la section À propos"
                id="hero-scroll-btn"
              >
                <ArrowDown size={16} />
              </motion.button>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center justify-center relative min-h-[400px] sm:min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-6 sm:top-12 md:top-16 z-0 text-center select-none"
            >
              <h1 className="font-serif italic text-7xl sm:text-[6.5rem] md:text-[8rem] font-light text-brand-dark/40 tracking-tight leading-none whitespace-nowrap">
                Salut, moi c'est
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              className="relative w-64 sm:w-80 md:w-96 aspect-[3/4] z-10 flex items-center justify-center overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-brand-bg/10 group"
              id="hero-portrait-container"
            >
              <div className="absolute inset-0 border-[3px] border-white/60 rounded-2xl md:rounded-3xl z-20 pointer-events-none transition-transform group-hover:scale-[0.98] duration-500" />

              <img
                src={DEV_INFO.avatar}
                alt={DEV_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-out grayscale contrast-[1.15] brightness-[0.98]"
                id="hero-portrait-image"
              />

              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-brand-bg/90 via-brand-bg/30 to-transparent z-10" />
            </motion.div>
          </div>

          <div className="lg:col-span-3 order-3 flex flex-col gap-6 lg:items-end lg:text-right text-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xs mx-auto lg:mx-0"
              id="hero-spec-text-container"
            >
              <p className="text-xs sm:text-sm font-sans text-brand-dark/70 leading-relaxed font-medium">
                Spécialisé en développement Web, applications mobiles, architectures React et interfaces d'exception soignées.
              </p>
            </motion.div>

            <div className="hidden lg:flex items-center gap-1.5 text-brand-accent justify-end font-mono text-[10px] tracking-widest font-bold">
              <Briefcase size={12} />
              <span>CRAFT & PERFORMANCE</span>
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full mt-8 md:mt-12 select-none border-t border-brand-dark/5 pt-8">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="text-left"
              id="hero-text-left"
            >
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-brand-accent font-bold block mb-1">
                CONCEPTEUR DIGITAL
              </span>
              <h2 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-[5rem] tracking-tighter text-brand-dark uppercase leading-none">
                JE SUIS WILLIAM
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="text-left md:text-right"
              id="hero-text-right"
            >
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-brand-dark/40 block mb-1">
                EXPERTISE ET CODE
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-[4rem] tracking-tight text-stroke uppercase leading-none">
                DEV WEB & MOBILE
              </h2>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-12 relative z-30"
          id="hero-actions"
        >
          <button
            type="button"
            onClick={() => Scroll.to("projets")}
            className="px-8 py-3.5 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            id="hero-action-projects"
          >
            Voir mes projets
          </button>

          <button
            type="button"
            onClick={() => Scroll.to("contact")}
            className="px-8 py-3.5 bg-white text-brand-dark border border-brand-dark/20 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-dark/5 transition-all duration-300 shadow-sm cursor-pointer flex items-center gap-2"
            id="hero-action-contact"
          >
            <Mail size={14} />
            Me contacter
          </button>

          <a
            href={resume}
            download="william-koffi-cv.pdf"
            className="px-8 py-3.5 bg-transparent text-brand-dark hover:text-brand-accent text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2"
            id="hero-action-cv"
          >
            <Download size={14} />
            Télécharger mon CV
          </a>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-8 relative z-10 flex justify-between items-center text-[10px] font-mono text-brand-dark/40">
        <span>{DEV_INFO.name.toUpperCase()} — PORTFOLIO 2026</span>
        <span>EXPÉRIENCE WEB & MOBILE</span>
      </div>
    </section>
  );
}
