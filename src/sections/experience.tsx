"use client";

import React from "react";
import BlackCircle from "../../public/svgs/codes/BlackCircle";
import { motion } from "framer-motion";
import useMounted from "@/lib/mount";

const ExperiencePage = () => {
  const mounted = useMounted();
  if (!mounted) return null; // ✅ hydration fix

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

  return (
    <div className="flex flex-col items-center w-full px-20 py-16">
      <h1 className="text-5xl font-bold mb-12">Experience</h1>

      <div className="flex flex-col gap-10 w-full max-w-4xl">
        {experienceData.map((experience, index) => (
          <motion.div
            key={index}
            className="flex items-center cursor-pointer hover:scale-105 transition-all duration-300 gap-6 w-full p-6 rounded-full"
          >
            <div className="pt-2">
              <BlackCircle />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-6xl font-semibold">{experience.company}</h2>
              <span className="text-3xl text-gray-600">{experience.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
