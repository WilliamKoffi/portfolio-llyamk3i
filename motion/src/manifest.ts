export interface Capture {
  file: string;
  width: number;
  height: number;
}

export interface Section {
  id: string;
  label: string;
  shot: Capture;
}

export interface Showcase {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  demo: string;
  page: Capture;
}

export interface Step {
  number: string;
  title: string;
}

export interface Manifest {
  profile: {
    name: string;
    title: string;
    email: string;
    site: string;
  };
  desktop: Capture;
  mobile: Capture;
  sections: Section[];
  projects: Showcase[];
  steps: Step[];
}

export type Props = {
  manifest: Manifest | null;
};
