"use client";

import OrangeCircle from "../../public/svgs/codes/CircleOrange";
import Lines from "../../public/svgs/codes/Lines";
import ScrollSpring from "@/components/ScrollSpring";

const Extracurricular = () => {
  const data = [
    {
      designation: "Core Member",
      date: "2024-2025",
      content:
        "Worked as a Member of ACM where got he oppurtunity of working on projects and learning new skils",
    },
    {
      designation: "Project Lead",
      date: "2025-Preset",
      content:
        "Worked as a Project Lead of ACM where got he oppurtunity of leading projects. Improved on my interpersonal skills and team management skills.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full px-20 py-16">
      {/* ✅ animated heading */}
      <ScrollSpring as="h1" className="text-5xl font-semibold mb-10">
        Extracurricular
      </ScrollSpring>

      {/* ✅ animated block */}
      <ScrollSpring className="flex w-full max-w-4xl gap-10" delay={0.12}>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">
            Association for Computing Machinery (ACM)
          </h2>

          <p className="text-gray-600 text-lg">
            Worked on events, hackathons, and tech communities.
          </p>

          <div className="relative mt-6">
            <div className="absolute left-[23px] top-[26px] bottom-[26px]">
              <div className="w-[4px] h-[200px] bg-[#FC573B]" />
            </div>

            <div className="flex flex-col gap-6">
              {[...data].reverse().map((item, index) => (
                <div
                  key={index}
                  className="relative flex gap-4 items-start py-6"
                >
                  <div className="relative z-10">
                    <div className={index === 0 ? "pulse-ripple" : ""}>
                      <OrangeCircle />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      {item.designation}
                    </h3>
                    <p className="text-gray-600 text-lg">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollSpring>
    </div>
  );
};

export default Extracurricular;
