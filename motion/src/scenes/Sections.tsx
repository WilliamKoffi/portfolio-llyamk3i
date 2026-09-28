import { AbsoluteFill, Img, interpolate, Series, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Brand } from "../brand";
import { Fade } from "../frames/Fade";
import { Rise } from "../frames/Rise";
import type { Section } from "../manifest";
import { Timeline } from "../timeline";

// Quick cuts through each section of the portfolio, one viewport each.
export function Sections({ sections }: { sections: Section[] }) {
  return (
    <Series>
      {sections.map((section, index) => (
        <Series.Sequence key={section.id} durationInFrames={Timeline.section}>
          <Cut section={section} index={index} />
        </Series.Sequence>
      ))}
    </Series>
  );
}

function Cut({ section, index }: { section: Section; index: number }) {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const zoom = interpolate(frame, [0, durationInFrames], [1.08, 1]);

  return (
    <Fade span={6}>
      <Img src={staticFile(section.shot.file)} style={{ width: "100%", height: "100%", objectFit: "cover", transform: `scale(${zoom})` }} />
      <AbsoluteFill style={{ justifyContent: "flex-end", padding: 70 }}>
        <Rise delay={4} distance={20}>
          <div
            style={{
              display: "inline-flex",
              gap: 18,
              padding: "16px 30px",
              borderRadius: 999,
              background: Brand.dark,
              color: "white",
              fontSize: 30,
              fontWeight: 600,
              boxShadow: "0 20px 50px -20px rgba(0,0,0,0.5)",
            }}
          >
            <span style={{ fontFamily: Brand.mono, color: Brand.light }}>{String(index + 1).padStart(2, "0")}</span>
            {section.label}
          </div>
        </Rise>
      </AbsoluteFill>
    </Fade>
  );
}
