"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import useMounted from "@/lib/mount";
import ScrollSpring from "@/components/ScrollSpring";
import Image, { StaticImageData } from "next/image";

import zeepty from "../../public/png/intern1.png";
import ai from "../../public/png/ai.png";

type Experience = {
  company: string;
  role: string;
  image?: StaticImageData;
  description: string[];
};

const ExperiencePage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const experienceData: Experience[] = [
    {
      company: "AI Core Solutions",
      role: "SDE Intern",
      image: ai,
      description: [
        "Developed a full-stack mobile application from scratch using React Native, featuring automated video-to-PDF summarization.",
        "Integrated AI/ML APIs to facilitate intelligent content analysis and real-time data visualization for enhanced user interaction.",
        "Architected and implemented high-performance, interactive UI components using TypeScript, leading to a more seamless and engaging user experience.",
        "Collaborated on backend integration to ensure secure and scalable data handling for user-uploaded media.",
      ],
    },
    {
      company: "Zeepty",
      role: "App Developer Intern",
      image: zeepty,
      description: [
        "Spearheaded the development of core mobile features including content sharing, push notifications, and advanced UI enhancements using React Native.",
        "Optimized application performance by 20% through rigorous state management tuning and code refactoring, significantly reducing app latency.",
        "Built and maintained automated CI/CD pipelines to streamline the build, testing, and deployment processes across iOS and Android.",
        "Conducted extensive debugging and performance profiling to identify and resolve critical bottlenecks, ensuring cross-device stability.",
      ],
    },
  ];

  const mounted = useMounted();
  if (!mounted) return null;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const descriptionVariants: Variants = {
    collapsed: { height: 0, opacity: 0, marginTop: 0 },
    expanded: {
      height: "auto",
      opacity: 1,
      marginTop: 16,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="section-wrap">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="section-kicker">Experience</span>
          <h1 className="section-title">Building Products in the Real World</h1>
        </div>

        <ScrollSpring
          className="flex flex-col gap-6 w-full"
          delay={0.12}
        >
          {experienceData.map((experience, index) => {
            const expanded = activeIndex === index;

            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileTap={{ scale: 0.99 }}
                onClick={() =>
                  setActiveIndex((prev) => (prev === index ? null : index))
                }
                className={`relative cursor-pointer w-full rounded-3xl border border-white/40 p-6 md:p-8 transition-colors duration-300 origin-top ${
                  expanded
                    ? "bg-[#FC573B] text-white shadow-[0_24px_60px_rgba(252,87,59,0.35)]"
                    : "glass-panel text-[color:var(--theme-ink)]"
                }`}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  {experience.image && (
                    <Image
                      src={experience.image}
                      alt={experience.company}
                      width={120}
                      height={120}
                      className={`rounded-full border-4 ${
                        expanded
                          ? "border-white/50"
                          : "border-[color:var(--theme-canvas-strong)]"
                      }`}
                    />
                  )}
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <h2 className="text-3xl md:text-4xl font-semibold">
                        {experience.company}
                      </h2>
                      <span
                        className={`text-base font-semibold ${
                          expanded ? "text-white/90" : "text-[color:var(--theme-ink-soft)]"
                        }`}
                      >
                        {experience.role}
                      </span>
                    </div>
                  </div>
                </div>

                <motion.div
                  variants={descriptionVariants}
                  initial="collapsed"
                  animate={expanded ? "expanded" : "collapsed"}
                  className="overflow-hidden"
                >
                  <ul
                    className={`list-disc list-inside space-y-2 mt-4 ${
                      expanded ? "text-white/90" : "text-[color:var(--theme-ink-soft)]"
                    }`}
                  >
                    {experience.description.map((desc, i) => (
                      <li key={i} className="text-sm leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </ScrollSpring>
      </div>
    </div>
  );
};

export default ExperiencePage;
