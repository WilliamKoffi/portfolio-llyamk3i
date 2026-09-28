import type { ReactNode } from "react";
import { Brand } from "../brand";

// The mono, wide-tracked accent label the portfolio uses above every heading.
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div style={{ fontFamily: Brand.mono, fontWeight: 700, fontSize: 22, letterSpacing: "0.3em", color: Brand.accent, textTransform: "uppercase" }}>
      {children}
    </div>
  );
}
