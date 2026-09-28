import { loadFont as cormorant } from "@remotion/google-fonts/CormorantGaramond";
import { loadFont as inter } from "@remotion/google-fonts/Inter";
import { loadFont as jetbrains } from "@remotion/google-fonts/JetBrainsMono";

// Mirrors the tokens in src/app/globals.css and the fonts loaded in src/app/layout.tsx.
export namespace Brand {
  export const accent = "#d97706";
  export const light = "#f59e0b";
  export const dark = "#1c1917";
  export const canvas = "#fcfbfa";

  export const sans = inter("normal", { weights: ["400", "600", "800"], subsets: ["latin"] }).fontFamily;
  export const serif = cormorant("italic", { weights: ["300", "500"], subsets: ["latin"] }).fontFamily;
  export const mono = jetbrains("normal", { weights: ["500", "700"], subsets: ["latin"] }).fontFamily;
}
