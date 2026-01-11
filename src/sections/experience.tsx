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
    <div className="flex flex-col items-center w-full px-20 py-16">
      <ScrollSpring as="h1" className="text-5xl font-bold mb-12">
        Experience
      </ScrollSpring>

      <ScrollSpring
        className="flex flex-col gap-10 w-full max-w-4xl"
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
              className={`relative cursor-pointer w-full p-8 rounded-3xl transition-colors duration-300 origin-top ${
                expanded
                  ? "bg-[#FC573B] text-white"
                  : "bg-transparent text-black"
              }`}
            >
              <div className="flex items-center gap-6">
                {!expanded && experience.image && (
                  <Image
                    src={experience.image}
                    alt={experience.company}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                )}
                <div className="flex flex-col gap-2 w-[calc(100%-230px)]">
                  <div
                    className={`flex ${
                      expanded
                        ? "flex-row items-center"
                        : "flex-col justify-start"
                    } gap-2`}
                  >
                    <h2 className="text-5xl font-semibold">
                      {experience.company}
                    </h2>

                    {expanded ? (
                      <span className="absolute top-6 right-8 text-xl text-white/90">
                        {experience.role}
                      </span>
                    ) : (
                      <span className="text-xl text-gray-600">
                        {experience.role}
                      </span>
                    )}
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
                  className={`list-disc list-inside space-y-2 mt-2 ${
                    expanded ? "text-white/90" : "text-gray-700"
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
  );
};

export default ExperiencePage;
