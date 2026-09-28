import { AbsoluteFill, Series } from "remotion";
import { Brand } from "./brand";
import type { Props } from "./manifest";
import { Intro } from "./scenes/Intro";
import { Mobile } from "./scenes/Mobile";
import { Outro } from "./scenes/Outro";
import { Process } from "./scenes/Process";
import { Projects } from "./scenes/Projects";
import { Sections } from "./scenes/Sections";
import { Tour } from "./scenes/Tour";
import { Timeline } from "./timeline";

export function Portfolio({ manifest }: Props) {
  if (!manifest) return <Missing />;

  return (
    <AbsoluteFill style={{ backgroundColor: Brand.canvas }}>
      <Series>
        <Series.Sequence durationInFrames={Timeline.intro}>
          <Intro profile={manifest.profile} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={Timeline.tour}>
          <Tour manifest={manifest} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={Timeline.section * manifest.sections.length}>
          <Sections sections={manifest.sections} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={Timeline.project * manifest.projects.length}>
          <Projects projects={manifest.projects} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={Timeline.process}>
          <Process steps={manifest.steps} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={Timeline.mobile}>
          <Mobile capture={manifest.mobile} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={Timeline.outro}>
          <Outro profile={manifest.profile} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
}

export function Missing() {
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", background: Brand.canvas, fontFamily: Brand.mono, fontSize: 36, color: Brand.dark }}>
      No captures yet — run `bun run capture` in ./motion.
    </AbsoluteFill>
  );
}
