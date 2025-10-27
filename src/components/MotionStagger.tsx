import { motion } from "motion/react";
import type { ReactNode } from "react";

interface MotionStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export default function MotionStagger({
  children,
  className = "",
  staggerDelay = 0.1,
}: MotionStaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerItem({
  children,
  className = "",
  animation = "slideUp",
}: {
  children: ReactNode;
  className?: string;
  animation?: "fade" | "slideUp" | "scale";
}) {
  const animations = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      className={className}
      variants={animations[animation]}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
