"use client";

import { useEffect, useState } from "react";
import { Scroll } from "../scroll";
import { NAV_LINKS } from "@/navigation";

const targets = [...NAV_LINKS.map((link) => link.id), "contact"];

function current(): string | null {
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

    const restore = () => {
      const target = current();
      if (target) Scroll.to(target, { hash: false });
    };

    measure();
    window.requestAnimationFrame(restore);
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("hashchange", restore);

    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("hashchange", restore);
    };
  }, []);

  const navigate = (id: string) => {
    setOpen(false);
    Scroll.to(id);
  };

  const toggle = () => setOpen((previous) => !previous);

  return { open, scrolled, active, links: NAV_LINKS, navigate, toggle };
}
