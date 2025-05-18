import { NameProps } from "@/utils/types";
import { Inter } from "next/font/google";
import Image from "next/image";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["600"],
});

const Name = ({ name, src }: NameProps) => {
  return (
    <span
      className={`border-2 border-[#FF8157] px-3 py-2 flex gap-2 items-center w-fit rounded-sm md:text-base text-sm ${interSans.variable} font-semibold text-[#1A5FC7]`}
    >
      {" "}
      <span>
        <Image alt="about us" src={src} width={20} height={20} />
      </span>
      {name}
    </span>
  );
};

export default Name;
