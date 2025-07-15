import { WhyUsCardProps } from "@/utils/types";
import { Inter } from "next/font/google";
import Image from "next/image";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["600", "400"],
});

const WhyUsCard = ({ icon, description, title }: WhyUsCardProps) => {
  return (
    <div
      className={`max-w-[400px] ${interSans.variable}  rounded-2xl border p-6 bg-white/20 border-white/[0.12]`}
    >
      <Image src={icon} alt="icon" width={56} height={56} />
      <h3 className="text-2xl font-semibold text-white mt-4 mb-6 ">{title}</h3>
      <p className="text-lg text-[#1d1d1d]">{description}</p>
    </div>
  );
};

export default WhyUsCard;
