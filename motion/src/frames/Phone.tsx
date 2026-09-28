import type { ReactNode } from "react";
import { Brand } from "../brand";

const BEZEL = 16;

// A phone shell around a mobile capture; `width`/`height` are the screen inside it.
export function Phone({ width, height, children }: { width: number; height: number; children: ReactNode }) {
  return (
    <div
      style={{
        padding: BEZEL,
        borderRadius: 64,
        background: Brand.dark,
        boxShadow: "0 50px 100px -30px rgba(28,25,23,0.55)",
        position: "relative",
      }}
    >
      <div style={{ width, height, borderRadius: 48, overflow: "hidden", background: "white" }}>{children}</div>
      <span
        style={{
          position: "absolute",
          top: BEZEL + 14,
          left: "50%",
          width: 110,
          height: 30,
          marginLeft: -55,
          borderRadius: 20,
          background: Brand.dark,
        }}
      />
    </div>
  );
}
