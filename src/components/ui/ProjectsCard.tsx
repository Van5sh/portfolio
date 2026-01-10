// ProjectsCard.tsx
import React from "react";

interface ProjectsCardProps {
  children: React.ReactNode;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ children }) => {
  return (
    <div className="relative w-[180px] h-[80px]">
      <svg
        width="180"
        height="80"
        viewBox="0 0 465 207"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="13" y="8" width="452" height="199" rx="62" fill="#162A39" />
        <rect width="452" height="199" rx="62" fill="#FC573B" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <span className="text-sm font-bold text-white text-center leading-tight">
          {children}
        </span>
      </div>
    </div>
  );
};

export default ProjectsCard;
