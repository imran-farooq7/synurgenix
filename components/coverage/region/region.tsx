import { RegionProps } from "@/utils/types";
import { Inter } from "next/font/google";
import Image from "next/image";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["700"],
});
const Region = ({ title, img, imgMobile }: RegionProps) => {
  return (
    <div className={`${interSans.variable}`}>
      <h3 className="bg-[#1A5FC7] text-center py-5 font-bold text-xl md:text-3xl text-white">
        {title}
      </h3>
      <Image
        src={img}
        className="hidden md:flex py-15 mx-auto max-w-3xl"
        alt={title}
      />
      <Image
        src={imgMobile}
        className="flex md:hidden py-13 mx-auto"
        alt={title}
      />
    </div>
  );
};

export default Region;
