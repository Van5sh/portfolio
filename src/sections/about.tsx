"use client";

import Image from "next/image";
import ScrollSpring from "@/components/ScrollSpring";

const AboutPage = () => {
  return (
    <div className="section-wrap">
      <ScrollSpring as="div" className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="section-kicker">About</span>
          <h1 className="section-title">Crafting Scalable, Human-Centered UX</h1>
        </div>

        <ScrollSpring
          className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start"
          delay={0.12}
        >
          <div className="flex flex-col gap-5 text-left leading-relaxed lg:pr-6">
            <p className="section-lead font-trap">
              I am Vansh Dhir, a Computer Science undergraduate at Vellore
              Institute of Technology with a strong passion for full-stack
              development. I specialize in building scalable, interactive
              applications using modern technologies like Next.js, React Native,
              NestJS, and Go.
            </p>
            <p className="section-lead font-trap">
              My experience includes interning as an SDE at AI Core Solutions and
              App Developer at Zeepty, where I focused on optimizing performance
              and integrating advanced features. Currently, as the Projects Lead
              at ACM VIT, I direct collaborative technical projects and drive
              innovation within the community.
            </p>
            <p className="section-lead">
              I thrive in problem-solving environments, constantly refining my
              skills in secure backends and dynamic user interfaces. I am a
              quick learner and a team player, dedicated to meaningful solutions
              that elevate user experiences.
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-end lg:pt-2">
            <div className="relative w-full max-w-[480px] aspect-[4/5]">
              <div className="absolute inset-0 rounded-[32px] bg-[#FC573B]" />
              <div className="absolute inset-4 rounded-[26px] overflow-hidden glass-panel">
                <Image
                  src="/png/MyImage.png"
                  alt="Vansh Dhir"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollSpring>
      </ScrollSpring>
    </div>
  );
};

export default AboutPage;
