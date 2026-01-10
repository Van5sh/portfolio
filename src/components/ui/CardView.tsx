import { SquareArrowOutUpRight } from "lucide-react";
import CardView from "../../../public/svgs/CardView.svg";
import WhiteRectangle from "../../../public/svgs/White-Rectangle.svg";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
  return (
    <div className="flex justify-center items-center w-full h-full z-10 text-white">
      <div className="relative z-10">
        <Image
          src={CardView}
          alt="CardView"
          width={800}
          height={800}
          className="z-10"
        />
        <Image
          src={WhiteRectangle}
          alt="WhiteRectangle"
          width={220}
          height={220}
          className="absolute bottom-6 right-6 z-20"
        />
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2 absolute top-1/8 left-8 z-30">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="text-md leading-relaxed w-[330px]">{description}</p>
          </div>
          <div className="absolute top-1/8 right-8 z-30 cursor-pointer">
            <SquareArrowOutUpRight size={24} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
