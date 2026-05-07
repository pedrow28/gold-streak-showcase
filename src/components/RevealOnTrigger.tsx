import { motion, AnimatePresence } from "framer-motion";
import { type ReactNode } from "react";
import { useCurrentStep } from "../hooks/useSlideNavigation";

type Props = {
  step: number;
  children: ReactNode;
  duration?: number;
  y?: number;
  className?: string;
};

export function RevealOnTrigger({ step, children, duration = 0.4, y = 16, className }: Props) {
  const current = useCurrentStep();
  const visible = current >= step;
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration, ease: "easeOut" }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
