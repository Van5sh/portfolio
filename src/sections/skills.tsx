import Containers from "@/components/ui/containers";
import ItemsContainer from "@/components/ui/ItemsContainer";

const SkillsPage = () => {
  const skills = [
    {
      name: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    { name: "Frameworks", items: ["React", "Next.js", "Node.js", "Express"] },
    { name: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    { name: "Tools", items: ["Git", "Docker", "Jenkins"] },
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
              {skillCategory.items.map((item) => (
                <div
                  key={item}
                  className="flex justify-center font-bold rounded-full"
                  style={{
                    backgroundColor: "#162A39",
                    width: "10vw",
                    padding: "8px 0",
                    color: "#FC573B",
                  }}
                >
                  <h1>{item}</h1>
                </div>
              ))}
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
