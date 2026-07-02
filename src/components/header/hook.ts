import { useEffect, useState } from "react";
import { Scroll } from "./scroll";

const links = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "projets", label: "Projets" },
  { id: "services", label: "Services" },
  { id: "processus", label: "Notre Process" },
  { id: "temoignages", label: "Témoignages" },
];

const targets = [...links.map((link) => link.id), "contact"];

export function useHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const measure = () => {
      setScrolled(window.scrollY > 50);
      setActive(Scroll.locate(targets));
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });

    return () => window.removeEventListener("scroll", measure);
  }, []);

  const navigate = (id: string) => {
    setOpen(false);
    Scroll.to(id);
  };

  const toggle = () => setOpen((previous) => !previous);

  return { open, scrolled, active, links, navigate, toggle };
}
