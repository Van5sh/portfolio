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
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative">
        <Image
          src={CardView}
          alt="CardView"
          width={800}
          height={800}
          className="z-10"
        />
        {/* <Image
          src={WhiteRectangle}
          alt="WhiteRectangle"
          width={290}
          height={290}
          className="absolute bottom-6 right-6 z-20"
        /> */}
        <div className="absolute top-1/8 right-8 z-30 cursor-pointer">
          <SquareArrowOutUpRight size={32} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Card;
