import Arrow1 from "../../public/svgs/Arrow1";
import Arrow2 from "../../public/svgs/Arrow2";
import Arrow3 from "../../public/svgs/Arrow3";
import Arrow4 from "../../public/svgs/Arrow4";

const Projects = () => {
    return (
        <div className="flex flex-col items-center py-16 w-full">
            <h1 className="text-3xl font-bold mb-12">Projects</h1>
            <div className="relative w-full max-w-5xl h-[60vh]">
                <div className="absolute inset-0 flex justify-between items-center px-12">
                    <div className="flex flex-col gap-8">
                        <Arrow4 />
                        <Arrow3 />
                    </div>
                    <div className="flex flex-col gap-8">
                        <Arrow1 />
                        <Arrow2 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
