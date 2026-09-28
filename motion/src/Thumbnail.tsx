import { AbsoluteFill, Img, staticFile } from "remotion";
import { Brand } from "./brand";
import { Browser } from "./frames/Browser";
import { Eyebrow } from "./frames/Eyebrow";
import type { Props } from "./manifest";
import { Missing } from "./Portfolio";

// The YouTube cover: name on the left, the portfolio hero tilted on the right.
export function Thumbnail({ manifest }: Props) {
  if (!manifest) return <Missing />;
  const hero = manifest.sections[0]?.shot ?? manifest.desktop;

  return (
    <AbsoluteFill style={{ background: Brand.canvas, fontFamily: Brand.sans, color: Brand.dark, flexDirection: "row", alignItems: "center", padding: "0 0 0 80px", overflow: "hidden" }}>
      <div style={{ width: 560, flexShrink: 0, zIndex: 1 }}>
        <Eyebrow>Portfolio 2026</Eyebrow>
        <div style={{ fontFamily: Brand.serif, fontStyle: "italic", fontWeight: 500, fontSize: 104, lineHeight: 0.95, marginTop: 20 }}>{manifest.profile.name}</div>
        <div style={{ height: 3, width: 140, background: Brand.accent, margin: "30px 0" }} />
        <div style={{ fontSize: 30, fontWeight: 800 }}>Dev Web & Mobile</div>
      </div>
      <div style={{ transform: "perspective(1800px) rotateY(-18deg) rotateX(6deg)", marginLeft: 20 }}>
        <Browser url={manifest.profile.site} width={900} height={506}>
          <Img src={staticFile(hero.file)} style={{ width: 900, height: 506, objectFit: "cover", objectPosition: "top" }} />
        </Browser>
      </div>
    </AbsoluteFill>
  );
}
