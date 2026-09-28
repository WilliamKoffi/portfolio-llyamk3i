import { Brand } from "../brand";
import { Eyebrow } from "../frames/Eyebrow";
import { Fade } from "../frames/Fade";
import { Rise } from "../frames/Rise";
import type { Manifest } from "../manifest";

export function Outro({ profile }: { profile: Manifest["profile"] }) {
  return (
    <Fade span={20}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40, background: Brand.dark, color: "white" }}>
        <Rise>
          <Eyebrow>{profile.name}</Eyebrow>
        </Rise>
        <Rise delay={8} distance={60}>
          <div style={{ fontFamily: Brand.serif, fontStyle: "italic", fontWeight: 300, fontSize: 150 }}>Parlons de votre projet.</div>
        </Rise>
        <Rise delay={24}>
          <div style={{ display: "flex", gap: 40, fontFamily: Brand.mono, fontSize: 34 }}>
            <span style={{ color: Brand.light }}>{profile.site}</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>{profile.email}</span>
          </div>
        </Rise>
      </div>
    </Fade>
  );
}
