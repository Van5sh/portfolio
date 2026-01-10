import React from "react";
import { Download } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center w-full h-0.5 mb-16 p-2 ">
      <h1
        className="absolute left-4 text-2xl font-bold text-black cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        VD
      </h1>
      <nav className="flex items-center justify-center">
        <ul className="flex gap-8 text-2xl font-medium text-black">
          <li
            className="cursor-pointer hover:text-orange-500 font-semibold"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="cursor-pointer hover:text-orange-500 font-semibold"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="cursor-pointer hover:text-orange-500 font-semibold"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer hover:text-orange-500 font-semibold"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </li>
          <li
            className="cursor-pointer hover:text-orange-500 font-semibold"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
      <Download
        className="absolute right-4 text-2xl font-bold text-black cursor-pointer"
        onClick={() => window.open("../../../MyResume.pdf", "_blank")}
      />
    </div>
  );
};

export default Navbar;
