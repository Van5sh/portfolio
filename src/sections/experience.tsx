import React from 'react';
import BlackCircle from '../../public/svgs/BlackCircle';

const ExperiencePage = () => {
    const experienceData = [
        {
            company: "AI Core Solutions",
            role: "SDE Intern",
            description: [
                "Developed the app from scratch using React Native and integrated it with backend services. Add the native features like sharing files, notifications and easy access",
                "Built a user-friendly interface which could be used to upload the videos and summarize them as pdf",
                "Integrated AI/ML APIs to improve user interaction and data visualization."
            ]
        },
        {
            company: "Zeepty",
            role: "App Developer Intern",
            description: [
                "Collaborated with a team of developers to design and implement new features for the mobile application using React Native.",
                "Optimized app performance by identifying and resolving bottlenecks, resulting in a 20% increase in speed and responsiveness.",
                "Conducted thorough testing and debugging to ensure a seamless user experience across different devices and platforms."
            ]
        }
    ];

    return (
        <div className="flex flex-col items-center w-full px-20 py-16">
            <h1 className="text-3xl font-bold mb-12">Experience</h1>

            <div className="flex flex-col gap-10 w-full max-w-4xl">
                {experienceData.map((experience, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-6"
                    >
                        <div className="pt-2">
                            <BlackCircle />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold">
                                {experience.company}
                            </h2>
                            <span className="text-sm text-gray-600">
                                {experience.role}
                            </span>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                                {experience.description.map((item, i) => (
                                    <li key={i} className="text-sm">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperiencePage;
