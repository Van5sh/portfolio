import ProjectsCard from "@/components/ui/ProjectsCard";
import Arrow1 from "../../public/svgs/Arrow1";
import Arrow2 from "../../public/svgs/Arrow2";
import Arrow3 from "../../public/svgs/Arrow3";
import Arrow4 from "../../public/svgs/Arrow4";
import Centre from "../../public/svgs/Centre";

const Projects = () => {
  return (
    <div className="flex flex-col items-center w-full px-20 py-20">
      <h1 className="text-5xl font-bold tracking-tight mb-25">Projects</h1>

      <div className="relative w-full max-w-5xl h-[80vh]">
        <div className="absolute inset-0 flex justify-between items-center px-28">
          <div className="flex flex-col items-end gap-8">
            <div className="relative flex items-center">
              <Arrow4 />
              <div className="absolute cursor-pointer right-full -mt-15 hover:scale-[1.3] transition-transform duration-400 ease-out top-2.5">
                <ProjectsCard>Maven Financial</ProjectsCard>
              </div>
            </div>

            <div className="relative">
              <Arrow3 />
              <div className="absolute right-full cursor-pointer hover:scale-[1.3] transition-transform duration-400 ease-out ">
                <ProjectsCard>Cryptic Hunt</ProjectsCard>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 mr-20">
            <div className="relative">
              <Arrow1 />
              <div className="absolute cursor-pointer left-full -mt-15 hover:scale-[1.3] transition-transform duration-400 ease-out top-2.5">
                <ProjectsCard>Apex Market</ProjectsCard>
              </div>
            </div>

            <div className="relative">
              <Arrow2 />
              <div className="absolute cursor-pointer left-full hover:scale-[1.3] transition-transform duration-400 ease-out ">
                <ProjectsCard>ACMOne-APP</ProjectsCard>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-1/2 left-1/2 z-10 
                     -translate-x-1/2 -translate-y-1/2
                     hover:scale-[1.3] transition-transform duration-500 ease-out"
        >
          <Centre />
        </div>
      </div>
    </div>
  );
};

export default Projects;
