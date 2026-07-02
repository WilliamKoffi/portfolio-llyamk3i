import { motion } from "motion/react";
import type { Key, ReactNode } from "react";

export namespace Motion {
  export function Reveal({ delay, styling, children, id }: { key?: Key; delay: number; styling: string; children: ReactNode; id: string }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
        className={styling}
        id={id}
      >
        {children}
      </motion.div>
    );
  }
}
