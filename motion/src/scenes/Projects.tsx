import { Series } from "remotion";
import { Brand } from "../brand";
import { Browser } from "../frames/Browser";
import { Eyebrow } from "../frames/Eyebrow";
import { Fade } from "../frames/Fade";
import { Rise } from "../frames/Rise";
import { Scroll } from "../frames/Scroll";
import type { Showcase } from "../manifest";
import { Timeline } from "../timeline";

const WIDTH = 1180;
const HEIGHT = 738;

// One card per live client site: details on the left, the site scrolling on the right.
export function Projects({ projects }: { projects: Showcase[] }) {
  return (
    <Series>
      {projects.map((project, index) => (
        <Series.Sequence key={project.id} durationInFrames={Timeline.project}>
          <Card project={project} index={index} count={projects.length} />
        </Series.Sequence>
      ))}
    </Series>
  );
}

function Card({ project, index, count }: { project: Showcase; index: number; count: number }) {
  return (
    <Fade>
      <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 70, padding: "0 90px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 26 }}>
          <Rise>
            <Eyebrow>
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")} · {project.category}
            </Eyebrow>
          </Rise>
          <Rise delay={6} distance={60}>
            <div style={{ fontFamily: Brand.serif, fontStyle: "italic", fontWeight: 500, fontSize: 92, lineHeight: 1 }}>{project.title}</div>
          </Rise>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {project.technologies.map((technology, position) => (
              <Rise key={technology} delay={16 + position * 3} distance={16}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    borderRadius: 10,
                    border: "1px solid rgba(28,25,23,0.08)",
                    background: "white",
                    fontFamily: Brand.mono,
                    fontSize: 20,
                    fontWeight: 500,
                    color: "rgba(28,25,23,0.8)",
                  }}
                >
                  {technology}
                </span>
              </Rise>
            ))}
          </div>
        </div>
        <Rise delay={4} distance={80}>
          <Browser url={project.demo} width={WIDTH} height={HEIGHT}>
            <Scroll capture={project.page} width={WIDTH} height={HEIGHT} delay={25} />
          </Browser>
        </Rise>
      </div>
    </Fade>
  );
}
