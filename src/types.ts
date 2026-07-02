export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  technologies: string[];
  demo?: string;
  source?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export interface Education {
  id: string;
  period: string;
  degree: string;
  institution: string;
  description?: string;
}

export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}
