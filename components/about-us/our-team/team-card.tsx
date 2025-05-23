import { TeamCardProps } from "@/utils/types";
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

const TeamCard = ({ image, name, position }: TeamCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={image} alt={name} width={290} height={400} />
      <h2
        className={`mt-6 mb-2 uppercase ${antonSans.variable} text-[30px] text-[#22242F]`}
      >
        {name}
      </h2>
      <p className={`${interSans.variable} text-base text-[#6d6d6d]`}>
        {position}
      </p>
    </div>
  );
};

export default TeamCard;
