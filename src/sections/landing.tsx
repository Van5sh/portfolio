import Circle from "../../public/svgs/Ellipse 1.svg";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen px-20 py-10 items-center">
      <Navbar />

      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center gap-10">
          <div className="relative flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-[#162A39]">VANSH</h1>
            <h1 className="text-9xl font-semibold text-[#162A39] letter-spacing-[2px] leading-none">
              DHIR
            </h1>
            <Image
              src={Circle}
              width={250}
              height={250}
              alt="Profile Picture"
              className="absolute top-1/2 -translate-y-1/2 -z-10"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 mb-10">
        <h1 className="text-4xl font-bold">Full Stack Developer</h1>
        <button className="ripple-button ">Let&apos;s Connect</button>
      </div>
    </div>
  );
};

export default LandingPage;
