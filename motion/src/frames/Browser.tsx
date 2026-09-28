import type { ReactNode } from "react";
import { Brand } from "../brand";

const BAR = 44;

// A minimal desktop window around a capture; `width`/`height` are the viewport inside it.
export function Browser({ url, width, height, children }: { url: string; width: number; height: number; children: ReactNode }) {
  return (
    <div
      style={{
        width,
        borderRadius: 18,
        overflow: "hidden",
        background: "white",
        boxShadow: "0 40px 90px -30px rgba(28,25,23,0.45), 0 0 0 1px rgba(28,25,23,0.06)",
      }}
    >
      <div style={{ height: BAR, display: "flex", alignItems: "center", gap: 8, padding: "0 18px", background: "#f5f3f0" }}>
        {["#ef4444", "#f59e0b", "#22c55e"].map((color) => (
          <span key={color} style={{ width: 12, height: 12, borderRadius: 6, background: color, opacity: 0.8 }} />
        ))}
        <span
          style={{
            margin: "0 auto",
            padding: "6px 22px",
            borderRadius: 999,
            background: "white",
            fontFamily: Brand.mono,
            fontSize: 15,
            color: "rgba(28,25,23,0.6)",
          }}
        >
          {url}
        </span>
      </div>
      <div style={{ height }}>{children}</div>
    </div>
  );
}
