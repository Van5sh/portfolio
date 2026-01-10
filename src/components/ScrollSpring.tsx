"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  type Transition,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

const MOTION_ELEMENTS = {
  div: motion.div,
  section: motion.section,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

type VariantName = "spring" | "fall";

const VARIANTS: Record<VariantName, Variants> = {
  spring: {
    hidden: { opacity: 0, y: 48, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  fall: {
    hidden: { opacity: 0, y: 64 },
    visible: {
      opacity: [0, 0.65, 1, 1, 1],
      y: [64, -12, 0, 12, 0],
    },
  },
};

const TRANSITIONS: Record<VariantName, (delay: number) => Transition> = {
  spring: (delay) => ({
    delay,
    type: "spring",
    stiffness: 220,
    damping: 22,
    mass: 0.85,
  }),
  fall: (delay) => ({
    delay,
    duration: 1.35,
    ease: [0.16, 1, 0.3, 1],
    times: [0, 0.35, 0.55, 0.8, 1],
  }),
};

type ScrollSpringProps = {
  as?: keyof typeof MOTION_ELEMENTS;
  className?: string;
  delay?: number;
  variant?: VariantName;
  once?: boolean;
  margin?: string;
};

const ScrollSpring = ({
  as = "div",
  className,
  children,
  delay = 0,
  variant = "spring",
  once = true,
  margin = "-10% 0px",
}: PropsWithChildren<ScrollSpringProps>) => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once, margin });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const MotionEl = MOTION_ELEMENTS[as] ?? motion.div;

  return (
    <MotionEl
      ref={ref}
      className={cn(className)}
      variants={VARIANTS[variant]}
      initial="hidden"
      animate={controls}
      transition={TRANSITIONS[variant](delay)}
    >
      {children}
    </MotionEl>
  );
};

export default ScrollSpring;