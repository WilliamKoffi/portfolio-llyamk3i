import type { MotionProps } from "motion/react";

type MotionAffordance = Pick<
  MotionProps,
  "initial" | "whileInView" | "viewport" | "transition"
>;

export namespace Animate {
  export function reveal(delay = 0): MotionAffordance {
    return {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.5, delay },
    };
  }

  export function scale(): MotionAffordance {
    return {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { duration: 0.6 },
    };
  }

  export function fade(delay = 0): MotionAffordance {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0.8, delay },
    };
  }
}
