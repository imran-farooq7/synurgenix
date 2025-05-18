import Image from "next/image";
import Check from "@/public/check.svg";
import { CardProps } from "@/utils/types";
import { Inter } from "next/font/google";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["700"],
});

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="bg-white border max-w-sm rounded-[20px] border-black/10 py-12 pl-4 pr-9">
      <div className="flex gap-4 items-center mb-4">
        <Image src={Check} alt="check" />
        <p
          className={`text-xl md:text-[22px] ${interSans.variable} font-bold text-[#0A3C87]`}
        >
          {title}
        </p>
      </div>
      <div className="ml-10">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
