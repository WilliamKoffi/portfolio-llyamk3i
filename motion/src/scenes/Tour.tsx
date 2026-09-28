import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Browser } from "../frames/Browser";
import { Eyebrow } from "../frames/Eyebrow";
import { Fade } from "../frames/Fade";
import { Rise } from "../frames/Rise";
import { Scroll } from "../frames/Scroll";
import type { Manifest } from "../manifest";

const WIDTH = 1440;
const HEIGHT = 810;

// The whole portfolio scrolled in one take inside a desktop window.
export function Tour({ manifest }: { manifest: Manifest }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const settle = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 50 });
  const tilt = interpolate(settle, [0, 1], [22, 0]);
  const scale = interpolate(settle, [0, 1], [0.86, 1]);

  return (
    <Fade>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28, perspective: 2400 }}>
        <Rise>
          <Eyebrow>Le portfolio · {manifest.profile.site}</Eyebrow>
        </Rise>
        <div style={{ transform: `rotateX(${tilt}deg) scale(${scale})`, transformOrigin: "50% 100%" }}>
          <Browser url={manifest.profile.site} width={WIDTH} height={HEIGHT}>
            <Scroll capture={manifest.desktop} width={WIDTH} height={HEIGHT} delay={45} />
          </Browser>
        </div>
      </div>
    </Fade>
  );
}
