"use client";

import { SquareArrowOutUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import CardViewSvg from "../../../public/svgs/CardView.svg";
import WhiteRectangle from "../../../public/svgs/White-Rectangle.svg";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
  imageClass: string;
  link: string;
  link2?: string;
  techStack: string[];
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageClass,
  link,
  link2,
  techStack,
}) => {
  return (
    <div className="flex justify-center items-center w-full h-full z-10 text-white">
      <div className="relative z-10">
        <Image
          src={CardViewSvg}
          alt="Card background"
          width={1000}
          height={700}
          className="z-10"
          priority
        />

        <div className="absolute bottom-6 right-6 z-30">
          <div className="relative w-[220px] h-[220px]">
            {/* <Image
              src={WhiteRectangle}
              alt="Rectangle"
              fill
              className="z-10 ml-2"
            /> */}

            <Image
              src={image}
              alt={title}
              fill
              className={`z-20 object-cover rounded-xl p-4 ${imageClass}`}
            />
          </div>
        </div>

        <div className="absolute top-10 left-8 right-8 z-30">
          <div className="flex items-start justify-between gap-4">
            <h1 className="font-bold text-2xl">{title}</h1>
            <div className="flex items-center gap-3 ">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer  hover:scale-110 transition-transform"
                title="Open Repo"
              >
                <SquareArrowOutUpRight size={24} />
              </a>
              {link2 && (
                <a
                  href={link2}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer hover:scale-110 transition-transform opacity-80 hover:opacity-100"
                  title="Open Repo 2"
                >
                  <SquareArrowOutUpRight size={24} />
                </a>
              )}
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 max-w-[420px]">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold rounded-full
                           bg-white/10 border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed w-[360px] text-white/80">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
