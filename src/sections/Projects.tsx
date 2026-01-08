import Arrow1 from "../../public/svgs/Arrow1";
import Arrow2 from "../../public/svgs/Arrow2";
import Arrow3 from "../../public/svgs/Arrow3";
import Arrow4 from "../../public/svgs/Arrow4";
import Centre from "../../public/svgs/Centre";

const Projects = () => {
  return (
    <div className="flex flex-col items-center p-16 w-full">
      <h1 className="text-3xl font-bold mb-12">Projects</h1>

      <div className="relative w-full max-w-5xl h-[60vh]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-end gap-6">
            <Arrow4 className="top-10" />
            <Arrow3 />
          </div>
          <Centre />
          <div className="flex flex-col items-start gap-6">
            <Arrow1 />
            <Arrow2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
