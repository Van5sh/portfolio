import Containers from "@/components/ui/containers";

const SkillsPage = () => {
    const skills = [
        { name: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java'] },
        { name: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Express'] },
        { name: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
        { name: 'Tools', items: ['Git', 'Docker', 'Jenkins'] },
    ];

    return (
        <div className="flex flex-col w-full h-full items-center rounded-lg ">
            <h1 className="mb-10 text-5xl font-semibold">Skills</h1>
            <div className="flex w-full h-[80vh] items-center justify-center gap-8 bg-[#FC573B]">
                {skills.map((skillCategory) => (
                    <div
                        key={skillCategory.name}
                        className="flex flex-col items-center gap-4"
                    >
                        <Containers>
                            <ul className="space-y-2">
                                {skillCategory.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </Containers>
                        <h2 className="text-xl font-bold text-white">
                            {skillCategory.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsPage;
