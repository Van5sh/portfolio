"use client";

import OrangeCircle from "../../public/svgs/codes/CircleOrange";
import ScrollSpring from "@/components/ScrollSpring";

const Extracurricular = () => {
  const data = [
    {
      designation: "Core Member",
      date: "2024-2025",
      content:
        "Worked as a member of ACM where I had the opportunity to build projects and sharpen new skills.",
    },
    {
      designation: "Project Lead",
      date: "2025-Present",
      content:
        "Led projects at ACM, improving interpersonal communication, planning, and team management.",
    },
  ];

  return (
    <div className="section-wrap">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="section-kicker">Extracurricular</span>
          <h1 className="section-title">Community & Leadership</h1>
        </div>

        <ScrollSpring className="flex w-full gap-10" delay={0.12}>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Association for Computing Machinery (ACM)
            </h2>

            <p className="section-lead">
              Supporting events, hackathons, and tech communities while leading
              collaborative product builds.
            </p>

            <div className="relative mt-6 pl-10">
              <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-[#FC573B]" />

              <div className="flex flex-col gap-6">
                {[...data].reverse().map((item, index) => (
                  <div
                    key={index}
                    className="relative flex gap-4 items-start py-4"
                  >
                    <div className="relative z-10">
                      <div className={index === 0 ? "pulse-ripple" : ""}>
                        <OrangeCircle />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl md:text-2xl font-semibold">
                          {item.designation}
                        </h3>
                        <span className="text-sm font-semibold text-[color:var(--theme-ink-soft)]">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-[color:var(--theme-ink-soft)] text-base leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollSpring>
      </div>
    </div>
  );
};

export default Extracurricular;
