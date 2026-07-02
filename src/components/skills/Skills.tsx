import { Cpu } from "lucide-react";
import { Motion } from "./animate";
import { Catalog, type Group } from "./domain";
import { useExpertise } from "./hook";

export default function Skills() {
  const { filter, setFilter, subset } = useExpertise();

  return (
    <section className="py-24 bg-white relative">
      <div id="competences" className="max-w-7xl mx-auto scroll-mt-24 px-6 md:px-12 relative z-10">
        <header className="flex flex-col gap-2 mb-16 text-center">
          <div className="flex items-center gap-2 justify-center text-brand-accent text-xs font-mono tracking-[0.3em] font-semibold uppercase">
            <Cpu size={14} />
            <span>EXPERTISE TECHNIQUE</span>
          </div>
          <h2 className="font-serif italic text-4xl sm:text-5xl font-light text-brand-dark leading-tight">
            Compétences & Technologies
          </h2>
          <div className="h-[1px] w-20 bg-brand-accent mt-4 mx-auto" />
        </header>

        <nav className="flex flex-wrap justify-center gap-3 mb-12" id="skills-filter-tabs">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              filter === "all" ? "bg-brand-dark text-white shadow-md" : "bg-brand-bg text-brand-dark/70 hover:bg-brand-dark/5"
            }`}
            id="skills-tab-all"
          >
            Toutes
          </button>

          {Catalog.groups.map((group) => (
            <button
              key={group.id}
              onClick={() => setFilter(group.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                filter === group.id ? "bg-brand-dark text-white shadow-md" : "bg-brand-bg text-brand-dark/70 hover:bg-brand-dark/5"
              }`}
              id={`skills-tab-${group.id}`}
            >
              <group.icon size={14} />
              {group.title}
            </button>
          ))}
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="skills-cards-grid">
          <Motion.Grid>
            {subset.map((group) => (
              <Motion.Card
                key={group.id}
                id={`skill-cat-card-${group.id}`}
                styling="bg-brand-bg p-8 rounded-3xl border border-brand-dark/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <Board group={group} />
              </Motion.Card>
            ))}
          </Motion.Grid>
        </div>
      </div>
    </section>
  );
}

function Board({ group }: { group: Group }) {
  return (
    <>
      <div>
        <div className="flex items-center gap-4 border-b border-brand-dark/5 pb-5 mb-6">
          <div className="p-3.5 bg-white rounded-2xl text-brand-dark border border-brand-dark/5 shadow-xs">
            <group.icon size={22} className="text-brand-accent" />
          </div>
          <div>
            <h3 className="font-sans font-extrabold text-lg text-brand-dark uppercase tracking-tight">
              {group.title}
            </h3>
            <span className="text-[10px] font-mono tracking-widest text-brand-dark/40 uppercase">
              {group.skills.length} TECHNOLOGIES
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {group.skills.map((skill, index) => (
            <div key={skill.name} className="flex flex-col gap-1.5">
              <div className="flex justify-between items-baseline text-xs font-semibold text-brand-dark">
                <span>{skill.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-brand-dark/40">{skill.years}</span>
                  <span className="text-brand-accent text-[10px] font-mono">{skill.level}%</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-brand-dark/5 rounded-full overflow-hidden">
                <Motion.Bar fill={skill.level} delay={index * 0.05} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-brand-dark/5 text-right">
        <span className="text-[9px] font-mono text-brand-dark/40 uppercase tracking-widest">
          CONCEPTION HAUTE FIDÉLITÉ
        </span>
      </div>
    </>
  );
}
