"use client";

import { SquareArrowOutUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import CardViewSvg from "../../../public/svgs/CardView.svg";

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
  const info = (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div className="flex items-center gap-3">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:scale-110 transition-transform"
            title="Open Repo"
          >
            <SquareArrowOutUpRight size={22} />
          </a>
          {link2 && (
            <a
              href={link2}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:scale-110 transition-transform opacity-80 hover:opacity-100"
              title="Open Repo 2"
            >
              <SquareArrowOutUpRight size={22} />
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 border border-white/20"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-sm leading-relaxed text-white/80">{description}</p>
    </div>
  );

  return (
    <div className="flex justify-center items-center w-full h-full z-10 text-white">
      <div className="relative z-10 w-[min(94vw,1000px)]">
        <div className="hidden md:block">
          <Image
            src={CardViewSvg}
            alt="Card background"
            width={1000}
            height={700}
            className="z-10 w-full h-auto"
            priority
          />

          <div className="absolute bottom-6 right-6 z-30">
            <div className="relative w-[220px] h-[220px]">
              <Image
                src={image}
                alt={title}
                fill
                className={`z-20 object-cover rounded-xl p-4 ${imageClass}`}
              />
            </div>
          </div>

          <div className="absolute top-10 left-8 right-8 z-30 max-w-[560px]">
            {info}
          </div>
        </div>

        <div className="md:hidden rounded-3xl bg-[#162A39] p-6 shadow-[0_24px_50px_rgba(15,29,34,0.45)]">
          <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/10">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          {info}
        </div>
      </div>
    </div>
  );
};

export default Card;
