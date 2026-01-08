import CircleIcon from "@/components/Circle";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen px-20 py-10">

      <div className="flex flex-row justify-between gap-16 items-center w-full mb-16">
        <h1 className="text-2xl font-bold justify-start">VD</h1>
        <nav>
          <ul className="flex flex-row gap-8 text-sm font-medium">
            <li className="cursor-pointer hover:text-orange-500">Skills</li>
            <li className="cursor-pointer hover:text-orange-500">Projects</li>
            <li className="cursor-pointer hover:text-orange-500">About</li>
            <li className="cursor-pointer hover:text-orange-500">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col items-center">
            <CircleIcon size={100} color="#FC573B" />
            <h1 className="text-4xl font-bold ml-8">Full Stack Developer</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
