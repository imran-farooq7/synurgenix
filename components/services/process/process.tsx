import { ProcessCardProps } from "@/utils/types";
import { Inter } from "next/font/google";
import PA from "@/public/processArrow.svg";

import Image from "next/image";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const Process = ({ description, icon, title, isLast }: ProcessCardProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col text-center items-center text-white max-w-3xs">
        <Image src={icon} alt={title} />

        <h3 className="text-2xl font-bold mt-7 mb-4">{title}</h3>
        <p className={`${interSans.variable} font-normal text-base`}>
          {description}
        </p>
      </div>
      {isLast && (
        <Image src={PA} alt="arrow" className="hidden -mt-28 md:flex" />
      )}
    </div>
  );
};

export default Process;
