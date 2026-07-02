import { useEffect, useState } from "react";
import { Scroll } from "./scroll";

const links = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "projets", label: "Projets" },
  { id: "services", label: "Services" },
  { id: "processus", label: "Processus" },
  { id: "temoignages", label: "Témoignages" },
];

const targets = [...links.map((link) => link.id), "contact"];

function currentHashTarget(): string | null {
  const target = window.location.hash.replace("#", "");
  return targets.includes(target) ? target : null;
}

export function useHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const measure = () => {
      setScrolled(window.scrollY > 50);
      setActive(Scroll.locate(targets));
    };

    const scrollToHash = () => {
      const target = currentHashTarget();
      if (target) Scroll.to(target, { updateHash: false });
    };

    measure();
    window.requestAnimationFrame(scrollToHash);
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  const navigate = (id: string) => {
    setOpen(false);
    Scroll.to(id);
  };

  const toggle = () => setOpen((previous) => !previous);

  return { open, scrolled, active, links, navigate, toggle };
}
