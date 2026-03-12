"use client";

import Circle from "../../public/svgs/Ellipse 1.svg";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import Centreme from "../../public/svgs/Centreme.svg";
import ScrollSpring from "@/components/ScrollSpring";

const LandingPage = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="section-wrap flex flex-col min-h-[90vh] gap-12">
      <ScrollSpring className="w-full" delay={0}>
        <Navbar />
      </ScrollSpring>

      <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <ScrollSpring
          className="flex flex-col items-center text-center gap-6 lg:items-start lg:text-left"
          delay={0.12}
        >
          <span className="section-kicker">Full Stack Developer</span>
          <div className="flex flex-col gap-2">
            <h2 className="hero-title text-[color:var(--theme-ink)]">
              Vansh Dhir
            </h2>
            <p className="section-lead">
              I build full-stack products with clean architecture, fast
              performance, and thoughtful UI. From mobile apps to scalable
              backends, I focus on craftsmanship and reliability.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <button
              onClick={() => scrollToSection("contact")}
              className="ripple-button"
            >
              Let&apos;s Connect
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--theme-ink)] px-6 py-3 text-sm font-semibold text-[color:var(--theme-ink)] transition hover:-translate-y-0.5 hover:bg-[color:var(--theme-ink)] hover:text-[#fff8ee]"
            >
              View Projects
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {["Next.js", "React Native", "Go", "NestJS"].map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </ScrollSpring>

        <ScrollSpring className="flex items-center justify-center" delay={0.2}>
          <div className="hero-orb">
            <Image
              src={Circle}
              width={320}
              height={320}
              alt="Orb"
              className="absolute inset-0 w-full h-full"
            />
            <div className="hero-mask" aria-hidden="true" />
            <div className="hero-mask-outline" aria-hidden="true" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[color:var(--theme-ink)]">
              <span className="text-base font-semibold tracking-[0.3em]">
                VANSH
              </span>
              <span className="hero-name font-trap">DHIR</span>
            </div>
          </div>
        </ScrollSpring>
      </div>
    </div>
  );
};

export default LandingPage;
