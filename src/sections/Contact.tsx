"use client";

import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaMailBulk, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contacts = () => {
  const [copied, setCopied] = useState(false);

  const CopytoClipboard = async () => {
    await navigator.clipboard.writeText("+919818654570");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const itemClass =
    "contact-item flex items-center gap-2 transition-all duration-300 ease-out hover:scale-[1.08] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#FC573B]";

  return (
    <div className="flex flex-col items-center gap-10 justify-center w-full px-20 py-16 mb-[200px]">
      <h1 className="mb-10 text-5xl font-semibold">Contacts</h1>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6">
        {/* Email */}
        <a href="mailto:vansh05dhir@gmail.com" className={itemClass}>
          <FaMailBulk className="text-lg" />
          <span>vansh05dhir@gmail.com</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Van5sh"
          target="_blank"
          rel="noopener noreferrer"
          className={itemClass}
        >
          <FaGithub className="text-lg" />
          <span>Van5sh</span>
        </a>

        {/* Phone Copy */}
        <button onClick={CopytoClipboard} className={itemClass} type="button">
          <FaPhone className="text-lg" />
          <span>{copied ? "Copied!" : "+91 9818654570"}</span>
        </button>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vansh-dhir-686b5028b"
          target="_blank"
          rel="noopener noreferrer"
          className={itemClass}
        >
          <FaLinkedinIn className="text-lg" />
          <span>Vansh Dhir</span>
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/VanshDhir/"
          target="_blank"
          rel="noopener noreferrer"
          className={itemClass}
        >
          <SiLeetcode className="text-lg" />
          <span>Vansh Dhir</span>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
