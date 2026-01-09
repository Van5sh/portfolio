// Containers.tsx
import React from "react";
import Image from "next/image";
import Card from "../../../public/svgs/card.svg";

interface ContainersProps {
  children: React.ReactNode;
}

const Containers: React.FC<ContainersProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col h-[400px] w-[260px] items-center justify-center rounded-2xl p-4 overflow-hidden">
      <Image
        src={Card}
        alt="Card"
        fill
        className="object-cover absolute inset-0 z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default Containers;
