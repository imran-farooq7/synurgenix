import { ServiceCardProps } from "@/utils/types";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import AR from "@/public/arrow-right.svg";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["700", "500"],
});

const ServiceCard = ({
  description,
  icon,
  number,
  title,
  href,
}: ServiceCardProps) => {
  return (
    <div className="bg-white/20 w-full md:w-1/3 lg:w-1/4 pb-8 rounded-2xl px-6">
      <p className="text-right text-8xl md:text-9xl text-white/45">{number}</p>
      <div className="flex flex-col gap-4  mb-4">
        <Image src={icon} alt="check" width={80} height={80} />
        <p className={`text-xl  ${interSans.variable} font-bold text-white`}>
          {title}
        </p>
      </div>
      <div>
        <p className="text-lg text-[#E5E7EB]">{description}</p>
      </div>
      <Link
        className={`bg-white hover:scale-105 transition-all ease-in-out text-[#0A3C87] text-nowrap gap-1 items-center font-medium w-40 mt-4 px-5 py-3 rounded-xl flex ${interSans.variable}`}
        href={href}
      >
        Learn More
        <Image src={AR} alt="right arrow" />
      </Link>
    </div>
  );
};

export default ServiceCard;
