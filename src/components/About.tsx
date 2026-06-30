import { motion } from "motion/react";
import { Sparkles, Code, User, Award } from "lucide-react";
import { DEV_INFO } from "../data";

export default function About() {
  const stats = [
    { value: "6+", label: "Années d'Expérience", icon: Award },
    { value: "45+", label: "Projets Livrés", icon: Code },
    { value: "99%", label: "Clients Satisfaits", icon: Sparkles },
  ];

  return (
    <section id="a-propos" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#1c1917_1px,transparent_1px),linear-gradient(to_bottom,#1c1917_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-16 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start text-brand-accent text-xs font-mono tracking-[0.3em] font-semibold uppercase">
            <User size={14} />
            <span>À PROPOS</span>
          </div>
          <h2 className="font-serif italic text-4xl sm:text-5xl font-light text-brand-dark leading-tight">
            Créer avec intention et précision
          </h2>
          <div className="h-[1px] w-20 bg-brand-accent mt-4 mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Stat cards & Interactive grid */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-white p-6 rounded-2xl border border-brand-dark/5 shadow-sm hover:shadow-md hover:border-brand-accent/20 transition-all group flex items-center lg:flex-row flex-col text-center lg:text-left gap-4"
                  id={`stat-card-${i}`}
                >
                  <div className="p-3.5 bg-brand-bg group-hover:bg-brand-accent/10 rounded-xl transition-colors text-brand-accent">
                    <stat.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-3xl text-brand-dark tracking-tight">
                      {stat.value}
                    </h3>
                    <p className="text-xs font-medium tracking-wide text-brand-dark/60 mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-dark p-8 rounded-3xl text-white relative overflow-hidden shadow-lg mt-4"
              id="about-quote-box"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl" />
              <p className="font-serif italic text-lg text-white/90 leading-relaxed relative z-10">
                "Un bon code ne se contente pas de fonctionner. Il doit être élégant, robuste et offrir une expérience utilisateur si fluide qu'elle en devient invisible."
              </p>
              <div className="mt-4 flex items-center gap-3 relative z-10">
                <div className="h-0.5 w-6 bg-brand-accent" />
                <span className="text-xs font-mono tracking-widest text-brand-accent font-bold uppercase">
                  {DEV_INFO.name}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6 text-brand-dark/80">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight leading-snug"
            >
              {DEV_INFO.name}, l'artisan du code, de l'architecture backend et de la cybersécurité.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base leading-relaxed font-medium"
            >
              {DEV_INFO.bioLong}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base leading-relaxed"
            >
              Doté d'une double compétence forte en développement web et mobile (Laravel, React, Vue.js) et en sécurisation applicative, j'interviens sur tout le cycle de vie de vos projets digitaux. Que ce soit pour concevoir l'architecture d'une plateforme d'e-commerce complexe comme Univers des Boutchous ou auditer la sécurité de vos systèmes chez AFRIKLABTECH, je m'engage à fournir un code d'excellence répondant aux meilleures pratiques de l'industrie.
            </motion.p>

            {/* Specializing items with checkboxes/bullets */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-6 border-t border-brand-dark/10"
              id="about-specs-grid"
            >
              {[
                "Architecture Backend (Laravel, PHP, Symfony)",
                "Interfaces réactives (React, Vue, Nuxt, Tailwind)",
                "Développement Mobile hybride",
                "Cybersécurité applicative (Audits & Pénétration)",
                "Conteneurisation & DevOps (Docker, FrankenPHP)",
                "Rigueur de test (PHPUnit, Pest, Vitest)",
                "Automatisation de flux & API (n8n)",
                "Agents IA & Tests Mobile (CrewAI, Maestro)"
              ].map((spec, index) => (
                <div key={index} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-brand-dark/90">
                  <span className="h-2 w-2 rounded-full bg-brand-accent shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </motion.div>

            {/* Langues & Hobbies */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 pt-6 border-t border-brand-dark/10"
              id="about-langues-hobbies"
            >
              {/* Langues */}
              <div>
                <h4 className="text-xs font-mono tracking-widest text-brand-accent font-bold uppercase mb-3">
                  LANGUES
                </h4>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-brand-dark mb-1">
                      <span>Français</span>
                      <span className="text-brand-accent">Langue Maternelle (100%)</span>
                    </div>
                    <div className="w-full h-1 bg-brand-dark/5 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-accent rounded-full w-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-brand-dark mb-1">
                      <span>Anglais</span>
                      <span className="text-brand-accent/70">Intermédiaire (65%)</span>
                    </div>
                    <div className="w-full h-1 bg-brand-dark/5 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-accent rounded-full w-[65%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hobbies */}
              <div>
                <h4 className="text-xs font-mono tracking-widest text-brand-accent font-bold uppercase mb-3">
                  CENTRES D'INTÉRÊT
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Jeux Vidéo", "Basketball", "Musique"].map((hobby, idx) => (
                    <span
                      key={idx}
                      className="bg-brand-bg text-brand-dark/80 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-brand-dark/5 shadow-xs"
                    >
                      {hobby}
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
