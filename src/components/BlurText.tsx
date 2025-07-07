import React from "react";
import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  className?: string;
  onAnimationComplete?: () => void;
}

const getDirectionVariant = (direction: string) => {
  const variants = {
    top: { y: -80, opacity: 0, filter: "blur(12px)" },
    bottom: { y: 80, opacity: 0, filter: "blur(12px)" },
    left: { x: -60, opacity: 0, filter: "blur(12px)" },
    right: { x: 60, opacity: 0, filter: "blur(12px)" },
  } as const;

  if (direction in variants) {
    return variants[direction as keyof typeof variants];
  }

  return variants.top;
};

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 0,
  animateBy = "words",
  direction = "top",
  className = "",
  onAnimationComplete,
}) => {
  const items = animateBy === "letters" ? [...text] : text.split(" ");

  return (
    <div className={className}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          initial={getDirectionVariant(direction)}
          animate={{ x: 0, y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            delay: delay / 1000 + index * 0.8, // slow spacing between words
            duration: 2.5, // very slow animation
            ease: "easeOut",
          }}
          onAnimationComplete={
            index === items.length - 1 ? onAnimationComplete : undefined
          }
          className="inline-block"
        >
          {item}
          {animateBy === "words" ? " " : ""}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurText;
