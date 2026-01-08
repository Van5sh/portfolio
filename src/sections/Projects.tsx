import Arrow1 from "../../public/svgs/Arrow1";
import Arrow2 from "../../public/svgs/Arrow2";
import Arrow3 from "../../public/svgs/Arrow3";
import Arrow4 from "../../public/svgs/Arrow4";
import Centre from "../../public/svgs/Centre";

const Projects = () => {
  return (
    <div className="flex flex-col items-center w-full px-16 py-20">
      <h1 className="text-5xl font-bold mb-20 tracking-tight">Projects</h1>

      <div className="relative w-full max-w-5xl h-[80vh]">
        <div className="absolute inset-0 flex justify-between items-center px-28">
          <div className="flex flex-col items-end gap-5">
            <Arrow4 />
            <Arrow3 />
          </div>

          <div className="flex flex-col items-start gap-5 mr-6">
            <Arrow1 />
            <Arrow2 />
          </div>
        </div>
        <div
          className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 
                        hover:scale-[1.3] transition-transform duration-500 ease-out"
        >
          <Centre />
        </div>
      </div>
    </div>
  );
};

export default Projects;
