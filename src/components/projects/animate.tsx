import { AnimatePresence, motion } from "motion/react";
import type { Key, ReactNode } from "react";

export namespace Motion {
  export function Grid({ children }: { children: ReactNode }) {
    return <AnimatePresence mode="popLayout">{children}</AnimatePresence>;
  }

  export function Card({ item, name, styling, children }: { key?: Key; item: string; name: string; styling: string; children: ReactNode }) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={styling}
        id={name}
        data-item={item}
      >
        {children}
      </motion.div>
    );
  }
}
