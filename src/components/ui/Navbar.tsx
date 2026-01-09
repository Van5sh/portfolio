import React from "react";
import { Download } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center w-full h-0.5 mb-16 p-2 ">
      <h1 className="absolute left-4 text-2xl font-bold text-black">VD</h1>
      <nav className="flex items-center justify-center">
        <ul className="flex gap-8 text-2xl font-medium text-black">
          <li className="cursor-pointer hover:text-orange-500 hover:underline font-semibold">
            Skills
          </li>
          <li className="cursor-pointer hover:text-orange-500 hover:underline font-semibold">
            Projects
          </li>
          <li className="cursor-pointer hover:text-orange-500 hover:underline font-semibold">
            About
          </li>
          <li className="cursor-pointer hover:text-orange-500 hover:underline font-semibold">
            Contact
          </li>
        </ul>
      </nav>
      <Download className="absolute right-4 text-2xl font-bold text-black cursor-pointer" />
    </div>
  );
};

export default Navbar;
