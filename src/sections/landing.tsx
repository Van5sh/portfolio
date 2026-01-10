"use client";

import Circle from "../../public/svgs/Ellipse 1.svg";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import Centreme from "../../public/svgs/Centreme.svg";
import { useState } from "react";
import ScrollSpring from "@/components/ScrollSpring";

const LandingPage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col min-h-screen px-20 py-10 items-center">
      {/* ✅ Navbar reveal */}
      <ScrollSpring className="w-full" delay={0}>
        <Navbar />
      </ScrollSpring>

      {/* ✅ Center reveal */}
      <ScrollSpring
        className="flex flex-1 items-center justify-center"
        delay={0.12}
      >
        <div className="flex flex-col items-center gap-10">
          <div className="relative flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-[#162A39]">VANSH</h1>

            <Image
              src={Centreme}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              width={250}
              height={250}
              alt="Lens"
              className="absolute top-6/12 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            />

            <Image
              src={Circle}
              width={250}
              height={250}
              alt="Circle"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
            />

            <h1 className="text-9xl font-semibold mt-1 text-[#162A39] tracking-[2px] leading-none">
              DHIR
            </h1>

            <Image
              src={Circle}
              width={250}
              height={250}
              alt="Circle"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
            />
          </div>
        </div>
      </ScrollSpring>

      {/* ✅ Bottom reveal */}
      <ScrollSpring
        className="flex flex-col items-center gap-6 mb-10"
        delay={0.24}
      >
        <h1 className="text-4xl font-bold">Full Stack Developer</h1>
        <button className="ripple-button">Let&apos;s Connect</button>
      </ScrollSpring>
    </div>
  );
};

export default LandingPage;
