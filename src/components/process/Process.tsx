import { AnimatePresence, motion } from "motion/react";
import { Award, Briefcase, CheckCircle2, GraduationCap, Target } from "lucide-react";
import { EDUCATION as studies, EXPERIENCES as jobs, PROCESS_STEPS as steps } from "../../data";
import { useProcess } from "./hook";

export default function Process() {
  const { tab, pick } = useProcess();

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div id="processus" className="max-w-7xl mx-auto scroll-mt-24 px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-brand-accent text-xs font-mono tracking-[0.3em] font-semibold uppercase">
                  <Award size={14} />
                  <span>PARCOURS</span>
                </div>
                <h2 className="font-serif italic text-3xl sm:text-4xl font-light text-brand-dark leading-tight">
                  Expériences & Formations
                </h2>
                <div className="h-[1px] w-16 bg-brand-accent mt-1" />
              </div>

              <div className="flex bg-white/60 p-1 rounded-full border border-brand-dark/5 shadow-xs w-full max-w-sm" id="parcours-tabs-toggle">
                <button
                  onClick={() => pick("jobs")}
                  className={`flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    tab === "jobs" ? "bg-brand-dark text-white shadow-md" : "text-brand-dark/60 hover:text-brand-dark"
                  }`}
                  id="tab-experience"
                >
                  <Briefcase size={13} />
                  Expériences
                </button>
                <button
                  onClick={() => pick("studies")}
                  className={`flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    tab === "studies" ? "bg-brand-dark text-white shadow-md" : "text-brand-dark/60 hover:text-brand-dark"
                  }`}
                  id="tab-education"
                >
                  <GraduationCap size={14} />
                  Formations
                </button>
              </div>
            </div>

            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                {tab === "jobs" ? (
                  <motion.div
                    key="experience-timeline-block"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="relative border-l border-brand-dark/10 pl-6 sm:pl-8 ml-3 flex flex-col gap-10 mt-4"
                    id="experience-timeline"
                  >
                    {jobs.map((job, index) => (
                      <motion.div
                        key={job.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="relative flex flex-col gap-2"
                        id={`experience-timeline-item-${job.id}`}
                      >
                        <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full border-[3px] border-brand-bg bg-brand-accent shadow-sm" />
                        <span className="text-[10px] font-mono font-bold text-brand-accent tracking-widest uppercase">
                          {job.period}
                        </span>
                        <h3 className="font-sans font-extrabold text-lg sm:text-xl text-brand-dark tracking-tight leading-tight">
                          {job.role}{" "}
                          <span className="font-light text-brand-dark/50 text-sm block sm:inline sm:ml-2">
                            @ {job.company}
                          </span>
                        </h3>
                        <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed mt-1">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {job.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-white text-brand-dark/70 text-[9px] font-mono tracking-wider font-semibold px-2 py-0.5 rounded-md border border-brand-dark/5 shadow-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="education-timeline-block"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="relative border-l border-brand-dark/10 pl-6 sm:pl-8 ml-3 flex flex-col gap-10 mt-4"
                    id="education-timeline"
                  >
                    {studies.map((study, index) => (
                      <motion.div
                        key={study.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="relative flex flex-col gap-2"
                        id={`education-timeline-item-${study.id}`}
                      >
                        <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full border-[3px] border-brand-bg bg-brand-accent shadow-sm" />
                        <span className="text-[10px] font-mono font-bold text-brand-accent tracking-widest uppercase">
                          {study.period}
                        </span>
                        <h3 className="font-sans font-extrabold text-lg sm:text-xl text-brand-dark tracking-tight leading-tight">
                          {study.degree}{" "}
                          <span className="font-light text-brand-dark/50 text-sm block sm:inline sm:ml-2">
                            @ {study.institution}
                          </span>
                        </h3>
                        {study.description && (
                          <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed mt-1">
                            {study.description}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-brand-accent text-xs font-mono tracking-[0.3em] font-semibold uppercase">
                <Target size={14} />
                <span>MÉTHODOLOGIE</span>
              </div>
              <h2 className="font-serif italic text-3xl sm:text-4xl font-light text-brand-dark leading-tight">
                Processus de travail
              </h2>
              <div className="h-[1px] w-16 bg-brand-accent mt-3" />
            </div>

            <div className="flex flex-col gap-6 mt-4" id="processus-steps-list">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-dark/5 shadow-sm hover:shadow-md transition-all flex items-start gap-5 sm:gap-6 group"
                  id={`process-step-item-${step.id}`}
                >
                  <div className="font-serif italic text-3xl sm:text-4xl font-semibold text-brand-accent/20 group-hover:text-brand-accent transition-colors duration-300 leading-none">
                    {step.numberStr}
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="font-sans font-extrabold text-base sm:text-lg text-brand-dark tracking-tight flex items-center gap-2">
                      {step.title}
                      <CheckCircle2 size={14} className="text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-dark/60 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
