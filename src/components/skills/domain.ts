import { Code2, Cpu, Database, ShieldCheck, Smartphone, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Item {
  name: string;
  level: number;
  years: string;
}

export interface Group {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: Item[];
  style: string;
}

export namespace Catalog {
  export const groups: Group[] = [
    {
      id: "backend",
      title: "Back-End & APIs",
      icon: Database,
      style: "bg-green-500",
      skills: [
        { name: "PHP / JS / TS", level: 95, years: "6 ans" },
        { name: "Laravel & Filament", level: 90, years: "5 ans" },
        { name: "Symfony & API REST", level: 85, years: "4 ans" },
        { name: "Java & Spring Boot", level: 80, years: "3 ans" },
        { name: "Python & Rust", level: 60, years: "2 ans" }
      ]
    },
    {
      id: "frontend",
      title: "Front-End & Web",
      icon: Code2,
      style: "bg-amber-500",
      skills: [
        { name: "Tailwind CSS", level: 95, years: "5 ans" },
        { name: "Vue.js & Nuxt.js", level: 88, years: "4 ans" },
        { name: "React.js & Next.js", level: 85, years: "4 ans" }
      ]
    },
    {
      id: "mobile",
      title: "Mobile & Hybride",
      icon: Smartphone,
      style: "bg-blue-500",
      skills: [
        { name: "React Native", level: 75, years: "3 ans" },
        { name: "Flutter", level: 70, years: "2 ans" },
        { name: "Lynxjs", level: 60, years: "1.5 ans" }
      ]
    },
    {
      id: "devops",
      title: "DevOps & Bases de Données",
      icon: Cpu,
      style: "bg-purple-500",
      skills: [
        { name: "MySQL / PostgreSQL / SQLite", level: 85, years: "5 ans" },
        { name: "Docker & FrankenPHP", level: 80, years: "3 ans" },
        { name: "Linux, Bash & Apache", level: 75, years: "4 ans" }
      ]
    },
    {
      id: "tools",
      title: "Tests & Bureautique",
      icon: ShieldCheck,
      style: "bg-red-500",
      skills: [
        { name: "Tests (PHPUnit, Pest, Vitest, Playwright)", level: 80, years: "4 ans" },
        { name: "Postman & APIs Client", level: 90, years: "5 ans" },
        { name: "Bureautique (Word, Excel, PPT)", level: 90, years: "7 ans" }
      ]
    },
    {
      id: "automation",
      title: "Automatisation & IA",
      icon: Workflow,
      style: "bg-teal-500",
      skills: [
        { name: "n8n (Workflows & Automatisation)", level: 92, years: "1 an" },
        { name: "CrewAI (Multi-Agents IA)", level: 88, years: "1.5 ans" },
        { name: "Maestro (Automatisation Mobile)", level: 85, years: "1.5 ans" }
      ]
    }
  ];

  export function filter(target: string): Group[] {
    if (target === "all") return groups;
    return groups.filter((group) => group.id === target);
  }
}
