import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const motionValue = useMotionValue(direction === "down" ? to : from);

  const springValue = useSpring(motionValue, {
    damping: 20 + 40 * (1 / duration),
    stiffness: 100 * (1 / duration),
  });

const isInView = useInView(ref, { once: false, margin: "0px" });



  const startAnimation = () => {
    onStart?.();
    motionValue.set(direction === "down" ? from : to);
    setTimeout(() => {
      onEnd?.();
    }, duration * 1000);
  };

  // ✅ Run once on scroll into view
useEffect(() => {
  if (isInView) {
    motionValue.set(from);

    const timeoutId = setTimeout(() => {
      motionValue.set(to);
    }, delay * 1000);

    return () => clearTimeout(timeoutId); // 🧹 Cleanup to avoid memory leaks
  }
}, [isInView, from, to, delay, motionValue]);



  // ✅ Update DOM on value change
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = new Intl.NumberFormat("en-US", {
          useGrouping: !!separator,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(latest);

        ref.current.textContent = formatted;
      }
    });

    return () => unsubscribe();
  }, [springValue, separator]);

  // ✅ Hover to retrigger from 0
  const handleMouseEnter = () => {
    motionValue.set(from);
    startAnimation();
  };

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={handleMouseEnter}
    />
  );
}
