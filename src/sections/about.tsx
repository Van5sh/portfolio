"use client";

import Image from "next/image";
import ScrollSpring from "@/components/ScrollSpring";

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <ScrollSpring
        as="h1"
        className="text-5xl font-semibold mb-10 items-start ml-10"
      >
        About Me
      </ScrollSpring>
      <ScrollSpring
        className="flex flex-row items-center justify-center"
        delay={0.12}
      >
        <div className="flex flex-col gap-4 max-w-xl text-justify leading-relaxed">
          <p>
            I am Vansh Dhir, a Computer Science undergraduate at Vellore
            Institute of Technology with a strong passion for full-stack
            development. I specialize in building scalable, interactive
            applications using modern technologies like Next.js, React Native,
            NestJS, and Golang.
          </p>
          <p>
            My experience includes interning as an SDE at AI Core Solutions and
            App Developer at Zeepty, where I focused on optimizing performance
            and integrating advanced features. Currently, as the Projects Lead
            at ACM VIT, I direct collaborative technical projects and drive
            innovation within the community.
          </p>
          <p>
            I thrive in problem-solving environments, constantly seeking to
            refine my skills in constructing secure backends and dynamic user
            interfaces. I am a quick learner and a team player, dedicated to
            creating meaningful solutions that enhance user experiences.
          </p>
        </div>

        <div className="ml-20">
          <div className="ml-20 relative h-[70vh] w-[48vh]">
            <div className="h-full w-full bg-[#FC573B] rounded-2xl" />
            <Image
              src="/png/MyImage.png"
              alt="Me"
              width={600}
              height={600}
              className="rounded-2xl absolute top-1/6 right-3 -translate-y-10 w-[500px] h-[400px]"
            />
          </div>
        </div>
      </ScrollSpring>
    </div>
  );
};

export default AboutPage;
