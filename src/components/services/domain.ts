import { Cpu, Globe, HeartHandshake, Layers, Palette, Smartphone, Workflow, Zap } from "lucide-react";

export namespace Catalog {
  export function graphic(icon: string) {
    switch (icon) {
      case "Globe":
        return Globe;
      case "Layers":
        return Layers;
      case "Smartphone":
        return Smartphone;
      case "Palette":
        return Palette;
      case "Cpu":
        return Cpu;
      case "Zap":
        return Zap;
      case "Workflow":
        return Workflow;
      default:
        return HeartHandshake;
    }
  }
}
