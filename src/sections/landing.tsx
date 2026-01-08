import Circle from "../../public/svgs/Ellipse 1.svg"
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen px-20 py-10 justify-center items-center">
      <Navbar/>
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col items-center">
            <Image
                src={Circle}
                width={250}
                height={250}
                alt="Profile Picture"
            />
            <h1 className="text-4xl font-bold ml-8">Full Stack Developer</h1>
        </div>
      </div>
        <button className="bg-black rounded-full hover:cursor-pointer text-white hover:text-orange-500 p-3 font-bold w-[20vw]">
            Let&apos;s Connect
        </button>
    </div>
  );
};

export default LandingPage;
