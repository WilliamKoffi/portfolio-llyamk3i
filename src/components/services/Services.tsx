import { HeartHandshake } from "lucide-react";
import { SERVICES } from "../../data";
import { Motion } from "./animate";
import { Catalog } from "./domain";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <header className="flex flex-col gap-2 mb-16 text-center">
          <div className="flex items-center gap-2 justify-center text-brand-accent text-xs font-mono tracking-[0.3em] font-semibold uppercase">
            <HeartHandshake size={14} />
            <span>SERVICES</span>
          </div>
          <h2 className="font-serif italic text-4xl sm:text-5xl font-light text-brand-dark leading-tight">
            Des services sur-mesure pour votre succès
          </h2>
          <div className="h-[1px] w-20 bg-brand-accent mt-4 mx-auto" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-cards-grid-list">
          {SERVICES.map((item, index) => {
            const { description, iconName: icon, id, title } = item;
            const Graphic = Catalog.graphic(icon);

            return (
              <Motion.Reveal
                key={id}
                id={`service-card-${id}`}
                delay={index * 0.1}
                styling="bg-brand-bg p-8 rounded-3xl border border-brand-dark/5 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-brand-accent/20 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="p-4 bg-white text-brand-dark border border-brand-dark/5 rounded-2xl w-fit shadow-xs group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300 mb-6">
                    <Graphic size={24} />
                  </div>

                  <h3 className="font-sans font-extrabold text-lg sm:text-xl text-brand-dark tracking-tight mb-3">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-dark/60 leading-relaxed font-medium">
                    {description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-dark/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-brand-accent tracking-widest uppercase">
                    EN SAVOIR PLUS
                  </span>
                  <span className="h-1 w-6 bg-brand-dark/15 group-hover:w-12 group-hover:bg-brand-accent transition-all duration-300 rounded-full" />
                </div>
              </Motion.Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
