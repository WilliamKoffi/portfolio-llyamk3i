import { Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import type { Capture } from "../manifest";

// A full-page capture scrolled top to bottom across the scene.
export function Scroll({ capture, width, height, delay = 15 }: { capture: Capture; width: number; height: number; delay?: number }) {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const travel = Math.max(0, (capture.height * width) / capture.width - height);
  const progress = interpolate(frame, [delay, durationInFrames - 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  return (
    <div style={{ width, height, overflow: "hidden", position: "relative" }}>
      <Img src={staticFile(capture.file)} style={{ width, display: "block", transform: `translateY(${-travel * progress}px)` }} />
    </div>
  );
}
