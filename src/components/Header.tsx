import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { DEV_INFO } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  // Track scrolling to add glass effect to header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = ["accueil", "a-propos", "projets", "services", "processus", "temoignages", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "accueil", label: "Accueil" },
    { id: "a-propos", label: "À propos" },
    { id: "projets", label: "Projets" },
    { id: "services", label: "Services" },
    { id: "processus", label: "Notre Process" },
    { id: "temoignages", label: "Témoignages" },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-effect py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleScrollTo("accueil")}
          className="font-serif italic text-2xl font-semibold tracking-tight text-brand-dark cursor-pointer group flex items-center gap-1"
          id="header-logo"
        >
          William<span className="text-brand-accent not-italic">.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`text-xs font-medium uppercase tracking-widest transition-colors cursor-pointer relative py-1 ${
                activeSection === link.id
                  ? "text-brand-dark"
                  : "text-brand-dark/60 hover:text-brand-dark"
              }`}
              id={`nav-link-${link.id}`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeHeaderIndicator"
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-accent"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Header CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => handleScrollTo("contact")}
            className="px-6 py-2.5 bg-brand-dark text-white text-xs font-medium uppercase tracking-widest rounded-full hover:bg-brand-accent transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer group"
            id="header-cta"
          >
            Me contacter
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-brand-dark rounded-full hover:bg-brand-dark/5 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-brand-bg/98 border-b border-brand-dark/5 shadow-xl lg:hidden px-6 py-8 flex flex-col gap-6"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`text-left text-sm font-semibold uppercase tracking-wider py-2 border-b border-brand-dark/5 transition-colors ${
                    activeSection === link.id ? "text-brand-accent" : "text-brand-dark/70"
                  }`}
                  id={`mobile-link-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleScrollTo("contact")}
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
