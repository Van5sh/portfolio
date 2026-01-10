"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Containers from "../components/ui/containers";
import FallingText from "@/components/FallingText";

const SkillsPage = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  // detect when section enters viewport
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  // step control
  const [showContainers, setShowContainers] = useState(false);
  const [startFalling, setStartFalling] = useState(false);

  useEffect(() => {
    if (!inView) return;

    // 1) orange appears immediately
    // 2) containers after 500ms
    const t1 = setTimeout(() => setShowContainers(true), 500);

    // 3) falling text after containers settle
    const t2 = setTimeout(() => setStartFalling(true), 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [inView]);

  const skills = [
    {
      name: "Languages",
      items: [
        "C",
        "CSS",
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "GoLang",
      ],
    },
    {
      name: "Frameworks",
      items: ["React", "Next.js", "Node.js", "GoFiber", "NestJS", "React Native"],
    },
    { name: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Prisma"] },
    {
      name: "Tools",
      items: [
        "Git",
        "GitHub",
        "Docker",
        "Firebase",
        "Postman",
        "Android Studio",
      ],
    },
  ];

  return (
    <div ref={ref} className="flex flex-col w-full h-full items-center rounded-lg">
      <h1 className="mb-10 text-5xl font-semibold">Skills</h1>

      {/* ✅ Parent wrapper */}
      <div className="relative flex flex-row w-full h-[90vh] items-center justify-center gap-8 overflow-hidden rounded-3xl">
        {/* ✅ 1) ORANGE comes first */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 bg-[#FC573B] origin-left"
        />

        {/* ✅ 2) Containers appear */}
        {showContainers && (
          <motion.div
            className="relative z-10 flex flex-row w-full h-full items-center justify-center gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {skills.map((skillCategory) => (
              <motion.div
                key={skillCategory.name}
                className="flex flex-col items-center gap-4"
                variants={{
                  hidden: { opacity: 0, y: 35, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.45, ease: "easeOut" },
                  },
                }}
              >
                <Containers>
                  {/* ✅ 3) Items fall only after delay */}
                  {startFalling ? (
                    <FallingText
                      text={skillCategory.items.join("|")}
                      highlightWords={skillCategory.items}
                      trigger="auto"
                      gravity={0.8}
                      wireframes={false}
                      backgroundColor="transparent"
                      fontSize="0.9rem"
                      mouseConstraintStiffness={0.1}
                      highlightClass="skill-item"
                    />
                  ) : null}
                </Containers>

                <motion.h2
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {skillCategory.name}
                </motion.h2>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SkillsPage;
