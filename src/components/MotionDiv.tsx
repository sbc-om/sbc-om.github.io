import { motion } from "motion/react";
import type { ReactNode } from "react";

interface MotionDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: "fade" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scale" | "none";
  viewport?: boolean;
}

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  none: {
    initial: {},
    animate: {},
  },
};

export default function MotionDiv({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  animation = "fade",
  viewport = true,
}: MotionDivProps) {
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      className={className}
      initial={selectedAnimation.initial}
      animate={viewport ? undefined : selectedAnimation.animate}
      whileInView={viewport ? selectedAnimation.animate : undefined}
      viewport={viewport ? { once: true, amount: 0.2 } : undefined}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth easing
      }}
    >
      {children}
    </motion.div>
  );
}
