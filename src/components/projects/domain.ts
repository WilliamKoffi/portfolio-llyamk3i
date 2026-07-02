import type { MouseEvent } from "react";
import { PROJECTS } from "../../data";
import type { Project } from "../../types";

export namespace Showcase {
  export function filter(category: string): Project[] {
    if (category === "Tous") return PROJECTS;
    return PROJECTS.filter((project) => project.category === category);
  }

  export function view(title: string): void {
    alert(`Visualisation de la démonstration pour : "${title}" (Il s'agit d'une maquette de démonstration).`);
  }

  export function source(title: string, event: MouseEvent<HTMLAnchorElement>): void {
    event.preventDefault();
    alert(`Redirection vers les codes sources du projet : "${title}" (Il s'agit d'une maquette de démonstration).`);
  }
}
