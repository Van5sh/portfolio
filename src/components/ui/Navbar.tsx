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
    <div className="flex flex-col gap-4 w-full py-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1
          className="text-2xl font-bold text-[color:var(--theme-ink)] cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          VD
        </h1>
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--theme-ink)] hover:text-[color:var(--theme-accent-strong)] md:hidden"
          onClick={() => window.open("../../../MyResume.pdf", "_blank")}
        >
          Resume
          <Download size={18} />
        </button>
      </div>

      <nav className="flex items-center justify-center w-full md:w-auto">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-base md:text-lg font-medium text-[color:var(--theme-ink)]">
          {["about", "skills", "projects", "experience", "contact"].map(
            (section) => (
              <li
                key={section}
                className="cursor-pointer hover:text-[color:var(--theme-accent-strong)] font-semibold"
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            )
          )}
        </ul>
      </nav>

      <button
        type="button"
        className="hidden md:inline-flex items-center gap-2 text-base font-semibold text-[color:var(--theme-ink)] hover:text-[color:var(--theme-accent-strong)]"
        onClick={() => window.open("../../../MyResume.pdf", "_blank")}
      >
        Resume
        <Download size={20} />
      </button>
    </div>
  );
};

export default Navbar;
