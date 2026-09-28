import { interpolate, useCurrentFrame } from "remotion";
import { Brand } from "../brand";
import { Eyebrow } from "../frames/Eyebrow";
import { Fade } from "../frames/Fade";
import { Rise } from "../frames/Rise";
import type { Manifest } from "../manifest";

export function Intro({ profile }: { profile: Manifest["profile"] }) {
  const frame = useCurrentFrame();
  const line = interpolate(frame, [30, 70], [0, 320], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <Fade>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 200px" }}>
        <Rise>
          <Eyebrow>Portfolio 2026 · Craft & Performance</Eyebrow>
        </Rise>
        <Rise delay={8} distance={70}>
          <div style={{ fontFamily: Brand.serif, fontStyle: "italic", fontWeight: 300, fontSize: 170, lineHeight: 1, marginTop: 30 }}>
            {profile.name}
          </div>
        </Rise>
        <div style={{ height: 2, width: line, background: Brand.accent, margin: "44px 0" }} />
        <Rise delay={40}>
          <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.01em" }}>{profile.title}</div>
        </Rise>
      </div>
    </Fade>
  );
}
