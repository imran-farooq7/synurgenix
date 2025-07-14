import { SolutionCardProps } from "@/utils/types";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["700"],
});

const SolutionCard = ({ title, description, icon }: SolutionCardProps) => {
  return (
    <div
      className={`bg-white ${interSans.variable} grow items-center flex flex-col border max-w-sm rounded-[20px] border-black/10 py-11 `}
    >
      <Image src={icon} alt={title} width={110} height={110} />
      <p className={`text-xl md:text-[22px]  font-bold text-black mt-5.5`}>
        {title}
      </p>
      <p className="text-base text-[#161C2D] text-center max-w-2xs mt-2">
        {description}
      </p>
    </div>
  );
};

export default SolutionCard;
