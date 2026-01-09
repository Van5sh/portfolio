import { FaGithub, FaLinkedinIn, FaMailBulk, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contacts = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-10">
      <h1 className="text-5xl font-semibold mb-10 items-start ml-10">
        Contacts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6">
        <div className="contact-item flex flex-row items-center gap-2">
          <FaMailBulk />
          vansh05dhir@gmail.com
        </div>
        <div className="contact-item flex flex-row items-center gap-2">
          <FaGithub />
          Van5sh
        </div>
        <div className="contact-item flex flex-row items-center gap-2">
          <FaPhone />
          +91 9818654570
        </div>
        <div className="contact-item flex flex-row items-center gap-2">
          <FaLinkedinIn />
          Vansh Dhir
        </div>
        <div className="contact-item flex flex-row items-center gap-2">
          <SiLeetcode />
          Vansh Dhir
        </div>
      </div>
    </div>
  );
};

export default Contacts;
