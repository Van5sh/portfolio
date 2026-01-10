"use client";

import React, { useState } from "react";
import BlackCircle from "../../public/svgs/codes/BlackCircle";
import { motion, Variants } from "framer-motion";
import useMounted from "@/lib/mount";
import ScrollSpring from "@/components/ScrollSpring";

const ExperiencePage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const experienceData = [
    {
      company: "AI Core Solutions",
      role: "SDE Intern",
      description: [
        "Developed the app from scratch using React Native and integrated it with backend services. Add the native features like sharing files, notifications and easy access",
        "Built a user-friendly interface which could be used to upload the videos and summarize them as pdf",
        "Integrated AI/ML APIs to improve user interaction and data visualization.",
      ],
    },
    {
      company: "Zeepty",
      role: "App Developer Intern",
      description: [
        "Collaborated with a team of developers to design and implement new features for the mobile application using React Native.",
        "Optimized app performance by identifying and resolving bottlenecks, resulting in a 20% increase in speed and responsiveness.",
        "Conducted thorough testing and debugging to ensure a seamless user experience across different devices and platforms.",
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
                {!expanded && <BlackCircle className="right-10" />}

                <div className="flex flex-col gap-2 w-[calc(100%-230px)]">
                  <div
                    className={`flex ${
                      expanded ? "flex-row items-center" : "flex-col justify-start"
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
