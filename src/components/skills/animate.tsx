import { AnimatePresence, motion } from "motion/react";
import type { Key, ReactNode } from "react";

export namespace Motion {
  export function Grid({ children }: { children: ReactNode }) {
    return <AnimatePresence mode="popLayout">{children}</AnimatePresence>;
  }

  export function Card({ id, styling, children }: { key?: Key; id: string; styling: string; children: ReactNode }) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className={styling}
        id={id}
      >
        {children}
      </motion.div>
    );
  }

  export function Bar({ fill, delay }: { fill: number; delay: number }) {
    return (
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${fill}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay }}
        className="h-full bg-brand-accent rounded-full"
      />
    );
  }
}
