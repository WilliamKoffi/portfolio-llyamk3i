import { motion } from "motion/react";
import { Globe, Layers, Smartphone, Palette, Cpu, Zap, HeartHandshake, Workflow } from "lucide-react";
import { SERVICES } from "../data";

export default function Services() {
  // Simple icon map to dynamically match string iconNames to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return Globe;
      case "Layers":
        return Layers;
      case "Smartphone":
        return Smartphone;
      case "Palette":
        return Palette;
      case "Cpu":
        return Cpu;
      case "Zap":
        return Zap;
      case "Workflow":
        return Workflow;
      default:
        return HeartHandshake;
    }
  };

  return (
    <section id="services-grid-section" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-16 text-center">
          <div className="flex items-center gap-2 justify-center text-brand-accent text-xs font-mono tracking-[0.3em] font-semibold uppercase">
            <HeartHandshake size={14} />
            <span>SERVICES</span>
          </div>
          <h2 className="font-serif italic text-4xl sm:text-5xl font-light text-brand-dark leading-tight">
            Des services sur-mesure pour votre succès
          </h2>
          <div className="h-[1px] w-20 bg-brand-accent mt-4 mx-auto" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-cards-grid-list">
          {SERVICES.map((service, index) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-brand-bg p-8 rounded-3xl border border-brand-dark/5 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-brand-accent/20 transition-all duration-300 group flex flex-col justify-between"
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Icon Area */}
                  <div className="p-4 bg-white text-brand-dark border border-brand-dark/5 rounded-2xl w-fit shadow-xs group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300 mb-6">
                    <IconComponent size={24} />
                  </div>

                  {/* Text Content */}
                  <h3 className="font-sans font-extrabold text-lg sm:text-xl text-brand-dark tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-dark/60 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Micro interactive footer card detail */}
                <div className="mt-8 pt-4 border-t border-brand-dark/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-brand-accent tracking-widest uppercase">
                    EN SAVOIR PLUS
                  </span>
                  <span className="h-1 w-6 bg-brand-dark/15 group-hover:w-12 group-hover:bg-brand-accent transition-all duration-300 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
