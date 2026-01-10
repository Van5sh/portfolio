import Containers from "../components/ui/containers";
import FallingText from "@/components/FallingText";

const SkillsPage = () => {
  const skills = [
    {
      name: "Languages",
      items: [
        "C",
        "CSS",
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "GoLang",
      ],
    },
    {
      name: "Frameworks",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "GoFiber",
        "NestJS",
        "React Native",
      ],
    },
    { name: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Prisma"] },
    {
      name: "Tools",
      items: [
        "Git",
        "GitHub",
        "Docker",
        "Firebase",
        "Postman",
        "Android Studio",
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full h-full items-center rounded-lg">
      <h1 className="mb-10 text-5xl font-semibold">Skills</h1>

      <div className="flex flex-row w-full h-[90vh] items-center justify-center gap-8 bg-[#FC573B]">
        {skills.map((skillCategory) => (
          <div
            key={skillCategory.name}
            className="flex flex-col items-center gap-4"
          >
            <Containers>
              <FallingText
                text={skillCategory.items.join("|")}
                highlightWords={skillCategory.items}
                trigger="auto"
                gravity={0.8}
                wireframes={false}
                backgroundColor="transparent"
                fontSize="0.9rem"
                mouseConstraintStiffness={0.1}
                highlightClass="skill-item"
              />
            </Containers>
            <h2 className="text-2xl font-bold text-white">
              {skillCategory.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
