import { motion } from "motion/react";
import type { ReactNode } from "react";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function MotionCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}: MotionCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={
        hover
          ? {
              y: -8,
              transition: { duration: 0.3 },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
