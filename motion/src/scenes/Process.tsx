import { Brand } from "../brand";
import { Eyebrow } from "../frames/Eyebrow";
import { Fade } from "../frames/Fade";
import { Rise } from "../frames/Rise";
import type { Step } from "../manifest";

export function Process({ steps }: { steps: Step[] }) {
  return (
    <Fade>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 70, padding: "0 140px" }}>
        <Rise>
          <Eyebrow>Méthode</Eyebrow>
          <div style={{ fontFamily: Brand.serif, fontStyle: "italic", fontWeight: 300, fontSize: 96, marginTop: 18 }}>
            Du cadrage à la mise en ligne
          </div>
        </Rise>
        <div style={{ display: "flex", gap: 32 }}>
          {steps.map((step, index) => (
            <Rise key={step.number} delay={20 + index * 12} distance={60} style={{ flex: 1 }}>
              <div style={{ height: 300, padding: 40, borderRadius: 32, background: "white", border: "1px solid rgba(28,25,23,0.06)", boxShadow: "0 30px 60px -40px rgba(28,25,23,0.4)" }}>
                <div style={{ fontFamily: Brand.mono, fontWeight: 700, fontSize: 64, color: Brand.accent }}>{step.number}</div>
                <div style={{ fontSize: 34, fontWeight: 800, marginTop: 40, lineHeight: 1.2, letterSpacing: "-0.02em" }}>{step.title}</div>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </Fade>
  );
}
