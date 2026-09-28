import type { CSSProperties, ReactNode } from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

// Fades a block in while it slides up, starting `delay` frames into the scene.
export function Rise({ children, delay = 0, distance = 40, style }: { children: ReactNode; delay?: number; distance?: number; style?: CSSProperties }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 200 } });

  return <div style={{ ...style, opacity: progress, transform: `translateY(${(1 - progress) * distance}px)` }}>{children}</div>;
}
