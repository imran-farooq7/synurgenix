import { link } from "fs";
import Link from "next/link";
import NEW from "@/public/north_east_white.svg";
import Image from "next/image";
import { Inter } from "next/font/google";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["600", "400"],
});
const LetOptimizeLink = () => {
  return (
    <Link
      className={`bg-[#86B93E] hover:scale-105 transition-all ease-in-out text-white text-nowrap gap-1 mt-7 items-center font-bold max-w-fit px-5 py-3 rounded-xl flex  ${interSans.variable}`}
      href={"/contact-us"}
    >
      Let’s Optimize Your IT
      <Image src={NEW} alt="arrow" />
    </Link>
  );
};

export default LetOptimizeLink;
