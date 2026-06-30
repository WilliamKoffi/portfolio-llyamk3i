import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2, Smartphone, Database, Palette, ShieldCheck, Cpu, Workflow } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // percentage
  years: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  skills: SkillItem[];
  colorClass: string;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories: SkillCategory[] = [
    {
      id: "backend",
      title: "Back-End & APIs",
      icon: Database,
      colorClass: "bg-green-500",
      skills: [
        { name: "PHP / JS / TS", level: 95, years: "6 ans" },
        { name: "Laravel & Filament", level: 90, years: "5 ans" },
        { name: "Symfony & API REST", level: 85, years: "4 ans" },
        { name: "Python & Rust", level: 60, years: "2 ans" }
      ]
    },
    {
      id: "frontend",
      title: "Front-End & Web",
      icon: Code2,
      colorClass: "bg-amber-500",
      skills: [
        { name: "Tailwind CSS", level: 95, years: "5 ans" },
        { name: "Vue.js & Nuxt.js", level: 88, years: "4 ans" },
        { name: "React.js & Next.js", level: 85, years: "4 ans" }
      ]
    },
    {
      id: "mobile",
      title: "Mobile & Hybride",
      icon: Smartphone,
      colorClass: "bg-blue-500",
      skills: [
        { name: "React Native", level: 75, years: "3 ans" },
        { name: "Flutter", level: 70, years: "2 ans" },
        { name: "Lynxjs", level: 60, years: "1.5 ans" }
      ]
    },
    {
      id: "devops",
      title: "DevOps & Bases de Données",
      icon: Cpu,
      colorClass: "bg-purple-500",
      skills: [
        { name: "MySQL / PostgreSQL / SQLite", level: 85, years: "5 ans" },
        { name: "Docker & FrankenPHP", level: 80, years: "3 ans" },
        { name: "Linux, Bash & Apache", level: 75, years: "4 ans" }
      ]
    },
    {
      id: "tools",
      title: "Tests & Bureautique",
      icon: ShieldCheck,
      colorClass: "bg-red-500",
      skills: [
        { name: "Tests (PHPUnit, Pest, Vitest, Playwright)", level: 80, years: "4 ans" },
        { name: "Postman & APIs Client", level: 90, years: "5 ans" },
        { name: "Bureautique (Word, Excel, PPT)", level: 90, years: "7 ans" }
      ]
    },
    {
      id: "automation",
      title: "Automatisation & IA",
      icon: Workflow,
      colorClass: "bg-teal-500",
      skills: [
        { name: "n8n (Workflows & Automatisation)", level: 92, years: "1 an" },
        { name: "CrewAI (Multi-Agents IA)", level: 88, years: "1.5 ans" },
        { name: "Maestro (Automatisation Mobile)", level: 85, years: "1.5 ans" }
      ]
    }
  ];

  const filteredCategories = activeCategory === "all"
    ? categories
    : categories.filter(c => c.id === activeCategory);

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-16 text-center">
          <div className="flex items-center gap-2 justify-center text-brand-accent text-xs font-mono tracking-[0.3em] font-semibold uppercase">
            <Cpu size={14} />
            <span>EXPERTISE TECHNIQUE</span>
          </div>
          <h2 className="font-serif italic text-4xl sm:text-5xl font-light text-brand-dark leading-tight">
            Compétences & Technologies
          </h2>
          <div className="h-[1px] w-20 bg-brand-accent mt-4 mx-auto" />
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" id="skills-filter-tabs">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeCategory === "all"
                ? "bg-brand-dark text-white shadow-md"
                : "bg-brand-bg text-brand-dark/70 hover:bg-brand-dark/5"
            }`}
            id="skills-tab-all"
          >
            Toutes
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-brand-dark text-white shadow-md"
                  : "bg-brand-bg text-brand-dark/70 hover:bg-brand-dark/5"
              }`}
              id={`skills-tab-${cat.id}`}
            >
              <cat.icon size={14} />
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="skills-cards-grid">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-brand-bg p-8 rounded-3xl border border-brand-dark/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                id={`skill-cat-card-${cat.id}`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-4 border-b border-brand-dark/5 pb-5 mb-6">
                    <div className="p-3.5 bg-white rounded-2xl text-brand-dark border border-brand-dark/5 shadow-xs">
                      <cat.icon size={22} className="text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="font-sans font-extrabold text-lg text-brand-dark uppercase tracking-tight">
                        {cat.title}
                      </h3>
                      <span className="text-[10px] font-mono tracking-widest text-brand-dark/40 uppercase">
                        {cat.skills.length} TECHNOLOGIES
                      </span>
                    </div>
                  </div>

                  {/* Skills Progress List */}
                  <div className="flex flex-col gap-5">
                    {cat.skills.map((skill, index) => (
                      <div key={index} className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-baseline text-xs font-semibold text-brand-dark">
                          <span>{skill.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-brand-dark/40">{skill.years}</span>
                            <span className="text-brand-accent text-[10px] font-mono">{skill.level}%</span>
                          </div>
                        </div>
                        {/* Custom Progress Bar Bar */}
                        <div className="w-full h-1.5 bg-brand-dark/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: index * 0.05 }}
                            className="h-full bg-brand-accent rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom detail text */}
                <div className="mt-8 pt-4 border-t border-brand-dark/5 text-right">
                  <span className="text-[9px] font-mono text-brand-dark/40 uppercase tracking-widest">
                    CONCEPTION HAUTE FIDÉLITÉ
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
