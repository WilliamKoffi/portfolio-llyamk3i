import type { Manifest } from "./manifest";

export const FPS = 30;

// Scene lengths in frames; sections and projects scale with what the capture found.
export namespace Timeline {
  export const intro = 150;
  export const tour = 420;
  export const section = 45;
  export const project = 120;
  export const process = 180;
  export const mobile = 180;
  export const outro = 180;

  export function length(manifest: Manifest | null) {
    if (!manifest) return intro;
    return (
      intro +
      tour +
      section * manifest.sections.length +
      project * manifest.projects.length +
      process +
      mobile +
      outro
    );
  }
}
