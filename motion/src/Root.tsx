import { Composition, staticFile, Still, type CalculateMetadataFunction } from "remotion";
import type { Manifest, Props } from "./manifest";
import { Portfolio } from "./Portfolio";
import { Thumbnail } from "./Thumbnail";
import { FPS, Timeline } from "./timeline";

async function read(): Promise<Manifest | null> {
  const response = await fetch(staticFile("captures/manifest.json"));
  return response.ok ? ((await response.json()) as Manifest) : null;
}

// Duration follows the captures: more sections or projects make a longer video.
const measure: CalculateMetadataFunction<Props> = async () => {
  const manifest = await read().catch(() => null);
  return { props: { manifest }, durationInFrames: Timeline.length(manifest) };
};

const load: CalculateMetadataFunction<Props> = async () => ({ props: { manifest: await read().catch(() => null) } });

export function Root() {
  return (
    <>
      <Composition
        id="Portfolio"
        component={Portfolio}
        width={1920}
        height={1080}
        fps={FPS}
        durationInFrames={Timeline.intro}
        defaultProps={{ manifest: null }}
        calculateMetadata={measure}
      />
      <Still id="Thumbnail" component={Thumbnail} width={1280} height={720} defaultProps={{ manifest: null }} calculateMetadata={load} />
    </>
  );
}
