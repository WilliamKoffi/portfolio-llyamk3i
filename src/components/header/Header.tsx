import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useHeader } from "./hook";

export default function Header() {
  const { open, scrolled, active, links, navigate, toggle } = useHeader();

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-effect py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <button
          onClick={() => navigate("accueil")}
          className="font-serif italic text-2xl font-semibold tracking-tight text-brand-dark cursor-pointer flex items-center gap-1"
          id="header-logo"
        >
          William<span className="text-brand-accent not-italic">.</span>
        </button>

        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => navigate(link.id)}
              className={`text-xs font-medium uppercase tracking-widest transition-colors cursor-pointer relative py-1 ${
                active === link.id ? "text-brand-dark" : "text-brand-dark/60 hover:text-brand-dark"
              }`}
              id={`nav-link-${link.id}`}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="activeHeaderIndicator"
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-accent"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => navigate("contact")}
            className="px-6 py-2.5 bg-brand-dark text-white text-xs font-medium uppercase tracking-widest rounded-full hover:bg-brand-accent transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer group"
            id="header-cta"
          >
            Me contacter
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <button
          onClick={toggle}
          className="lg:hidden p-2 text-brand-dark rounded-full hover:bg-brand-dark/5 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-brand-bg/98 border-b border-brand-dark/5 shadow-xl lg:hidden px-6 py-8 flex flex-col gap-6"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => navigate(link.id)}
                  className={`text-left text-sm font-semibold uppercase tracking-wider py-2 border-b border-brand-dark/5 transition-colors ${
                    active === link.id ? "text-brand-accent" : "text-brand-dark/70"
                  }`}
                  id={`mobile-link-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => navigate("contact")}
              className="w-full py-3 bg-brand-dark text-white text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-brand-accent transition-colors flex items-center justify-center gap-2"
              id="mobile-header-cta"
            >
              Me contacter
              <ArrowUpRight size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
