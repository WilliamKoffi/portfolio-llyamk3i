import { motion } from "motion/react";
import { Sparkles, Code, User, Award } from "lucide-react";
import { DEV_INFO as developer } from "../../data";
import { Animate } from "./animate";

const statistics = [
  { value: "6+", label: "Années d'Expérience", icon: Award },
  { value: "45+", label: "Projets Livrés", icon: Code },
  { value: "99%", label: "Clients Satisfaits", icon: Sparkles },
];

const specifications = [
  "Architecture Backend (Laravel, PHP, Symfony)",
  "Interfaces réactives (React, Vue, Nuxt, Tailwind)",
  "Développement Mobile hybride",
  "Cybersécurité applicative (Audits & Pénétration)",
  "Conteneurisation & DevOps (Docker, FrankenPHP)",
  "Rigueur de test (PHPUnit, Pest, Vitest)",
  "Automatisation de flux & API (n8n)",
  "Agents IA & Tests mobiles (CrewAI, Maestro)",
];

const interests = ["Jeux Vidéo", "Basketball", "Musique"];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-brand-bg py-24">
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#1c1917_1px,transparent_1px),linear-gradient(to_bottom,#1c1917_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div id="a-propos" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 md:px-12">
        <div className="mb-16 flex flex-col gap-2 text-center md:text-left">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent md:justify-start">
            <User size={14} />
            <span>À PROPOS</span>
          </div>
          <h2 className="font-serif text-4xl font-light italic leading-tight text-brand-dark sm:text-5xl">
            Créer avec intention et précision
          </h2>
          <div className="mx-auto mt-4 h-[1px] w-20 bg-brand-accent md:mx-0" />
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="order-2 flex flex-col gap-6 lg:order-1 lg:col-span-5">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {statistics.map((statistic, index) => (
                <motion.div
                  key={index}
                  {...Animate.reveal(index * 0.15)}
                  className="group flex items-center gap-4 rounded-2xl border border-brand-dark/5 bg-white p-6 text-center shadow-sm transition-all hover:border-brand-accent/20 hover:shadow-md lg:flex-row lg:text-left"
                  id={`statistic-${index}`}
                >
                  <div className="rounded-xl bg-brand-bg p-3.5 text-brand-accent transition-colors group-hover:bg-brand-accent/10">
                    <statistic.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-sans text-3xl font-extrabold tracking-tight text-brand-dark">
                      {statistic.value}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium tracking-wide text-brand-dark/60">
                      {statistic.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...Animate.scale()}
              className="relative mt-4 overflow-hidden rounded-3xl bg-brand-dark p-8 text-white shadow-lg"
              id="quote"
            >
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-accent/10 blur-2xl" />
              <p className="relative z-10 font-serif text-lg italic leading-relaxed text-white/90">
                "Un bon code ne se contente pas de fonctionner. Il doit être élégant, robuste et offrir une expérience utilisateur si fluide qu'elle en devient invisible."
              </p>
              <div className="relative z-10 mt-4 flex items-center gap-3">
                <div className="h-0.5 w-6 bg-brand-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                  {developer.name}
                </span>
              </div>
            </motion.div>
          </div>

          <div className="order-1 flex flex-col gap-6 text-brand-dark/80 lg:order-2 lg:col-span-7">
            <motion.h3
              {...Animate.reveal()}
              className="font-sans text-2xl font-extrabold leading-snug tracking-tight text-brand-dark sm:text-3xl"
            >
              {developer.name}, l'artisan du code, de l'architecture backend et
              de la cybersécurité.
            </motion.h3>

            <motion.p
              {...Animate.reveal(0.1)}
              className="text-sm font-medium leading-relaxed sm:text-base"
            >
              {developer.bioLong}
            </motion.p>

            <motion.p
              {...Animate.reveal(0.2)}
              className="text-sm leading-relaxed sm:text-base"
            >
              Doté d&apos;une double compétence forte en développement web et
              mobile (Laravel, React, Vue.js) et en sécurisation applicative,
              j&apos;interviens sur tout le cycle de vie de vos projets digitaux.
              Que ce soit pour concevoir l&apos;architecture d&apos;une plateforme
              d&apos;e-commerce complexe comme Univers des Boutchous ou auditer
              la sécurité de vos systèmes chez AFRIKLABTECH, je m&apos;engage à
              fournir un code d&apos;excellence répondant aux meilleures pratiques
              de l&apos;industrie.
            </motion.p>

            <motion.div
              {...Animate.fade(0.3)}
              className="mt-4 grid grid-cols-1 gap-4 border-t border-brand-dark/10 pt-6 sm:grid-cols-2"
              id="specifications"
            >
              {specifications.map((specification, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-xs font-semibold text-brand-dark/90 sm:text-sm"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                  <span>{specification}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              {...Animate.fade(0.4)}
              className="mt-6 grid grid-cols-1 gap-6 border-t border-brand-dark/10 pt-6 sm:grid-cols-2"
              id="personal"
            >
              <div>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
                  LANGUES
                </h4>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="mb-1 flex justify-between text-xs font-bold text-brand-dark">
                      <span>Français</span>
                      <span className="text-brand-accent">
                        Langue maternelle (100%)
                      </span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-brand-dark/5">
                      <div className="h-full w-full rounded-full bg-brand-accent" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-xs font-bold text-brand-dark">
                      <span>Anglais</span>
                      <span className="text-brand-accent/70">
                        Intermédiaire (65%)
                      </span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-brand-dark/5">
                      <div className="h-full w-[65%] rounded-full bg-brand-accent" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
                  CENTRES D&apos;INTÉRÊT
                </h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-brand-dark/5 bg-brand-bg px-3.5 py-1.5 text-xs font-semibold text-brand-dark/80 shadow-xs"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
