import { motion } from "motion/react";
import type { ReactNode } from "react";

interface MotionButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function MotionButton({
  children,
  className = "",
  href,
  onClick,
  type = "button",
}: MotionButtonProps) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      className={className}
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {children}
    </Component>
  );
}
