import { WhoCardProps } from "@/utils/types";
import { Anton, Inter } from "next/font/google";
import Image from "next/image";
const antonSans = Anton({
  variable: "--font-anton-sans",
  subsets: ["latin"],
  weight: ["400"],
});
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const WhoCard = ({ isOrange, title, icon, description }: WhoCardProps) => {
  return (
    <div
      className={`${
        isOrange ? "bg-[#FF8157]" : "bg-[#86B93E]"
      } px-8 pt-9 md:pt-15 pb-12 max-w-[610px] rounded-3xl space-y-4`}
    >
      <div className="flex justify-between">
        <h2
          className={`text-[27px] md:text-5xl text-white ${antonSans.variable} font-bold`}
        >
          {title}
        </h2>
        <Image src={icon} alt={title} />
      </div>
      <p
        className={`${interSans.variable} text-xl max-w-lg font-normal text-white
      `}
      >
        {description}
      </p>
    </div>
  );
};

export default WhoCard;
