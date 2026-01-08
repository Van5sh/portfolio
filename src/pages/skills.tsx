import Containers from "@/components/containers";

const SkillsPage = () => {
    const skills = [
        { name: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java'] },
        { name: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Express'] },
        { name: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
        { name: 'Tools', items: ['Git', 'Docker', 'Jenkins'] },
    ];

    return (
        <div className="flex flex-col min-h-screen rounded-lg px-20 py-16">
            <h1 className="mb-10 text-3xl font-semibold">Skills</h1>

            <div className="flex gap-8">
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
                        <h2 className="text-lg font-medium">
                            {skillCategory.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsPage;
