import React from "react";
import CardComponent from "../../../public/svgs/Card";
interface ContainersProps {
  children: React.ReactNode;
}

const Containers: React.FC<ContainersProps> = ({ children }) => {
  return <CardComponent />;
};

export default Containers;
