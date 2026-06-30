import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const categories = ["Tous", "Application Web / SaaS", "Application Mobile (iOS & Android)", "E-Commerce", "Dashboard / SaaS"];

  const filteredProjects = selectedCategory === "Tous"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    alert(`Visualisation de la démonstration pour : "${project.title}" (Il s'agit d'une maquette de démonstration).`);
  };

  return (
    <section id="projets" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-2 mb-12 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start text-brand-accent text-xs font-mono tracking-[0.3em] font-semibold uppercase">
            <FolderGit2 size={14} />
            <span>PORTFOLIO</span>
          </div>
          <h2 className="font-serif italic text-4xl sm:text-5xl font-light text-brand-dark leading-tight">
            Sélection de projets récents
          </h2>
          <div className="h-[1px] w-20 bg-brand-accent mt-4 mx-auto md:mx-0" />
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12 justify-center md:justify-start" id="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-brand-dark text-white shadow-md"
                  : "bg-white text-brand-dark/70 hover:bg-brand-dark/5 border border-brand-dark/5"
              }`}
              id={`project-filter-${cat.replace(/[^a-zA-Z0-9]/g, "-")}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-3xl border border-brand-dark/5 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-accent/20 transition-all duration-500 group flex flex-col justify-between"
                id={`project-card-${project.id}`}
              >
                {/* Image Showcase Container */}
                {project.demoUrl && project.demoUrl !== "#" ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-video w-full overflow-hidden bg-brand-dark/5 block cursor-pointer"
                    id={`project-image-link-${project.id}`}
                  >
                    <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/30 transition-colors duration-500 z-10" />
                    
                    {/* Category overlay label */}
                    <span className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md text-brand-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-brand-dark/5 shadow-xs">
                      {project.category}
                    </span>

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        id={`project-image-${project.id}`}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-brand-bg/50">
                        <FolderGit2 size={48} className="text-brand-accent/30" />
                      </div>
                    )}

                    {/* Hover visual arrow overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                      <div className="p-4 bg-white/95 backdrop-blur-md rounded-full text-brand-accent shadow-xl">
                        <ArrowUpRight size={24} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    onClick={() => handleProjectClick(project)}
                    className="relative aspect-video w-full overflow-hidden bg-brand-dark/5 cursor-pointer"
                    id={`project-image-div-${project.id}`}
                  >
                    <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/30 transition-colors duration-500 z-10" />
                    
                    {/* Category overlay label */}
                    <span className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md text-brand-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-brand-dark/5 shadow-xs">
                      {project.category}
                    </span>

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        id={`project-image-${project.id}`}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-brand-bg/50">
                        <FolderGit2 size={48} className="text-brand-accent/30" />
                      </div>
                    )}

                    {/* Hover visual arrow overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                      <div className="p-4 bg-white/95 backdrop-blur-md rounded-full text-brand-accent shadow-xl">
                        <ArrowUpRight size={24} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-brand-dark group-hover:text-brand-accent transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed mt-3">
                      {project.description}
                    </p>

                    {/* Technologies Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-brand-bg text-brand-dark/80 text-[10px] font-mono tracking-wider font-semibold px-2.5 py-1 rounded-md border border-brand-dark/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center justify-between mt-8 pt-5 border-t border-brand-dark/5">
                    {project.demoUrl && project.demoUrl !== "#" ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark hover:text-brand-accent transition-colors cursor-pointer group/btn"
                        id={`project-btn-demo-${project.id}`}
                      >
                        Voir le projet
                        <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <button
                        onClick={() => handleProjectClick(project)}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark hover:text-brand-accent transition-colors cursor-pointer group/btn"
                        id={`project-btn-demo-${project.id}`}
                      >
                        Voir le projet
                        <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    )}

                    <a
                      href={project.githubUrl}
                      onClick={(e) => {
                        if (project.githubUrl === "#") {
                          e.preventDefault();
                          alert(`Redirection vers les codes sources du projet : "${project.title}" (Il s'agit d'une maquette de démonstration).`);
                        }
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 text-brand-dark/60 hover:text-brand-dark hover:bg-brand-dark/5 rounded-full transition-all cursor-pointer"
                      title="Code Source GitHub"
                      id={`project-btn-github-${project.id}`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
